//Exercice 1 : Table de multiplication
//Écrire un programme qui affiche la table de multiplication d'un nombre saisi par l'utilisateur (de 1 à 10 par exemple).

// On demande le nombre à l'utilisateur
let nombre = parseInt(prompt("Quel nombre voulez-vous multiplier? (entre 1 et 50)"));

//Condition pour vérifier si c'est bien un nombre
if(Number.isInteger(nombre)){ //La méthode Number.isInteger() permet de déterminer si l'argument est un nombre entier.
    if(nombre >= 1 && nombre <= 50){
        //Je sélectionne mon document dans le DOM
        let table = document.getElementById("table");
        for(let i=0; i<=10; i++){
            console.log(i*nombre);
            //console.log(i*nombre):
            //Je vais afficher dans le dom l'opération et le résultat
            table.innerHTML+="<tr><td>" +nombre+"*"+i+"</td><td>"+nombre*i+"</td></tr>";
        }
    } else {
        alert("Veuillez entrer un nombre entre 1 et 50");
    }    
    } else {
        alert("Veuillez entrer un nombre !")
    }

    //Affichage des tables de multiplication de 0 à 10
    for(let l=0;l<=10;l++) {
        console.log("Table de multiplication pour" +l);
        //On fait les multiplications
        for (let j=0;j<=10;j++) {
            console.log(l+"*"+j+"="+l*j);
        }
    }
