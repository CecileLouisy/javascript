//Exercice 1: Addition des Éléments d'un Tableau
//Objectif :
//Écrire une fonction qui prend un tableau de nombres en entrée et retourne la somme de tous les éléments du tableau.

let donnees = [1,3,50,11,4,1989,8]

function calculerSomme(tableau){
    return tableau.reduce((acc,valeur)=>acc+valeur);
}

let somme = calculerSomme(donnees);
console.log("La somme des élèments est : ",somme);