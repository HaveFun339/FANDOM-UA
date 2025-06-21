import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Autopark from "./Autopark";
import News from "./News";

function handleNavClick(e) {
  const href = e.target.getAttribute("href");
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

const members = [
  {
    img: "/roma-logo.jpg",
    name: "Roma_Yarmak",
    role: "Глава",
  },
  {
    img: "/dima-logo.jpg",
    name: "Dmitro_Minov",
    role: "Авторитет",
  },
  {
    img: "/yev-logo.jpg",
    name: "Evgeniy_Monein",
    role: "Авторитет",
  },
  {
    img: "/k-logo.jpg",
    name: "Violetta_Kalinech",
    role: "Авторитет",
  },
  {
    img: "/sliv-logo.jpg",
    name: "Sliva_Bebrov",
    role: "Авторитет",
  },
  {
    img: "/egor-logo.jpg",
    name: "Egor_Mercuris",
    role: "Положенец",
  },
  {
    img: "/rk-logo.jpg",
    name: "Sasha_Blackwood",
    role: "Положенец",
  },
];

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <main>
      <section id="about" data-aos="fade-up">
        <h2>О семье</h2>
        <p>
          FANDOM UA — дружная семья игроков на 18 сервере Grand Mobile. Мы ценим
          активность, взаимопомощь и весёлое общение!
        </p>
      </section>
      <section
        id="news"
        data-aos="fade-up"
        style={{ cursor: "pointer", color: "white" }}
        onClick={() => navigate("/news")}
      >
        <h2>Новости</h2>
        <ul>
          <li>
            Здесь вы можете найти самые свежие новости о нашей семье FANDOM UA!
          </li>
          <button
            className="more"
            onClick={e => {
              e.stopPropagation();
              navigate("/news");
            }}
          >
            Больше новостей
          </button>
        </ul>
      </section>
      <section id="members" data-aos="fade-up">
        <h2>Старший состав</h2>
      
        <div className="members-list">
          {members
            .filter((m) =>
              m.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((m) => (
              <div className="member-card" key={m.name}>
                <img src={m.img} alt={m.name} />
                <span className="role">{m.name}</span>
                <div className="role-highlight">{m.role}</div>
              </div>
            ))}
        </div>
      </section>
      <section id="contacts" data-aos="fade-up">
        <h2>Вступить в семью</h2>
        <a
          href="https://t.me/+stDCZ9XGNAA2MmRi"
          target="_blank"
          rel="noopener noreferrer"
          className="join-btn"
        >
          Ссылка для присоединения к семье
        </a>
      </section>
    </main>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="bg-bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="neon-line"></div>
          <div className="neon-line neon-line2"></div>
        </div>
        <header className="App-header">
          <div className="header-row">
            <img src="/site-logo.webp" alt="" className="logo" />
            <h1 className="head">FANDOM UA</h1>
          </div>
          <nav>
            <Link to="/" onClick={handleNavClick}>
              Главная
            </Link>
            <Link to="/news">Новости</Link>
            <Link to="/cars">Автопарк</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/cars" element={<Autopark />} />
        </Routes>
        <footer>
          <p>© 2025 FANDOM UA</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;