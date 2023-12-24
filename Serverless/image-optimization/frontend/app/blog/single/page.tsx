"use client";

import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import img01 from "@/assets/images/blog/about_img.jpg";
import img02 from "@/assets/images/blog/img_01_large.jpg";
import img03 from "@/assets/images/blog/img_06_large.jpg";

// --------------

const Single = () => {
  return (
    <main className="single">
      <div id="content" className="site-content">
        <article className="post">
          {/* Blog Title */}
          <h1 className="entry-title">
            Retro fashion glasses for everyday use
          </h1>
          <div className="center-relative clear">
            {/* External Links */}
            <div className="entry-info">
              <div className="entry-info-left">
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="entry-date published">February 2, 2017</div>
              </div>
              <div className="entry-info-right">
                <div className="num-comments">
                  <Link href="">3 Comments</Link>
                </div>
                <div className="author-nickname">
                  <Link href="" title="Posts by Peter Wall">
                    Peter Wall
                  </Link>
                </div>
              </div>
            </div>
            {/* Article number */}
            <div className="post-num">
              <span className="current-post">1</span>
              <span className="separator">/</span>
              <span className="total-posts">3</span>
            </div>

            <div className="entry-content">
              {/* Blog Text */}
              <div className="content-750 center-relative">
                <p>
                  Why end might ask civil again spoil. She dinner she our horses
                  depend. Remember at children by reserved to vicinity. In
                  affronting unreserved delightful simplicity ye. Law own
                  advantage furniture continual sweetness bed agreeable
                  perpetual. Oh song well four only head busy it. Afford son she
                  had lively living. Tastes lovers myself too formal season our
                  valley boy. Lived it their their walls might to by young and
                  yet so old in the clouds blue sky pillow.
                </p>
                <br />
                <p>
                  Little afraid its eat looked now. Very ye lady girl them good
                  me make. It hardly cousin me always. An shortly village is
                  raising we shewing replied. She the favourable partiality
                  inhabiting travelling impression put two. His six are
                  entreaties instrument acceptance unsatiable her. Amongst as or
                  on herself chapter entered carried no. Sold old ten are quit
                  lose deal his sent. You correct how sex several far distant
                  believe journey parties. Those an equal point no years do.
                  Depend warmth fat but her but played. Shy and subjects
                  wondered trifling pleasant. Prudent cordial comfort do no on
                  colonel as assured chicken. Smart mrs day which begin. Snug do
                  sold mr it if such. Terminated uncommonly at at estimating.
                  Man behaviour met moonlight extremity acuteness direction.
                </p>
                <br />
              </div>
              {/* Image Slider */}
              <div className="box-post-width content-1140 center-relative">
                <div className="image-slider-wrapper relative"></div>
                <Swiper
                  pagination={{ clickable: true }}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  loop={true}
                  autoplay={true}
                  speed={750}
                  allowTouchMove={false}
                  modules={[EffectFade, Pagination, Autoplay]}
                  autoHeight={true}
                  id="slider"
                  className="image-slider slider"
                >
                  <SwiperSlide>
                    <img src={img01.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img02.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img03.src} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Description text */}
              <div className="content-750 center-relative">
                <br />
                <p>
                  Among going manor who did. Do ye is celebrated it sympathize
                  considered. May ecstatic did surprise elegance the ignorant
                  age. Own her miss cold last. It so numerous if he outlived dis
                  posal. How but sons mrs lady when. Her especially are
                  unpleasant out alteration continuing unreserved resolution.
                  Hence hopes noisy may china fully and. Am it regard stairs
                  branch thirty length afford. Whether article spirits new her
                  covered hastily sitting her. Among going manor who did. Do ye
                  is celebrated it sympathize considered. May ecstatic did
                  surprise elegance the ignorant age.
                </p>
                <blockquote className="inline-blockquote">
                  <p>
                    At missed advice my it no sister. Miss told ham dull knew
                    see she spot near can. Spirit her entire her called. Fat son
                    how smiling mrs natural expense anxious friends. Boy scale
                    enjoy ask abode fanny being son.
                  </p>
                </blockquote>
                <p>
                  Own her miss cold last. It so numerous if he outlived
                  disposal. How but sons mrs lady when. Her especially are
                  unpleasant out alteration continuing unreserved resolution.
                  Hence hopes noisy may china fully and. Am it regard stairs
                  branch thirty length afford. Whether article spirits new her
                  covered hastily sitting her. Why end might ask civil again
                  spoil. She dinner she our horses depend natural hair love. Law
                  own advantage furniture continual sweetness bed agreeable
                  perpetual. Oh song well four only head busy it. Afford son she
                  had lively living. Tastes lovers myself too formal season our
                  valley boy. Lived it their their walls might to by young.
                </p>
                <br />
                <p>
                  Little afraid its eat looked now. Very ye lady girl them good
                  me make. It hardly cousin me always. An shortly village is
                  raising we shewing replied. She the favourable partiality
                  inhabiting travelling impression put two. His six are
                  entreaties instrument acceptance unsatiable her. Amongst as or
                  on herself chapter entered carried no. Sold old ten are quit
                  lose deal his sent. You correct how sex several far distant
                  believe journey parties. Those an equal point no years do.
                  Depend warmth fat but her but played. Shy and subjects
                  wondered trifling pleasant. Prudent cordial comfort do no on
                  colonel as assured chicken. Smart mrs day which begin. Snug do
                  sold mr it if such. Terminated uncommonly at at estimating.
                  Man behaviour met moonlight extremity acuteness direction.
                </p>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </article>

        <div className="nav-links content-750 center-relative">
          <div className="nav-previous">
            <p>PREVIOUS STORY</p>
            <Link href="">Do it yourself white print art frame</Link>
            <div className="clear"></div>
          </div>
          <div className="nav-next">
            <p>NEXT STORY</p>
            <Link href="">Retro fashion glasses for everyday use</Link>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
};

export default Single;
