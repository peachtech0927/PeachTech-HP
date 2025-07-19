import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

interface NotionPage {
    id: string;
    title: string;
    date: string;
    isPublic: boolean;
    src?: string;
    content?: string;
}

export async function getNotionDatabase(): Promise<NotionPage[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    const pages = response.results.map((page: any) => ({
      id: page.id,
      title: getTitle(page.properties),
      url: page.url,
      date: getDate(page.properties),
      isPublic: getPublicStatus(page.properties),
      src: getThumbnail(page.properties),
      content: getDescription(page.properties),
    }));

    return pages.filter(page => page.isPublic);
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    throw error;
  }
}

export async function getNotionPage(pageId: string) {
  try {
    const response = await notion.pages.retrieve({
      page_id: pageId,
    });

    return response;
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    throw error;
  }
}

function getTitle(properties: Record<string, any>): string {
  const titleProperty = Object.values(properties).find(
    (prop: any) => prop.type === 'title'
  ) as any;

  if (titleProperty && titleProperty.title && titleProperty.title.length > 0) {
    return titleProperty.title[0].plain_text;
  }

  return 'Untitled';
}

function getPublicStatus(properties: Record<string, any>): boolean {
  const publicProperty = properties['公開'];
  
  if (publicProperty && publicProperty.type === 'status') {
    return publicProperty.status?.name === '公開';
  }
  
  return false;
}

function getThumbnail(properties: Record<string, any>): string | undefined {
  const thumbnailProperty = properties['サムネイル'];
  
  if (thumbnailProperty && thumbnailProperty.type === 'files' && thumbnailProperty.files.length > 0) {
    const file = thumbnailProperty.files[0];
    if (file.type === 'file') {
      return file.file.url;
    } else if (file.type === 'external') {
      return file.external.url;
    }
  }
  
  return undefined;
}

function getDescription(properties: Record<string, any>): string | undefined {
  const descriptionProperty = properties['詳細'];
  
  if (descriptionProperty && descriptionProperty.type === 'rich_text' && descriptionProperty.rich_text.length > 0) {
    return descriptionProperty.rich_text.map((text: any) => text.plain_text).join('');
  }
  
  return undefined;
}

function getDate(properties: Record<string, any>): string {
  const dateProperty = properties['日付'];
  
  if (dateProperty && dateProperty.type === 'date' && dateProperty.date) {
    return dateProperty.date.start;
  }
  
  return '';
}