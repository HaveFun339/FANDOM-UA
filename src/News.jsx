import React from 'react';
import './News.css';

function News() {
  return (
    <main>
      <section data-aos="fade-zoom-in" data-aos-duration="1200" className="news-section">
        <h2>Новости</h2>
        <ul>
          <li>
            <strong>21.06.2025:</strong> Открылся официальный сайт семьи FANDOM UA! Теперь вы можете следить за всеми новостями и событиями в одном месте.
          </li>
          <li>
            <strong>18.06.2025:</strong> Глава семьи Roma_Yarmak продал семейный дом для покупки нового дома в Бусаево!
          </li>
          <li>
            <strong>16.06.2025:</strong> Мы купили новый семейный дом в Южном! Теперь у нас есть уютное место для встреч и отдыха.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default News;