import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { PublicRoute } from "./components/routes/PublicRoute";
import Wishlist from "./components/wishlist/Wishlist";
import { ToastContainer } from "react-toastify";
import Details from "./components/wishlist/Details";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        {PublicRoute.map(({ path, Component }) => (
          <Route path={path} element={<Component />} key={Math.random()} />
        ))}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details/:id" element={<Details />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
