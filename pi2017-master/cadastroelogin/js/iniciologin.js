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

var btnLogout = document.getElementById("logout");

btnLogout.addEventListener("click",function(){
var user = firebase.auth().currentUser;
  if(user){
    firebase.auth().signOut();
  }
 });

   //Confere se o usuario j� est� logado, se estiver, manda pra tela inicial.
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log("Usuario logado");
    } else {
      console.log("Usuario n�o est� logado");
      location.href = "../_login/index.html";
   }
  });