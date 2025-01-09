const botao = document.getElementById("adicionartarefa");
const input = document.getElementById("texttarefa");
const lista = document.getElementById("lista");

function adicionartarefa() {
  const tarefaTexto = input.value;

  if (tarefaTexto.trim() !== "") {
    // cria um novo item da lista (<li>)
    const li = document.createElement("li");
    li.textContent = tarefaTexto;

    // adiciona o item a lista <ul>
    lista.appendChild(li);

    input.value = "";
  } else {
    alert("Por favor, escreva uma tarefa!");
  }
}

botao.addEventListener("click", adicionartarefa);

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    adicionartarefa();
  }
});
