import { useEffect, useState } from "react";
import { MENU_URL } from "../ConstURLs";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    async function getMenuData() {
      const data = await fetch(`${MENU_URL}${restId}`);
      const json = await data.json();

      setRestInfo(json);
    }

    getMenuData();
  }, []);

  return restInfo;
};

export default useRestaurantMenu;
