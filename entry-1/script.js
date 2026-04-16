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


/* FALLING MAN */
const fallingMan = document.getElementById('falling-man');
const fallingSection = document.querySelector('.page-falling');

window.addEventListener('scroll', () => {
  const rect = fallingSection.getBoundingClientRect();
  const sectionHeight = fallingSection.offsetHeight;

  // progress 0 → 1 as we scroll through the section
  let progress = -rect.top / (sectionHeight - window.innerHeight);
  progress = Math.max(0, Math.min(1, progress));

  const scale = 1 + progress * 6;

  fallingMan.style.transform = `scale(${scale})`;
  fallingMan.style.transformOrigin = 'bottom center';
});


/* CAROUSEL */
const carouselTrack = document.getElementById('carouselTrack');

const images = [
  "chewedpen.png",
  "redpencap.png",
  "greenpencap.png",
  "chewedpen.png",
  "redpencap.png",
  "greenpencap.png",
  "greenpencap.png",
  "chewedpen.png",
  "redpencap.png",
  "greenpencap.png"
];

// Double for seamless loop
[...images, ...images].forEach(src => {
  const el = document.createElement('img');
  el.src = src;
  carouselTrack.appendChild(el);
});

let scrollX = 0;

function animateCarousel() {
  scrollX += 0.5;
  if (scrollX > carouselTrack.scrollWidth / 2) {
    scrollX = 0;
  }
  carouselTrack.style.transform = `translateX(-${scrollX}px)`;
  requestAnimationFrame(animateCarousel);
}

animateCarousel();