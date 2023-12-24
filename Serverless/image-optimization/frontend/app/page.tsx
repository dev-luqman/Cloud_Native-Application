"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import arrow from "@/assets/images/opta_arrow@2x.png";
import img01 from "@/assets/images/home/img_01.jpg";
import img02 from "@/assets/images/home/img_02.jpg";
import img03 from "@/assets/images/home/img_03.jpg";
import img04 from "@/assets/images/home/img_04.jpg";
import img05 from "@/assets/images/home/img_05.jpg";
import img06 from "@/assets/images/home/img_06.jpg";
import img07 from "@/assets/images/home/img_07.jpg";
import img08 from "@/assets/images/home/img_08.jpg";
import img09 from "@/assets/images/home/img_09.jpg";
import img10 from "@/assets/images/home/img_10.jpg";
import img11 from "@/assets/images/home/img_11.jpg";

/**
 *
 * TODO:
 *  -- start in the documentation structure
 *  -- build documentation using docusource
 */

// ------------

function Home() {
  const [loadedAll, setLoadedAll] = useState<boolean>(false);

  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    <main className="page">
      {/* Page intro text */}
      <div className="content-1140 header-content center-relative block">
        <h1 className="entry-title">
          Art studio from <Link href="/about">New York</Link> passionate about
          creativity and crafting things since 1963.
        </h1>
        <p className="page-desc">PETER WALL + COCO BASIC</p>
      </div>

      <div id="content" className="site-content">
        {/* Portfolio items */}
        <ul className="grid" id="portfolio">
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img01.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Clothes
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Fashion</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img02.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Sweatshirt
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Fashion</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img03.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Office
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Interior</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          {/* Quote Item */}
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item quote-item "
          >
            Anyone can get dressed up and look glamorous but it is how people
            dress in their days off that are the most intriguing
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img04.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Bracelet
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Jewelry</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img05.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Notes
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Branding</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img06.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Building
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Architecture</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img07.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Desk
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Interior</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          {/* Items that are hidden and appears when clicking load more button */}
          {loadedAll && (
            <>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img09.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Shoes
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Fashion</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img11.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Mural
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Architecture</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img08.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Vase
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Interior</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img10.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Birds
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Branding</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            </>
          )}
        </ul>
        <div className="clear"></div>
        {/* Showing more items buttons */}
        <div className="block center-text load-more-portfolio">
          {!loadedAll && (
            <button className="more-posts-portfolio" onClick={handleLoadAll}>
              Load More
            </button>
          )}
        </div>
        <div className="clear"></div>
      </div>
    </main>
  );
}

export default Home;
