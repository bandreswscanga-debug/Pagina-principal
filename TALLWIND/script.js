// ==========================
// script.js — MotoPower mejorado
// ==========================

// 🌙 Modo oscuro (funcional)
const btnModo = document.getElementById("modoOscuro");

// Mantener modo guardado
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  btnModo.textContent = "☀️";
}

btnModo.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
  btnModo.textContent = isDark ? "☀️" : "🌙";
});

// 📆 Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// ✅ Formulario de contacto
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Gracias por contactarnos. ¡Te responderemos pronto!");
  e.target.reset();
});
