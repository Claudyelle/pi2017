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
  var DB   = firebase.storage();

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
    email = campoEmail.value;
    senha = campoSenha.value;

    auth.createUserWithEmailAndPassword(email, senha).then(function(user){ //Cadastrar usuario

      //Cadastrar o restante dos dados do usuario no BANCO DE DADOS:

      auth.onAuthStateChanged(function(user) { //Usar esse observador pra esperar o usuario logar corretamente
        if (user) {
          // SE o usuario tiver logado, então executar esse bloco de codigo:
          var usuario = { //Cria o objeto usuario com suas informaçoes.
            nome : user.displayName,
            email : user.email,
            emailVerificado : user.emailVerified,
            photoURL : user.photoURL,
            anonimo : user.isAnonymous,
            uid : user.uid,
            provedor : user.providerData
          }
          var infos = {
            rSocial : campoRSocial.value,
            cnpj : campoCNPJ.value,
            rua : campoRua.value,
            numero : campoNumero.value,
            bairro : campoBairro.value,
            cep : campoCEP.value,
            responsavel : campoResponsavel.value,
            emailResponsavel : campoEmailResponsavel.value,
            tel : campoTelefone.value
          }

          //Aqui vai o resto das informações pro BD:
            function salvarNoBD(uid, nome, email, photoURL, RSocial, cnpj, rua, numero, bairro, cep, responsavel, emailResponsavel, tel) {
              firebase.database().ref('usuarios/' + uid).set({
                username: nome,
                email: email,
                imagemPerfil : photoURL,
                RSocial : RSocial,
                cnpj : cnpj,
                rua : rua,
                numero : numero,
                bairro : bairro,
                cep : cep,
                responsavel : responsavel,
                emailResponsavel : emailResponsavel,
                tel : tel
              });
            }

            salvarNoBD(usuario.uid, usuario.nome, usuario.email, usuario.photoURL, infos.rSocial, infos.cnpj, infos.rua, infos.numero, infos.bairro, infos.cep, infos.responsavel, infos.emailResponsavel, infos.tel);

            setTimeout(redirect,2500);
        } else {
          console.log("Ocorreu um erro. Nao ha nenhum usuario logado.");
        }
      });

    }).catch(function(erro){   //Erro ao cadastrar o usuario
      var codigoDeErro = erro.code; //Pega o codigo de erro
      var mensagemDeErro = erro.message; //Pega mensagem de erro
      if(codigoDeErro == "auth/email-already-in-use"){ //Se o email já estiver cadastrado..
        campoEmail.style.borderColor = "#F00"; //Borda vermelha no campo email
        erroEmail.innerHTML = "O Email digitado já está cadastrado."; //Aparece a mensagem de email ja cadastrado.
        erroEmail.style.display = "block"; //Mostra o erro
        alert("Email já cadastrado!");
        location.href = "#";
        return false; //Retorna falso.
      }
    });
  };

function redirect(){
  location.href="cadastrado.html";
}