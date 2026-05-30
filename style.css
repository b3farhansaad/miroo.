/* ===== الأساسيات ===== */
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --gold: #d4af37;
  --gold-light: #f4e4bc;
  --gold-dark: #aa8c2c;
  --cream: #faf0e6;
  --rose-pale: #fff0f5;
  --rose-soft: #ffb6c1;
  --text-dark: #3d3229;
  --text-medium: #6b5b4f;
  --text-light: #8b7355;
  --glass-bg: rgba(255, 250, 245, 0.75);
  --glass-border: rgba(212, 175, 55, 0.3);
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Cormorant Garamond', 'Times New Roman', serif;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--cream);
  perspective: 1200px;
  direction: rtl;
}

/* ===== الخلفية الحقيقية ===== */
.bg-real {
  position: fixed;
  inset: 0;
  z-index: -3;
  overflow: hidden;
}

.bg-real img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(3px) brightness(0.5) saturate(1.3) contrast(1.1);
  transform: scale(1.1);
  animation: bgBreathe 20s ease-in-out infinite alternate;
}

@keyframes bgBreathe {
  from { transform: scale(1.1) translate(0, 0); }
  to { transform: scale(1.2) translate(-20px, -10px); }
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(135deg, rgba(250, 240, 230, 0.3) 0%, rgba(255, 228, 225, 0.2) 50%, rgba(255, 250, 240, 0.3) 100%),
    radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%);
}

.bg-mist {
  position: fixed;
  inset: 0;
  z-index: -2;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 228, 225, 0.4) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(250, 240, 230, 0.4) 0%, transparent 40%);
  animation: mistFloat 15s ease-in-out infinite alternate;
}

@keyframes mistFloat {
  from { opacity: 0.5; transform: translateX(0); }
  to { opacity: 0.8; transform: translateX(30px); }
}

/* ===== الزخارف الثابتة ===== */
.deco {
  position: fixed;
  font-size: 2rem;
  color: var(--gold);
  opacity: 0.6;
  z-index: 1;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
  animation: decoPulse 4s ease-in-out infinite;
}

.deco-tl { top: 30px; left: 30px; animation-delay: 0s; }
.deco-tr { top: 30px; right: 30px; animation-delay: 1s; }
.deco-bl { bottom: 30px; left: 30px; animation-delay: 2s; }
.deco-br { bottom: 30px; right: 30px; animation-delay: 3s; }

@keyframes decoPulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
}

/* ===== البطاقة 3D ===== */
.scene {
  width: min(92%, 750px);
  height: min(90vh, 900px);
  perspective: 1200px;
  z-index: 2;
}

.card-3d {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
  position: relative;
}

.card-glass {
  width: 100%;
  height: 100%;
  padding: 35px;
  border-radius: 30px;
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(1.2);
  -webkit-backdrop-filter: blur(20px) saturate(1.2);
  border: 1px solid var(--glass-border);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.3) inset,
    0 0 100px rgba(212, 175, 55, 0.1) inset;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transform-style: preserve-3d;
}

/* تأثير الضوء الدوار */
.card-glass::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%);
  animation: lightRotate 10s linear infinite;
  pointer-events: none;
}

@keyframes lightRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ===== زخارف الزوايا الذهبية ===== */
.corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid var(--gold);
  opacity: 0.6;
  pointer-events: none;
}

.corner-tl { top: 15px; left: 15px; border-right: none; border-bottom: none; border-radius: 8px 0 0 0; }
.corner-tr { top: 15px; right: 15px; border-left: none; border-bottom: none; border-radius: 0 8px 0 0; }
.corner-bl { bottom: 15px; left: 15px; border-right: none; border-top: none; border-radius: 0 0 0 8px; }
.corner-br { bottom: 15px; right: 15px; border-left: none; border-top: none; border-radius: 0 0 8px 0; }

/* ===== الصورة الشخصية ===== */
.profile-section {
  position: relative;
  width: 170px;
  height: 170px;
  margin-bottom: 5px;
  transform: translateZ(60px);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--gold);
  box-shadow: 
    0 0 30px rgba(212, 175, 55, 0.4),
    0 10px 40px rgba(0, 0, 0, 0.2);
  filter: sepia(8%) contrast(1.05) brightness(1.05);
  position: relative;
  z-index: 2;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.profile-section:hover .profile-img {
  transform: scale(1.05);
  filter: sepia(0%) contrast(1.1) brightness(1.1);
}

.profile-outer-ring {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-top: 2px solid var(--gold);
  border-bottom: 2px solid var(--gold);
  animation: spinSlow 20s linear infinite;
  pointer-events: none;
}

.profile-inner-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px dashed rgba(212, 175, 55, 0.4);
  animation: spinSlow 15s linear infinite reverse;
  pointer-events: none;
}

