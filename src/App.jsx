import { useState } from "react";
import Header from "./components/Header";
import Alert from "./components/Alert";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Shop from "./components/Shop";
import CheapProducts from "./components/CheapProducts";
import BannerCard from "./components/BannerCard";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Blog from "./components/Blog";

function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <div
      className="app"
      onClick={() => {
        setShowSideNav(false);
      }}
    >
      <Alert />
      <Header setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
      <Banner />
      <Collection />
      <Shop />
      <CheapProducts />
      <BannerCard />
      <Features />
      <Offer />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
