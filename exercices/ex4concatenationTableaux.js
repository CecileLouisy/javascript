//Exercice 4: Concaténation de Tableaux
//Objectif :
//Écrire une fonction qui prend deux tableaux en entrée et les concatène 
//pour créer un nouveau tableau combinant les deux.

const tableau1=["Bonjour", "les gens"];
const tableau2=[" nous allons", "réunir", "deux tableaux en un seul"];

//const tableau3=tableau1+tableau2;
const tableau3 = tableau1.concat(tableau2);

console.log(tableau3);