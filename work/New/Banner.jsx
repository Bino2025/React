import React, { useState, useEffect } from "react";
import "./style.css";

export default function Banner() {
  const images = [
    "https://www.lavanyathelabel.com/cdn/shop/collections/Sangeet-Banner_2600x.jpg?v=1737002272",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYQZ1IMWSuc5ED2pQaThC0eu5h50P747FAqiq1QrK0CafISp2aJut_jNr0MUv0LQTRws&usqp=CAU",
    "https://i0.wp.com/www.thehlabel.com/wp-content/uploads/2020/04/Floral-Banner.jpg?fit=1583%2C674&ssl=1",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      <img src={images[index]} alt="banner" />
    </div>
  );
}
