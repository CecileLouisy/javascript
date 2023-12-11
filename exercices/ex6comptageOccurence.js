/*Exercice 6: Compter les Occurrences d'un Élément
Objectif :
Écrire une fonction qui compte le nombre d'occurrences d'un élément donné dans un tableau.*/

const tableau1=[1,2,3,4,5,5,8,4,8,7,8,3,2,5,8,2,3,6,9,8,2,3,0,2,0,2,5,6,3,5];

let element = prompt("Entrez l'élèment recherché :")

function comptageOccurrence(tableau,element){
        return tableau.filter((value)=>{ //On filtre le tableau pour afficher seulement l'élèment recherché
            return value==element;}).length;//On mesure la longueur du tableau filtré pour déterminer l'occurence de l'élément
}  

console.log(comptageOccurrence(tableau1, element));




