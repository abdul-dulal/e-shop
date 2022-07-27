import Cart from "../cart/Cart";
import Contact from "../contact/Contact";
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
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Shop from "../shop/Shop";
import Wishlist from "../wishlist/Wishlist";

export const PublicRoute = [
  { path: "/", name: "home", Component: Home },
  { path: "/shop", name: "shop", Component: Shop },
  { path: "/shop", name: "shop", Component: Shop },
  { path: "/contact", name: "contact", Component: Contact },
  { path: "/register", name: "register", Component: Register },
  { path: "/login", name: "login", Component: Login },
  { path: "/wishlist", name: "wishlist", Component: Wishlist },
  { path: "/cart", name: "cart", Component: Cart },
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
