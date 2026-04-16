/* WAIT until HTML loads (safe placement) */
document.addEventListener('DOMContentLoaded', () => {

  /* PRODUCT CLICK */
  const items = document.querySelectorAll('.product-list-item');
  const img = document.getElementById('detailImg');

  items.forEach(item => {
    item.addEventListener('click', () => {

      /* remove black highlight from all */
      items.forEach(i => i.classList.remove('active'));

      /* add black highlight to clicked */
      item.classList.add('active');

      /* change image */
      img.src = item.dataset.img;

    });
  });


  /* FALLING MAN SCROLL */
  const fallingMan = document.getElementById('falling-man');

  window.addEventListener('scroll', () => {

    const rect = document.querySelector('.page-right').getBoundingClientRect();
    const windowH = window.innerHeight;

    let progress = 1 - (rect.bottom / (rect.height + windowH));
    progress = Math.max(0, Math.min(1, progress));

    const scale = 1 + progress * 5;
    const translateY = progress * 300;
    const rotate = progress * 12;

    fallingMan.style.transform =
      `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`;

  });

});