"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import img01 from "@/assets/images/gallery/about_img.jpg";
import img02 from "@/assets/images/gallery/img_06_large.jpg";
import img03 from "@/assets/images/gallery/img_01_large.jpg";

// ------------------

const SingleGallery = () => {
  return (
    <main className="single single-gallery">
      <div id="content" className="site-content">
        <div className="gallery">
          {/* Title */}
          <h1 className="entry-title center-relative center-text">
            Made With Love
          </h1>
          <div className="center-relative clear">
            <div className="entry-content">
              {/* Description text */}
              <div className="content-750 center-relative">
                <p>
                  Why end might ask civil again spoil. She dinner she our horses
                  depend. Remember at children by reserved to vicinity. In
                  affronting unreserved delightful simplicity ye. Law own
                  advantage furniture continual sweetness bed agreeable
                  perpetual.
                </p>
              </div>
              <div className="box-post-width content-1140 center-relative">
                <br />
                {/* Gallery items images */}
                <motion.p
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <img className="animate aligncenter" src={img01.src} alt="" />
                </motion.p>
                <br />
                <motion.p
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <img className="animate aligncenter" src={img02.src} alt="" />
                </motion.p>
                <br />
                <motion.p
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <img className="animate aligncenter" src={img03.src} alt="" />
                </motion.p>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        {/* Gallery items navigation */}
        <div className="nav-links content-750 center-relative">
          <div className="nav-previous">
            <p>PREVIOUS STORY</p>
            <Link href="">Made With Love</Link>
            <div className="clear"></div>
          </div>

          <div className="nav-next">
            <p>NEXT STORY</p>
            <Link href="">Reminiscences from Paris</Link>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
};

export default SingleGallery;
