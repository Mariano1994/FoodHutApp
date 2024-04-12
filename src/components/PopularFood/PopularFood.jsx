import './PopularFood.css'
import appleIcon from '../../assets/apple-logo.svg'
import GooglePlayIcon from '../../assets/google-play-icon.svg'
import Chef from '../../assets/chef.svg'
import Foods from '../../assets/food.svg'

export const PopularFood = ()=> {
  return (
    <>
    <div className='wrap'>

      <section className='popular-food__container'>
        <div className='popular-food__info'>
          <div className='popular-food__title'>
            <h2>It's Now<span className='text-red'> More Easy</span> to <br/> <span className='text-yellow'>Order</span> By Our Mobile <span className='text-red'>App</span></h2>
          </div>
          <div className='popular-food__paragra'>
            <p>All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</p>
          </div>
          <div className='popular-food__app'>

            <div className='app'>
              <img src={GooglePlayIcon}/>
              <span>Google Play</span>
            </div>

            <div className='app'>
              <img src={appleIcon} />
              <span>Apple Store</span>
            </div>

          </div>
        </div>

        <div className='popular-food__img'>
          <img src={Foods} className='food' />
          <img src={Chef} alt="chef" className='chef'/>
        </div>
      </section>
    </div>
    </>
  )
}