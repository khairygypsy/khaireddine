const images = [
  "hero.jpg","hero1.jpg","hero2.jpg","hero3.jpg",
  "A.jpg","B.jpg","C.jpg"
];

document.querySelectorAll(".flash-cell").forEach(cell => {
  const img = cell.querySelector("img");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
  }, 3000);
});
