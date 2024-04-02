function Banners({ img }) {
  return (
    <div
      className="banners scroll-bar-item"
      style={{ backgroundImage: `url(/images/hero-banner-${img}.jpg)` }}
    >
      <div className="banner-details ">
        <h2>Reveal the Beauty of Skin</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet.
        </p>
        <p className="text-link lg">Starting at $7.99</p>
        <button className="btn-black">Shop Now</button>
      </div>
    </div>
  );
}

export default Banners;
