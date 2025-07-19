import { NextResponse } from 'next/server';
import { getNotionDatabase } from '../../libs/notion/notionAPI';

export async function GET() {
  try {
    const data = await getNotionDatabase();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Notion data' },
      { status: 500 }
    );
  }
}