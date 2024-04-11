import './FoodCard.css'
import ImageFood1 from '../../assets/food1.png'
import Costumer1 from '../../assets/costumersPhoto/1.jpg'
import Costumer2 from '../../assets/costumersPhoto/2.jpg'
import Costumer3 from '../../assets/costumersPhoto/3.jpg'
import Star from '../../assets/star.svg'

export const FoodCard = () => {
  return (
    <>
      <div className='food-card'>
          <div className='food-card__img'>
            <img src={ImageFood1} />
            <div className='food-card__price'>
              <span>$10</span>
            </div>
          </div>

          <div className='food-testimonials'>
            <div className='costumers-photo'>
                <img src={Costumer1} alt="costumer user photo" />
                <img src={Costumer2} alt="costumer user photo" />
                <img src={Costumer3} alt="costumer user photo" />

            </div>
            <span><img src={Star} /> (4.5)</span>
          </div>

          <div className='food-card__info'>
            <h3>Kebab</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas placeat dicta necessitatibus</p>
          </div>

          <a href="#"> Order Now</a>

        </div>
    
    </>
  )
}