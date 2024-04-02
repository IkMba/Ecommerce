import IonIcon from "@reacticons/ionicons";
import { useEffect, useState } from "react";

function Header({ setShowSideNav, showSideNav }) {
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setHeaderFixed(true);
      } else setHeaderFixed(false);
    });
    // return () => {
    //   if (window.scrollY) window.removeEventListener("scroll");
    // };
  }, []);

  console.log(headerFixed);

  return (
    <header
      className={`header ${showSideNav ? "active" : ""} ${
        headerFixed ? "fixed" : ""
      }`}
    >
      <div className="header-menu">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowSideNav((show) => !show);
          }}
          className="nav-open-btn"
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>
      <nav className="nav">
        <div className="nav-left">
          <input type="text" placeholder="Search Product" />
        </div>
        <div className="nav-center">
          <div className="nav-logo">
            <img src="/images/logo.png" alt="" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Offer</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="nav-right-icon nav-1">
            <IonIcon name="person-outline" />
          </button>
          <div className="nav-right-cart">
            <button className="nav-right-icon">
              <IonIcon name="star-outline" />{" "}
              <span className="btn-cart-sm sm-cart">0</span>
            </button>
            <button className="btn-sm">$0.00</button>
            <button className="nav-right-icon">
              <IonIcon name="bag-handle-outline" />
              <span className="btn-cart-sm sm-cart">0</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
