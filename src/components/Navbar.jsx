import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const sections = [
    { id: "home", label: "Trang Chủ" },
    { id: "gioi-thieu", label: "Giới Thiệu" },
    { id: "phong-tuc", label: "Phong Tục" },
    { id: "am-thuc", label: "Ẩm Thực" },
    { id: "van-hoa", label: "Văn Hóa" },
    { id: "album", label: "Album" },
  ];

  // scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll spy bằng IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
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
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={() => scrollTo("home")}>
        Tết Hưng Nguyên
      </div>

      <div className="menu">
        {sections.map((item) => (
          <span
            key={item.id}
            className={`menu-item ${active === item.id ? "active" : ""}`}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;