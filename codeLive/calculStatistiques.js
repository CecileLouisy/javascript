//Calcul de Statistiques à partir de Données Fournies :
//Objectif :
//Créer un programme qui calcule des statistiques simples à partir d'un ensemble de données 
//(par exemple, trouver la moyenne, la somme et la valeur maximale).

//Je déclare un tableau
let donnees = [12,5,8,18,10,13,69]

//fn pour calculer la somme
function calculerSomme(tableau){
    //identique à reduce
    //let somme=0
    //for(i=0;i<=tableau.length;i++){ (où i est la valeur de l'index du tableau)
        //somme += tableau[i];
    //}
    return tableau.reduce((acc,valeur)=>acc+valeur,0) //0 car il faut 2 arguments pour la fn . acc pour actuel
                                                        //on réduit le tableau à une seule valeur
}//acc   valeur
//12   +     5 = 17  (cumul)
//17   +    8

//fn pr calculer la moyenne
function calculMoyenne(tableau){
    let somme = calculerSomme(tableau);
    return somme/tableau.length;
}

//fn pour trouver le maximum (de vitesse)
function trouverMaximum(tableau){
    return Math.max(...tableau); //(...tableau) les ... définissant le []
}

//Exemple d'utilisation
let somme = calculerSomme(donnees);
console.log("somme des données :",somme);

let moyenne = calculMoyenne(donnees);
console.log("Moyenne des données :",moyenne);

let maximum = trouverMaximum(donnees);
console.log("Valeur maximale des données :",maximum);