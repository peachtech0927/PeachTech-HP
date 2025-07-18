import { Box, Grid } from "@mui/material";
import Heading from "../../common/heading";
import ActivityCard from "./activity-card";
import { activityContentData } from "../../../const/activity-content-data";

const ActivityContent = () => {
  return (
    <Box
      textAlign={"center"}
      bgcolor={"#FFF4FC"}
      py={10}
      px={{ xs: 5, md: 30 }}
    >
      <Heading title="活動内容" />
      <Grid container spacing={{ xs: 2, md: 4 }} pt={5}>
        {activityContentData.map((data) => (
          <Grid
            key={data.title}
            item
            xs={12}
            sm={6}
            lg={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ActivityCard
              src={`/activity/${data.src}`}
              title={data.title}
              content={data.content}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ActivityContent;
