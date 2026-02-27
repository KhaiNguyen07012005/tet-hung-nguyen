import { useEffect } from "react";
import "./VanHoa.css";
import choTet from "../assets/chohoa.jpg";
import giaoThua from "../assets/cunggiaothua.jpg";
import hoiLang from "../assets/hoilang.jpg";
function VanHoa() {
  useEffect(() => {
    const sections = document.querySelectorAll(".vh-block");

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

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="van-hoa" className="vanhoa-section">
    <div className="vanhoa-intro vh-block">
  <h1 className="vanhoa-main-title">
    Văn hóa ăn Tết ở Hưng Nguyên
  </h1>

  <p className="vanhoa-sub">
    Không chỉ là thời điểm chuyển giao năm mới,
    mà còn là dịp để mỗi gia đình sum họp, để làng xóm gắn kết
    và để những phong tục truyền thống được gìn giữ qua nhiều thế hệ.
  </p>
</div>

      {/* TRƯỚC TẾT */}
      <div className="vh-block">
        <h3>1. Những ngày giáp Tết – Không khí chuẩn bị rộn ràng</h3>
        <p>
          Từ khoảng 25 tháng Chạp, không khí Tết đã hiện rõ.
          Mọi người dọn dẹp nhà cửa, lau bàn thờ tổ tiên,
          quét sân, sửa sang lại từng góc nhỏ trong nhà.
        </p>

        <p>
          Chợ Tết trở nên đông đúc hơn bao giờ hết.
          Người mua lá dong, gạo nếp, hoa cúc, hoa lay ơn.
          Tiếng cười nói, tiếng mặc cả làm cả khu chợ trở nên náo nhiệt.
        </p>

        <div className="vh-image">
          <img src={choTet} alt="Chợ Tết Hưng Nguyên" />
        </div>

        <p>
          Việc chuẩn bị Tết không chỉ là công việc,
          mà còn là cách mỗi người cảm nhận rõ ràng mùa xuân đang đến gần.
        </p>
      </div>

      {/* GIAO THỪA */}
      <div className="vh-block dark">
        <h3>2. Giao thừa – Khoảnh khắc thiêng liêng nhất năm</h3>
        <p>
          Khi kim đồng hồ điểm 12 giờ đêm,
          bàn lễ được đặt ngoài sân.
          Hương nghi ngút giữa trời đêm tĩnh lặng.
        </p>

        <p>
          Người lớn thành kính đọc bài khấn,
          trẻ nhỏ đứng chắp tay cầu mong một năm mới bình an.
          Không khí lúc ấy vừa trang nghiêm vừa ấm áp.
        </p>

        <div className="vh-image">
          <img src={giaoThua} alt="Cúng giao thừa" />
        </div>

        <p>
          Đó là khoảnh khắc đánh dấu sự khởi đầu,
          nơi mọi điều cũ khép lại và hy vọng mới bắt đầu.
        </p>
      </div>

      {/* TRONG TẾT */}
      <div className="vh-block">
        <h3>3. Những ngày đầu xuân – Sinh hoạt cộng đồng</h3>
        <p>
          Từ mùng 1 đến mùng 3, mọi người đi chúc Tết họ hàng,
          lì xì trẻ nhỏ và gửi nhau những lời chúc tốt đẹp.
        </p>

        <p>
          Tại sân đình làng, các trò chơi dân gian như kéo co,
          đánh đu, cờ người được tổ chức sôi nổi.
          Tiếng trống, tiếng reo hò vang khắp xóm nhỏ.
        </p>

        <div className="vh-image">
          <img src={hoiLang} alt="Hội làng đầu xuân" />
        </div>

        <p>
          Những hoạt động ấy không chỉ mang tính giải trí,
          mà còn thể hiện tinh thần đoàn kết và gìn giữ nét văn hóa truyền thống.
        </p>
      </div>

      {/* SAU TẾT */}
      <div className="vh-block">
        <h3>4. Sau Tết – Dư âm còn đọng lại</h3>
        <p>
          Sau mùng 5, cuộc sống dần trở lại bình thường.
          Nhưng dư âm của những ngày Tết vẫn còn đó.
        </p>

        <p>
          Người đi xa lại chuẩn bị hành trang,
          mang theo hương vị quê nhà và ký ức của những ngày đoàn viên.
        </p>

        <div className="vh-image">
          <img src="https://th.bing.com/th/id/R.e572b7605508894180050388f64400e0?rik=RgfhX2Pi9leemQ&pid=ImgRaw&r=0" alt="Du xuân sông Lam" />
        </div>

        <p>
          Tết ở Hưng Nguyên không chỉ là một dịp lễ,
          mà là ký ức, là truyền thống và là bản sắc của quê hương.
        </p>
      </div>
    </section>
  );
}

export default VanHoa;