const toggle = document.createElement('button');
toggle.innerText = '🌙';
toggle.className = 'btn outline';
toggle.style.position = 'fixed';
toggle.style.top = '20px';
toggle.style.right = '20px';


document.body.appendChild(toggle);


toggle.onclick = () => {
document.body.classList.toggle('light');
};