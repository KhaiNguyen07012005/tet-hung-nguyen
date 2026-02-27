import { useEffect } from "react";
import "./GioiThieu.css";
import dongQue from "../assets/dongque.jpg";
import langQue from "../assets/langque.jpg";
import banhChung from "../assets/banhchung.jpg";


function GioiThieu() {
  useEffect(() => {
    const sections = document.querySelectorAll(".gt-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gioi-thieu" className="gioithieu-container">

      <div className="gt-title">
        <h1>Giới thiệu về quê hương – Hưng Nguyên</h1>
        <p>
          Nơi tôi sinh ra và lớn lên – một vùng quê yên bình
          nằm bên dòng sông Lam của tỉnh Nghệ An.
        </p>
      </div>

      {/* 1. Vị trí địa lý */}
      <section className="gt-section">
        <div className="gt-img">
          <img src={dongQue} alt="Cánh đồng Hưng Nguyên" />
        </div>
        <div className="gt-content">
          <h2>1. Vị trí địa lý</h2>
          <p>
            Hưng Nguyên là một huyện thuộc tỉnh Nghệ An,
            nằm ngay phía Nam thành phố Vinh,
            bên dòng sông Lam hiền hòa.
          </p>
          <p>
            Vùng đất này nổi bật với những cánh đồng lúa trải dài,
            những con đường làng quanh co và không khí trong lành
            đậm chất nông thôn Bắc Trung Bộ.
          </p>
        </div>
      </section>

      {/* 2. Con người */}
      <section className="gt-section reverse">
        <div className="gt-img">
          <img src={langQue} alt="Làng quê ngày Tết" />
        </div>
        <div className="gt-content">
          <h2>2. Con người và làng quê</h2>
          <p>
            Người Hưng Nguyên mang nét tính cách đặc trưng của người Nghệ:
            chân chất, chịu thương chịu khó và giàu tình cảm.
          </p>
          <p>
            Mỗi buổi sáng, tiếng gà gáy vang lên từ cuối xóm,
            những bà, những mẹ tất bật ra đồng,
            trẻ con ríu rít trên con đường đất đỏ —
            tạo nên một bức tranh làng quê bình dị nhưng đầy ấm áp.
          </p>
        </div>
      </section>

      {/* 3. Điểm khác biệt ngày Tết */}
      <section className="gt-section">
        <div className="gt-img">
          <img src={banhChung} alt="Gói bánh chưng đêm 30" />
        </div>
        <div className="gt-content">
          <h2>3. Tết ở Hưng Nguyên có gì đặc biệt?</h2>
          <p>
            Không quá náo nhiệt như thành phố,
            Tết ở Hưng Nguyên mang nét mộc mạc và ấm cúng.
          </p>
          <p>
            Đêm 30, cả gia đình quây quần bên nồi bánh chưng,
            lửa đỏ hồng sưởi ấm cả khoảng sân nhỏ.
            Người lớn kể chuyện xưa, trẻ con háo hức chờ thời khắc giao thừa.
          </p>
          <p>
            Sáng mùng 1, mọi người đi chúc Tết từng nhà trong xóm,
            trao nhau lời chúc bằng giọng Nghệ thân thương —
            đó chính là nét riêng không nơi nào có được.
          </p>
        </div>
      </section>

      <blockquote className="gt-quote">
        “Tết ở quê không chỉ là ngày lễ, mà là ký ức và sự trở về.”
      </blockquote>

    </section>
  );
}

export default GioiThieu;