var gcorf, gcort, gnome, n, teste;

if (typeof (Storage) != 'undefined') {
    document.write('Tudo ok !');
} else {
    document.write('Sem suporte a Web Storage !');
}

function salvar(){
    gnome = document.getElementById('nome').value;
    teste = document.getElementById('teste').value;
    // localStorage.corf=gcorf;
    // localStorage.cort=gcort;
    localStorage.nome=gnome;
    localStorage.teste=teste;

    let dados = [
        {"teste":teste,"nome":gnome}
    ]

    dados_json=JSON.stringify(dados)
    // console.log(dados_json)
    localStorage.dados=dados_json
    n = localStorage.dados
    var y = n = n
    console.log(y)
    // alert(n);
    // document.querySelector("#btnCapturarDados").addEventListener("click", ()=>{
    //     document.querySelector("#containerDados").innerHTML = JSON.stringify(y, undefined, 4);
    // });
}

function defineCor(op, cor){
    if(op==1) {
        document.body.style.backgroundColor=cor;
        gcorf = cor;
    } else {
        document.body.style.color=cor;
        gcort = cor;
    }

}

function exibir(){
    var dados = localStorage.getItem('dados');
    document.write(dados);
}
