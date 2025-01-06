"use client";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { EffectCreative } from "swiper/modules";

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
  width: "100%",
  height: "100%",
  // bgcolor: "background.default",
  userSelect: "none,",
  borderRadius: "25px",
};

const Carousel = () => (
  <Swiper
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop
    slidesPerView={1.05}
    centeredSlides
    navigation
    className="mySwiper customSwiper"
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "25px",
    }}
    modules={[Autoplay, Navigation, EffectCreative]}
    grabCursor={true}
    effect={"creative"}
    creativeEffect={{
      prev: {
        translate: ["-24%", 0, -400],
      },
      next: {
        translate: ["24%", 0, -400],
      },
      progressMultiplier: 1,
      shadowPerProgress: true,
    }}
  >
    {slideContent.map((url, index) => (
      <SwiperSlide key={index}>
        <Box sx={boxStyle} className="slide-content">
          <Image
            width={10000}
            height={10000}
            src={url}
            alt={`Slide ${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "25px",
              userSelect: "none",
            }}
            priority
          />
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default function Banner() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => setDomLoaded(true), []);

  return (
    <Box
      sx={{
        width: "100svw",
        height: "calc( 100svh - 70px )",
        maxHeight: { xs: 300, sm: 400, md: 500, lg: 600, xl: 700 },
        minHeight: { xs: 200, sm: 300, md: 400, lg: 500, xl: 600 },
        bgcolor: "background.default",
        p: { xs: 1, sm: 2 },
        direction: "ltr",
        userSelect: "none",
      }}
    >
      {domLoaded && <Carousel />}
    </Box>
  );
}
