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
     dadosDoUsuario(usuario.uid, usuario.email);
   } else { //Senao
     location.href="../../cadastroelogin/_login/index.html"; //Vai pra pagina de login
    }
  }

  let cats = document.getElementById('cats');

  let btn = document.getElementById('btn');

  function dadosDoUsuario(userid, userEmail){
    uid = userid;
    let email = userEmail;
    listarCategorias(userid);
  }

  
function listarCategorias(uid){

  DB.ref('/categorias/'+uid+'/qntd/').once("value").then(function(valor){
    let totalDeCategorias = valor.val();
    console.log(totalDeCategorias.qntdCategorias);


    for(let x = 1; x<=totalDeCategorias.qntdCategorias; x++){

      DB.ref('/categorias/'+uid+'/categorias'+x+'/').once("value").then(function(cat){

        let categoria = cat.val();
        let select = document.getElementById('cats');
        let option = document.createElement('option');
        option.value = x;
        option.innerHTML = categoria.nomeDaCategoria;
        select.appendChild(option);
        console.log(categoria.nomeDaCategoria);


      });
    
    } //Fecha o for

  });
}


  btn.addEventListener("click",function(){

    let select = document.getElementById('cats');
    console.log(select.value);
    let id = select.value;

      DB.ref('/categorias/'+uid+'/categorias'+id+'/').once("value").then(function(cat){

        let c = cat.val();

        DB.ref('/produtos/'+uid+'/'+c.nomeDaCategoria+'/qntd/').once("value").then(function(produtos){

          let p = produtos.val();
        console.log(p.qntdProdutos);

        let ul = document.getElementById('prods');

        while (ul.hasChildNodes()) {   
              ul.removeChild(ul.firstChild);
            }
        
        for(let y = 1; y<=p.qntdProdutos; y++){

          DB.ref('/produtos/'+uid+'/'+c.nomeDaCategoria+'/produtos'+y+'/').once("value").then(function(name){


            let nomeDoProduto = name.val();

            let caminho = '/produtos/'+uid+'/'+c.nomeDaCategoria+'/produtos'+y+'/';


            let li = document.createElement('li');
            li.innerHTML = nomeDoProduto.nomeProduto + ' <a href="editarProdutos2.html?caminho='+caminho+'">Editar</a>';
            ul.appendChild(li);
            console.log(nomeDoProduto.nomeProduto);
          });

        }

        });

      });

  });
