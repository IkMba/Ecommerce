import IonIcon from "@reacticons/ionicons";

function Collection() {
  return (
    <section className="collection">
      <CollectionCard
        title="Summer Collection"
        pricing="Starting at $17.99"
        action="Shop Now"
        imgNo={1}
      />
      <CollectionCard
        title="What's New"
        pricing="Get Now"
        action="Discover Now"
        imgNo={2}
      />
      <CollectionCard
        title="Buy 1 Get 1"
        pricing="Starting at $7.99"
        action="Discover Now"
        imgNo={3}
      />
    </section>
  );
}

function CollectionCard({ title, pricing, action, imgNo }) {
  return (
    <div
      className="collection-details"
      style={{ backgroundImage: `url(/images/collection-${imgNo}.jpg)` }}
    >
      <h3 className="collection-">{title}</h3>
      <h5 className="text-link">{pricing}</h5>
      <div className="action-link">
        <h6>{action}</h6>
        <IonIcon name="arrow-forward" />
      </div>
    </div>
  );
}

export default Collection;
