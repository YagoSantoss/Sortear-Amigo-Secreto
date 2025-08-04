let amigos = [];


function adicionarNome() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

 
  if (nome === "") {
    alert("Insira um nome, por favor.");
    return;
  }

 
  amigos.push(nome);

  
  atualizarLista();

  
  input.value = "";
}


function atualizarLista() {
  let lista = document.getElementById("listaAmigos");

  
  lista.innerHTML = "";

  
  if (amigos.length > 0) {
    
    for (let i = 0; i < amigos.length; i++) {
      const nome = amigos[i];
      lista.innerHTML += `<li>${nome}</li>`;
    }
  } else {
    
    lista.innerHTML = "<li>Nenhum amigo adicionado ainda.</li>";
  }
}


function sortearAmigo() {
  
  if (amigos.length === 0) { 
    alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  
  const nomeSorteado = amigos[indiceAleatorio];

  
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}