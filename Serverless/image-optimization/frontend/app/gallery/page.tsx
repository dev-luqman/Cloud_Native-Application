"use client";

import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// Images
import rightArrow from "@/assets/images/opta_arrow@2x.png";
import leftArrow from "@/assets/images/opta_arrow@2x_left.png";
import img01 from "@/assets/images/gallery/about_img-1024x440.jpg";
import img02 from "@/assets/images/gallery/img_06_large-1024x539.jpg";
import img03 from "@/assets/images/gallery/gallery_img.jpg";
import img04 from "@/assets/images/gallery/img_01_large-1024x539.jpg";

// ------------------

const Gallery = () => {
  return (
    <main className="page">
      <div id="content" className="site-content">
        {/* Description text */}
        <div className="content-945 center-relative">
          <div className="one_third">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            posuere lobortis ante sit amet egestas.
          </div>
          <div className="two_third last">
            Lacus venenatis Sed eu, imperdiet tellus congue, porttitor dolor. A
            great man, but of the living creature was brought about by the
            Aenean hendrerit lorem. In malesuada eu nulla sit amet aliquam.
            Etiam faucibus iaculis justo, tempor est quis, tempus orci. Donec
            nec sapien euismod accumsan nisl eget, rhoncus erat.
          </div>
          <div className="clear"></div>
          <br />
          <br />
        </div>
        {/* Gallery Items Slider */}
        <div className="full-page-width center-relative">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={100}
            autoplay={true}
            speed={1250}
            modules={[Navigation, Autoplay]}
            className="gallery-slider slider"
          >
            <SwiperSlide className="gallery-item">
              <img src={img01.src} alt="" />
              <p className="item-text">
                <Link href="./single-gallery">One More Time</Link>
              </p>
            </SwiperSlide>
            <SwiperSlide className="gallery-item">
              <img src={img02.src} alt="" />
              <p className="item-text">
                <Link href="./single-gallery">Reminiscences from Paris</Link>
              </p>
            </SwiperSlide>
            <SwiperSlide className="gallery-item">
              <img src={img03.src} alt="" />
              <p className="item-text">
                <Link href="./single-gallery">Bottle of Life</Link>
              </p>
            </SwiperSlide>
            <SwiperSlide className="gallery-item">
              <img src={img04.src} alt="" />
              <p className="item-text">
                <Link href="./single-gallery">Made With Love</Link>
              </p>
            </SwiperSlide>
            <div className="swiper-button-prev">
              <img src={leftArrow.src} />
            </div>
            <div className="swiper-button-next">
              <img src={rightArrow.src} />
            </div>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
