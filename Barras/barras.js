// ── Referencias al DOM ──
const rSlider   = document.getElementById('r-slider');
const gSlider   = document.getElementById('g-slider');
const bSlider   = document.getElementById('b-slider');

const rVal      = document.getElementById('rVal');
const gVal      = document.getElementById('gVal');
const bVal      = document.getElementById('bVal');

const preview    = document.getElementById('preview');
const previewHex = document.getElementById('previewHex');
const bgGlow     = document.getElementById('bgGlow');

const infoHex    = document.getElementById('infoHex');
const infoRgb    = document.getElementById('infoRgb');
const infoBright = document.getElementById('infoBright');

// ── Utilidades ──
function toHex(n) {
  return n.toString(16).padStart(2, '0').toUpperCase();
}

// ── Función principal de actualización ──
function update() {
  const r = parseInt(rSlider.value);
  const g = parseInt(gSlider.value);
  const b = parseInt(bSlider.value);

  // Actualizar etiquetas numéricas
  rVal.textContent = r;
  gVal.textContent = g;
  bVal.textContent = b;

  // Calcular valores del color
  const hex        = '#' + toHex(r) + toHex(g) + toHex(b);
  const rgb        = `rgb(${r}, ${g}, ${b})`;
  const brightness = Math.round(r * 0.299 + g * 0.587 + b * 0.114);

  // Aplicar color a la vista previa y al fondo
  document.documentElement.style.setProperty('--color', rgb);
  preview.style.background = rgb;
  bgGlow.style.background  = `radial-gradient(ellipse 60% 60% at 50% 40%, ${rgb}, transparent 70%)`;

  // Actualizar HEX sobre la preview
  previewHex.textContent  = hex;
  previewHex.style.color  = brightness > 140
    ? 'rgba(0,0,0,0.75)'
    : 'rgba(255,255,255,0.9)';

  // Actualizar tarjetas de info
  infoHex.textContent    = hex;
  infoRgb.textContent    = `${r}, ${g}, ${b}`;
  infoBright.textContent = brightness;

  // Actualizar gradiente de cada slider dinámicamente
  rSlider.style.background = `linear-gradient(to right, #1a0010 0%, rgb(${r},0,0) 100%)`;
  gSlider.style.background = `linear-gradient(to right, #001a08 0%, rgb(0,${g},0) 100%)`;
  bSlider.style.background = `linear-gradient(to right, #000d1a 0%, rgb(0,0,${b}) 100%)`;
}

// ── Event listeners ──
rSlider.addEventListener('input', update);
gSlider.addEventListener('input', update);
bSlider.addEventListener('input', update);

// ── Inicializar ──
update();