import React from 'react';
import './News.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Autopark from './Autopark';
function News() {
  return (
    <main>
      <section data-aos="fade-zoom-in" data-aos-duration="1200">
        <h2>Новости</h2>
        <ul>
          <li>Здесь будут все новости FANDOM UA!</li>
        </ul>
      </section>
    </main>
  );
}

export default News;