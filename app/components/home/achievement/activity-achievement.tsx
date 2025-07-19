import { Box } from "@mui/material";
import Heading from "../../common/heading";
import { getNotionDatabase } from "../../../libs/notion/notionAPI";
import AchievementToggle from "./achievement-toggle";

// ISRを使用: 60秒ごとに再生成
export const revalidate = 60;

const ActivityAchievement = async () => {
    // 現在時刻をクエリパラメータとして追加してキャッシュを無効化
    const timestamp = Date.now();
    console.log(`Fetching Notion data at ${new Date(timestamp).toISOString()}`);
    
    const notionData = await getNotionDatabase();
    const sortedData = notionData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <Box py={13}>
      <Heading title="活動実績" />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        px={{ xs: 5, md: 20 }}
      >
        <AchievementToggle data={sortedData} />
      </Box>
    </Box>
  );
};

export default ActivityAchievement;
