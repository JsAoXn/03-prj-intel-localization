// This script sets RTL or LTR layout based on the page language
// It uses Bootstrap's RTL support if available

function setDirectionByLang() {

  // Force RTL direction and right alignment for all content
  const html = document.documentElement;
  html.setAttribute('dir', 'rtl');
  document.body.setAttribute('dir', 'rtl');
  document.body.style.textAlign = 'right';
  document.querySelectorAll('body *').forEach(el => {
    el.setAttribute('dir', 'rtl');
    el.style.textAlign = 'right';
  });

  // Timeline RTL logic
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    timeline.classList.add('rtl');
    // Reverse timeline order by reordering DOM elements
    const cards = Array.from(timeline.children).filter(child => child.classList && child.classList.contains('card'));
    for (let i = cards.length - 1; i >= 0; i--) {
      timeline.appendChild(cards[i]);
      cards[i].setAttribute('dir', 'rtl');
      cards[i].style.textAlign = 'right';
    }
    // For horizontal layout, reverse row direction
    if (window.innerWidth >= 900) {
      timeline.classList.add('flex-row-reverse');
      timeline.classList.remove('flex-row');
    }
  }
  // Add Bootstrap RTL class
  html.classList.add('bootstrap-rtl');
  html.classList.remove('bootstrap-ltr');
}

// Run on page load
window.addEventListener('DOMContentLoaded', setDirectionByLang);

// Example: If you have a language switcher, call setDirectionByLang() after changing language
// document.getElementById('lang-switch').addEventListener('change', setDirectionByLang);
