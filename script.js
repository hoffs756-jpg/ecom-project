/* PRODUCT CLICK */
const items = document.querySelectorAll('.product-list-item');
const img = document.getElementById('detailImg');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    img.src = "chewedpen.png"; // always same image
  });
});

/* SCROLL EFFECT */
const fallingMan = document.getElementById('falling-man');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scrollY / maxScroll;

  const scale = 1 + progress * 2.5;
  const translateY = progress * 300;
  const rotate = progress * 12;

  fallingMan.style.transform =
    `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
});