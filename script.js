var gqtd, gcomp, glarg, gdesc, todoList;

if (typeof (Storage) != 'undefined') {
    document.write('Suporte a Web Storage Existente !');
} else {
    document.write('Sem suporte a Web Storage !');
}

function salvar(){
    gqtd = document.getElementById('qtd').value;
    gcomp = document.getElementById('comp').value;
    glarg = document.getElementById('larg').value;
    gdesc = document.getElementById('desc').value;
    localStorage.qtd=gqtd;
    localStorage.comp=gcomp;
    localStorage.larg=glarg;
    localStorage.desc=gdesc;

    let dados = [
        {"qtd":gqtd, "comp":gcomp, "larg":glarg, "desc":gdesc}
    ]

    let valor = [
        {'qtd':localStorage.qtd, 'comprimento':localStorage.comp, 'largura':localStorage.larg, 'descricao':localStorage.desc}
    ]

    valor_json=JSON.stringify(valor)
    dados_json=JSON.stringify(dados)
    console.log(valor_json)
    console.log('---------------')
    console.log(dados_json)

    // dados_json=JSON.stringify(dados)
    localStorage.dado=dados_json
    localStorage.valor=valor_json
    // console.log(dados_json.qtd)
    
}

function exibir(){
    // var texto = localStorage.dados;
    // var n = JSON.parse(dados_json);
    // ocument.body.innerHTML = `nome: <strong>${objeto.name}</strong> email: <strong>${objeto.email}<strong>`;
    // todoList = JSON.parse(dados_json);
    // document.write(texto);
    var obj = localStorage.dado;
    // alert(obj);
    // console.log(ob)
    // let input_qtd = document.createElement("input");
    // let input_comp = document.createElement("input");
    // let input_larg = document.createElement("input");
    // let input_desc = document.createElement("input");
    // let label_qtd = document.createElement("label")
    
    // input_qtd.value = localStorage.qtd;
    // input_comp.value = localStorage.comp;
    // input_larg.value = localStorage.larg;
    // input_desc.value = localStorage.desc;
    // label_qtd.value = 'Qtd';
  
    // /* Inclui o input no elemento body */
    // document.body.appendChild( input_qtd )
    // document.body.appendChild( input_comp )
    // document.body.appendChild( input_larg )
    // document.body.appendChild( input_desc )
    // document.body.appendChild( label_qtd )

    // var imc = paciente.querySelector(".imc");

    // var himc = localStorage.qtd;

    // imc.textContent = himc;

    // document.getElementById("imprime").innerHTML="";
    // for(var i=0;i<obj.length;i++){
    // document.getElementById("imprime").innerHTML += alunos[i]+"<br>";
    var qtd = document.getElementById('qtd');
    qtd.value=localStorage.qtd;
    var comp = document.getElementById('comp');
    comp.value=localStorage.comp;
    var larg = document.getElementById('larg');
    larg.value=localStorage.larg;
    var desc = document.getElementById('desc');
    desc.value=localStorage.desc;

    // var form = document.getElementById('exi');
    // form.style.display="block";
}

function ocultar(){
    var form = document.getElementById('exi');
    form.style.display="none";
}
