function verifCivilite(){
    const valeur = document.getElementById("civilite").value;
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    nom.value = "";
    prenom.value = "";
    document.getElementById("body").style.backgroundColor = "white";
 
    if(valeur=="Non-binaire"){
        document.getElementById("nom").value="Alaphilippe";
        document.getElementById("prenom").value="Jean-Marie";
    } else if (valeur=="Mme"){
        document.getElementById("body").style.backgroundColor="pink";
    } else if (valeur=="M."){
        document.getElementById("body").style.backgroundColor="blue";
    } else {
        return false;//si aucune valeur renseignée
    }
}
function verifEmail(){
    const email = document.getElementById("email");
    //Regex en attente
    //const regex = "^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$";
//^début
//[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*chaine de caractere.chaine de caractere \.possibilité d'avoir un point
//@ obligatoire
//[a-zA-Z0-9]+ nom de domaine
//(?:\.[a-zA-Z0-9]+)* extension du nom de domaine
//$fin
    if(email.value != ""){
        email.className = "valide";
        return true;
    }else{
        email.className = "error";
        return false;
    }
}
function verifPassword(){
    const password1 = document.getElementById("password");
    const password2 = document.getElementById("password2");
    //si les 2mdp ne sont pas vide
    if(password1.value != "" && password2.value != ""){
        //on verifie si les mdp sont identiques
        if(password1.value === password2.value){
            //on vérifie la longueur du mdp
            if(password1.value.length >= 10){
                password1.className="valide";
                return true;
            } else{
                password1.className = "error";// si le mdp n'est pas assez long erreur
            }
        }else{
            password1.className = "error"; // si les deux mdp ne sont pas identiques
        }
    } else {
        password1.className = "error"; //si c'est vide
    }
    return false;
}
function verifAge(){
    const age = document.getElementById("age");
    if(age.value <18){
        age.className = "error";
    } else if(age.value >60){
        age.className = "error";
    } else {
        age.className = "valide";
        return true;
    }
    return false;
}
function validForm(){
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const email = document.getElementById("email");
    const password1 = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const age = document.getElementById("age");
    if(!verifCivilite()){
        document.getElementById("civilite").className="error";
        message.innerHTML = '<span class="error">Veuillez saisir une civilité !!</span>';
    }if(prenom.value==""){
        prenom.className="error";
    }if(nom.value==""){
        nom.className="error";
    }if(!verifEmail()){
        email.className="error";
    }if(!verifPassword()){
        password1.className="error";
        password2.className="error";
    }if(!verifAge()){
        age.className="error";
    }else{
        return true;
    }
    return false;
}