.profile-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
  animation: glowPulse 3s ease-in-out infinite;
  pointer-events: none;
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

/* ===== العنوان الرئيسي ===== */
.main-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  gap: 12px;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  position: relative;
}

.title-text {
  letter-spacing: 2px;
  position: relative;
}

.title-text::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.title-flower {
  font-size: 2rem;
  color: var(--gold-dark);
  animation: flowerWiggle 3s ease-in-out infinite;
  display: inline-block;
}

@keyframes flowerWiggle {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

.title-decoration {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: -5px;
}

.td-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.td-icon {
  color: var(--gold);
  font-size: 1.2rem;
  animation: iconSpin 8s linear infinite;
}

@keyframes iconSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ===== العنوان الفرعي ===== */
.subtitle-classic {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.15rem;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5px;
}

.sub-dot {
  color: var(--gold);
  font-size: 0.8rem;
}

/* ===== الخط الفاصل الزخرفي ===== */
.divider-classic {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin: 5px 0;
}

.div-line-left, .div-line-right {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-light), transparent);
}

.div-ornament {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gold);
}

.orn-left, .orn-right {
  font-size: 0.9rem;
  opacity: 0.7;
}

.orn-center {
  font-size: 1.1rem;
  animation: ornamentGlow 2s ease-in-out infinite;
}

@keyframes ornamentGlow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

/* ===== النص التعريفي ===== */
.about-classic {
  max-width: 90%;
}

.about-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  line-height: 1.9;
  color: var(--text-medium);
  text-align: center;
  font-weight: 400;
}

/* ===== الإحصائيات الكلاسيكية ===== */
.stats-classic {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 5px;
  flex-wrap: wrap;
}

.stat-box {
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  padding: 15px 20px;
  min-width: 120px;
  text-align: center;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
}

.stat-ornament {
  color: var(--gold);
  font-size: 1rem;
  margin-bottom: 5px;
}

.stat-value {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1;
}

.stat-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem;
  color: var(--text-light);
  margin-top: 5px;
}

.stat-connector {
  width: 30px;
  height: 1px;
  background: linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-light));
  opacity: 0.5;
}

/* ===== الاقتباس الأنيق ===== */
.quote-classic {
  max-width: 85%;
  margin-top: 5px;
}

.quote-frame {
  position: relative;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.15);
  backdrop-filter: blur(5px);
}

.quote-mark {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: var(--gold);
  opacity: 0.4;
  line-height: 1;
  position: absolute;
}

.quote-mark.open { top: -10px; right: 10px; }
.quote-mark.close { bottom: -25px; left: 10px; }

.quote-text {
  font-family: 'Great Vibes', cursive;
  font-size: 1.8rem;
  color: var(--text-dark);
  line-height: 1.6;
  text-align: center;
}

/* ===== الديكور السفلي ===== */
.bottom-garden {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 5px;
  opacity: 0.8;
}

.garden-item {
  font-size: 1.3rem;
  filter: grayscale(0.3);
  transition: transform 0.3s ease;
}

.garden-item:hover {
  transform: scale(1.3) rotate(10deg);
  filter: grayscale(0);
}

.garden-item.rose {
  font-size: 1.5rem;
}

/* ===== بتلات ورد حقيقية ===== */
.petals-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.real-petal {
  position: absolute;
  top: -60px;
  pointer-events: none;
  animation: fallReal linear forwards;
  opacity: 0.8;
}

@keyframes fallReal {
  0% {
    transform: translateY(0) rotate(0deg) translateX(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(110vh) rotate(720deg) translateX(100px) scale(0.5);
    opacity: 0;
  }
}

/* ===== Responsive ===== */
@media (max-width: 600px) {
  .card-glass {
    padding: 25px 20px;
    gap: 10px;
  }
  
  .main-title {
    font-size: 2.4rem;
  }
  
  .profile-section {
    width: 140px;
    height: 140px;
  }
  
  .about-text {
    font-size: 1.1rem;
  }
  
  .quote-text {
    font-size: 1.4rem;
  }
  
  .stats-classic {
    gap: 10px;
  }
  
  .stat-box {
    min-width: 100px;
    padding: 12px 15px;
  }
  
  .stat-connector {
    display: none;
  }
  
  .subtitle-classic {
    font-size: 1rem;
    flex-direction: column;
    gap: 5px;
  }
  
  .sub-dot {
    display: none;
  }
}

@media (max-height: 700px) {
  .card-glass {
    gap: 8px;
    padding: 25px;
  }
  
  .profile-section {
    width: 130px;
    height: 130px;
  }
  
  .main-title {
    font-size: 2.2rem;
  }
}
