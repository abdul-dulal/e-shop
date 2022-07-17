import Accessories from "../home/category/Accessories";
import Clening from "../home/category/Clening";
import Cooking from "../home/category/Cooking";
import Electical from "../home/category/Electical";
import Flower from "../home/category/Flower";
import Food from "../home/category/Food";
import Health from "../home/category/Health";
import LifeStyle from "../home/category/LifeStyle";
import MenFashion from "../home/category/MenFashion";
import Sports from "../home/category/Sports";
import Toys from "../home/category/Toys";
import WomenFashion from "../home/category/WomenFashion";

export const PublicRoute = [
  { path: "category/eletronic", name: "electronic", Component: Accessories },
  { path: "category/clening", name: "clening", Component: Clening },
  { path: "category/cooking", name: "cooking", Component: Cooking },
  { path: "category/womens", name: "womenfashion", Component: WomenFashion },
  { path: "category/flower", name: "flower", Component: Flower },
  { path: "category/food", name: "food", Component: Food },
  { path: "category/health", name: "health", Component: Health },
  { path: "category/electical", name: "electical", Component: Electical },
  { path: "category/sports", name: "sports", Component: Sports },
  { path: "category/mens", name: "menfashion", Component: MenFashion },
  { path: "category/lifeStyle", name: "lifestyle", Component: LifeStyle },
  { path: "category/toys", name: "toys", Component: Toys },
];
