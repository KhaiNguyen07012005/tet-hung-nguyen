// import { useState } from "react";
import "./PhongTuc.css";
import cungOngTao from "../assets/cungongtao.jpg";
import giaoThua from "../assets/giaothuaquangtruong.jpg"

function PhongTuc() {
  // const [active, setActive] = useState(null);

  const data = [
    {
      id: "01",
      title: "23 Tháng Chạp",
      short: "Tiễn Ông Công Ông Táo về trời...",
      mainImg: cungOngTao,
      content: [
        "Từ sáng sớm 23 tháng Chạp, các gia đình chuẩn bị mâm cỗ tiễn Ông Công Ông Táo.",
        "Cá chép được thả ra sông, mang theo lời cầu mong một năm mới bình an.",
        "Không khí bắt đầu rộn ràng, chợ quê đông đúc hơn thường ngày."
      ]
    },
    {
      id: "02",
      title: "Những ngày cuối năm",
      short: "Dọn dẹp, gói bánh, tất bật mà ấm áp...",
      mainImg:
        "https://scontent.fvii2-4.fna.fbcdn.net/v/t39.30808-6/634733239_1294650289387742_1022894000041188641_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFm46oAyqz2VYmqgUhLSJLeZLCgMcNYFrxksKAxw1gWvLjEdl5sWKnxyf6D8bkHqWJ--eQDYCwiCICPR_wF7H6h&_nc_ohc=0fCsoYoIUdIQ7kNvwF--gHh&_nc_oc=AdnbYSUC76l7yVs7P3i4LfrA_fk988ZGLOO9D5sDXBlYQ37sh6AtAeLAXoB9CqtCA3lRts4GLjo3u2D_3bNSM9by&_nc_zt=23&_nc_ht=scontent.fvii2-4.fna&_nc_gid=bMwqPAXECBBjhxsMhwBDuQ&_nc_ss=8&oh=00_AfuNemsa6vZaNHo3hOtpOU_xBz3zN7obCxClvgYxp13HxQ&oe=69A96CDE",
      content: [
        "Cả nhà cùng nhau lau dọn bàn thờ, quét sân, sửa sang lại nhà cửa.",
        "Chiều 29 Tết, bếp lửa đỏ rực bên nồi bánh chưng nghi ngút khói.",
        "Mùi lá dong, nếp mới và khói bếp hòa quyện trong cái lạnh cuối năm."
      ]
    },
    {
      id: "03",
      title: "Giao Thừa",
      short: "Khoảnh khắc thiêng liêng nhất trong năm...",
      mainImg:
        giaoThua,
      content: [
        "Đúng 12 giờ đêm, gia đình làm lễ cúng giao thừa trong nhà và ngoài trời.",
        "Tiếng pháo hoa vọng lại từ xa, còn quê nhà vẫn bình yên và ấm áp.",
        "Trẻ con nhận lì xì, người lớn chúc nhau sức khỏe và may mắn."
      ]
    },
    {
      id: "04",
      title: "Mồng Một – Mồng Ba",
      short: "Chúc Tết, hóa vàng và sum vầy...",
      mainImg:
        "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/2/2/1000888/Van-Khan-Cung-Ngay-M.jpeg",
      content: [
        "Mồng 1 kiêng quét nhà để giữ lộc.",
        "Mồng 2, mồng 3 đi chúc Tết họ hàng và thầy cô.",
        "Nhiều gia đình làm lễ hóa vàng vào mồng 3 để tiễn ông bà."
      ]
    },
    {
      id: "05",
      title: "Rằm Tháng Giêng",
      short: "Khép lại mùa xuân đầu năm...",
      mainImg:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      content: [
        "Rằm tháng Giêng được xem là ngày lễ lớn đầu năm.",
        "Gia đình chuẩn bị mâm cỗ cúng trang trọng.",
        "Sau ngày này, nhịp sống thường nhật dần trở lại."
      ]
    }
  ];

  return (
    <section id="phong-tuc" className="timeline-wrapper">
      <h1 className="timeline-title">
        Hành Trình Đón Tết Ở Hưng Nguyên
      </h1>

      <div className="timeline">
        {data.map((item) => (
          <div
            key={item.id}
            className="timeline-item"
            // onClick={() => setActive(item)}
          >
            <div className="number">{item.id}</div>

            <div className="image-wrapper">
              <img src={item.mainImg} alt={item.title} />
            </div>

            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.short}</p>
            </div>
          </div>
        ))}
      </div>

      {/* {active && (
        <div className="overlay" onClick={() => setActive(null)}>
          <div
            className="overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{active.title}</h2>

            {active.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <button onClick={() => setActive(null)}>
              Đóng
            </button>
          </div>
        </div>
      )} */}
    </section>
  );
}

export default PhongTuc;