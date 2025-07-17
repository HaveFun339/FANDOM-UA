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

const translations = {
  ru: {
    rank: {
      Глава: "Глава",
      "Зам.Главы": "Зам.Главы",
      Авторитет: "Авторитет",
      Положенец: "Положенец",
    },
    about: "О семье",
    aboutText:
      "FANDOM UA — дружная семья игроков на 18 сервере Grand Mobile. Мы ценим активность, взаимопомощь и весёлое общение!",
    news: "Новости",
    newsText:
      "Здесь вы можете найти самые свежие новости о нашей семье FANDOM UA!",
    moreNews: "Больше новостей",
    members: "Старший состав",
    join: "Вступить в семью",
    joinLink: "Ссылка для присоединения к семье",
    main: "Главная",
    cars: "Автопарк",
    copyright: "© 2025 FANDOM UA",
  },
  uk: {
    rank: {
      Глава: "Голова",
      "Зам.Главы": "Заст. Голови",
      Авторитет: "Авторитет",
      Положенец: "Положенець",
    },
    about: "Про сім'ю",
    aboutText:
      "FANDOM UA — дружна сім'я гравців на 18 сервері Grand Mobile. Ми цінуємо активність, взаємодопомогу та веселе спілкування!",
    news: "Новини",
    newsText: "Тут ви знайдете найсвіжіші новини про нашу сім'ю FANDOM UA!",
    moreNews: "Більше новин",
    members: "Старший склад",
    join: "Вступити в сім'ю",
    joinLink: "Посилання для приєднання до сім'ї",
    main: "Головна",
    cars: "Автопарк",
    copyright: "© 2025 FANDOM UA",
  },
  en: {
    rank: {
      Глава: "Head",
      "Зам.Главы": "Deputy Head",
      Авторитет: "Authority",
      Положенец: "Overseer",
    },
    about: "About the Family",
    aboutText:
      "FANDOM UA is a friendly family of players on Grand Mobile server 18. We value activity, mutual help, and fun communication!",
    news: "News",
    newsText: "Here you can find the latest news about our FANDOM UA family!",
    moreNews: "More news",
    members: "Senior Members",
    join: "Join the Family",
    joinLink: "Link to join the family",
    main: "Home",
    cars: "Garage",
    copyright: "© 2025 FANDOM UA",
  },
};

const members = [
  {
    img: "/rl-l.jpg",
    name: "Roma_Yarmak",
    role: "Глава",
  },
  {
    img: "/dima-logo.jpg",
    name: "Dmitro_Minov",
    role: "Авторитет",
  },

  {
    img: "/rk-logo.jpg",
    name: "Nikita_Asker",
    role: "Авторитет",
  },
  {
    img: "/ns-logo.jpg",
    name: "Leonid_Sokolov",
    role: "Авторитет",
  },
];

function handleNavClick(e) {
  const href = e.target.getAttribute("href");
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

function LanguageModal({ onSelect }) {
  return (
    <div className="lang-modal">
      <div className="lang-modal-bubbles">
        <div className="lang-modal-bubble ru"></div>
        <div className="lang-modal-bubble uk"></div>
        <div className="lang-modal-bubble en"></div>
      </div>
      <div className="lang-modal-content">
        <h2>Выберите язык / Оберіть мову / Choose language</h2>
        <div className="lang-btns">
          <button onClick={() => onSelect("ru")}>Русский</button>
          <button onClick={() => onSelect("uk")}>Українська</button>
          <button onClick={() => onSelect("en")}>English</button>
        </div>
      </div>
    </div>
  );
}

function Home({ lang }) {
  const navigate = useNavigate();
  const t = translations[lang];

  return (
    <main>
      <section id="about" data-aos="fade-up">
        <h2>{t.about}</h2>
        <p>{t.aboutText}</p>
      </section>
      <section
        id="news"
        data-aos="fade-up"
        style={{ cursor: "pointer", color: "white" }}
        onClick={() => navigate("/news")}
      >
        <h2>{t.news}</h2>
        <ul>
          <li>{t.newsText}</li>
          <button
            className="more"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/news");
            }}
          >
            {t.moreNews}
          </button>
        </ul>
      </section>
      <section id="members" data-aos="fade-up">
        <h2>{t.members}</h2>
        <div className="members-list">
          {members.map((m) => (
            <div className="member-card" key={m.name}>
              <img src={m.img} alt={m.name} />
              <span className="role">{m.name}</span>
              <div className="role-highlight">{t.rank[m.role] || m.role}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="contacts" data-aos="fade-up">
        <h2>{t.join}</h2>
        <a
          href="https://t.me/+stDCZ9XGNAA2MmRi"
          target="_blank"
          rel="noopener noreferrer"
          className="join-btn"
        >
          {t.joinLink}
        </a>
      </section>
    </main>
  );
}

function App() {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  if (!lang) {
    return <LanguageModal onSelect={setLang} />;
  }

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
              {translations[lang].main}
            </Link>
            <Link to="/news">{translations[lang].news}</Link>
            <Link to="/cars">{translations[lang].cars}</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/news" element={<News lang={lang} />} />
          <Route path="/cars" element={<Autopark lang={lang} />} />
        </Routes>
        <footer>
          <p>{translations[lang].copyright}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
