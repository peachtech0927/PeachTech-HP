"use client";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Link, Typography, styled } from "@mui/material";
import Image from "next/image";
import CustomLink from "./custom-link";

const Footer = () => {
  return (
    <Box
      bgcolor={"#eeeeee"}
      display={"flex"}
      justifyContent={{ xs: "flex-start", sm: "center" }}
      flexDirection={"column"}
      px={{ xs: 5, md: 22 }}
      pt={3}
      pb={{ xs: 10, md: 15 }}
    >
      <SImage src="/peachtech.png" alt="logo" width={60} height={60} />
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        gap={5}
      >
        <Box>
          <FooterTitle>Peach Tech</FooterTitle>
          <FooterText>
            〒170-8633 <br />
            東京都武蔵野市吉祥寺北町３丁目３−１
          </FooterText>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <FooterTitle>Contact Us</FooterTitle>
          <CustomLink
            href="/"
            rel
            underline="none"
            sx={{
              color: "gray",
              fontSize: { xs: 12, md: 15 },
              cursor: "pointer",
            }}
          >
            参加フォーム
          </CustomLink>
          <CustomLink
            href="/"
            rel
            underline="none"
            sx={{
              color: "gray",
              fontSize: { xs: 12, md: 15 },
              cursor: "pointer",
            }}
          >
            お問い合わせ
          </CustomLink>
        </Box>
        <Box>
          <FooterTitle>Follow Us</FooterTitle>
          <Box display={"flex"} justifyContent={"flex-start"} gap={0.5}>
            <Link href="https://x.com/PeachTech_0927">
              <XIcon sx={{ color: "black" }} />
            </Link>
            <Link href="https://www.instagram.com/peachtech_0927/">
              <InstagramIcon sx={{ color: "secondary.main" }} />
            </Link>
          </Box>
        </Box>
        <Box>
          <FooterTitle>Developers</FooterTitle>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            gap={{ md: 3 }}
          >
            <FooterText>
              今村 悠聖
              <br />
              水澤 祐翔
              <br />
              計良 夏輝
            </FooterText>
            <FooterText>
              澤野 そら
              <br />
              高橋 光
              <br />
              東郷 愛
            </FooterText>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;

const SImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 50,
    height: 50,
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: 19,
  marginBottom: 2,
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: "gray",
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
  },
}));
