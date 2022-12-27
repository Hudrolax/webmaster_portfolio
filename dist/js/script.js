// menu animation
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close_btn = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');  
});

close_btn.addEventListener('click', () => {
  menu.classList.remove('active');
});

// percent automation
const counters = document.querySelectorAll('.progress_item_header__percent');
const lines = document.querySelectorAll('.progress_item_graph_front');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
