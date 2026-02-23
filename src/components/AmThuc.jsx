import "./AmThuc.css";
import banhChung from "../assets/banhchung.jpg";
import duamuoi from "../assets/duamuoi.jpg";



function AmThuc() {
  return (
    <section id="am-thuc" className="amthuc-section fade-section">
      <h2 className="section-title">Ẩm thực Tết Nghệ An</h2>

      <div className="food-item">
        <div className="food-img">
      <img src={banhChung} alt="Bánh chưng" />
        </div>
        <div className="food-content">
          <h3>Bánh chưng – Hơi ấm đêm cuối năm</h3>
          <p>
            Bánh chưng được gói từ những ngày giáp Tết.
            Cả gia đình quây quần bên bếp lửa đỏ rực suốt đêm,
            tiếng củi cháy lách tách giữa tiết trời se lạnh.
            Không chỉ là món ăn, đó là ký ức tuổi thơ.
          </p>
        </div>
      </div>

      <div className="food-item reverse">
        <div className="food-img">
          <img
            src="https://media1.nguoiduatin.vn/media/ho-anh-thang/2024/07/29/nem-tu-phuong-3.jpg"
            alt="Giò lụa"
          />
        </div>
        <div className="food-content">
          <h3>Giò lụa – Sự tròn đầy</h3>
          <p>
            Giò lụa thơm mùi tiêu, cắt ra mịn và chắc.
            Là biểu tượng của sự đủ đầy, viên mãn.
            Mâm cơm Tết không có giò coi như chưa trọn vẹn.
          </p>
        </div>
      </div>

      <div className="food-item">
        <div className="food-img">
          <img
            src={duamuoi}
            alt="Dưa hành"
          />
        </div>
        <div className="food-content">
          <h3>Dưa hành – Vị chua giữ trọn hương Tết</h3>
          <p>
            Dưa hành giòn nhẹ, chua thanh,
            giúp cân bằng vị béo ngày Tết.
            Một món nhỏ thôi nhưng làm mâm cơm trở nên hài hòa.
          </p>
        </div>
      </div>

    </section>
  );
}

export default AmThuc;