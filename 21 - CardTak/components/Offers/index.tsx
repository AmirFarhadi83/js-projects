"use client";

import { BoxColumn, BoxRow } from "@/utils/custom";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import { useEffect, useState } from "react";

// Sample slide content
const slideContent = [
  "/images/gof.jpg.webp",
  "/images/gof.jpg.webp",
  "/images/gof.jpg.webp",
  "/images/gof.jpg.webp",
  "/images/gof.jpg.webp",
  "/images/gof.jpg.webp",
];

const boxStyle = {
  boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.45)",
  width: { xs: "auto", sm: 210, md: 220, lg: 230, xl: 240 },
  height: { xs: 350, sm: 360, md: 370, lg: 380, xl: 390 },
  userSelect: "none,",
  borderRadius: "15px",
  bgcolor: "background.paper",
  "@media and screen(min-width: 0px)": { width: "450px !important" },
};

const Carousel = () => (
  <Swiper
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    spaceBetween={18}
    freeMode={true}
    navigation={true}
    loop={true}
    pagination={{ clickable: true }}
    modules={[FreeMode, Pagination, Navigation, Autoplay]}
    className="sSwiper"
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "20px",
      padding: "40px 50px",
    }}
    breakpoints={{
      0: { slidesPerView: 1 },
      450: { slidesPerView: 2 },
      600: { slidesPerView: 2.1 },
      700: { slidesPerView: 2.5 },
      836: { slidesPerView: 3 },
      980: { slidesPerView: 3.5 },
      1115: { slidesPerView: 4 },
      1350: { slidesPerView: 4.5 },
      1500: { slidesPerView: 5 },
      1800: { slidesPerView: 6 },
      2160: { slidesPerView: 7 },
      2320: { slidesPerView: 8 },
      2582: { slidesPerView: 9 },
      2840: { slidesPerView: 10 },
    }}
  >
    {slideContent.map((url, index) => (
      <SwiperSlide key={index}>
        <Box sx={boxStyle} className="slide-content">
          <BoxColumn
            sx={{
              width: "calc( 100% - 16px )",
              height: "100%",
              justifyContent: "flex-start",
              p: 1,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "60%",
                position: "relative",
              }}
            >
              <Image
                width={10000}
                height={10000}
                src={url}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  userSelect: "none",
                }}
                priority
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "95%",
                  right: "center",
                  bgcolor: "primary.main",
                  color: "white",
                  p: 0.5,
                  borderRadius: "10px 0 10px 0",
                }}
              >
                00:15:24:32
              </Box>
            </Box>
            <BoxColumn>
              <Typography variant="h6" sx={{ mt: 1.5, textAlign: "center" }}>
                بازی گاد آف وار
              </Typography>
              <BoxColumn sx={{ gap: 0 }}>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center" }}
                  color="secondary.main"
                >
                  50% تخفیف
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                  5000 تومان
                </Typography>
              </BoxColumn>
            </BoxColumn>
          </BoxColumn>
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default function Offers() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => setDomLoaded(true), []);

  return (
    <>
      <BoxColumn
        sx={{
          px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
        }}
      >
        <BoxRow
          sx={{
            alignItems: "flex-start",
            "@media(max-width: 430px)": {
              flexDirection: "column",
              gap: 1.5,
              alignItems: "center",
            },
          }}
        >
          <BoxColumn sx={{ gap: 0.5 }}>
            <BoxRow sx={{ gap: 0.7, justifyContent: "flex-start" }}>
              <Typography variant="h4" lineHeight={0.8}>
                تخفیفات
              </Typography>
              <Typography variant="h4" lineHeight={0.8} color="primary.main">
                ویژه
              </Typography>
            </BoxRow>
            <Typography variant="subtitle1" color="grey" lineHeight={0.8}>
              آفر های تکرار نشدنی برای شما
            </Typography>
          </BoxColumn>
          <Button variant="contained" size="large" sx={{ minHeight: 44 }}>
            <Typography variant="h6" color="white">
              مشاهده محصولات
            </Typography>
          </Button>
        </BoxRow>
        {domLoaded && <Carousel />}
      </BoxColumn>
    </>
  );
}
