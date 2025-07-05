import "../styles/contact.css";

export default function Contact() {
  return (
    <>
      <div className="con">
        <i className="fa-solid fa-paper-plane" style={{ color: "#0f9af0" }}></i>
        <h2>تواصل معنا</h2>
      </div>

      <section className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control name"
              id="name"
              placeholder="الاسم"
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control email"
              id="email"
              placeholder="البريد الإلكتروني"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              rows="6"
              placeholder="اكتب رسالتك هنا"
              name="message"
              required
            ></textarea>
          </div>

          <div className="send-button">
            <button
              className="alt-send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <i className="fa fa-paper-plane"></i>
              <span className="send-text">إرسال</span>
            </button>
          </div>
        </form>

        {/* معلومات التواصل */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-lg"></i>
              <span className="contact-text place">القاهرة، مصر</span>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-lg"></i>
              <span className="contact-text phone">
                <a href="tel:+201234567890">+20 123 456 7890</a>
              </span>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-lg"></i>
              <span className="contact-text gmail">
                <a href="mailto:youremail@email.com">youremail@email.com</a>
              </span>
            </li>
          </ul>

          {/* روابط السوشيال ميديا */}
          <ul className="social-media-list">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* الحقوق */}
      <div className="copyright">© جميع الحقوق محفوظة</div>
    </>
  );
}
