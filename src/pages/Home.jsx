import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import "./Home.css";
import Hero from "../components/Hero";
import GioiThieu from "../components/GioiThieu";
import PhongTuc from "../components/PhongTuc";
import AmThuc from "../components/AmThuc";
import VanHoa from "../components/VanHoa";
import Album from "../components/Album";
import Footer from "../components/Footer";


function Home() {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // pháo hoa 5 giây

    return () => clearTimeout(timer);
  }, []);
// nhac logic
    const audioRef = useRef(null);
        const [playing, setPlaying] = useState(false);

    const toggleMusic = () => {
    if (playing) {
        audioRef.current.pause();
    } else {
        audioRef.current.play();
    }
    setPlaying(!playing);
    };
//scroll cơ bản 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      const bar = document.querySelector(".progress-bar");
      if (bar) {
        bar.style.width = progress + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

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

    sections.forEach((section) => {
        observer.observe(section);
    });

  return () => observer.disconnect();
}, []);

    //logic lì xì rơi
    const wishes = [
    "Chúc bạn năm mới vạn sự như ý ",
    "Tiền vào như nước, tình yêu như mơ ",
    "Thi đâu đậu đó, code đâu bug đó ",
    "Gia đình bình an, sự nghiệp thăng hoa ",
    "2026 bứt phá level boss cuối "
    ];
 

    const [message, setMessage] = useState("");
    const [showFalling, setShowFalling] = useState(true);
    const [showModal, setShowModal] = useState(false);
    
    // const tingRef = useRef(null);

    const handleRedEnvelopeClick = () => {
    const random = wishes[Math.floor(Math.random() * wishes.length)];
    setMessage(random);

    setShowModal(true);
    setShowFalling(false);
    setShowConfetti(false);
    };
    
  return (
   
    <div>
        {/* showw pháo hoa nhẹ nhàng -- chạy bằng thư viện */}
       {showConfetti && (
    <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={250}
         style={{ position: "fixed", zIndex: 9999 }}
        />
    )}

    {/* lì xì rơi hoa lệ */}
    {showFalling && (
  <div className="falling-container">
    {[...Array(8)].map((_, i) => {
      const isRed = Math.random() > 0.6;
      return (
        <div
          key={i}
          className="falling-item"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 5 + Math.random() * 3 + "s",
            fontSize: 24 + Math.random() * 10 + "px"
          }}
          onClick={() => {
            if (isRed) handleRedEnvelopeClick();
          }}
        >
          {isRed ? "🧧" : "🌸"}
        </div>
      );
    })}
  </div>
)}


    

        {/* Progress bar */}
        <div className="progress-container">
            <div className="progress-bar"></div>
        </div>


       {/* bắt đầu chỗ bật nhạc */ }
        <audio
            ref={audioRef}
            src="/music/tet.mp3"
            loop
        />

        <button className="music-btn" onClick={toggleMusic}>
        {playing ? "Tắt nhạc" : "Bật nhạc"}
        </button>
        {/* end chỗ bật nhạc  */}

     
      {/* <section id="home" className="hero">
        <h1>TẾT HƯNG NGUYÊN</h1>
        <p>
          Nơi mùa xuân không chỉ đến bằng pháo hoa,
          mà bằng tình làng nghĩa xóm và hương bánh chưng.
        </p> */}
        {/* <a href="#gioi-thieu" className="btn">Khám phá</a> */}
      {/* </section> */}
      <Hero />
     {showModal && (
  <div className="modal-overlay" onClick={() => setShowModal(false)}>
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="envelope-open">🧧</div>
      <h2>Lời chúc đầu năm</h2>
      <p className="wish-text">{message}</p>
      <button onClick={() => setShowModal(false)}>
        Đóng
      </button>
    </div>
  </div>
)}

  
        <GioiThieu />
        <PhongTuc />
        <AmThuc />
        <VanHoa />
        <Album />
        <Footer />

    </div>
  );
}

export default Home;