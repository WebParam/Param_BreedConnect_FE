import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import AllProductPage from "./components/Customer/AllProductPage";
import Login from "./components/Auth/Login/index";
import Profile from "./components/Auth/Profile";
import Signup from "./components/Auth/Signup";
import SignupBreeder from "./components/Auth/SignupBreeder";
import BecomeSaller from "./components/BecomeSaller";
import Blogs from "./components/Blogs";
import Blog from "./components/Blogs/Blog.jsx";
import CardPage from "./components/CartPage";
import CheakoutPage from "./components/CheakoutPage";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import FlashSale from "./components/FlashSale";
import FourZeroFour from "./components/FourZeroFour";
import Home from "./components/Home";
import HomeTwo from "./components/HomeTwo";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ProductsCompaire from "./components/ProductsCompaire/index";
import SallerPage from "./components/SallerPage";
import Sallers from "./components/Sellers";
import SingleProductPage from "./components/SingleProductPage";
import TermsCondition from "./components/TermsCondition/index";
import TrackingOrder from "./components/TrackingOrder";
import Wishlist from "./components/Wishlist";
import HomeThree from "./components/HomeThree";
import HomeFour from "./components/HomeFour";
import HomeFive from "./components/HomeFive";
import Tinder from "./components/Tinder";
import Landing from "./components/Landing"
import BreederDashboard from "./components/Dashboard";
import BreederProfile from "./components/Dashboard/profile";
import BreederProducts from "./components/Dashboard/Products/products";
import AddProduct from "./components/Dashboard/add-product";

import AddProductS1 from "./components/Dashboard/AddProduct/add-product-s1";
import Questionnaires from "./components/Questionnaires/questionnaires";
import ViewProductList from "./components/Dashboard/ViewProduct/view-product";
import EditProduct from "./components/Dashboard/AddProduct/edit-product";
import OrderList from "./components/Dashboard/Orders/order-list";
import Customers from './components/Customer'
import Messages from './components/Dashboard/Messages/messages'
import PaymentResult from './components/Customer/PaymentResult/index'
import Products from './components/Dashboard/Products/products'
import PurchaseRequests from './components/Dashboard/Swipes/purchase-requests'
import CalendarSchedule from "./components/Dashboard/calender";
export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/breeder-dash" element={<BreederDashboard />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/signupbreeder" element={<SignupBreeder />} /> 
      <Route exact path="/breeder-profile" element={<BreederProfile />} />
      {/* <Route exact path="/breeder-products" element={<BreederProfile />} /> */}
      {/* <Route exact path="/all-products" element={<AllProductPage />} /> */}
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/view-product-list" element={<ViewProductList />} /> 
      <Route exact path="/messages-breeder" element={<Messages />} />
      <Route exact path="/transaction" element={<PaymentResult />} />
      <Route exact path="/breeder-products" element={<Products />} />
      {/* <Route exact path="/home-two" element={<HomeTwo />} />
      <Route exact path="/home-three" element={<HomeThree />} />
      <Route exact path="/home-four" element={<HomeFour />} />
      <Route exact path="/home-five" element={<HomeFive />} />
    
      // <Route exact path="/all-products" element={<AllProductPage />} />
      <Route exact path="/single-product" element={<SingleProductPage />} />
      <Route exact path="/cart" element={<CardPage />} />
      <Route exact path="/checkout" element={<CheakoutPage />} />
      <Route exact path="/wishlist" element={<Wishlist />} />
      <Route exact path="/flash-sale" element={<FlashSale />} />
      <Route exact path="/saller-page" element={<SallerPage />} />
      <Route exact path="/products-compaire" element={<ProductsCompaire />} />
      <Route exact path="/sallers" element={<Sallers />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/blogs/blog" element={<Blog />} />
      <Route exact path="/tracking-order" element={<TrackingOrder />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/signupbreeder" element={<SignupBreeder />} />
      <Route exact path="/profile" element={<Profile />} 
      <Route exact path="/become-saller" element={<BecomeSaller />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/terms-condition" element={<TermsCondition />} />
     
      <Route exact path="*" element={<FourZeroFour />} /> */}
      {/* <Route exact path="/tinder" element={<Tinder/>} /> */}
      <Route exact path="/questionnaires" element={<Questionnaires/>} />
      <Route exact path="/add-product" element={<AddProduct/>} />
      <Route exact path="/add-product-s1" element={<AddProductS1/>} />
      <Route exact path="/edit-product/:id" element={<EditProduct/>} />
      <Route exact path="*" element={<FourZeroFour />} />
      <Route exact path="/all-products" element={<AllProductPage />} />
      <Route exact path="/questionnaires" element={<Questionnaires/>} />
      <Route exact path="/profile" element={<Profile />}  />
      {/* <Route exact path="*" element={<FourZeroFour /> }/>*/}
      <Route exact path="/tinder" element={<Tinder/>}  /> 
      <Route exact path="/customer" element={<Customers/>}  />
      <Route exact path="/orders" element={<OrderList/>}  />
      <Route exact path="/swipes" element={<PurchaseRequests/>}  />
      <Route exact path="/calender" element={<CalendarSchedule/>}  />
      
    </Routes>
  );
}
