import IonIcon from "@reacticons/ionicons";
// repeat - outline, bag - handle - outline, star - outline, star;
function ShopCard({
  proNo,
  originalPrice,
  price,
  productName,
  rating,
  discount,
}) {
  return (
    <div className="shop-card scroll-bar-item">
      <div className="shop-img scroll-item">
        <img src={`/images/product-${proNo}.jpg`} alt="" />
        {discount && <div className="badge">{discount}</div>}
        <div className="shop-side">
          <button className="shop-btn">
            <IonIcon name="bag-outline" />
          </button>
          <button className="shop-btn">
            <IonIcon name="star-outline" />
          </button>
          <button className="shop-btn">
            <IonIcon name="repeat-outline" />
          </button>
        </div>
      </div>

      <div className="shop-details">
        <div className="price">
          {originalPrice && <p className="originalPrice">{originalPrice}</p>}
          <p className="price">{price}</p>
        </div>
        <p className="product-name">{productName}</p>
        <div className="product-ratings">
          {rating && (
            <div className="product-star">
              <IonIcon name="star" />
              <IonIcon name="star" />
              <IonIcon name="star" />
              <IonIcon name="star" />
              <IonIcon name="star" />
            </div>
          )}
          <p>5170 reviews</p>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
