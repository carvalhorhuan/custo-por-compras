var items = [];

document.querySelector('input[type=submit]').addEventListener('click', () => {
  var nomeProduto = document.querySelector('input[name=nome_produto]').value;
  var precoProduto = document.querySelector('input[name=valor_do_produto]').value;

  items.push({
    nome: nomeProduto,
    valor: precoProduto
  });

  let listaProdutos = document.querySelector('.lista-produtos');
  let soma = 0;
  listaProdutos.innerHTML = "";

  items.map(function(val) {
    soma += parseFloat(val.valor);
    listaProdutos.innerHTML += '<div class="lista-produto-single"><h3>' + val.nome + '</h3><span class="price-produto">R$' + val.valor + '</span></div>';
  });

  soma = soma.toFixed(2);
  // Aqui você estava tentando acessar a propriedade "value" de uma string
  nomeProduto.value = "";
  precoProduto.value = "";

  let elementoSoma = document.querySelector('.soma-produto h1');
  elementoSoma.innerHTML = 'Total R$'+soma;


});

document.querySelector('button[name=limpar]')
.addEventListener('click', ()=>{
  item = []

  document.querySelector('.lista-produtos').innerHTML = "";
  document.querySelector('.soma-produto h1').innerHTML = "Total R$0";

})