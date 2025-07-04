import React from 'react';
import './News.css';

function News({ lang }) {
  const translations = {
    ru: {
      news: "Новости",
      newsList: [
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
      ]
    },
    uk: {
      news: "Новини",
      newsList: [
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
      ]
    },
    en: {
      news: "News",
      newsList: [
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
    }
  };

  const t = translations[lang] || translations['ru'];

  return (
    <main>
      <section data-aos="fade-zoom-in" data-aos-duration="1200" className="news-section">
        <h2>{t.news}</h2>
        <ul>
          {t.newsList.map((item, i) => (
            <li key={i}>
              <strong>{item.date}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default News;