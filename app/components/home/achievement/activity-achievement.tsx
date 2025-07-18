import { Fragment } from "react";
import { Box, Divider } from "@mui/material";
import { achievementContentData } from "@/app/const/achievement-data";
import AchievementCard from "./achievement-card";
import Heading from "../../common/heading";

const ActivityAchievement = () => {
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
        {achievementContentData.map((data) => (
          <Fragment key={data.src}>
            <AchievementCard
              src={`/achieve/${data.src}`}
              date={data.date}
              title={data.title}
              content={data.content}
            />
            <Divider sx={{ width: "100%" }} color={"#f7f7f7"} />
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default ActivityAchievement;
