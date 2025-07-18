"use client";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const FirstView = () => {
  const images = [
    "home1.jpg",
    "home2.png",
    "home3.jpg",
    "home4.jpg",
    "home5.jpg",
    "home6.jpg",
    "home7.jpg",
    "home8.jpg",
    "home9.jpg",
    "home10.jpg",
    "home11.png",
    "home12.jpeg",
    "home13.jpg",
    "home14.jpg",
    "home15.jpg",
  ];

  return (
    <Box
      display={"flex"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        height={{ xs: "30vh", md: "70vh" }}
        width={"100%"}
        bgcolor={"rgba(0, 0, 0, 1)"} // 半透明な黒
      >
        <Swiper
          loop={true}
          loopAdditionalSlides={1}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          onInit={(swiper) => {
            if (swiper.wrapperEl) {
              swiper.wrapperEl.style.transitionTimingFunction = "linear";
            }
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
          }}
          modules={[Grid, Pagination, Autoplay]}
          style={{
            width: "100%",
            height: "100%",
          }}
          cssMode={false}
          allowTouchMove={false}
        >
          {images.map((src) => (
            <SwiperSlide key={src}>
              <Image
                fill
                src={`/swiper/${src}`}
                alt={"image"}
                style={{
                  objectFit: "cover",
                  opacity: 0.5,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          position={"absolute"}
          top={"45%"}
          left={"50%"}
          zIndex={1}
          color={"white"}
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Typography
            fontFamily={"-apple-system"}
            textAlign={"center"}
            letterSpacing={3}
            mt={5}
            mb={1}
            color={"white"}
            fontSize={{ xs: 19, md: 38 }}
            fontWeight={"bold"}
          >
            PeachTech
          </Typography>
          <Typography
            fontFamily={"Arial"}
            letterSpacing={4}
            color={"white"}
            fontSize={{ xs: 13, md: 20 }}
            mt={2} // 上に少し間隔を空ける
            whiteSpace={"nowrap"}
          >
            〜明日を創造する第一歩をともに〜
          </Typography>
          {/* <Box sx={{ mt: 1 }}>
            <ThreejsText />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default FirstView;
