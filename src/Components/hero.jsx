import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          مرحبًا بك في <span>MoGo</span>
        </h1>
        <p>أفضل مكان لتسوق المنتجات العصرية بأسعار مميزة</p>
        <button className="cta-btn">ابدأ التسوق الآن</button>
      </div>
      <div className="hero-image" style={{ position: "relative" }}>
        <div className="image-wrapper">
          {" "}
          <img src="/img/hero.jpg" alt="منتج" />
          <div className="overlay">
            <h1>"تسوّق بذكاء، وفّر أكثر."</h1>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
