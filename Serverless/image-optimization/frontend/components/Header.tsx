"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Images
import logo from "@/assets/images/logo_@x2.png";

// --------------

const Header = () => {
  const [menuPreview, setMenuPreview] = useState<boolean>(false);

  const pathname: string = usePathname();

  const handleMenuShow = () => {
    setMenuPreview(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (e.target) {
      if (target.className === "search-field") {
        return;
      }
    }
    setMenuPreview(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Header */}
      <div
        className={
          "header-holder center-relative relative content-1140" +
          (menuPreview ? " down" : "")
        }
      >
        <div className="header-logo center-text">
          <Link href="/">
            <img src={logo.src} alt="Opta" />
          </Link>
        </div>

        <div className="toggle-holder absolute">
          <div id="toggle" onClick={handleMenuShow}>
            <div className="first-menu-line"></div>
            <div className="second-menu-line"></div>
            <div className="third-menu-line"></div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      {/* Navigation */}
      <AnimatePresence>
        {menuPreview && (
          <motion.div
            key="nav-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-wraper center-relative"
            onClick={handleCloseMenu}
          >
            <motion.div
              key="nav-holder"
              initial={{ transform: `translateY(30px)` }}
              animate={{ transform: `translateY(0px)` }}
              exit={{ transform: `translateY(30px)` }}
              className="menu-holder"
            >
              <div className="menu-left-part">
                <div className="menu-left-text">
                  Welcome to our online art journey. You can read our{" "}
                  <Link href="/blog">thoughts</Link> or you can simply{" "}
                  <Link href="/contact">write to us</Link>
                </div>
              </div>
              <div className="menu-right-part">
                <nav id="header-main-menu" className="big-menu">
                  {/* Nav Links */}
                  <ul className="main-menu sm sm-clean">
                    <li>
                      <Link
                        href="/"
                        className={pathname === "/" ? "current" : ""}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className={pathname === "/about" ? "current" : ""}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className={pathname === "/blog" ? "current" : ""}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gallery"
                        className={pathname === "/gallery" ? "current" : ""}
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className={pathname === "/contact" ? "current" : ""}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <form role="search" className="search-form">
                    <label>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search"
                        name="search"
                        title="Search for:"
                      />
                    </label>
                  </form>
                </nav>
                <div className="menu-portfolio-category">
                  <p className="portfolio-category">
                    <Link href="">Architecture</Link>
                    <Link href="">Branding</Link>
                    <Link href="">Fashion</Link>
                    <Link href="">Interior</Link>
                    <Link href="">Jewelry</Link>
                  </p>
                </div>
              </div>
              <div className="clear"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
