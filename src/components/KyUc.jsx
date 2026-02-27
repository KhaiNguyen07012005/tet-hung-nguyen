import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import que from "../assets/que.jpg";
import caChep from "../assets/cachep.jpg";
import phaoHoa from "../assets/phaohoa.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "./KyUc.css";

function KyUc() {
  const [activeStory, setActiveStory] = useState(null);

  const days = [
    {
      date: "22 Tháng Chạp",
      title: "Trở về",
      short: "Mình về lại quê...",
      full: "Chiều 22, mình về lại quê. Gió lạnh thổi qua đường làng. Mùi khói rơm quen thuộc khiến mình biết Tết thật sự đã bắt đầu.",
      image: que,
    },
    {
      date: "23 Tháng Chạp",
      title: "Ông Táo",
      short: "Khói hương bay lên...",
      full: "Bếp được lau sạch. Mẹ chuẩn bị cá chép. Nhìn làn khói hương bay lên, mình chợt nhận ra một năm đã khép lại.",
      image: caChep
    },
    {
      date: "30 Tết",
      title: "Giao thừa",
      short: "Khoảnh khắc 0h...",
      full: "Mọi thứ chậm lại. Đồng hồ gần 12 giờ. Pháo hoa nổ vang. Không phải tiếng nổ, mà là cảm giác khởi đầu mới.",
      image: phaoHoa
    },
    {
      date: "Rằm",
      title: "Khép lại",
      short: "Tết lặng lẽ trôi...",
      full: "Trăng sáng. Gió nhẹ. Tết không kết thúc bằng tiếng pháo, mà bằng sự lắng xuống trong lòng.",
      image: "/images/ram.jpg"
    }
  ];

  return (
    <section className="kyuc-wrapper">
      <h2 className="kyuc-heading">Nhật Ký Tết</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {days.map((day, index) => (
          <SwiperSlide key={index}>
            <div
              className="kyuc-card"
              style={{ backgroundImage: `url(${day.image})` }}
              onClick={() => setActiveStory(day)}
            >
              <div className="overlay">
                <span className="kyuc-date">{day.date}</span>
                <h3>{day.title}</h3>
                <p>{day.short}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {activeStory && (
        <div className="modal" onClick={() => setActiveStory(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeStory.title}</h2>
            <p className="modal-date">{activeStory.date}</p>
            <p>{activeStory.full}</p>

            <button onClick={() => setActiveStory(null)}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default KyUc;