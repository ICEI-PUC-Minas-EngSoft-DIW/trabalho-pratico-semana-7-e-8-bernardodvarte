# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Bernardo Duarte Medeiros de Paula
- Matricula: 901857
- Proposta de projeto escolhida: Pessoas e Produções (Artistas e Álbuns)
- Breve descrição sobre seu projeto: Este site terá como objetivo apresentar ao visitante tudo sobre o mundo da música, mostrando, por exemplo, os artistas mais ouvidos do momento, álbuns com destaque e tudo que envolva o ambiente musical.

## Print da Home-Page

![Home](img/Home.png)

## Print da página de detalhes do item

![Detalhes](img/Detalhes.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

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