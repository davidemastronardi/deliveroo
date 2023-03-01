import React, { useMemo, useState } from "react";
import Swiper from "./Swiper";
import SwipersTest from "./SwipersTest";

const Carousel = () => {
  const arrayimg = useMemo(
    () => [
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/2133x1200/aa167a689c/burger.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/1066x1066/1ea1f77a53/bk_logo_new.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/838078bb19/grocery-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/11bf79a2b4/icon-donut.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/250x250/731b62d61e/mcdonalds-logo-green-250x250.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/261x256/e2fd5f0340/carrefour-square-256x256.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x265/a92bab2326/fries-2-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x288/5a53f723cc/icecreamwide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/6a385f47c7/icon-vegan.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/254x288/a129553ef2/hop3.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/8bd9a1cb99/bowl-wide.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/54ae25d5da/kfc.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x320/b039b1832a/salad-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/4fd0ed75e4/icon-pizza.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x512/6ef429fc86/old-wild-west.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/9b19027dd1/icon-wine.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/2133x1200/aa167a689c/burger.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/1066x1066/1ea1f77a53/bk_logo_new.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/838078bb19/grocery-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/11bf79a2b4/icon-donut.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/250x250/731b62d61e/mcdonalds-logo-green-250x250.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/261x256/e2fd5f0340/carrefour-square-256x256.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x265/a92bab2326/fries-2-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x288/5a53f723cc/icecreamwide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/6a385f47c7/icon-vegan.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/254x288/a129553ef2/hop3.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/8bd9a1cb99/bowl-wide.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/54ae25d5da/kfc.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x320/b039b1832a/salad-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/4fd0ed75e4/icon-pizza.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x512/6ef429fc86/old-wild-west.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/9b19027dd1/icon-wine.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x288/5a53f723cc/icecreamwide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/6a385f47c7/icon-vegan.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/254x288/a129553ef2/hop3.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/8bd9a1cb99/bowl-wide.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/54ae25d5da/kfc.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x320/b039b1832a/salad-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/4fd0ed75e4/icon-pizza.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x512/6ef429fc86/old-wild-west.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/9b19027dd1/icon-wine.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/2133x1200/aa167a689c/burger.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/1066x1066/1ea1f77a53/bk_logo_new.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/838078bb19/grocery-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/11bf79a2b4/icon-donut.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/250x250/731b62d61e/mcdonalds-logo-green-250x250.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/261x256/e2fd5f0340/carrefour-square-256x256.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x265/a92bab2326/fries-2-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x288/5a53f723cc/icecreamwide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/6a385f47c7/icon-vegan.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/254x288/a129553ef2/hop3.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/8bd9a1cb99/bowl-wide.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/54ae25d5da/kfc.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x320/b039b1832a/salad-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/4fd0ed75e4/icon-pizza.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x512/6ef429fc86/old-wild-west.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/9b19027dd1/icon-wine.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/2133x1200/aa167a689c/burger.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/1066x1066/1ea1f77a53/bk_logo_new.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/838078bb19/grocery-wide.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/11bf79a2b4/icon-donut.jpg",
      "//img2.storyblok.com/filters:format(webp)/f/62776/250x250/731b62d61e/mcdonalds-logo-green-250x250.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/261x256/e2fd5f0340/carrefour-square-256x256.png",
      "//img2.storyblok.com/filters:format(webp)/f/62776/512x265/a92bab2326/fries-2-wide.png",
    ],
    []
  );

  return (
    <div className=" ">
      {/* <Swiper data={arrayimg}></Swiper> */}
      <SwipersTest> data={arrayimg}</SwipersTest>
    </div>
  );
};

export default Carousel;
