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

  var auth = firebase.auth();
  var DB   = firebase.database();

  //Elementos do formulario e o botao
  var campoEmail            = document.getElementById('email');
  var erroEmail             = document.getElementById('erroEmail');
  var campoSenha            = document.getElementById('senha');
  var erroSenha             = document.getElementById('erroSenha');
  var campoRSocial          = document.getElementById('nomeEmp');
  var campoCNPJ             = document.getElementById('cnpj');
  var campoRua              = document.getElementById('rua');
  var campoNumero           = document.getElementById('numEndereco');
  var campoBairro           = document.getElementById('bairro');
  var campoCEP              = document.getElementById('cep');
  var campoResponsavel      = document.getElementById('responsa');
  var campoEmailResponsavel = document.getElementById('email_responsa');
  var campoTelefone         = document.getElementById('telefone');

  var btnCadastro = document.getElementById('btnSignUp');

  btnCadastro.addEventListener("click", cadastro); //Ao clicar no botao de cadastro, executa a função cadastro.

  function cadastro(){
    var email = campoEmail.value;
    var senha = campoSenha.value;

    auth.createUserWithEmailAndPassword(
      email, senha
      ).then(
        function(user){
          let uid = user.uid;
          let email = campoEmail.value;
          let senha = campoSenha.value;
          let rSocial = campoRSocial.value;
          let cnpj = campoCNPJ.value;
          let rua = campoRua.value;
          let numero = campoNumero.value;
          let bairro = campoBairro.value;
          let cep = campoCEP.value;
          let responsavel = campoResponsavel.value;
          let telefone = campoTelefone.value;

          DB.ref('/usuarios/' + uid + '/').set({
            uid : uid,
            email : email,
            senha : senha,
            razaoSocial : rSocial,
            cnpj : cnpj,
            rua : rua,
            numero : numero,
            bairro: bairro,
            cep : cep,
            responsavel : responsavel,
            telefone : telefone,
          }).then(
            function(){location.href="cadastrado.html";}
          );
        }
      ).catch(function(erro){   //Erro ao cadastrar o usuario
      var codigoDeErro = erro.code; //Pega o codigo de erro
      var mensagemDeErro = erro.message; //Pega mensagem de erro
      if(codigoDeErro == "auth/email-already-in-use"){ //Se email estiver em uso:
        campoEmail.style.borderColor = "#F00";
        erroEmail.innerHTML = "O Email digitado já está cadastrado.";
        erroEmail.style.display = "block";
        alert("Email já cadastrado!");
        location.href = "#";
        return false; //Retorna falso.
      }
    });;
  }