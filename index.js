
let linhaCompleta = '' ;
const formContato = document.getElementById('form-contato');
nomes = [];

formContato.addEventListener('submit', function(e){

    e.preventDefault();

    novoContato();
    atualizaLista();
})

function novoContato(){
    const nomeContato = document.getElementById('nome-contato');
    const telContato = document.getElementById('tel-contato');

    if(nomes.includes(nomeContato.value)){
        alert(`O nome do contato ${nomeContato.value} já foi inserido`)
    }

    else{
        nomes.push(nomeContato.value);
        let linha= '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telContato.value}</td>`;
        linha += '</tr>';
        linhaCompleta+= linha;

        nomeContato.value = '' ;
        telContato.value = '' ;
    }

    
}

function atualizaLista(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhaCompleta ;
}