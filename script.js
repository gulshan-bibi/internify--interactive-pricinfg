// 1. Monthly / Yearly Toggle Logic
const toggle = document.getElementById('billingToggle');
const prices = document.querySelectorAll('.price');

toggle.addEventListener('change', () => {
  prices.forEach(p => {
    if(toggle.checked){
      p.innerHTML = `$${p.dataset.yearly}<span>/yr</span>`;
    } else {
      p.innerHTML = `$${p.dataset.monthly}<span>/mo</span>`;
    }
    // animation
    p.style.transform = "scale(1.1)";
    setTimeout(()=> p.style.transform = "scale(1)", 200);
  });
});

// 2. Category Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if(filter === 'all' || card.dataset.category === filter){
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.4s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
});