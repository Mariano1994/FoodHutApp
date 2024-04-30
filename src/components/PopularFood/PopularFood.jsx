import "./PopularFood.css";
import appleIcon from "../../assets/apple-logo.svg";
import GooglePlayIcon from "../../assets/google-play-icon.svg";
import Chef from "../../assets/chef.svg";
import Foods from "../../assets/food.svg";

export const PopularFood = () => {
  return (
    <>
      <div className="wrap" id="app">
        <section className="flex justify-between items-center ml-28 gap-32 mt-32">
          <div className="flex flex-col gap-12 w-[58%] mb-24 mt-16">
            <div className="text-[3.8rem] font-extrabold">
              <h2>
                It's Now<span className="text-primary"> More Easy</span> to{" "}
                <br /> <span className="text-secondary">Order</span> By Our
                Mobile <span className="text-primary">App</span>
              </h2>
            </div>
            <div>
              <p className="text-[1.8rem] leading-[3.5rem] font-light w-[69%]">
                All you need to do is downlode one of the best delivery apps,
                make a and most companies are opting for mobile app devlopment
                for food delivery
              </p>
            </div>
            <div className="flex items-center gap-[2.7rem]">
              <div className=" flex items-center gap-4 bg-base py-[0.8rem] px-4 cursor-pointer rounded-lg text-alt">
                <img src={GooglePlayIcon} />
                <span>Google Play</span>
              </div>

              <div className="flex items-center gap-4 bg-base py-[0.8rem] px-4 cursor-pointer rounded-lg text-alt">
                <img src={appleIcon} />
                <span>Apple Store</span>
              </div>
            </div>
          </div>

          <div className=" w-2/4 -mr-[20rem]">
            <img
              src={Foods}
              className="w-[28rem] absolute mt-[40rem] ml-[21rem]"
            />
            <img src={Chef} alt="chef" className="w-[55rem] overflow-hidden" />
          </div>
        </section>
      </div>
    </>
  );
};
