//Exercice 2: Recherche d'Éléments dans un Tableau
//Objectif :
//Écrire une fonction qui recherche un élément donné dans un tableau 
//et renvoie "Trouvé" si l'élément est présent, sinon renvoie "Non trouvé".

const prenoms = ["riri","fifi","loulou","bob", "brutus"];


function rechercheElement(tableau, element){
    
        for (let i=0;i<=tableau.length;i++){
        if (tableau[i]==element){return alert("Trouvé");}
        
    }alert("non trouvé"); return false;
}

let element=prompt("Entrez l'élèment recherché :");


rechercheElement(prenoms, element);

