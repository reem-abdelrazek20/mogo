import { useState, useEffect } from "react";
import Product from "./product";
import YourCard from "./yourcard";
import axios from "axios";
import "../styles/shopping.css";
import { useNavigate } from "react-router-dom";
export default function Shopping() {
  const [products, setProducts] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب المنتجات", error);
      }
    };

    getProducts();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="top-bar">
        <div
          className="logo"
          onClick={(e) => {
            navigate("/HomePage");
          }}
        >
          mogo
        </div>
        <input
          type="text"
          placeholder="ابحث عن منتج..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="cart-btn" onClick={() => setShowCard(true)}>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>

      <div className="products-list">
        {filteredProducts.map((item) => (
          <Product name={item.title} img={item.image} price={item.price} />
        ))}
      </div>

      {showCard && <YourCard onClose={() => setShowCard(false)} />}
    </>
  );
}
