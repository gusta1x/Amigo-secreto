let amigos = []; 

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
        alert ('Informe o nome do amigo!');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert ('Nome ja adicionado')
        return;
    }
    let lista = document.getElementById('lista-amigos');

    if (amigo.value.trim() === '') {
        alert('Digite um nome válido!');
        return;
    }

    amigos.push(amigo.value);
    atualizarLista();
    amigo.value = ''; 
}

function atualizarLista() {
    lista = document.getElementById('lista-amigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach((amigo, index) => {
        let item = document.createElement('span');
        item.textContent = amigo;
        item.style.cursor = 'pointer';
        item.style.marginRight = '10px';
        item.onclick = () => remover(index);
        lista.appendChild(item);
    });
}

function remover(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para sortear!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // Limpa antes de exibir novo sorteio

    for (let i = 0; i < amigos.length; i++) {
        let proximo = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];
        sorteio.innerHTML += `${amigos[i]} --> ${proximo}<br>`;
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-sorteio').textContent = '';
    atualizarLista();
}