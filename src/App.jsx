import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" alt="" className="logo" />
        <h1>FANDOM UA</h1>
        <nav>
          <a href="#about">О семье</a>
          <a href="#news">Новости</a>
          <a href="#members">Состав</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>О семье</h2>
          <p>FANDOM UA — дружная семья игроков на 18 сервере Grand Mobile. Мы ценим активность, взаимопомощь и весёлое общение!</p>
        </section>
        <section id="news">
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