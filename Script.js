// ===== NHẠC NỀN =====
const bgm = document.getElementById("bgm");
document.addEventListener("click", () => {
  bgm.volume = 0.5;
  bgm.play().catch(()=>{});
},{ once:true });

// ===== VẬT RƠI + POPUP =====
const tetItems = ["🎆", "✨", "🎇", "🌟"];

const cards = [
  {
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    text: "Chúc bạn năm mới 2026 phát tài phát lộc!"
  },
  {
    img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
    text: "Xuân an khang – Gia đình hạnh phúc!"
  },
  {
    img: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=600&q=80",
    text: "Tết rộn ràng – Niềm vui ngập tràn!"
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=600&q=80",
    text: "Năm mới nhiều sức khỏe và may mắn!"
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    text: "Mọi điều tốt đẹp sẽ đến trong năm 2026!"
  },
  {
    img: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=600&q=80",
    text: "Khởi đầu mới – Thành công mới!"
  },
  {
    img: "https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=600&q=80",
    text: "Chúc một năm tràn ngập yêu thương 💖"
  }
];

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupText = document.getElementById("popup-text");

function createTetItem() {
  const item = document.createElement("div");
  item.className = "flower";
  item.textContent = tetItems[Math.floor(Math.random() * tetItems.length)];
  item.style.left = Math.random() * window.innerWidth + "px";
  item.style.animationDuration = 8 + Math.random() * 3 + "s";

  item.onclick = () => {
    const c = cards[Math.floor(Math.random() * cards.length)];
    popupImg.src = c.img;
    popupText.innerHTML = c.text;
    popup.style.display = "flex";
  };

  document.body.appendChild(item);
  setTimeout(() => item.remove(), 13000);
}

setInterval(createTetItem, 1000);

popup.onclick = () => popup.style.display = "none";

// ===== PHÁO HOA =====
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

function animate() {
  ctx.fillStyle = "rgba(0,0,20,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.04) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height * 0.6,
      2,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `hsl(${Math.random() * 360},80%,65%)`;
    ctx.fill();
  }

  requestAnimationFrame(animate);
}
animate();
