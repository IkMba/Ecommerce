import Banners from "./Banners";

function Banner() {
  return (
    <section className="banner">
      <div className="scroll-bar banner-container">
        <Banners img="1" />
        <Banners img="2" />
        <Banners img="3" />
      </div>
    </section>
  );
}

export default Banner;
