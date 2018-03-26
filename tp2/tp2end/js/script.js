function hamburger_click() {
  var hamburgerElement = document.getElementById("burger");
  var menuElement = document.getElementById("menu");
 
  hamburgerElement.style.display = "none";
  menuElement.style.display = "block";
}

    // Détection du support
    if(typeof sessionStorage!='undefined') {
        localStorage.setItem("prenom", "Léo");
        $prenom = localStorage.getItem("prenom");
        $('.prenom').val('Léo');
        document.getElementById("prenom").innerHTML = localStorage.getItem("prenom");
    } else {
      alert("sessionStorage n'est pas supporté");
     }