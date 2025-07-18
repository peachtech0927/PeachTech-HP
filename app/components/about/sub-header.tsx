import { Box, Divider, Grid, Typography } from "@mui/material";

type TProps = {
  title: string;
  description: string;
};

export const SubHeader: React.FC<TProps> = ({ title, description }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      py={10}
      px={{ xs: 4, md: 25 }}
      height={{ xs: "35vh", md: "25vh" }}
      sx={{
        backgroundImage: `url("/gallery4.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "lighten",
      }}
    >
      <Grid container display={"flex"} justifyContent={"flex-end"} spacing={5}>
        <Grid item xs={12} md={4}>
          <Typography fontSize={{ xs: 22, md: 25 }}>{title}</Typography>
          <Divider
            sx={{
              backgroundColor: "#FF539B",
              width: 230,
              height: 3,
              borderRadius: 0.5,
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            fontSize={{
              xs: 13,
              md: 14,
            }}
            letterSpacing={0.8}
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubHeader;
