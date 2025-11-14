import React from "react";
import "./style.css";

export default function CardsSection() {
  const cards = [
    { id: 1, title: "Summer Dress", img: "https://www.apetogentleman.com/wp-content/uploads/2019/08/summeroutfitsweb9.jpg", price: "$49" },
    { id: 2, title: "Men’s Jacket", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsbrJYRDavSLAuhg0m3s1x6bPM8ELLH_L6Q&s", price: "$89" },
    { id: 3, title: "Kids Wear", img: "https://www.foreverkidz.in/cdn/shop/files/Dusty_Flower_Girl_Dress-5015830.jpg?v=1746015019", price: "$39" },
    { id: 4, title: "Shoes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMGThhPfjLRGwmE3_jo9VQ-CxM04MIV7GtQ&s", price: "$59" },
    { id: 5, title: "Accessories", img: "https://source.unsplash.com/400x400/?accessories", price: "$19" },
  ];

  return (
    <section className="cards-section">
      <h2>Our Latest Collection</h2>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p className="price">{card.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
