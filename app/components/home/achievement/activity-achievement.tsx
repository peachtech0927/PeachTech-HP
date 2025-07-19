import { Box } from "@mui/material";
import Heading from "../../common/heading";
import { getNotionDatabase } from "../../../libs/notion/notionAPI";
import AchievementToggle from "./achievement-toggle";

const ActivityAchievement = async () => {
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
