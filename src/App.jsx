import React from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
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
    <a href="#about">О семье</a>
    <a href="#news">Новости</a>
    <a href="#members">Состав</a>
    <a href="#contacts">Контакты</a>
  </nav>
</header>
      <main>
        <section id="about" data-aos="fade-up">
          <h2>О семье</h2>
          <p>FANDOM UA — дружная семья игроков на 18 сервере Grand Mobile. Мы ценим активность, взаимопомощь и весёлое общение!</p>
        </section>
        <section id="news" data-aos="fade-up">
          <h2>Новости</h2>
          <ul>
            <li>Сайт ещё делается. Мы стараемся доделать его, как можно скорее!</li>
            
          </ul>
        </section>
        <section id="members">
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
              <img src="/k-logo.jpg"></img>
              <span className='role'>Violetta_Kalinech</span>
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
        <section id="contacts">
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
      <footer>
        <p>© 2025 FANDOM UA</p>
      </footer>
    </div>
  )
}

export default App