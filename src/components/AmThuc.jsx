import { useEffect } from "react";
import "./AmThuc.css";
import banhChung from "../assets/banhchung.jpg";
import duamuoi from "../assets/duamuoi.jpg";

function AmThuc() {
  useEffect(() => {
    const items = document.querySelectorAll(".food-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section id="am-thuc" className="amthuc-section">
      <h2 className="section-title">Ẩm thực Tết Hưng Nguyên</h2>
      <p className="section-sub">
        Mỗi món ăn là một câu chuyện, mỗi hương vị là một ký ức mùa xuân.
      </p>

      {/* BÁNH CHƯNG */}
      <div className="food-item">
        <div className="food-img">
          <img src={banhChung} alt="Bánh chưng" />
        </div>
        <div className="food-content">
          <span className="tag">Truyền thống</span>
          <h3>Bánh chưng – Hơi ấm đêm cuối năm</h3>
          <p>
            Đêm 29 Tết, cả nhà quây quần bên nồi bánh nghi ngút khói.
            Không chỉ là món ăn, đó là ký ức tuổi thơ,
            là sự gắn kết gia đình và hương vị quê hương.
          </p>
        </div>
      </div>

      {/* GIÒ LỤA */}
      <div className="food-item reverse">
        <div className="food-img">
          <img
            src="https://media1.nguoiduatin.vn/media/ho-anh-thang/2024/07/29/nem-tu-phuong-3.jpg"
            alt="Giò lụa"
          />
        </div>
        <div className="food-content">
          <span className="tag">Mâm cỗ Tết</span>
          <h3>Giò lụa – Sự tròn đầy viên mãn</h3>
          <p>
            Giò lụa thơm mùi tiêu, chắc và mịn.
            Là biểu tượng của sự đầy đủ, sum vầy.
            Mâm cơm Tết thiếu giò là thiếu đi một phần linh hồn.
          </p>
        </div>
      </div>

      {/* DƯA HÀNH */}
      <div className="food-item">
        <div className="food-img">
          <img src={duamuoi} alt="Dưa hành" />
        </div>
        <div className="food-content">
          <span className="tag">Cân bằng vị</span>
          <h3>Dưa hành – Nhẹ mà không thể thiếu</h3>
          <p>
            Vị chua thanh giúp cân bằng vị béo của thịt và bánh.
            Một món nhỏ nhưng làm nên sự hài hòa cho cả mâm cỗ.
          </p>
        </div>
      </div>

      {/* THỊT ĐÔNG */}
      <div className="food-item reverse">
        <div className="food-img">
          <img
            src="https://cdn.tgdd.vn/2021/01/CookProduct/1200-1200x676-2.jpg"
            alt="Thịt đông"
          />
        </div>
        <div className="food-content">
          <span className="tag">Miền Bắc</span>
          <h3>Thịt đông – Hương vị mùa lạnh</h3>
          <p>
            Trong tiết trời se lạnh Nghệ An, thịt đông mềm,
            trong veo như thạch, ăn kèm dưa hành là đúng bài.
          </p>
        </div>
      </div>

      {/* BÁNH TỔ / BÁNH KHẢO */}
      <div className="food-item">
        <div className="food-img">
          <img
            src="https://cdn.tgdd.vn/2020/01/CookRecipe/GalleryStep/banh-khao-thumb-620x620.jpg"
            alt="Bánh khảo"
          />
        </div>
        <div className="food-content">
          <span className="tag">Ngọt ngày xuân</span>
          <h3>Bánh khảo – Ngọt dịu đầu năm</h3>
          <p>
            Vị ngọt thanh, mềm mịn.
            Miếng bánh nhỏ nhưng chứa đựng sự tinh tế
            của bàn tay người làm bánh quê nhà.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AmThuc;