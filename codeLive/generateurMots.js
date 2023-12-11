const alphabet = "abcdefghijklmnopqrstuvwxyz"; //chaine de caractère et chaque caractère a un index

//Fn qui va générer un mot aléatoire
function genererMotAleatoire(longueurMot=8){ //Si j'ai pas de longueur de mot définie, 8 sera la valeur par défaut
    let mot="";
    for (let i=0; i<longueurMot; i++){
        let indexAleatoire = Math.floor(Math.random()*alphabet.length);
        //floor arrondit à l'entier sup une valeur random comprise entre 0 et 1 (en javasript random tjrs entre 0 et 1)
        mot+=alphabet[indexAleatoire];
    }
    return mot;
}
//Exemple d'utilisation
let motAleatoire1=genererMotAleatoire(12);
console.log("Mot aléatoire 1 : ",motAleatoire1);
let motAleatoire2=genererMotAleatoire(7);
console.log("Mot aléatoire 2 : ",motAleatoire2);

let motAleatoire3 = genererMotAleatoire ();//on ne défini pas de longueur donc 8 par défaut
console.log("Mot aléatoire 3 : ",motAleatoire3);

