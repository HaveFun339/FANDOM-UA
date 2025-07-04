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
      "Глава": "Глава",
      "Зам.Главы": "Зам.Главы",
      "Авторитет": "Авторитет",
      "Положенец": "Положенец",
    },
    about: "О семье",
    aboutText: "FANDOM UA — дружная семья игроков на 18 сервере Grand Mobile. Мы ценим активность, взаимопомощь и весёлое общение!",
    news: "Новости",
    newsText: "Здесь вы можете найти самые свежие новости о нашей семье FANDOM UA!",
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
      "Глава": "Голова",
      "Зам.Главы": "Заст. Голови",
      "Авторитет": "Авторитет",
      "Положенец": "Положенець",
    },
    about: "Про сім'ю",
    aboutText: "FANDOM UA — дружна сім'я гравців на 18 сервері Grand Mobile. Ми цінуємо активність, взаємодопомогу та веселе спілкування!",
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
      "Глава": "Head",
      "Зам.Главы": "Deputy Head",
      "Авторитет": "Authority",
      "Положенец": "Overseer",
    },
    about: "About the Family",
    aboutText: "FANDOM UA is a friendly family of players on Grand Mobile server 18. We value activity, mutual help, and fun communication!",
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

const newsTranslations = {
  ru: [
    {
      date: "03.07.2025",
      text: "Nesso_Nissan кинул в казну 27.5кк, скоро будет новый дом!"
    },
    {
      date: "21.06.2025",
      text: "Открылся официальный сайт семьи FANDOM UA! Теперь вы можете следить за всеми новостями и событиями в одном месте."
    },
    {
      date: "18.06.2025",
      text: "Глава семьи Roma_Yarmak продал семейный дом для покупки нового дома в Бусаево!"
    },
    {
      date: "16.06.2025",
      text: "Мы купили новый семейный дом в Южном! Теперь у нас есть уютное место для встреч и отдыха."
    }
  ],
  uk: [
    {
      date: "03.07.2025",
      text: "Nesso_Nissan поклав в казну 27.5кк, скоро буде новий будинок!"
    },
    {
      date: "21.06.2025",
      text: "Відкрився офіційний сайт сім'ї FANDOM UA! Тепер ви можете слідкувати за всіма новинами та подіями в одному місці."
    },
    {
      date: "18.06.2025",
      text: "Голова сім'ї Roma_Yarmak продав сімейний будинок для покупки нового дому в Бусаєво!"
    },
    {
      date: "16.06.2025",
      text: "Ми купили новий сімейний будинок у Південному! Тепер у нас є затишне місце для зустрічей і відпочинку."
    }
  ],
  en: [
    {
      date: "03.07.2025",
      text: "Nesso_Nissan threw 27.5kk into the treasury, a new house is coming soon!"
    },
    {
      date: "21.06.2025",
      text: "The official FANDOM UA family website is open! Now you can follow all the news and events in one place."
    },
    {
      date: "18.06.2025",
      text: "Family head Roma_Yarmak sold the family house to buy a new one in Busaevo!"
    },
    {
      date: "16.06.2025",
      text: "We bought a new family house in Yuzhny! Now we have a cozy place for meetings and relaxation."
    }
  ]
};

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
    img: "/kinder.jpg",
    name: "Nesso_Nissan",
    role: "Зам.Главы",
  },
  {
    img: "/sliv-logo.jpg",
    name: "Sliva_Bebrov",
    role: "Авторитет",
  },
  {
    img: "/rk-logo.jpg",
    name: "Sasha_Blackwood",
    role: "Положенец",
  },
];

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
            onClick={e => {
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

  const t = translations[lang];
  const newsList = newsTranslations[lang];

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
              {t.main}
            </Link>
            <Link to="/news">{t.news}</Link>
            <Link to="/cars">{t.cars}</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route
            path="/news"
            element={
              <News
                t={t}
                newsList={newsList}
              />
            }
          />
          <Route path="/cars" element={<Autopark lang={lang} />} />
        </Routes>
        <footer>
          <p>{t.copyright}</p>
        </footer>
      </div>
    </Router>
  );
}
export default App;