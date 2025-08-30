import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        L'etincelle
        </div>
      <div className="text-[9.5vw] justify-center flex items-start uppercase leading-[8vw]">
        qui
        <div className="h-[8vw] w-[16vw] rounded-full -mt-3 overflow-hidden">
          <Video />
        </div>
        genere
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw]"> la creativite</div>
    </div>
  )
}

export default HomeHeroText;
