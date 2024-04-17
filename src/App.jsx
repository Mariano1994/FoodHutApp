import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./components/HeroSection/HeroSetion";
import { Menu } from "./components/Menu/Menu";
import { PopularFood } from "./components/PopularFood/PopularFood";
import { SpecialOffers } from "./components/SpecialOffers/SpecialOffers";
import { WhyFoodHut } from "./components/WhyFoodHut/WhyFoodHut";
import { CardObjData } from "./utils/data";

export const App = () => {
  const [foodCards, setFoodCards] = useState(CardObjData);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
    }

    fetchData();
  }, []);

  const handlerSetQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredFood = foodCards.filter((foodCard) =>
    foodCard.name.toLowerCase().includes(query.toLowerCase())
  );

  // Function to handle sort by top rationg
  const handlerTopRatedFood = () => {
    const topRated = foodCards
      .filter((foodCard) => foodCard.rating > 4)
      .sort((a, b) => a.rating - b.rating);
    setFoodCards(topRated);
  };

  return (
    <div className="app-container">
      <HeroSection />
      <SpecialOffers cardsInfo={CardObjData} />
      <WhyFoodHut />
      <Menu
        menu={filteredFood}
        onHandleTopRatedFood={handlerTopRatedFood}
        query={query}
        onSetQuery={handlerSetQuery}
      />
      <PopularFood />
      <Footer />
    </div>
  );
};
