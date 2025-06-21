import React from 'react';
import './App.css';

const cars = [
  {
    name: "Lamborghini Huracan",
    img: "/public/",
    desc: "Игровая ракета нашего автопарка, самая быстрая машина! Идеальная для гонок и дрифта.",
    link: ""
  },
  {
    name: "Mercedes BRABUS G63",
    img: "/public/",
    desc: "Лучший внедорожник в игре, сочетает в себе мощь и роскошь. Подходит для любых условий.",
    link: ""
  },
  {
    name: "Mercedes Maybach",
    img: "/public/",
    desc: "Комфорт и роскошь на высшем уровне. Идеален для тех, кто ценит стиль и престиж.",
    link: ""
  }
];

function Autopark() {
  return (
    <main>
      <section data-aos="fade-up" className="seca">
        <h2>Автопарк</h2>
        <div className="autopark-list">
          {cars.map(car => (
            <div className="car-card" key={car.name}>
             
              <h3>{car.name}</h3>
              <p>{car.desc}</p>
              <a href={car.link} target="_blank" rel="noopener noreferrer" className="car-link">
                
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Autopark;