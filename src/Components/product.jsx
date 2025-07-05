import { useState } from "react";
import "../styles/product.css";

export default function Product({ name, img, price }) {
  const [buy, setBuy] = useState(false);
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    } else {
      setBuy(false);
      setCount(1);
    }
  };

  return (
    <div className="product-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price} جنيه</p>

      <button onClick={() => !buy && setBuy(true)}>
        {buy ? (
          <div className="counter">
            <span className="btn" onClick={handleDecrease}>
              -
            </span>
            <span>{count}</span>
            <span className="btn" onClick={handleIncrease}>
              +
            </span>
          </div>
        ) : (
          "اشتري الآن"
        )}
      </button>
    </div>
  );
}
