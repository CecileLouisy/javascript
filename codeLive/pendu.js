const mot = ["bonjour","petanque","pain","immobilier", "voiture"];
let selection = mot[Math.floor(Math.random()*mot.length)];
let utile = document.getElementById("utile");
let displayMot = [];
let incorrectMot = 0;
const partie = 6;


//on initialise le mot caché
function initialiseMot(){
    for(let i=0;i<selection.length;i++){
        displayMot.push("_");
    }
    document.getElementById("motADeviner").textContent=displayMot.join(" ");
}

//On vérifie la lettre saisie par l'utilisateur
function checkLettre(){
    const lettre = document.getElementById("lettre").value.toLowerCase();
    const message = document.getElementById("message");
    document.getElementById("lettre").value="";
    if(lettre.length !==1 || !lettre.match(/[a-z]/)){//regex!
        message.textContent="Veuillez entrer une lettre valide";
        return false
    }
    if (selection.includes(lettre)){
        for(let i=0;i<selection.length;i++){
            if(selection[i]==lettre){
                displayMot[i]=lettre;
            }
        }
        document.getElementById("motADeviner").textContent=displayMot.join(" ");

        //si ttes les lettres ont été trouvées
        if(!displayMot.includes("_")){
            message.textContent="Félicitations ! Vous avez trouvé !";
        }
    }else{
        //si la lettre n'est pas ds le mot
        incorrectMot++;
        if(incorrectMot>=partie){
            message.textContent="Pendu ! Le mot était : "+selection;
            document.getElementById("lettre").setAttribute("disabled","disabled");
            document.getElementById("bouton").setAttribute("disabled","disabled");
            const relance = document.getElementById("relance");
            relance.style.display="block";
            relance.addEventListener("click", function(){
                //on recharge la page
                alert("Vous allez être sattelisé");
                location.reload();
            });
        }else{
            if(utile.value !=""){
                utile.value+="-"+lettre;
            }else{
                utile.value=lettre;
            }
            message.textContent=`La lettre "${lettre}"n'est pas dans le mot. Il vous reste ${partie-incorrectMot} essai(s)"`
        }
    }
}
initialiseMot();