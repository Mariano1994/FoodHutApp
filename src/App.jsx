import './App.css'
import { Footer } from './components/Footer/Footer';
import { HeroSection } from './components/HeroSection/HeroSetion';
import { Menu } from './components/Menu/Menu';
import { PopularFood } from './components/PopularFood/PopularFood';
import { SpecialOffers } from './components/SpecialOffers/SpecialOffers';
import { WhyFoodHut } from './components/WhyFoodHut/WhyFoodHut';

import foodImage1 from './assets/foodsphoto/food1.png'
import foodImage2 from './assets/foodsphoto/food2.png'
import foodImage3 from './assets/foodsphoto/food3.png'
import foodImage4 from './assets/foodsphoto/food4.png'
import foodImage5 from './assets/foodsphoto/food5.png'
import foodImage6 from './assets/foodsphoto/food6.png'
import foodImage7 from './assets/foodsphoto/food7.png'
import foodImage8 from './assets/foodsphoto/food8.png'
import foodImage9 from './assets/foodsphoto/food9.png'
import foodImage10 from './assets/foodsphoto/food10.png'
import foodImage11 from './assets/foodsphoto/food11.png'
import foodImage12 from './assets/foodsphoto/food12.png'

const CardObj = [
  {
    id: crypto.randomUUID(),
    name: 'Kebab',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 8,
    rating: 4,
    imgURL: foodImage1
  },

  {
    id: crypto.randomUUID(),
    name: 'Grilled Meat',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: 23,
    rating: 5,
    imgURL: foodImage2
  },

  {
    id: crypto.randomUUID(),
    name: 'Pasta',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus.",
    price: 10,
    rating: 4.3,
    imgURL: foodImage3
  },

  {
    id: crypto.randomUUID(),
    name: 'Lasanha',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 12,
    rating: 4.5,
    imgURL: foodImage4
  },
  {
    id: crypto.randomUUID(),
    name: 'Grilled Meat',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 23,
    rating: 5,
    imgURL: foodImage5
  },
  {
    id: crypto.randomUUID(),
    name: 'Italian Pizza',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 18,
    rating: 4.7,
    imgURL: foodImage6
  },
  {
    id: crypto.randomUUID(),
    name: 'Cool Bread',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 12,
    rating: 4.5,
    imgURL: foodImage7
  },
  {
    id: crypto.randomUUID(),
    name: 'Angolan Meat',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 8,
    rating: 4.2,
    imgURL: foodImage8
  },
  {
    id: crypto.randomUUID(),
    name: 'Bizzaaqui',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 12,
    rating: 4.5,
    imgURL: foodImage9
  },
  {
    id: crypto.randomUUID(),
    name: 'Bullet Burger',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 20,
    rating: 4.5,
    imgURL: foodImage10
  },
  {
    id: crypto.randomUUID(),
    name: 'Chindonga',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 17,
    rating: 4.9,
    imgURL: foodImage11
  },
  {
    id: crypto.randomUUID(),
    name: 'Ovimbundo',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus vel, iure cum eum ullam voluptas iusto est repellendus consequuntur debitis aliquid quas ea illo.",
    price: 21,
    rating: 4.8,
    imgURL: foodImage12
  }
]

export const App = () => {

  return (

    <div className="app-container">
      <HeroSection />
      <SpecialOffers cardsInfo ={CardObj}/>
      <WhyFoodHut/> 
      <Menu menu = {CardObj}/> 
      <PopularFood/>
      <Footer/>
    </div>

  );
};
