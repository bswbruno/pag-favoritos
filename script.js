
  // Capturar elementos do DOM
  const campoPesquisa = document.getElementById("pesquisar");
  const botaoPesquisar = document.getElementById("botao-pesquisar");

  // Adicionar evento de clique no botão
  botaoPesquisar.addEventListener("click", () => {
    const termoPesquisa = campoPesquisa.value.toLowerCase();

    // Selecionar todos os itens de filmes e séries
    const filmes = document.querySelectorAll(".grade-filmes .card-film");
    const series = document.querySelectorAll(".grade-series .card-serie");

    // Esconder todos os itens
    filmes.forEach(filme => filme.style.display = "none");
    series.forEach(serie => serie.style.display = "none");

    // Mostrar itens que correspondem à pesquisa
    filmes.forEach(filme => {
      if (filme.textContent.toLowerCase().includes(termoPesquisa)) {
        filme.style.display = "block";
      }
    });

    series.forEach(serie => {
      if (serie.textContent.toLowerCase().includes(termoPesquisa)) {
        serie.style.display = "block";
      }
    });

    // Exibir mensagem se nenhum item for encontrado
    if (![...filmes, ...series].some(item => item.style.display === "block")) {
      alert("Nenhum resultado encontrado!");
    }
  });

