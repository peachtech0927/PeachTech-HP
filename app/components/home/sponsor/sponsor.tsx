"use client";
import { Box, styled } from "@mui/material";
import Heading from "../../common/heading";
import Image from "next/image";

const Sponsor = () => {
  return (
    <Box bgcolor={"#FFF4FC"} py={10} px={{ xs: 5, md: 30 }}>
      <Heading title="Sponsor" />
      <Box display={"flex"} justifyContent={"center"} pt={5}>
        <Box
          bgcolor={"white"}
          borderRadius={{ xs: 6, md: 10 }}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          }
        >
          <SImage
            src="/TechTrain_Logo.png"
            alt="TechTrain Logo"
            width={300}
            height={100}
          />
        </Box>
      </Box>
    </Box>
  );
};

const SImage = styled(Image)(({ theme }) => ({
  marginTop: 10,
  marginBottom: 6,
  marginLeft: 18,
  marginRight: 18,
  [theme.breakpoints.down("md")]: {
    width: 240,
    height: 80,
    marginTop: 10,
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  [theme.breakpoints.down("sm")]: {
    width: 180,
    height: 60,
    marginTop: 6,
    marginBottom: 2,
    marginLeft: 6,
    marginRight: 6,
  },
}));

export default Sponsor;
