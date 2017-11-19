  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA64sYTkE9BNfScQOOIBS2h5wkjYJO6BCM",
    authDomain: "comandavirtual-e6526.firebaseapp.com",
    databaseURL: "https://comandavirtual-e6526.firebaseio.com",
    projectId: "comandavirtual-e6526",
    storageBucket: "comandavirtual-e6526.appspot.com",
    messagingSenderId: "1045938130389"
  };
  firebase.initializeApp(config);

  let auth = firebase.auth();
  let DB   = firebase.database();
  let uid, r;

    
    auth.onAuthStateChanged((usuario)=>{conferirInformacoes(usuario);}); //Verifica se o usuario está logado e manda pra função conferir

  function conferirInformacoes(usuario){
    if(usuario){ //Se tiver usuario logado
     uid = usuario.uid; //Salva uid na variavel;
     validarID(uid);
   } else { //Senao
     location.href="../cadastroelogin/_login/index.html"; //Vai pra pagina de login
    }
  }


function validarID(uid){

    //Pega a quantidade de categorias cadastradas.
    DB.ref('/categorias/'+uid+'/qntd/').once("value",function(dados){
      qntd = dados.val();

    let url = location.search;
    id = /[0-9]+/.exec(url);

    if(id == null){
      alert("ID Inválido!");
      return;
    } else {
        if(id < 1 || id > qntd.qntdCategorias){
          alert("ID inválido!");
          return;
        }else{
          if(typeof(id.index) == "number"){
          //id = id.index;
          id = parseInt(id);
          validacao(uid, qntd.qntdCategorias, id);
        } else {
          alert("ID inválido!");
          return;
        }
      }
    }
  });
}

function validacao(uid, numCat, identity){

    if(numCat == null){
    console.log("Nenhuma categoria cadastrada!");
    console.log("Cadastre pelo menos uma:");
    alert("Pause");
    location.href= '<a href="http://10.0.0.50/PRODUTOS/DEVELOPMENT/index.html">Cadastrar Categorias</a>';
  } else{
    console.log("Categorias cadastradas: " + numCat);
    let btnCadastrar = document.getElementById('botaoCadastrar');

    btnCadastrar.addEventListener("click",function(){cadastrarProduto(uid,identity)});
  }

}


function cadastrarProduto(uid, iden){
let num = 0;
var cat;
  let nomeDoProduto = document.getElementById('nomeDoProduto').value;
  let ingredientes = document.getElementById('ingredientes').value;
  let valor = document.getElementById('valor').value;
  DB.ref('/categorias/'+uid+'/categorias'+iden+'/').once("value",(nomeCat)=>{

    cat = nomeCat.val().nomeDaCategoria;


    console.log("Antes de entrar: "+uid+' '+cat+';');
  }).then(()=>{
    DB.ref('/produtos/'+uid+'/'+cat+'/qntd/').once("value",(ret)=>{

      let r = ret.val();
      console.log("Dentro: "+uid+' - '+cat);
  console.log(r);
  console.log("CAT ANTES dO IF: " + cat);

  if(r === null){
    num = 1;
    DB.ref('/produtos/'+uid+'/'+cat+'/qntd/').set({
      qntdProdutos : num
    });

    DB.ref('/produtos/'+uid+'/'+cat+'/produtos'+num+'/').set({
      nomeProduto : nomeDoProduto,
      ingredientes : ingredientes,
      valor : valor
    });

  } else {
    num = r.qntdProdutos;
    num+=1;

    DB.ref('/produtos/'+uid+'/'+cat+'/qntd/').set({
      qntdProdutos : num
    });

    DB.ref('/produtos/'+uid+'/'+cat+'/produtos'+num+'/').set({
      nomeProduto : nomeDoProduto,
      ingredientes : ingredientes,
      valor : valor
    });
  }
  alert("Produto cadastrado");
  location.href = "index.html";
});

  });
 
}

function al(x){
  console.log(x);
  console.log(uid+' '+cat)
}