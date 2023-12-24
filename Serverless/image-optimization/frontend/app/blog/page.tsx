"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import blogArrow from "@/assets/images/blog/blog_arrow@2x.png";
import img01 from "@/assets/images/blog/blog_img_01.jpg";
import img02 from "@/assets/images/blog/blog_img_02.jpg";
import img03 from "@/assets/images/blog/blog_img_03.jpg";

// ------------

function Blog() {
  return (
    <main className="page">
      <div className="blog-holder block center-relative content-1140">
        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0, transform: `translateY(50px)` }}
          whileInView={{ opacity: 1, transform: `translateY(0px)` }}
          viewport={{ once: true }}
          className="animate relative blog-item-holder center-relative has-post-thumbnail"
        >
          <div className="post-thumbnail">
            {/* Article Image */}
            <Link href="./single">
              <img src={img01.src} alt="" />
            </Link>
          </div>
          <div className="entry-holder">
            {/* Article number */}
            <div className="post-num">
              <span className="current-post">1</span>
              <span className="separator">/</span>
              <span className="total-posts">3</span>
            </div>
            {/* Some External Links */}
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
            {/* Blog title */}
            <h2 className="entry-title">
              <Link href="./single">
                Retro fashion glasses for everyday use
              </Link>
            </h2>
            <p className="read-more-arrow">
              <Link href="./single">
                <img src={blogArrow.src} alt="Read More" />
              </Link>
            </p>
          </div>
          <div className="clear"></div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, transform: `translateY(50px)` }}
          whileInView={{ opacity: 1, transform: `translateY(0px)` }}
          viewport={{ once: true }}
          className="animate relative blog-item-holder center-relative has-post-thumbnail"
        >
          <div className="post-thumbnail">
            <Link href="./single">
              <img src={img02.src} alt="" />
            </Link>
          </div>
          <div className="entry-holder">
            <div className="post-num">
              <span className="current-post">2</span>
              <span className="separator">/</span>
              <span className="total-posts">3</span>
            </div>
            <div className="entry-info">
              <div className="entry-info-left">
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="entry-date published">January 1, 2017</div>
              </div>
              <div className="entry-info-right">
                <div className="author-nickname">
                  <Link href="" title="Posts by Peter Wall">
                    Peter Wall
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="entry-title">
              <Link href="./single">
                The best handcrafted wooden office table
              </Link>
            </h2>
            <p className="read-more-arrow">
              <Link href="./single">
                <img src={blogArrow.src} alt="Read More" />
              </Link>
            </p>
          </div>
          <div className="clear"></div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, transform: `translateY(50px)` }}
          whileInView={{ opacity: 1, transform: `translateY(0px)` }}
          viewport={{ once: true }}
          className="animate relative blog-item-holder center-relative has-post-thumbnail"
        >
          <div className="post-thumbnail">
            <Link href="./single">
              <img src={img03.src} alt="" />
            </Link>
          </div>
          <div className="entry-holder">
            <div className="post-num">
              <span className="current-post">3</span>
              <span className="separator">/</span>
              <span className="total-posts">3</span>
            </div>
            <div className="entry-info">
              <div className="entry-info-left">
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="entry-date published">January 1, 2017</div>
              </div>
              <div className="entry-info-right">
                <div className="author-nickname">
                  <Link href="" title="Posts by Peter Wall">
                    Peter Wall
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="entry-title">
              <Link href="./single">Do it yourself white print art frame</Link>
            </h2>
            <p className="read-more-arrow">
              <Link href="./single">
                <img src={blogArrow.src} alt="Read More" />
              </Link>
            </p>
          </div>
          <div className="clear"></div>
        </motion.article>
      </div>
    </main>
  );
}

export default Blog;
