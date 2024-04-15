import "./Footer.css";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <footer>
        <div className="footer-foodhut">
          <div className="footer-foodhut__foodhut">
            <h3>Foodhut</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              omnis accusantium enim assumenda.
            </p>
            <div className="footer-foodhut__media">
              <a href="#">
                <img src={FacebookIcon} alt="facebook icon" />
              </a>
              <a href="#">
                <img src={InstagramIcon} alt="instagram icon" />
              </a>
              <a href="#">
                <img src={TwitterIcon} alt="twitter icon" />
              </a>
            </div>
          </div>
          <div className="footer-foodhut__links">
            <div className="footer-foodhut__link">
              <strong>About Us</strong>
              <a href="#">About Us</a>
              <a href="#">Service Us</a>
              <a href="#">Contact</a>
              <a href="#">Company</a>
            </div>

            <div className="footer-foodhut__link">
              <strong>About Us</strong>
              <a href="#">Partnership</a>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy</a>
              <a href="#">Sitemap</a>
            </div>

            <div className="footer-foodhut__link get-in__touch">
              <strong>Get in touch</strong>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium nihil distinctio odit similique debitis.
              </p>

              <div className="subscrive">
                <input type="text" placeholder="email" />
                <a href="#">Subscribe</a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <span>Copyright © {currentYear} Foodhut.</span>
        </div>
      </footer>
    </>
  );
};
