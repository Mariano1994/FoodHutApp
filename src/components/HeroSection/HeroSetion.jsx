import './HeroSection.css'
import HeroImage from '../../assets/hero-image.svg'
import HeartIcon from '../../assets/heart.svg'
import Decore from '../../assets/Decore.svg'
import PlayButton from '../../assets/play-button.svg'
import MoveFoward from '../../assets/move-foward.svg'

import { Header } from "../Header/Header"
import { SearchBar } from '../SearchBar/SearchBar'

export const HeroSection = () => {
  return (
    <>
      <div className="hero-wrapper">
        <Header/>
        <div className='hero-section__content'>
          <div className='hero-section__info'>
            
            <span className='hero-trust'>
                <img src={HeartIcon} /> People Trust us
            </span>

            <div className='hero-section__title'>

            <p> <span className='text-black'>We're</span> <span className='text-red'> Serious</span> <span className='text-black'>For</span> <span className='text-red'>Food</span> <span className='text-black'>&</span> <span className='text-yellow'>Delivery</span><span className='text-black'>.</span></p>
            <img src={Decore}  />
            </div>

            <div className='hero-section__paragrath'>
              <p>
              Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
              </p>
            </div>

          </div>

          <div className='hero-section__img'>
              <img src={HeroImage} alt="" />
          </div>

        </div>
        <SearchBar/>
        <div className='keep-in__touch'>
            <button className='app'>
              Download App
            </button>
            <div className='watch'>
              <img src={PlayButton} />
              <span>Watch Video</span>
            </div>
        </div>
        <div className='move-foward'>
            <img src={MoveFoward}/>
        </div>
      </div>
    </>
  )
}