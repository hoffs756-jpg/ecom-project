const products = [
  { name: "Blue pen cap 2023", desc: "Original cap." },
  { name: "Blue pen cap alt", desc: "Alternate version." },
  { name: "Blue pen cap 2026", desc: "New version." },
  { name: "Red pen cap", desc: "Bold red." },
  { name: "Green 2021", desc: "Archive." },
  { name: "Green 2022", desc: "Refined." }
];

const items = document.querySelectorAll('.product-list-item');
const detailName = document.getElementById('detailName');
const detailDesc = document.getElementById('detailDesc');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const i = item.dataset.product;
    detailName.textContent = products[i].name;
    detailDesc.textContent = products[i].desc;
  });
});

/* CAROUSEL */
const track = document.getElementById('carouselTrack');

for (let i = 0; i < 8; i++) {
  const div = document.createElement('div');
  div.className = 'carousel-card';
  div.innerHTML = `<p>Item ${i+1}</p>`;
  track.appendChild(div);
}

let index = 0;

document.getElementById('nextBtn').onclick = () => {
  index++;
  track.style.transform = `translateX(-${index * 200}px)`;
};

document.getElementById('prevBtn').onclick = () => {
  index = Math.max(0, index - 1);
  track.style.transform = `translateX(-${index * 200}px)`;
};

/* SCROLL EFFECT */
const fallingMan = document.getElementById('falling-man');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  fallingMan.style.transform = `translateY(${y * 0.2}px) rotate(${y * 0.01}deg)`;
});