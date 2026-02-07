document.querySelectorAll('.glass-card').forEach((el) => {
el.style.opacity = 0;
el.style.transform = 'translateY(40px)';


const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.transition = 'all 0.7s ease';
entry.target.style.opacity = 1;
entry.target.style.transform = 'translateY(0)';
}
});
});


observer.observe(el);
});