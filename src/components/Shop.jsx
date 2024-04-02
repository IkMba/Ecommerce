import IonIcon from "@reacticons/ionicons";
import ShopCard from "./ShopCard";

function Shop() {
  return (
    <section className="shop">
      <div className="shop-heading">
        <h3>Our Bestsellers</h3>
        <div className="action-link">
          <h6>Shop all Products</h6>
          <IonIcon name="arrow-forward" />
        </div>
      </div>
      <ul className="scroll-bar shop-cards">
        <ShopCard
          proNo="01"
          originalPrice="$39.00"
          price="$29.00"
          productName="Facial Cleanser"
          rating="true"
        />
        <ShopCard
          proNo="02"
          price="$29.00"
          discount="-20%"
          productName="Bio-shroom Rejuvenating Serum"
          rating="true"
        />
        <ShopCard
          proNo="03"
          price="$29.00"
          productName="Coffe Bean Caffeine Eye Cream"
          rating="true"
        />
        <ShopCard
          proNo="04"
          originalPrice="$39.00"
          price="$29.00"
          productName="Facial Cleanser"
          rating="true"
        />
        <ShopCard
          proNo="05"
          price="$29.00"
          discount="-25%"
          productName="Coffe Bean Caffeine Eye Cream"
          rating="true"
        />
        <ShopCard
          proNo="06"
          price="$29.00"
          productName="Bio-shroom Rejuvenating Serum"
          rating="true"
        />
      </ul>
    </section>
  );
}

export default Shop;
