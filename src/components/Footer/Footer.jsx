import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <footer>
        <div className=" flex items-center justify-center gap-40 h-[43.3rem] py-[7.6rem] px-[13rem] mt-[6rem]">
          <div className="flex flex-col gap-[1.5rem] w-[32.5rem]">
            <h3 className=" text-[3.2rem] font-medium text-primary ">
              Foodhut
            </h3>
            <p className="text-[1.5rem] leading-[3rem] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              omnis accusantium enim assumenda.
            </p>
            <div className=" flex items-center gap-[1.8rem]">
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
          <div className=" flex gap-32">
            <div className=" flex flex-col gap-[0.5rem]">
              <strong className="text-[1.8rem] font-medium text-primary mb-[1.5rem]">
                About Us
              </strong>
              <a href="#" className="text-[1.5rem] font-light">
                About Us
              </a>
              <a href="#" className="text-[1.5rem] font-light">
                Service Us
              </a>
              <a href="#" className="text-[1.5rem] font-light">
                Contact
              </a>
              <a href="#" className="text-[1.5rem] font-light">
                Company
              </a>
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <strong className="text-[1.8rem] font-medium text-primary mb-[1.5rem]">
                About Us
              </strong>
              <a href="#" className="text-[1.5rem] font-light">
                Partnership
              </a>
              <a href="#" className="text-[1.5rem] font-light">
                Terms of Use
              </a>
              <a href="#" className="text-[1.5rem] font-light">
                Privacy
              </a>
              <a href="#" className="text-[1.5rem] font-light">
                Sitemap
              </a>
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <strong className="text-[1.8rem] font-medium text-primary mb-[1.5rem]">
                Get in touch
              </strong>
              <p className=" w-[37.9rem] text-[1.5rem] leading-[3rem] font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium nihil distinctio odit similique debitis.
              </p>

              <div className="flex items-center gap-[1.5rem] mt-8">
                <input
                  type="text"
                  placeholder="email"
                  className=" border-solid border-[0.5px] border-base outline-none rounded-[30px] py-4 px-8 placeholder:text-[1.8rem] "
                />
                <a
                  href="#"
                  className="flex items-center justify-center py-4 px-4 bg-primary text-alt rounded-[30px]"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <span className="mb-4 text-[1.5rem] font-light">
            Copyright © {currentYear} Foodhut.
          </span>
        </div>
      </footer>
    </>
  );
};
