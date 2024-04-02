import IonIcon from "@reacticons/ionicons";
import ShopCard from "./ShopCard";

function CheapProducts() {
  return (
    <section className="shop">
      <div className="shop-heading">
        <h3>Under $25</h3>
        <div className="action-link">
          <h6>Shop all Products</h6>
          <IonIcon name="arrow-forward" />
        </div>
      </div>
      <ul className="scroll-bar shop-cards">
        <ShopCard
          proNo="06"
          originalPrice="$39.00"
          price="$29.00"
          productName="Facial Cleanser"
        />
        <ShopCard
          proNo="07"
          price="$29.00"
          discount="-20%"
          productName="Bio-shroom Rejuvenating Serum"
        />
        <ShopCard
          proNo="08"
          price="$29.00"
          productName="Coffe Bean Caffeine Eye Cream"
        />
        <ShopCard
          proNo="09"
          originalPrice="$39.00"
          price="$29.00"
          productName="Facial Cleanser"
        />
        <ShopCard
          proNo="10"
          price="$29.00"
          discount="-25%"
          productName="Coffe Bean Caffeine Eye Cream"
        />
        <ShopCard
          proNo="11"
          price="$29.00"
          productName="Bio-shroom Rejuvenating Serum"
        />
      </ul>
    </section>
  );
}

export default CheapProducts;
