/* ui-effects.js - Efeitos adicionais sem alterar funções existentes */
cartBtn.classList.add("shake");
setTimeout(() => cartBtn.classList.remove("shake"), 600);



// Fade-in nos produtos quando carregam
export function fadeInProducts() {
const cards = document.querySelectorAll(".product-card");
cards.forEach((card, i) => {
setTimeout(() => {
card.classList.add("fade-in");
}, i * 100);
});
}


// Destaque da categoria ativa
export function highlightCategory(category) {
document.querySelectorAll('.nav-list a').forEach(link => {
link.classList.remove('active-category');
if (link.dataset.category === category) {
link.classList.add('active-category');
}
});
}


/* ------------------------------------------------------ */
/* NOVO TEMPLATE DE CARD DE PRODUTO (B2C / B2B) */
/* ------------------------------------------------------ */


export function renderProductCard(prod) {
// prod deve ter: nome, preco, preco_b2b, imagem


return `
<div class="product-card">
<span class="badge-b2b">ATACADO</span>
<img src="${prod.imagem}" alt="${prod.nome}">
<h3>${prod.nome}</h3>


<div class="prices">
<p class="price">Varejo: R$ ${prod.preco.toFixed(2)}</p>
<p class="price-b2b">Atacado: R$ ${prod.preco_b2b.toFixed(2)}</p>
</div>


<button class="add-btn">Adicionar ao Carrinho</button>
</div>
`;
}