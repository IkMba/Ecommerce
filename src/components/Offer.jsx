function Offer() {
  return (
    <section className="offer">
      <div className="offer-left">
        <img src="/images/offer-banner-1.jpg" alt="" className="sm-img" />
        <img src="/images/offer-banner-2.jpg" alt="" className="lg-img" />
      </div>
      <div className="offer-right">
        <div className="offer-right-top">
          <h4>Special offer</h4>
          <div className="badge">-20%</div>
        </div>
        <h3>MountainPine Bath Oil</h3>
        <p>
          Made using clean, non-toxic ingredients, our products are designed for
          everyone.
        </p>
        <div className="offer-countdown">
          <h3>15</h3>
          <h3>:</h3>
          <h3>21</h3>
          <h3>:</h3>
          <h3>46</h3>
          <h3>:</h3>
          <h3>08</h3>
        </div>
        <div className="btn-black">Get Only $3.90</div>
      </div>
    </section>
  );
}

export default Offer;
