import { useEffect, useState } from "react";

function Wrapper({ children }) {
  const [active, setActive] = useState(false);
  // useEffect(() => {
  //   function setScroll() {
  //     if (getBoundingClientRect().top < window.innerHeight / 2) {
  //       setActive(true);
  //     }
  //   }

  //   addEventListener("scroll", setScroll);
  //   // addEventListener("load", setScroll);
  //   return () => {
  //     removeEventListener("scroll", () => setActive(false));
  //     // removeEventListener("load", () => setActive(false));
  //   };
  // }, []);
  return <div className={`wrapper ${active ? "active" : ""} `}>{children}</div>;
}

export default Wrapper;
