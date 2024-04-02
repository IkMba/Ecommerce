import { useState } from "react";
import Header from "./Header";

function AppLayout() {
  const [showSideNav, setShowSideNav] = useState(false);
  console.log(showSideNav);
  return (
    <div
      onClick={() => {
        setShowSideNav((show) => !show);
      }}
    >
      <Header setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
    </div>
  );
}

export default AppLayout;
