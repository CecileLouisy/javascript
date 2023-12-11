//Exercice 11 : Table de multiplication
//Écrire un programme qui affiche la table de multiplication d'un nombre saisi par l'utilisateur (de 1 à 10 par exemple).

let nombre=parseInt(prompt("Veuillez saisir un nombre compris entre 1 et 50 :"));

if (Number.isInteger(nombre)){
    if (nombre>=1&&nombre<=10){
        for(let i=0;i<=10;i++){
            console.log(i*nombre);
        }
    }else{
        alert("Veuillez saisir un nombre entre 1 et 50 !");
    }
}else{
    alert("Veuillez saisir un nombre !");
}