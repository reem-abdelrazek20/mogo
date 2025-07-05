import "../styles/card.css";
import Shopping from "./Shopping";
export default function YourCard({ onClose }) {
  return (
    <div className="card-overlay">
      <div className="card-box">
        <i className="fa-solid fa-xmark close-btn" onClick={onClose}></i>
        <div style={{ textAlign: "center" }}>
          <img
            src="/img/card.png"
            alt="السلة فارغة"
            style={{ width: "120px" }}
          />
          <p style={{ marginTop: "10px", fontSize: "1.1rem" }}>
            السلة فارغة حاليًا
          </p>
        </div>
      </div>
    </div>
  );
}
