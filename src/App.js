import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import { PublicRoute } from "./components/routes/PublicRoute";
import { ToastContainer } from "react-toastify";
import Details from "./components/wishlist/Details";
import Singlevendor from "./components/home/vendor/Singlevendor";
import Dashborad from "./components/myaccount/Dashborad";
import Order from "./components/myaccount/Order";
import Address from "./components/myaccount/Address";
import Logout from "./components/myaccount/Logout";
import Myaccount from "./components/myaccount/Myaccount";
import Accountdetails from "./components/myaccount/Accountdetails";
import Editpassword from "./components/myaccount/Editpassword";
import Checkout from "./components/cart/Checkout";
import Vendor from "./components/vendorAccount/Vendor";
import VendorProducts from "./components/vendorAccount/VendorProducts";
import Setting from "./components/vendorAccount/Setting";
import VendorLogut from "./components/vendorAccount/VendorLogut";
import VendorDashboard from "./components/vendorAccount/VendorDashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import Payment from "./components/shere/Payment";

// import Vendor from "./components/home/vendor/Vendorslider";
// import Vendorslider from "./components/home/vendor/Vendorslider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {PublicRoute.map(({ path, Component }) => (
          <Route path={path} element={<Component />} key={Math.random()} />
        ))}
        <Route path="/product-details/:id" element={<Details />} />
        <Route path="/shop/:id" element={<Singlevendor />} />
        <Route
          path="/my-account"
          element={
            <PrivateRoute>
              <Myaccount />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashborad />} />
          <Route path="order" element={<Order />} />
          <Route path="address" element={<Address />} />
          <Route path="account-details" element={<Accountdetails />} />
          <Route path="logout" element={<Logout />} />
          <Route path="edit-password" element={<Editpassword />} />
        </Route>

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/vendor" element={<Vendor />}>
          <Route index element={<VendorDashboard />} />
          <Route path="products" element={<VendorProducts />} />
          <Route path="settings" element={<Setting />} />
          <Route path="logout" element={<VendorLogut />} />
        </Route>
        <Route path="checkout-method" element={<Payment />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
