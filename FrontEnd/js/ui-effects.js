/* ui-effects.js
   Utilitários visuais: smooth scroll, shake cart, fade-in products,
   highlight categoria e switch visual Varejo/Atacado (B2C/B2B)
*/

// Smooth scroll (funcionalidade já chamada no HTML: scrollToProducts())
window.scrollToProducts = function () {
  const el = document.getElementById('products');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Shake no botão do carrinho (chamar quando item adicionado)
window.shakeCart = function () {
  const cart = document.getElementById('cartBtn');
  if (!cart) return;
  cart.classList.add('shake');
  setTimeout(() => cart.classList.remove('shake'), 650);
};

// Fade-in sequencial para produtos (chamar após renderizar produtos)
window.fadeInProducts = function (selector = '.product-card') {
  const cards = document.querySelectorAll(selector);
  cards.forEach((c, i) => {
    c.classList.remove('fade-in');
    c.style.opacity = 0;
    setTimeout(() => {
      c.classList.add('fade-in');
      c.style.opacity = 1;
    }, i * 90);
  });
};

// Highlight categoria ativa (chamar ao filtrar por categoria)
window.highlightCategory = function (categoryCode) {
  document.querySelectorAll('.nav-list a').forEach(a => {
    if (a.dataset && a.dataset.category === categoryCode) {
      a.classList.add('active-category');
    } else a.classList.remove('active-category');
  });
};

// Pequeno utilitário para renderizar card B2C/B2B (não altera sua lógica de carrinho)
// Recebe objeto produto: { id, nome, imagem, preco, preco_b2b, isB2BPreferred }
window.renderProductCard = function (p) {
  // sanitize / fallback
  const img = p.imagem || './image/placeholder.png';
  const nome = p.nome || 'Produto';
  const preco = (typeof p.preco === 'number') ? p.preco.toFixed(2) : '0.00';
  const preco_b2b = (typeof p.preco_b2b === 'number') ? p.preco_b2b.toFixed(2) : null;

  const badge = preco_b2b ? `<span class="badge-b2b">ATACADO</span>` : '';
  const b2bPriceHtml = preco_b2b ? `<span class="price-b2b">Atacado: R$ ${preco_b2b}</span>` : '';

  return `
    <div class="product-card" data-id="${p.id || ''}">
      ${badge}
      <img src="${img}" alt="${nome}">
      <h3>${nome}</h3>

      <div class="product-meta">
        <div>
          <div class="price">R$ ${preco}</div>
          ${b2bPriceHtml}
        </div>
      </div>

      <button class="add-btn" data-product-id="${p.id || ''}">Adicionar ao Carrinho</button>
    </div>
  `;
};

// Switch visual (Varejo <-> Atacado) — só altera apresentação, NÃO lógica de preços
window.toggleDisplayMode = function (mode = 'retail') {
  // mode: 'retail' ou 'b2b'
  document.querySelectorAll('.product-card').forEach(card => {
    if (mode === 'b2b') card.classList.add('show-b2b');
    else card.classList.remove('show-b2b');
  });
};

// Auto-bind: se você adicionar data-action="shake-cart" em botões, funcionará
document.addEventListener('click', (e) => {
  const target = e.target;
  if (!target) return;
  if (target.matches('[data-action="shake-cart"]') || target.closest('[data-action="shake-cart"]')) {
    window.shakeCart();
  }
});
