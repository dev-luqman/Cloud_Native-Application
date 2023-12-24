import Link from "next/link";

// Images
import arrowRight from "@/assets/images/opta_arrow@2x.png";
import arrowLeft from "@/assets/images/opta_arrow@2x_left.png";

// ------------

function SinglePortfolio() {
  return (
    <main className="single single-portfolio">
      <div id="content" className="site-content">
        <div className="content-1140 center-relative bottom-100">
          <div className="center-relative clear">
            <div className="entry-content">
              {/* Iframe (3rd party) video */}
              <div className="top-content">
                <div className="video-framer">
                  <iframe
                    key={"single-portfolio-video"}
                    className="animate"
                    src="https://player.vimeo.com/video/199192931"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="content-970 center-relative">
                <div className="portfolio-item-info">
                  {/* Item information */}
                  <div className="item-info-content">
                    <div className="info-code">
                      <p className="info-code-title">Founded</p>
                      <p className="info-code-content">MCMLXXXII</p>
                    </div>
                    <div className="info-code">
                      <p className="info-code-title">Art Director</p>
                      <p className="info-code-content">PETER WALL</p>
                    </div>
                    <div className="info-code">
                      <p className="info-code-title">Headquarter</p>
                      <p className="info-code-content">NEW YORK</p>
                    </div>
                  </div>

                  <div className="portfolio-nav">
                    <div className="nav-previous">
                      <Link href="">
                        <img src={arrowLeft.src} alt="Previous" />
                      </Link>
                    </div>
                    <div className="nav-next">
                      <Link href="">
                        <img src={arrowRight.src} alt="Next" />
                      </Link>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>
                {/* Description text */}
                <div className="content-wrapper">
                  <p>
                    Why end might ask civil again spoil. She dinner she our
                    horses depend. Remember at children by reserved to vicinity.
                    In affronting unreserved delightful simplicity ye. Law own
                    advantage furniture continual sweetness bed agreeable
                    perpetual. Oh song well four only head busy it.
                  </p>
                  <br />
                  <p>
                    Afford son she had lively living. Tastes lovers myself too
                    formal season our valley boy. Lived it their their walls
                    might to by young. Little afraid its eat looked now. Very ye
                    lady girl them good me make. It hardly cousin me always. An
                    shortly village is raising we shewing replied. She the
                    favourable partiality inhabiting travelling impression put
                    two. His six are entreaties instrument acceptance unsatiable
                    her.
                  </p>
                </div>
                <div className="clear"></div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SinglePortfolio;
