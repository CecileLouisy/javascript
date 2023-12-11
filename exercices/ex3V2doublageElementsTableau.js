//Exercice 3: Doublage des Éléments d'un Tableau
//Objectif :
//Écrire une fonction qui prend un tableau de nombres en entrée 
//et retourne un nouveau tableau où chaque élément est doublé.


const donnees = [3,5,7,35,70,1,9,2000];

/*
function doublageElements(tableau){
    let tableauDouble=[];
    for(let i=0; i<tableau.length; i++){
        tableauDouble.push(tableau[i]*2);
    }
    return tableauDouble;
}

let donneesDoubles = doublageElements(donnees);

console.log(donneesDoubles);*/

const donneesDoubles=donnees.map((i)=>i*2);

console.log(donneesDoubles);
