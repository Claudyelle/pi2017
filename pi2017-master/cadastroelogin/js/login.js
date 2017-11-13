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

var btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener("click", function(){
	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;

	var erroEmail = document.getElementById('erroEmail');
	var erroSenha = document.getElementById('erroSenha');

	if(email == ""){
		var campoEmail = document.getElementById('email');

		campoEmail.style.borderColor = "#F00";
		campoEmail.style.borderWidth = "3px";
		erroEmail.innerHTML = "O Email deve ser preenchido.";
		erroEmail.style.display = "inline";
		return false;
	}

	if(senha == ""){
		var campoSenha = document.getElementById('senha');

		campoSenha.style.borderColor = "#F00";
		campoSenha.style.borderWidth = "3px";
		erroSenha.innerHTML = "A senha deve ser preenchida.";
		erroSenha.style.display = "inline";
		return false;
	}

	if(senha.length < 6){
		erroSenha.innerHTML = "A senha deve ter no mínimo 6 carácteres.";
		erroSenha.style.display = "inline";
		return false;
	}

firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(erro){
		 var errorCode = erro.code;
 		 var errorMessage = erro.message;
 		 console.log(errorCode);
 		 console.log(errorMessage);
 		 erroSenha.innerHTML = "Email ou Senha inválido(s).";
		 erroSenha.style.display = "inline";
		 return false;
	});
});

firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
   	 console.log("Logado");
   	 var user = firebase.auth().currentUser;
   	 	location.href="../_inicio/index.html";
	  } else {
  	  console.log("Nenhum usuario logado");
 	 }
	});

window.onscroll = function rolagem(){
	console.log(window.pageYOffset);

	var menu = document.querySelector('.navbar-brand');
	
	if(window.pageYOffset >= 20){
		menu.style.fontSize = "12px";
	} else {
		menu.style.fontSize = "18px";
	}
}