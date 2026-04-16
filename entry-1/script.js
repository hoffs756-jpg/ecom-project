/* PRODUCT CLICK */
const items = document.querySelectorAll('.product-list-item');
const img = document.getElementById('detailImg');

items.forEach(item => {
  item.addEventListener('click', () => {

    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    img.src = item.dataset.img;
  });
});


/* FALLING MAN (BIG SCALE FIXED) */
const fallingMan = document.getElementById('falling-man');

window.addEventListener('scroll', () => {

  const rect = document.querySelector('.page-right').getBoundingClientRect();
  const windowH = window.innerHeight;

  let progress = 1 - (rect.bottom / (rect.height + windowH));
  progress = Math.max(0, Math.min(1, progress));

  const scale = 1 + progress * 5;
  const translateY = progress * 300;

  fallingMan.style.transform =
    `translateY(${translateY}px) scale(${scale})`;

});


/* 🔥 CAROUSEL (FROM YOUR PRODUCTS) */
const carouselTrack = document.getElementById('carouselTrack');

const images = [
  "chewedpen.png",
  "redpencap.png",
  "greenpencap.png",
    "chewedpen.png",
  "redpencap.png",
  "greenpencap.png"
];

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  carouselTrack.appendChild(img);
});

/* AUTO SCROLL */
let scrollX = 0;

function animateCarousel() {
  scrollX += 0.5;
  carouselTrack.style.transform = `translateX(-${scrollX}px)`;

  if (scrollX > carouselTrack.scrollWidth / 2) {
    scrollX = 0;
  }

  requestAnimationFrame(animateCarousel);
}

animateCarousel();