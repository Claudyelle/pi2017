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
  let uid, erro, categoria, QNTDS;
  let victor = [];

    
    auth.onAuthStateChanged((usuario)=>{conferirInformacoes(usuario);}); //Verifica se o usuario está logado e manda pra função conferir

  function conferirInformacoes(usuario){
    if(usuario){ //Se tiver usuario logado
     uid = usuario.uid; //Salva uid na variavel;
   } else { //Senao
     location.href="http://10.0.2.50/LOGIN/index.html"; //Vai pra pagina de login
    }
  }

  let btnCadastrarCategoria = document.getElementById('btn-cadastrar');
  let campoCategoria = document.getElementById('categoria');

  btnCadastrarCategoria.addEventListener("click",cadastrarCategoria);


function cadastrarCategoria(){

  categoria = campoCategoria.value;

  if(categoria == null || categoria == ""){
    alert("O campo com o nome da categoria deve ser preenchido!!!");
    return false;
  } //Fecha IF


  DB.ref('/categorias/'+uid+'/qntd/').once("value",(dados)=>{

    console.log(dados.val());

    let testar = dados.val();

    if(testar == null){

      DB.ref('/categorias/'+uid+'/qntd/').set({qntdCategorias : 1});

      DB.ref('/categorias/'+uid+'/categorias1/').set({
        nomeDaCategoria : categoria
      });

      alert("Cadastrado com sucesso!");

    } else {
      let controle = 0; //Importante iniciar a variavel controle.
      //Validar se n tem a categoria já cadastrada;

      QNTDS = testar.qntdCategorias;
      for(let x=1; x<=testar.qntdCategorias; x++){
        DB.ref('/categorias/'+uid+'/categorias'+x+'/').once("value",(cadastrado)=>{

          victor.push(cadastrado.val().nomeDaCategoria); //Vai adicionando a um array as categorias.
        
        }).then(()=>{
          controle+=1; //Adiciona mais 1 na variavel controle.
          if(controle == testar.qntdCategorias){
            callback(victor); //Chama o callback só depois que todos as categorias forem jogadas no ARRAY;
          }//Fim do IF
        }); //Fim do THEN
      }//Fim da validação(FOR)
    } //Fim do ELSE

  }); //Fim da listagem de QNTDS
}

  function callback(vet){ //Funcão que cadastra ou não.
    //Depende da condição abaixo:

    let cadast = "sim"; //Cadastrar?? Até aqui SIM;
    for(let a = 0; a < QNTDS; a++){ //Testar todas as categorias cadastradas se tem alguma igual.
      if(victor[a] == categoria){ //se tiver uma categoria igual
        console.log("Não Cadastrar"); //Tirar qnd estiver em PRODUÇAO;
        cadast = "nao"; //Altera o valor da variavel cadast para não.
      } //Fim do IF
    } //Fim do FOR

    if(cadast == "sim"){ //Se o valor da variavel cadst for sim, então n existe uma categoria com o nome
      //que o usuario quer cadastrar. Então OK, bora cadastrar:

      DB.ref('/categorias/'+uid+'/qntd/').once("value",(dados)=>{

    console.log(dados.val());

    let testar = dados.val();

  let novaQuantidade = testar.qntdCategorias;
                novaQuantidade += 1;
                DB.ref('/categorias/'+uid+'/qntd/').set({qntdCategorias : novaQuantidade});

                DB.ref('/categorias/'+uid+'/categorias'+novaQuantidade+'/').set({
                  nomeDaCategoria : categoria
                });


      alert("Cadastrado com sucesso!");
      
    }).then(()=>{location.href="http://10.0.0.50/PRODUTOS/DEVELOPMENT/index.html";});//Apos cadastrar recarrega a página.(Evita erros.)
    } else { //Se o valor de cadast for igual a NÃO, então ha uma categoria com o mesmo nome que o usuario quer cadastrar.
      alert("Você já cadastrou essa categoria!!"); //então exibe um alerta q ele já cadastrou essa categoria.
    }
  } //Fim da funcao callback




function listarCategorias(){

  let divCat = document.querySelector(".categoriasCadastradas");
  divCat.style.display = "block";

  let ul = document.getElementById('categorias'); //Pega uma UL
  let titulo = document.createElement('LI'); //cria um li
  let link = document.createElement('LI'); //cria um li
  let link2 = document.createElement('LI'); //cria um li

  //Enquanto a UL tiver algum <li>, remova.
  //Isso serve pra mostrar só uma vez as categorias, por que se não ia mostrando repetidas vezes
  //Até a pagina ficar imensa.
  while (ul.hasChildNodes()) {   
    ul.removeChild(ul.firstChild);
  }


  DB.ref('/categorias/'+uid+'/qntd/').once("value",(cat)=>{
  cat.val().qntdCategorias;
  for(let x=1; x<=cat.val().qntdCategorias; x++){
  
    DB.ref('/categorias/'+uid+'/categorias'+x+'/').once("value", (dados)=>{
      let li = document.createElement('LI'); //cria um li
      li.innerHTML = dados.val().nomeDaCategoria + ' - <a href="adcProdutos.html?id='+x+'">Cadastrar Produtos</a>';
      ul.appendChild(li); //Coloca a li dentro da ul no documento.
      li.classList.add("listaDeCategorias");
    });

  } //Fim do FOR

  });
}