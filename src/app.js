document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Diamonds FF", img: "1.jpg", price: 30000 },
      { id: 2, name: "Telkomsel Non Internet", img: "2.jpg", price: 6000 },
      { id: 3, name: "Telkomsel Internet", img: "3.jpg", price: 23000 },
      { id: 4, name: "Kopi Hitam Asli", img: "4.jpg", price: 8000 },
      { id: 5, name: "Top Kopi Gula", img: "5.jpg", price: 5000 },
    ],
  }));
});
