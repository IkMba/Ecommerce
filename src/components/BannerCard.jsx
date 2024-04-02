function BannerCard({ img }) {
  return (
    <section className="banner-two">
      <div className="banner-big banner-card">
        <h4>New Collection</h4>
        <h2>Discover our Autumn Skincare</h2>
        <button className="btn-light">Explore more</button>
      </div>
      <div className="banner-small banner-card">
        <h2>25% off Everything</h2>
        <p>Makeup with extended range in colors for every human.</p>
        <button className="btn-light">Shop Sale</button>
      </div>
    </section>
  );
}
export default BannerCard;
