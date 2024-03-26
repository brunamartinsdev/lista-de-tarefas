let contador = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador

        let novoItem = `<div onclick="marcarTarefa(${contador})" id="${contador}" class="item">
        
        <div class="itemIcone">
            <span id="icone_${contador}" class="material-symbols-outlined circulo">
                radio_button_unchecked
                </span>
        </div>

        <div class="itemNome">
            ${valorInput}
        </div>

        <div class="itemBotao">
            <button onclick="deletar(${contador})" class="delete"><span class="material-symbols-outlined deletar">
                delete
                </span>Deletar</button>
        </div>
    </div>`;

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();


    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.classList;

    if (classe.contains("clicado")) {
        classe.remove('clicado');
        var icone = document.getElementById('icone_' + id);
        item.classList.remove('check');
        item.classList.add('circulo');
        icone.innerHTML = "radio_button_unchecked";
    } else {
        classe.add('clicado');
        var icone = document.getElementById('icone_' + id);
        item.classList.remove('circulo');
        item.classList.add('check');
        icone.innerHTML = "check_circle";

        item.parentNode.appendChild(item);
    }
}


input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click();
    }
})

