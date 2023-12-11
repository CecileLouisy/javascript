//Gestionnaire de Tâches Simple :
//Objectif :
//Créer un gestionnaire de tâches permettant d'ajouter, 
//supprimer et afficher des tâches à l'aide de fonctions et de manipulations de tableaux.

let taches =[]

//fn pour ajouter une tache (une seule à la fois)
function ajouterTache(nouvelleTache){
    taches.push(nouvelleTache);
}

//fn pour supprimer une tâche
function supprimerTache(index){
    taches.splice(index,1);//1 pour un élèment à partir de l'index
}

//fn pour afficher les tâches
function afficherTaches(){
    console.log("Liste des tâches");
    taches.forEach((tache,index)=>{ 
        console.log(`${index+1}.${tache}`);// (` du 7) parcours l'ensemble des tâches et les affiche
    });
}

//exemple d'utilisation
ajouterTache("Faire les courses");
ajouterTache("Aller à la couisine");
afficherTaches();

//on va supprimer la première tâche (index 0 dans le tableau)
supprimerTache(0);
//on affiche la liste des tâches MAJ
afficherTaches();