const dados = [
  {
    "id": 1,
    "titulo": "Leall",
    "descricao": "Rapper brasileiro que vem se destacando na cena nacional.",
    "conteudo": "Leall é um rapper carioca conhecido por suas letras diretas e estilo autêntico. Seu trabalho reflete vivências urbanas e críticas sociais, tornando-o um dos grandes nomes do rap nacional.",
    "categoria": "Artista",
    "autor": "Equipe Mundo da Música",
    "data": "2025-02-15",
    "imagem": "https://picsum.photos/id/117/600/400"
  },
  {
    "id": 2,
    "titulo": "Drake",
    "descricao": "Um dos maiores nomes do hip-hop mundial.",
    "conteudo": "Drake é um rapper, cantor e produtor canadense. Seus álbuns frequentemente lideram as paradas globais, e ele é reconhecido por misturar rap com R&B em sua carreira musical.",
    "categoria": "Artista",
    "autor": "Equipe Mundo da Música",
    "data": "2025-02-20",
    "imagem": "https://picsum.photos/id/1062/600/400"
  },
  {
    "id": 3,
    "titulo": "Short n' Sweet - Sabrina Carpenter",
    "descricao": "Novo álbum de pop.",
    "conteudo": "Lançado em 2024, 'Short n' Sweet' consolidou Sabrina Carpenter como uma das artistas pop mais influentes da atualidade, com músicas que exploram temas de amor e juventude.",
    "categoria": "Álbum",
    "autor": "Equipe Mundo da Música",
    "data": "2025-03-01",
    "imagem": "https://picsum.photos/id/125/600/400"
  }
];

function carregarHome() {
  const container = document.getElementById("lista-itens");
  if (!container) return;

  dados.forEach(item => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
        <div class="card-body text-center">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text">${item.descricao}</p>
          <a href="detalhes.html?id=${item.id}" class="btn btn-dark">Ver mais</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function carregarDetalhes() {
  const container = document.getElementById("detalhes-item");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const item = dados.find(d => d.id === id);

  if (!item) {
    container.innerHTML = "<p class='text-danger'>Item não encontrado.</p>";
    return;
  }

  container.innerHTML = `
    <div class="card">
      <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
      <div class="card-body">
        <h2 class="card-title">${item.titulo}</h2>
        <p class="text-muted">Categoria: ${item.categoria} | ${item.data}</p>
        <p><strong>Por:</strong> ${item.autor}</p>
        <p class="lead">${item.conteudo}</p>
        <a href="index.html" class="btn btn-secondary mt-3">Voltar</a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  carregarHome();
  carregarDetalhes();
});