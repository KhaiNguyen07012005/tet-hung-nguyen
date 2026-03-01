import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

const sections = [
  { id: "home", label: "Trang Chủ" },
  { id: "gioi-thieu", label: "Quê Hương" },
  { id: "phong-tuc", label: "Phong Tục" },
  { id: "am-thuc", label: "Ẩm Thực" },
  { id: "van-hoa", label: "Lễ Hội" },
  { id: "album", label: "Album" },
  { id: "ky-uc", label: "Ký Ức và Câu chuyện Tết" },
  { id: "lien-he", label: "Liên Hệ" },
];

  // Scroll effect + progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const percent = (scrollTop / docHeight) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPercent}%` }}
      ></div>

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo" onClick={() => scrollTo("home")}>
           Tết Hưng Nguyên 
        </div>

        <div className={`menu ${open ? "open" : ""}`}>
          {sections.map((item) => (
            <span
              key={item.id}
              className={`menu-item ${
                active === item.id ? "active" : ""
              }`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </nav>
    </>
  );
}

export default Navbar;