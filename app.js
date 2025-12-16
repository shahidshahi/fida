function Home() {
  return (
    <div className="container">
      <h1>Fida VK</h1>
      <p>Frontend Developer & React Learner</p>
      <img src="fii.jpeg" className="profile-img" />
      <p className="quote">“A special person makes life brighter just by being part of it.”</p>
    </div>
  );
}

function Gallery() {
  const images = [
    { src: "a.jpeg", label: "Memories" },
    { src: "d.jpeg", label: "Nature" },
    { src: "f.img.jpeg", label: "Special" },
    { src: "h.jpeg", label: "Moments" },
    { src: "l.jpeg", label: "People" },
    { src: "i.jpeg", label: "Travel" }
  ];

  const quotes = [
    "A special person makes life brighter just by being part of it.",
    "Some people don’t just walk beside you — they give you strength.",
    "Real connections grow stronger with time."
  ];

  const [bigImage, setBigImage] = React.useState(null);
  const [selectedLabel, setSelectedLabel] = React.useState("Memories");

  return (
    <div className="container">
      <h1>Gallery</h1>
      <div className="gallery">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            onClick={() => {
              setBigImage(img.src);
              setSelectedLabel(img.label);
            }}
          />
        ))}
      </div>

      {/* MODAL */}
      {bigImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setBigImage(null)}>✖</span>
            <img src={bigImage} className="profile-img" />
            <select
              value={selectedLabel}
              onChange={(e) => setSelectedLabel(e.target.value)}
            >
              <option>Memories</option>
              <option>Nature</option>
              <option>People</option>
              <option>Travel</option>
              <option>Special</option>
            </select>
            <p className="quote">“A special person turns moments into memories.”</p>
          </div>
        </div>
      )}

      {quotes.map((q,i) => <p key={i} className="quote">“{q}”</p>)}
    </div>
  );
}

function Videos() {
  const videos = [
    "hi.mp4",
    "mm.mp4",
    "ho.mp4",
    
  ];

  return (
    <div className="container">
      <h1>Funny Videos 😂</h1>
      <div className="gallery">
        {videos.map((vid,i)=>(
          <video key={i} src={vid} controls muted loop></video>
        ))}
      </div>
      <p className="quote">“Laughter is the shortest distance between two people.”</p>
    </div>
  );
}

function App() {
  const [page, setPage] = React.useState("home");
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">Fida VK</div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => { setPage("home"); setMenuOpen(false); }}>Home</button>
          <button onClick={() => { setPage("gallery"); setMenuOpen(false); }}>Gallery</button>
          <button onClick={() => { setPage("videos"); setMenuOpen(false); }}>Funny Videos</button>
        </div>

        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>☰</div>
      </nav>

      {page==="home" && <Home />}
      {page==="gallery" && <Gallery />}
      {page==="videos" && <Videos />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
