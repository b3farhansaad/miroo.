// ===== تأثير 3D Tilt مع Parallax =====
const card = document.querySelector('.card-3d');
const scene = document.querySelector('.scene');
const layers = document.querySelectorAll('[data-tilt-layer]');

document.addEventListener('mousemove', (e) => {
  if (window.innerWidth < 768) return;
  
  const rect = scene.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;
  
  const rotateY = (mouseX / (rect.width / 2)) * 8;
  const rotateX = -(mouseY / (rect.height / 2)) * 8;
  
  card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  
  // Parallax for inner layers
  layers.forEach((layer, index) => {
    const depth = (index + 1) * 8;
    const moveX = (mouseX / depth);
    const moveY = (mouseY / depth);
    const baseZ = 60 - index * 10;
    layer.style.transform = `translateZ(${baseZ}px) translateX(${moveX}px) translateY(${moveY}px)`;
  });
});

document.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  layers.forEach(layer => {
    layer.style.transform = '';
  });
});

// ===== بتلات ورد حقيقية =====
const petalColors = [
  'radial-gradient(circle at 30% 30%, #fff0f5, #ffb6c1, #db7093)',
  'radial-gradient(circle at 30% 30%, #fff5ee, #ffc0cb, #ff69b4)',
  'radial-gradient(circle at 30% 30%, #ffffff, #ffe4e1, #f08080)',
  'radial-gradient(circle at 30% 30%, #fffaf0, #ffdab9, #eea2ad)',
  'radial-gradient(circle at 30% 30%, #ffe4e1, #ffb7c5, #c71585)',
  'radial-gradient(circle at 30% 30%, #fff0f5, #db7093, #b03060)'
];

function createRealPetal() {
  const container = document.querySelector('.petals-container');
  const petal = document.createElement('div');
  petal.className = 'real-petal';
  
  const size = 15 + Math.random() * 20;
  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 10;
  const delay = Math.random() * 2;
  const color = petalColors[Math.floor(Math.random() * petalColors.length)];
  const rotation = Math.random() * 360;
  
  petal.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${left}vw;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    transform: rotate(${rotation}deg);
  `;
  
  // شكل البتلة الواقعي
  const inner = document.createElement('div');
  inner.style.cssText = `
    position: absolute;
    inset: 0;
    border-radius: 150% 0 150% 0;
    background: ${color};
    box-shadow: 
      inset -2px -2px 6px rgba(0,0,0,0.1),
      0 2px 8px rgba(0,0,0,0.1);
    opacity: 0.9;
  `;
  
  // عرق البتلة
  const vein = document.createElement('div');
  vein.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 1.5px;
    background: rgba(139, 69, 19, 0.15);
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 2px;
  `;
  
  petal.appendChild(inner);
  petal.appendChild(vein);
  container.appendChild(petal);
  
  setTimeout(() => {
    if (petal.parentNode) petal.remove();
  }, (duration + delay) * 1000);
}

// إنشاء بتلات بشكل دوري
setInterval(createRealPetal, 400);

// انطلاقة أولية
for (let i = 0; i < 15; i++) {
  setTimeout(createRealPetal, i * 200);
}

// ===== جزيئات ذهبية ساحرة =====
function createGoldParticle() {
  const container = document.querySelector('.petals-container');
  const particle = document.createElement('div');
  
  const size = 2 + Math.random() * 3;
  const left = Math.random() * 100;
  const duration = 10 + Math.random() * 15;
  
  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: radial-gradient(circle, #d4af37, transparent);
    border-radius: 50%;
    left: ${left}vw;
    top: -10px;
    opacity: 0.6;
    animation: fallReal ${duration}s linear forwards;
    pointer-events: none;
    box-shadow: 0 0 6px #d4af37;
  `;
  
  container.appendChild(particle);
  setTimeout(() => particle.remove(), duration * 1000);
}

setInterval(createGoldParticle, 2000);
