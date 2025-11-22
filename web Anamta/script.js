// Toggle materi accordion
function toggleMateri(card) {
  document.querySelectorAll('.materi-card').forEach(c => {
    if (c !== card) c.classList.remove('active');
  });
  card.classList.toggle('active');
}

// Fade-in elemen saat scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.materi-card, .tentang-flex-left, .about-flex-right, .header-row-left, .header-row-right');
  const windowBottom = window.innerHeight;
  elements.forEach(elem => {
    const elemTop = elem.getBoundingClientRect().top;
    if (elemTop < windowBottom - 100) {
      elem.style.opacity = 1;
      elem.style.transform = "translateY(0)";
      elem.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
    } else {
      elem.style.opacity = 0;
      elem.style.transform = "translateY(30px)";
    }
  });
}

// Animasi getar tombol
function addButtonShakeAnimation() {
  const buttons = document.querySelectorAll('.report-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => { button.classList.add('shake'); });
    button.addEventListener('animationend', () => { button.classList.remove('shake'); });
  });
}

window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);
addButtonShakeAnimation();
