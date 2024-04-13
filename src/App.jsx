import './App.css'
import { Footer } from './components/Footer/Footer';
import { HeroSection } from './components/HeroSection/HeroSetion';
import { Menu } from './components/Menu/Menu';
import { PopularFood } from './components/PopularFood/PopularFood';
import { SpecialOffers } from './components/SpecialOffers/SpecialOffers';
import { WhyFoodHut } from './components/WhyFoodHut/WhyFoodHut';
import { CardObjData } from './data';

export const App = () => {

  return (

    <div className="app-container">
      <HeroSection />
      <SpecialOffers cardsInfo ={CardObjData}/>
      <WhyFoodHut/> 
      <Menu menu = {CardObjData}/> 
      <PopularFood/>
      <Footer/>
    </div>

  );
};
