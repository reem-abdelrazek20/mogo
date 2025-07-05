import "../styles/about.css";

export default function AboutSection() {
  return (
    <section className="about-section" id="adout-section">
      <div className="about-content">
        <h2>
          About <span>MoGo</span>
        </h2>
        <p>
          MoGo هو متجرك الإلكتروني الأول الذي يوفر لك أحدث المنتجات بجودة عالية
          وأسعار تنافسية. نحن نؤمن أن التسوق يجب أن يكون سهلاً وممتعًا وآمنًا.
          اكتشف مجموعتنا المميزة من المنتجات اليوم!
        </p>
        <button className="about-btn">تعرف على المزيد</button>
      </div>
      <div className="hero-image" style={{ position: "relative" }}>
        <div className="image-wrapper">
          {" "}
          <img src="/img/about.jpg" alt="منتج" />
          <div className="overlay">
            <h1>"موغو.. تسوقك أسهل وأسرع"</h1>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
