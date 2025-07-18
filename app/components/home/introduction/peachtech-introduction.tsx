"use client";
import { Box, Typography, styled } from "@mui/material";
import { isPeachTechText } from "../../../const/documents";
import Heading from "../../common/heading";
import Image from "next/image";

const PeachTechIntroduction = () => {
  return (
    <>
      <Box my={{ xs: 5, sm: 10 }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          pb={{ xs: 4, sm: 8 }}
        >
          <Heading title={"PeachTechとは"} />
          {/* <Typography
            whiteSpace={"nowrap"}
            my={5}
            px={{ xs: 4, sm: 0 }}
            fontSize={{ xs: 12, sm: 16 }}
            textAlign={"center"}
          >
            PeachTechは、成蹊大学公認のプログラミングサークルです。
            <br />
            成蹊のエンジニア同士で繋がることができる場所を目指しています。
          </Typography> */}
        </Box>
        {isPeachTechText.map((text) => (
          <Box
            key={text.number}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={text.number == "02" ? "row-reverse" : "row"}
            mx={5}
            pb={5}
          >
            <Box mx={{ sm: 5 }} order={{ xs: 2, sm: 1 }}>
              <StyledCircle>
                <Box px={{ xs: 5, sm: 10 }}>
                  <Typography
                    color={"#C0C0C0"}
                    pt={{ xs: 3, sm: 6 }}
                    fontSize={{ xs: 40, sm: 75 }}
                  >
                    {text.number}
                  </Typography>
                  <Typography
                    component={"h3"}
                    whiteSpace={"pre-wrap"}
                    fontSize={{ xs: 18, sm: 20 }}
                  >
                    {text.title}
                  </Typography>
                  <Typography
                    fontSize={{ xs: 12.5, sm: 15 }}
                    py={2}
                    letterSpacing={0.8}
                  >
                    {text.description}
                  </Typography>
                </Box>
              </StyledCircle>
            </Box>
            <Box
              order={{ xs: 1, sm: 2 }}
              mb={{ xs: 4, sm: 0 }}
              display={{ sm: "block" }}
            >
              <Image
                src={text.src}
                alt={"Picture of the author"}
                layout={"responsive"}
                width={375}
                height={375}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PeachTechIntroduction;

const StyledCircle = styled("div")(({ theme }) => ({
  width: 530,
  height: 530,
  backgroundColor: "#FFF4FC",
  borderRadius: "50%",
  [theme.breakpoints.down("sm")]: {
    width: 365,
    height: 365,
  },
}));
