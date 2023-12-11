//Génération d'un nombre aléatoire entre 1 et 100

const random = Math.floor(Math.random()*100)+1; //la const random contient le nombre à deviner,
//comme c'est une constante elle ne bouge pas et garde le nbre en mémoire tout au long du script

//fn pour vérifier le nombre saisi par l'utilisateur
function checkNombre(){
    const nombre =parseInt(document.getElementById("nombre").value);//récupère le champ "id=nombre" ds le html
    const message = document.getElementById("message");//idem avec message, ça afffiche dans le <p id="message">

    if(isNaN(nombre)||nombre<1||nombre>100){
        message.textContent="Veuillez entrer un nombre valide";
        return;
    }
    if(nombre===random){
        message.textContent="Félicitations ! Vous avez trouvé le bon numéro !";
    }
    else if(nombre<random){
        message.textContent="Le nombre est trop petit. Essayez encore !";
    }
    else{
        message.textContent="Le nombre est trop grand. Essayez encore !";
    }
}