import { useState } from "react";
import "./Album.css";
import banPhaoHoa from "../assets/banphaohoa.mp4";
import choXua from "../assets/choXua.png";
import choTet from "../assets/choTet.mp4";

function Album() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const albums = [
    {
      title: "Chợ Tết",
      oldImg:"https://i0.wp.com/tapchisonglam.vn/wp-content/uploads/2024/02/cho-vinh-1.jpg?resize=1068%2C712&ssl=1",
  
      newImg:
        "https://resource.kinhtedothi.vn/2024/02/05/1000006293.jpg",
      description:
        "Chợ Tết ngày xưa tấp nập, ngày nay vẫn đông đúc nhưng đã có nhiều thay đổi bởi thời đại của công nghệ và các tung tâm thương mại mọc lên."
    },
    {
      title: "Gói bánh chưng",
      oldImg:
        "https://chuathanhlangson.com/uploads/news/2019_02/001_7.jpg",
      newImg:
        "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=1200&q=80",
      description:
        "Vẫn là nồi bánh đêm 30, nhưng không khí hôm nay đã khác."
    }
  ];

  const videos = [
    {
      title: "Gói bánh chưng",
      src: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Chợ Tết quê",
      src: choTet,
    },
    {
      title: "Khoảnh khắc giao thừa",
      src:banPhaoHoa,
    }
  ];

  return (
    <section className="album-section" id="album">
      <h2>Hình ảnh & Video Tết quê</h2>

      {/* Album Xưa - Nay */}
      <div className="album-wrapper">
        {albums.map((item, index) => (
          <div key={index} className="album-item">
            <h3>{item.title}</h3>

            <div className="compare">
              <div>
                <span className="label old">Tết Xưa</span>
                <img src={item.oldImg} alt="old" />
              </div>

              <div>
                <span className="label new">Tết Nay</span>
                <img src={item.newImg} alt="new" />
              </div>
            </div>

            <p className="desc">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Video */}
      <div className="video-section">
        <h2>Khoảnh khắc Tết quê</h2>
        <div className="video-grid">
          {videos.map((video, index) => (
            <div
              key={index}
              className="video-card"
              onClick={() => setSelectedVideo(video.src)}
            >
              <div className="video-thumb">▶</div>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Video */}
      {selectedVideo && (
        <div className="modal" onClick={() => setSelectedVideo(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video controls autoPlay>
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default Album;