import { useState } from "react";
import "./PhongTuc.css";

function PhongTuc() {
  const [active, setActive] = useState(null);

  const data = [
    {
      id: 1,
      title: "Trước Tết",
      short: "Những ngày cuối năm rộn ràng chuẩn bị...",
      mainImg:
        "https://images.unsplash.com/photo-1608889175607-9b2d7f6c3c53",
      content: [
        "Những ngày cuối tháng Chạp ở Hưng Nguyên luôn rộn ràng và đầy háo hức.",
        "Cả gia đình cùng nhau dọn dẹp nhà cửa, lau bàn thờ tổ tiên, sửa sang lại sân vườn.",
        "Mẹ đi chợ mua lá dong, thịt lợn, đỗ xanh để chuẩn bị gói bánh chưng.",
        "Không khí se lạnh bên dòng sông Lam khiến mùi khói bếp và mùi bánh chưng càng thêm ấm áp."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1608889175607-9b2d7f6c3c53",
        "https://images.unsplash.com/photo-1545128485-c400ce7b6899"
      ]
    },
    {
      id: 2,
      title: "Giao Thừa",
      short: "Khoảnh khắc thiêng liêng chuyển giao năm cũ – năm mới...",
      mainImg:
        "https://images.unsplash.com/photo-1577083552431-6e5fd01988a7",
      content: [
        "Đúng 12 giờ đêm, cả nhà thắp hương trước bàn thờ tổ tiên.",
        "Ngoài sân, tiếng pháo hoa vang lên xa xa từ thành phố Vinh.",
        "Trẻ con háo hức nhận lì xì, người lớn chúc nhau sức khỏe và bình an.",
        "Ở Hưng Nguyên, giao thừa không ồn ào mà ấm áp, thiêng liêng và đầy tình cảm."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1577083552431-6e5fd01988a7",
        "https://images.unsplash.com/photo-1513151233558-d860c5398176"
      ]
    },
    {
      id: 3,
      title: "Sau Tết",
      short: "Du xuân, thăm hỏi và lễ hội đầu năm...",
      mainImg:
        "https://images.unsplash.com/photo-1541542684-4b6f7a0e0f88",
      content: [
        "Mùng 1 đi chúc Tết họ hàng, mùng 2 thăm bạn bè.",
        "Mùng 3 nhiều gia đình đi chùa đầu năm cầu bình an.",
        "Những buổi họp mặt đầu xuân đầy tiếng cười và chén trà ấm.",
        "Tết ở quê không chỉ là lễ nghi mà là sự gắn kết cộng đồng."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1541542684-4b6f7a0e0f88",
        "https://images.unsplash.com/photo-1513151233558-d860c5398176"
      ]
    }
  ];

  return (
    <section id="phong-tuc" className="timeline-wrapper">
      <h1 className="timeline-title">
        Hành trình đón Tết ở Hưng Nguyên
      </h1>

      <div className="timeline">
        {data.map((item) => (
          <div
            key={item.id}
            className="timeline-item"
            onClick={() => setActive(item)}
          >
            <div className="dot"></div>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.short}</p>
              <img src={item.mainImg} alt={item.title} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="overlay" onClick={() => setActive(null)}>
          <div
            className="overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{active.title}</h2>

            {active.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="gallery">
              {active.gallery.map((img, index) => (
                <img key={index} src={img} alt="" loading="lazy" />
              ))}
            </div>

            <button onClick={() => setActive(null)}>Đóng</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default PhongTuc;