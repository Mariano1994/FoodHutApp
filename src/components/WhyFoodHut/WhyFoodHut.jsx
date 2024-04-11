import './WhyFoodHut.css'
import Boss from "../../assets/boss1.png"

export const WhyFoodHut = () => {
  return (
    <>
      <div className='why-foodhut__container'>
        <div className='why-foodhut__img'>
          <img src={Boss} alt="" />
        </div>

        <div className='why-foodhut__info'>
          <div className='why-foodhut__title'>
            <h2> <span className='text-black'>We are</span> <span className='text-red'>more</span> <span className='text-black'>than</span> <span className='text-yellow'>multiple</span> <span className='text-black'>service</span></h2>
          </div>
          <div className='why-foodhut__paragrapth'>
            <p>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
          </div>
          <div className='why-foodhut__services'>
            <div className='why-foodhut__service'>
              <span>icon</span>
              <span>Online Order</span>
            </div>

            <div className='why-foodhut__service'>
              <span>icon</span>
              <span>Pre-Reservation</span>
            </div>

            <div className='why-foodhut__service'>
              <span>icon</span>
              <span>Super Chef</span>
            </div>

            <div className='why-foodhut__service'>
              <span>icon</span>
              <span>24/7 Service</span>
            </div>

            <div className='why-foodhut__service'>
              <span>icon</span>
              <span>Organized FoodHut Palce</span>
            </div>

            <div className='why-foodhut__service'>
              <span>icon</span>
              <span>Claen Kitchen</span>
            </div>
          </div>
          <a href="#"> About Us</a>
        </div>
      </div>
    </>
  )
}