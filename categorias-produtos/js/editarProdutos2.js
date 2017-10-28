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
  let uid, email;

  auth.onAuthStateChanged((usuario)=>{conferirInformacoes(usuario);}); //Verifica se o usuario está logado e manda pra função conferir

  function conferirInformacoes(usuario){
    if(usuario){ //Se tiver usuario logado
     //dadosDoUsuario(usuario.uid, usuario.email);
     uid = usuario.uid;
     local();
   } else { //Senao
     location.href="../../cadastroelogin/_login/index.html"; //Vai pra pagina de login
    }
  }


let caminho = "";

function local(){

  for(let a = 9; a < location.search.length; a++){
    caminho += location.search[a];
  }
  pegarDadosProduto(caminho);
}

function pegarDadosProduto(local){
  DB.ref(local).once("value").then(function(dados){
    
    let d = dados.val();

    let nome = document.getElementById('produtoEditandoNome');
    let ing = document.getElementById('produtoEditandoIng');
    let val = document.getElementById('produtoEditandoVal');
  
    nome.innerHTML = "Você está editando o produto: <b>"+d.nomeProduto+'</b>';
    ing.innerHTML = "Ingredientes: "+d.ingredientes;
    val.innerHTML = "Valor: "+d.valor;
  })
}

let btn = document.getElementById('btn');

btn.addEventListener("click",function(){

  let nvNome = document.getElementById('nomeDoProduto');
  let nvIng = document.getElementById('ingredientes');
  let nvVal = document.getElementById('valor');

   if(nvNome.value == "" && nvIng.value == "" && nvVal.value == ""){
      
      alert("OPS! Você precisa preencher pelo menos 1 campo.");
      return;
   }

  if(nvNome.value == "" && nvIng.value == ""){
      DB.ref(caminho).update({
        valor : nvVal.value
    }).then(function(){
      location.href= location;
    });
  }

  if(nvNome.value == "" && nvVal.value == ""){
    DB.ref(caminho).update({
      ingredientes: nvIng.value
    }).then(function(){
      location.href= location;
    });
  }

  if(nvIng.value == "" && nvVal.value == ""){
    DB.ref(caminho).update({
      nomeProduto : nvNome.value
    }).then(function(){
      location.href= location;
    });
  }

  if(nvNome.value != "" && nvIng.value != "" && nvVal.value != ""){
    DB.ref(caminho).update({
      nomeProduto : nvNome.value,
      ingredientes: nvIng.value,
      valor : nvVal.value
    }).then(function(){
      location.href= location;
    });
  }

  if(nvNome.value != "" && nvIng.value != ""){
    DB.ref(caminho).update({
      nomeProduto : nvNome.value,
      ingredientes: nvIng.value
    }).then(function(){
      location.href= location;
    });
  }

  if(nvNome.value != "" && nvVal.value != ""){
    DB.ref(caminho).update({
      nomeProduto : nvNome.value,
      valor : nvVal.value
    }).then(function(){
      location.href= location;
    });
  }

  if(nvIng.value != "" && nvVal.value != ""){
    DB.ref(caminho).update({
      ingredientes: nvIng.value,
      valor : nvVal.value
    }).then(function(){
      location.href= location;
    });
  }

alert("Cadastrado com sucesso!");

});