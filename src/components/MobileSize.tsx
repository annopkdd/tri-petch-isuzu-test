import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AthletsArticle1,
  AthletsArticle2,
  AthletsArticle3,
  PlayerArticle1,
  PlayerArticle2,
  PlayerArticle3,
} from "./article";

const MobileSize = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // adaptiveHeight: true,
    customPaging: (index: number) => {
      return (
        <div
          id="pagingDot"
          className="rounded-full w-[10px] h-[10px] bg-[#d8d8d8]"
        />
      );
    },
  };

  return (
    <div className="flex flex-col">
      {/* Football Player */}
      <div className="bg-white flex flex-col">
        <span className="text-[50px] leading-[59px] text-textsecondary pl-[19px]">
          ATHLETS
        </span>
        <div className="relative flex flex-row justify-center mt-[11px]">
          <img
            src="/images/footballer_mobile.png"
            className="w-[218px] min-w-[218px]"
          />
        </div>
      </div>
      <div className="mt-[-55px] pt-[72px] pb-[69px] bg-[#F5F4F9]">
        <Slider {...settings}>
          <AthletsArticle1 className="pl-[19px]" />
          <AthletsArticle2 className="pl-[19px]" />
          <AthletsArticle3 className="pl-[19px]" />
        </Slider>
      </div>

      {/* Basketball Player */}
      <div className="bg-white flex flex-col ">
        <span className="text-[50px] leading-[59px] text-textsecondary pl-[19px] mt-[19px]">
          PLAYERS
        </span>
        <div className="relative flex flex-row justify-center mt-[11px]">
          <img
            src="/images/basketballer_mobile.png"
            className="w-[302px] min-w-[302px]"
          />
        </div>
      </div>

      <div className="mt-[-33px] pt-[72px] pb-[77px] bg-[#F5F4F9]">
        <Slider {...settings}>
          <PlayerArticle1 className="pl-[19px] pr-[18px]" />
          <PlayerArticle2 className="pl-[19px] pr-[18px]" />
          <PlayerArticle3 className="pl-[19px] pr-[18px]" />
        </Slider>
      </div>
    </div>
  );
};

export default MobileSize;
