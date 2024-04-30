import Boss from "../../assets/boss1.png";
import hourIcon from "../../assets/24h-icon.svg";
import OnlineIcon from "../../assets/online-icon.svg";
import CalendarIcon from "../../assets/calendar-icon.svg";

export const WhyFoodHut = () => {
  return (
    <>
      <div
        className="flex justify-between items-center -mt-[28rem]"
        id="why-food__hut"
      >
        <div>
          <img src={Boss} alt="" className=" w-[78rem] h-[125rem]" />
        </div>

        <div className="flex flex-col w-2/4 gap-[3rem]  -mt-40">
          <div className=" text-[4rem] font-bold leading-[6rem] w-3/4">
            <h2>
              We are <span className="text-primary"> more</span> than {""}
              <span className="text-secondary">multiple</span> {""}
              service
            </h2>
          </div>
          <div className=" w-11/12">
            <p className=" text-[1.8rem] leading-[3rem] font-light">
              This is a type of resturent which typically serves food and drink,
              in addition to light refreshments such as baked goods or snacks.
              The term comes frome the rench word meaning food
            </p>
          </div>
          <div className="flex items-center gap-[11rem]">
            <div className="flex flex-col gap-[2rem]">
              <div className="flex items-center gap-[1.3rem]">
                <img src={OnlineIcon} />
                <span className="text-[1.8rem] font-semibold">
                  Online Order
                </span>
              </div>

              <div className="flex items-center gap-[1.3rem]">
                <img src={CalendarIcon} />
                <span className="text-[1.8rem] font-semibold">
                  Pre-Reservation
                </span>
              </div>

              <div className="flex items-center gap-[1.3rem]">
                <img src={CalendarIcon} />
                <span className="text-[1.8rem] font-semibold">Super Chef</span>
              </div>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <div className="flex items-center gap-[1.3rem]">
                <img src={hourIcon} />
                <span className="text-[1.8rem] font-semibold">
                  24/7 Service
                </span>
              </div>

              <div className="flex items-center gap-[1.3rem]">
                <img src={CalendarIcon} />
                <span className="text-[1.8rem] font-semibold">
                  Organized FoodHut Palce
                </span>
              </div>

              <div className="flex items-center gap-[1.3rem]">
                <img src={CalendarIcon} />
                <span className="text-[1.8rem] font-semibold">
                  Claen Kitchen
                </span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center justify-center py-4 px-8 bg-primary text-alt rounded-[30px] mt-16  w-56"
          >
            {" "}
            About Us
          </a>
        </div>
      </div>
    </>
  );
};
