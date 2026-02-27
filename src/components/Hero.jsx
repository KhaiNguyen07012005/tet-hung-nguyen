import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className={`hero-content ${show ? "active" : ""}`}>
        <h1>TẾT HƯNG NGUYÊN</h1>  

        <p className="hero-sub">
          Nằm bên dòng sông Lam hiền hòa của Nghệ An,
          Hưng Nguyên mỗi độ xuân về lại rộn ràng tiếng chúc Tết,
          mùi bánh chưng nghi ngút khói và sắc đỏ phủ kín đường làng.
        </p>

        <p className="hero-quote">
          “Tết không chỉ là thời khắc chuyển giao năm mới,
          mà là hành trình trở về với gia đình và ký ức tuổi thơ.”
        </p>

        <a href="#gioi-thieu" className="btn">
          Bắt đầu hành trình xuân
        </a>
      </div>

      <div className="wave"></div>
    </section>
  );
}

export default Hero;