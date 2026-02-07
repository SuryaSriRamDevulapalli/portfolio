document.querySelectorAll('.card').forEach((el) => {
el.style.opacity = 0;


const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.transition = 'all 0.6s ease';
entry.target.style.opacity = 1;
entry.target.style.transform = 'translateY(0px)';
}
});
});


el.style.transform = 'translateY(40px)';
observer.observe(el);
});
