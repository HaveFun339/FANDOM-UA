import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Autopark from './Autopark';
import News from './News';

function handleNavClick(e) {
  const href = e.target.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section id="about" data-aos="fade-up">
        <h2>О семье</h2>
        <p>FANDOM UA — дружная семья игроков на 18 сервере Grand Mobile. Мы ценим активность, взаимопомощь и весёлое общение!</p>
      </section>
      <section
        id="news"
        data-aos="fade-up"
        style={{ cursor: "pointer", color: "white" }}
        onClick={() => navigate('/news')}
      >
        <h2>Новости</h2>
        <ul>
          <li>
          Здесь вы можете найти самые свежие новости о нашей семье FANDOM UA!
          </li>
          <button className='more'>Больше новостей</button>
        </ul>
      </section>
      <section id="members" data-aos="fade-up">
        <h2>Старший состав</h2>
        <div className="members-list">
          <div className="member-card">
            <img src="/roma-logo.jpg" alt="User1" />
            <span className='role'>Roma_Yarmak</span>
            <div className="role-highlight">Глава</div>
          </div>
          <div className="member-card">
            <img src="/dima-logo.jpg" alt="User1" />
            <span className='role'>Dmitro_Minov</span>
            <div className="role-highlight">Авторитет</div>
          </div>
          <div className="member-card">
            <img src="/yev-logo.jpg" alt="User1" />
            <span className='role'>Evgeniy_Monein</span>
            <div className="role-highlight">Авторитет</div>
          </div>
          <div className="member-card">
            <img src="/k-logo.jpg" alt="User1" />
            <span className='role'>Violetta_Kalinech</span>
            <div className="role-highlight">Авторитет</div>
          </div>
            <div className="member-card">
            <img src="/sliv-logo.jpg" alt="User1" />
            <span className='role'>Sliva_Bebrov</span>
            <div className="role-highlight">Авторитет</div>
          </div>
          <div className="member-card">
            <img src="/egor-logo.jpg" alt="User1" />
            <span className='role'>Egor_Mercuris</span>
            <div className="role-highlight">Положенец</div>
          </div>
          <div className="member-card">
            <img src="/rk-logo.jpg" alt="User1" />
            <span className='role'>Sasha_Blackwood</span>
            <div className="role-highlight">Положенец</div>
          </div>
          
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
            <h1 className='head'>FANDOM UA</h1>
          </div>
          <nav>
            <Link to="/" onClick={handleNavClick}>Главная</Link>
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