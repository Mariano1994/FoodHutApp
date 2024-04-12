import './FoodCard.css'
import Costumer1 from '../../assets/costumersPhoto/1.jpg'
import Costumer2 from '../../assets/costumersPhoto/2.jpg'
import Costumer3 from '../../assets/costumersPhoto/3.jpg'
import Star from '../../assets/star.svg'

export const FoodCard = ({card}) => {

  return (
    <>
      <div className='food-card'>
          <div className='food-card__img'>
            <img src={card?.imgURL} />
            <div className='food-card__price'>
              <span>${card?.price}</span>
            </div>
          </div>

          <div className='food-testimonials'>
            <div className='costumers-photo'>
                <img src={Costumer1} alt="costumer user photo" />
                <img src={Costumer2} alt="costumer user photo" />
                <img src={Costumer3} alt="costumer user photo" />

            </div>
            <span><img src={Star} /> ({card?.rating})</span>
          </div>

          <div className='food-card__info'>
            <h3>{card?.name}</h3>
            <div className='paragra'>
            <p>{card?.description}</p>
            </div>
          </div>

          <a href="#"> Order Now</a>

        </div>
    
    </>
  )
}