import './App.css'
import { Header } from "./components/Header/Header";
import { HeroSection } from './components/HeroSection/HeroSetion';
import { Menu } from './components/Menu/Menu';
import { SpecialOffers } from './components/SpecialOffers/SpecialOffers';
import { WhyFoodHut } from './components/WhyFoodHut/WhyFoodHut';

export const App = () => {
  return (

    <div className="app-container">
      <HeroSection/>
      <SpecialOffers/>
      <WhyFoodHut/> 
      <Menu/> 
    </div>

  );
};
