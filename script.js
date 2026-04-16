/* PRODUCT CLICK */
const items = document.querySelectorAll('.product-list-item');
const img = document.getElementById('detailImg');

items.forEach(item => {
  item.addEventListener('click', () => {

    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    img.src = "chewedpen.png"; // same image always
  });
});


/* 🔥 FALLING MAN SCROLL (BIGGER + SMOOTHER) */
const fallingMan = document.getElementById('falling-man');

window.addEventListener('scroll', () => {

  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scrollY / maxScroll;

  /* MUCH STRONGER SCALE */
  const scale = 1 + progress * 4;   // bigger growth
  const translateY = progress * 400;
  const rotate = progress * 15;

  fallingMan.style.transform =
    `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`;

});