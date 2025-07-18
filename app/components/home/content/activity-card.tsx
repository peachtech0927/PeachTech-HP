"use client";
import { Card, CardContent, Typography, Box, styled } from "@mui/material";
import { activityContentDataProps } from "../../../const/activity-content-data";
import Image from "next/image";

const ActivityCard: React.FC<activityContentDataProps> = ({
  src,
  title,
  content,
}) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 290, sm: 310 },

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 4,
      }}
    >
      <Box mx={3} mt={3}>
        <StyledImage src={src} alt={title} width={80} height={80} />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          textAlign={"center"}
          fontSize={16}
          whiteSpace={"nowrap"}
        >
          {title}
        </Typography>
        <Typography fontSize={13}>{content}</Typography>
      </CardContent>
    </Card>
  );
};

const StyledImage = styled(Image)(({ theme }) => ({
  width: 80,
  height: 80,
  [theme.breakpoints.down("sm")]: {
    width: 50,
    height: 50,
  },
}));

export default ActivityCard;
