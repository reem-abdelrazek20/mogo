import "../styles/services.css";

export default function ServicesSection() {
  return (
    <section className="services-section" id="section-5">
      <h2>
        خدمات <span>MoGo</span>
      </h2>
      <div className="services-grid">
        <div className="service-card">
          <i className="fa-solid fa-truck-fast"></i>
          <h3>شحن سريع</h3>
          <p>نوصلك لأي مكان في مصر خلال 48 ساعة فقط.</p>
        </div>
        <div className="service-card">
          <i className="fa-solid fa-headset"></i>
          <h3>دعم فني 24/7</h3>
          <p>خدمة عملاء متاحة دائمًا للرد على استفساراتك.</p>
        </div>
        <div className="service-card">
          <i className="fa-solid fa-tags"></i>
          <h3>خصومات حصرية</h3>
          <p>استمتع بعروض يومية وأسعار منافسة.</p>
        </div>
        <div className="service-card">
          <i className="fa-solid fa-money-bill-wave"></i>
          <h3>الدفع عند الاستلام</h3>
          <p>ادفع براحتك لما تستلم المنتج.</p>
        </div>
      </div>
    </section>
  );
}
