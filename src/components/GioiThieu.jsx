import { useEffect } from "react";
import "./GioiThieu.css";

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
    </div>

    {/* 1. Vị trí địa lý */}
    <section className="gt-section fade-section">
      <div className="gt-img">
        <img
          src="https://media.istockphoto.com/photos/village-way-picture-id671173726?k=6&m=671173726&s=612x612&w=0&h=fl1FwqxwWqJ7gcXW8PQWx_TcthGBKxaGe5woTfi3JW0="
          alt="Cánh đồng Nghệ An"
        />
      </div>
      <div className="gt-content">
        <h2>1. Vị trí địa lý</h2>
        <p>
          Hưng Nguyên là một huyện thuộc tỉnh Nghệ An,
          nằm bên dòng sông Lam hiền hòa và cách thành phố Vinh không xa.
          Đây là vùng đồng bằng xen lẫn nông thôn,
          nổi bật với những cánh đồng lúa rộng lớn và làng xóm yên bình.
        </p>
        <p>
          Nhờ vị trí gần trung tâm tỉnh,
          nơi đây vừa giữ được nét truyền thống,
          vừa có sự phát triển hiện đại.
        </p>
      </div>
    </section>

    {/* 2. Con người và làng quê */}
    <section className="gt-section reverse fade-section">
      <div className="gt-img">
        <img
          src="https://scontent.fvii2-1.fna.fbcdn.net/v/t39.30808-6/640243196_1367318982098908_8818725791131815624_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGTzB9CytghtEX-XzNG4zhiE5yPptUGhasTnI-m1QaFq7cghcQqor7zpFgwO1KAt8qsd792dhRY1ryqyEhsTlYj&_nc_ohc=0_oS0m9VjH0Q7kNvwGxW5Ew&_nc_oc=AdkdmoXvVQo1J2GjG3HRLj6TCWsAqr1lOG7q9YGyDArw6LScdUhpEyo7OTWG_QFouAz7CreLTNnyFnsglD_MakZW&_nc_zt=23&_nc_ht=scontent.fvii2-1.fna&_nc_gid=bCpAR66sA1SkpJbZuoq05g&oh=00_AfsacgmwMbUmR-tYTqKtYDaydvw4WABF1hyS1wVHZ4MBdw&oe=69A22CA7"
          alt="Làng quê Việt Nam"
        />
      </div>
      <div className="gt-content">
        <h2>2. Đặc điểm con người và làng quê</h2>
        <p>
          Người dân Hưng Nguyên mang đậm tính cách Nghệ An:
          thẳng thắn, chịu khó và giàu tình cảm.
          Cuộc sống gắn liền với ruộng đồng,
          với nếp sinh hoạt giản dị nhưng ấm áp.
        </p>
        <p>
          Những con đường làng nhỏ,
          hàng tre trước ngõ,
          tiếng chào hỏi thân quen mỗi buổi sáng —
          tất cả tạo nên một không gian làng quê đặc trưng.
        </p>
      </div>
    </section>

    {/* 3. Tết có gì khác? */}
    <section className="gt-section fade-section">
      <div className="gt-img">
        <img
          src="https://scontent.fvii2-4.fna.fbcdn.net/v/t39.30808-6/634316262_4321747298142148_8456559093590651128_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGGoY9OALnZdxZ9iIrbhKfmn1tu5CnzkdOfW27kKfOR06orF1HyMNWNjaoaw6SZdZA47qwZDHNcQuOb6h4wM2rB&_nc_ohc=hOfb2EuNn5cQ7kNvwFc4d6L&_nc_oc=AdlWkqZEluw1zQjCpyy-g6h0S_JCYQMHDDaSsn_We9K4z4AXN-TtRnM-IdY2zXbGXyW8OHJh3ytj6dbcmmgmteWd&_nc_zt=23&_nc_ht=scontent.fvii2-4.fna&_nc_gid=KuUNiQqj7IN2i2wNszA6gg&oh=00_AfuFREKClT6jtOpjm9Whqh1-Kax1LNhAHbbGdNl9pvhB3g&oe=69A24B47"
          alt="Bánh chưng ngày Tết"
        />
      </div>
      <div className="gt-content">
        <h2>3. Tết ở Hưng Nguyên có gì khác?</h2>
        <p>
          Tết nơi đây không quá rộn ràng hay phô trương.
          Điều đặc biệt nằm ở sự đoàn tụ và tính cộng đồng.
          Các gia đình thường tự gói bánh chưng,
          quây quần bên bếp lửa suốt đêm 30.
        </p>
        <p>
          Sáng mùng 1, mọi người đi chúc Tết họ hàng,
          thăm hỏi từng nhà trong xóm.
          Không khí gần gũi, mộc mạc
          chính là nét riêng tạo nên Tết Hưng Nguyên.
        </p>
      </div>
    </section>

  </section>
);
}

export default GioiThieu;