import React from 'react';
import './App.css';
const carTranslations = {
  ru: [
    {
      name: "Lamborghini Huracan",
      desc: "Игровая ракета нашего автопарка, самая быстрая машина! Идеальная для гонок и дрифта.",
    },
    {
      name: "Mercedes BRABUS G63",
      desc: "Лучший внедорожник в игре, сочетает в себе мощь и роскошь. Подходит для любых условий.",
    },
    {
      name: "Mercedes Maybach",
      desc: "Комфорт и роскошь на высшем уровне. Идеален для тех, кто ценит стиль и престиж.",
    }
  ],
  uk: [
    {
      name: "Lamborghini Huracan",
      desc: "Ігрова ракета нашого автопарку, найшвидша машина! Ідеальна для перегонів і дрифту.",
    },
    {
      name: "Mercedes BRABUS G63",
      desc: "Найкращий позашляховик у грі, поєднує потужність і розкіш. Підходить для будь-яких умов.",
    },
    {
      name: "Mercedes Maybach",
      desc: "Комфорт і розкіш на найвищому рівні. Ідеальний для тих, хто цінує стиль і престиж.",
    }
  ],
  en: [
    {
      name: "Lamborghini Huracan",
      desc: "The rocket of our garage, the fastest car! Perfect for racing and drifting.",
    },
    {
      name: "Mercedes BRABUS G63",
      desc: "The best SUV in the game, combining power and luxury. Suitable for any conditions.",
    },
    {
      name: "Mercedes Maybach",
      desc: "Top-level comfort and luxury. Ideal for those who value style and prestige.",
    }
  ]
};

const titles = {
  ru: "Автопарк",
  uk: "Автопарк",
  en: "Garage"
};

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

function Autopark({ lang = "ru" }) {
  const cars = carTranslations[lang] || carTranslations["ru"];
  const title = titles[lang] || titles["ru"];

  return (
 <main>
      <section data-aos="fade-up" className="seca">
        <h2>{title}</h2>
        <div className="autopark-list">
          {cars.map(car => (
            <div className="car-card" key={car.name}>
              <h3>{car.name}</h3>
              <p>{car.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default Autopark;