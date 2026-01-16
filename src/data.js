// src/data.js
export const evData = [
  {
    name: "Tata Nexon EV",
    range: 312,
    price: "14,99,000",
    image: "/images/nexon.jpg",
    description: "A compact SUV with great performance and range."
  },
  {
    name: "MG ZS EV",
    range: 419,
    price: "21,99,000",
    image: "/images/mgzs.jpg",
    description: "Spacious electric SUV with modern features and long range."
  },
  {
    name: "Hyundai Kona Electric",
    range: 452,
    price: "23,75,000",
    image: "/images/kona.jpg",
    description: "Premium electric crossover with exceptional efficiency."
  }
];

// ✅ ADD THIS FUNCTION
export const recommendCar = (minRange) => {
  return evData.find(ev => ev.range >= minRange);
};
