import "./HeroSection.css";
import HeroImage from "../../assets/hero-image.svg";
import HeartIcon from "../../assets/heart.svg";
import Decore from "../../assets/Decore.svg";
import PlayButton from "../../assets/play-button.svg";
import MoveFoward from "../../assets/move-foward.svg";

import Costumer1 from "../../assets/costumersPhoto/8.jpg";
import Costumer2 from "../../assets/costumersPhoto/9.jpg";
import Costumer3 from "../../assets/costumersPhoto/10.jpg";
import Costumer4 from "../../assets/costumersPhoto/4.jpg";
import Costumer5 from "../../assets/costumersPhoto/5.jpg";
import Costumer6 from "../../assets/costumersPhoto/6.jpg";
import Costumer7 from "../../assets/costumersPhoto/7.jpg";
import { Header } from "../Header/Header";

export const HeroSection = () => {
  return (
    <>
      <div className="hero-wrapper h-screen w-screen bg-alt">
        <Header />
        <div className=" flex justify-between items-center">
          <div className=" flex flex-col gap-6 ml-28">
            <span className="flex justify-center gap-[1.8rem] text-lg items-center py-2 w-1/6 bg-gradient rounded-[15px] text-base ">
              <img src={HeartIcon} /> People Trust us
            </span>

            <div className="hero-section__title">
              <p className=" text-[8rem]  font-extrabold">
                {" "}
                We're
                <span className="text-primary"> Serious</span> For
                <br /> <span className="text-primary">Food</span> &
                <span className="text-secondary"> Delivery</span>.
              </p>
              <img src={Decore} className="ml-[30rem] absolute -mt-[2rem]" />
            </div>

            <div className=" w-[60%]">
              <p className="text-[2.3rem] mb-40">
                Best cooks and best delivery guys all at your service. Hot tasty
                food will reach you in 60 minutes.
              </p>
            </div>
          </div>

          <div>
            <img src={HeroImage} alt="" className="w-[80rem] h-[67rem]" />
          </div>
        </div>

        <div className="flex items-center gap-[20rem] ml-[7.8rem] -mt-[16rem] ">
          <div className="flex w-[5.5rem] h-[5.5rem]">
            <img
              src={Costumer1}
              alt="costumer user photo"
              className=" rounded-full -ml-[2rem] border-alt border-solid border-[3px] "
            />
            <img
              src={Costumer2}
              alt="costumer user photo"
              className=" rounded-full -ml-[2rem] border-alt border-solid border-[3px] "
            />
            <img
              src={Costumer3}
              alt="costumer user photo"
              className=" rounded-full -ml-[2rem] border-alt border-solid border-[3px]"
            />
            <img
              src={Costumer4}
              alt="costumer user photo"
              className=" rounded-full -ml-[2rem] border-alt border-solid border-[3px] "
            />
            <img
              src={Costumer5}
              alt="costumer user photo"
              className=" rounded-full -ml-[2rem] border-alt border-solid border-[3px] "
            />
            <img
              src={Costumer6}
              alt="costumer user photo"
              className=" rounded-full -ml-[2rem] border-alt border-solid border-[3px]"
            />
            <img
              src={Costumer7}
              alt="costumer user photo"
              className=" rounded-full -ml-[2rem] border-alt border-solid border-[3px] "
            />
          </div>
          <span className=" text-[2rem] font-bold">
            {" "}
            <span className="text-primary">250,000+</span> meals{" "}
            <span className="text-secondary">delivered </span>last year!
          </span>
        </div>

        <div className="ml-[6rem] mt-[3.5rem] flex items-center">
          <button
            className=" flex justify-center items-center w-[16.2rem] h-[4.5rem] bg-primary text-alt rounded-[30px]"
            id="#app"
          >
            Download App
          </button>
          <div className="flex items-center cursor-pointer">
            <img src={PlayButton} className="mt-[2rem] w-[10rem]" />
            <span>Watch Video</span>
          </div>
        </div>
        <div className="ml-[4rem] flex">
          <img src={MoveFoward} className="w-[5rem] h-[5rem]" />
        </div>
      </div>
    </>
  );
};
