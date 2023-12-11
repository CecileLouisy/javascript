/*Exercice 5: Filtrage des Nombres Pairs
Écrire une fonction qui prend un tableau de nombres en entrée 
et retourne un nouveau tableau contenant uniquement les nombres pairs.*/

const tableau1=[1,35,9,54,78,51,20,0,2,98];


function estPair(tableau) {
    return tableau.filter((value)=>{//On filtre le tableau avec une valeur
        return value%2==0;//on attribue à cette valeur les nombres pairs
    })
   
}
const tableauPair=estPair(tableau1);
console.log(tableauPair);

