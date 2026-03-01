import { useState } from "react";
import "./LienHe.css";

function LienHe() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã gửi góp ý ❤️");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="lien-he" className="contact-section">
      <h1 className="contact-title">Liên Hệ & Đóng Góp</h1>

      <div className="contact-container">
        
        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Gửi góp ý</h3>

          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Nội dung góp ý..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Gửi</button>
        </form>

        {/* GOOGLE MAP */}
        <div className="contact-map">
          <h3>Vị trí địa phương</h3>
          <iframe
            title="Hưng Nguyên Map"
            src="https://www.google.com/maps?q=Hung+Nguyen+Nghe+An&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* INFO */}
      <div className="contact-info">
        <p><strong>Website thực hiện bởi:</strong>Nguyễn Đình Khải -<strong> MSSV: DH52300851</strong></p> 
        <p>Sinh viên ngành Công nghệ thông tin</p>
        <p>Dự án: Storytelling Tết Hưng Nguyên</p>
        <p>Email: khainguyendinh365@gmail.com</p>
      </div>
    </section>
  );
}

export default LienHe;