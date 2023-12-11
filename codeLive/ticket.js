document.addEventListener("DOMContentLoaded",function(){
    const card = document.querySelector(".scratch-card");
    const overlay = document.querySelector(".scratch-overlay");
    let isScratching = false;

    //quand on appuie sur le bouton de la souris ça enlève des px et quand on relache ça arrête
    //on veut que la souris soit sur overlay (la partie à gratter)

    //Détection de la touche de la souris
    overlay.addEventListener("mousedown", function(){
        isScratching=true;
    });

    //Relâche de la touche de la souris
    overlay.addEventListener("mouseup", function(){
        isScratching=false;
    });

    //On va détecter le mvt de la souris
    overlay.addEventListener("mousemove", function(e){
        //On vérifie si on peut gratter
        if(isScratching){
            //on va savoir où est en tps réel le curseur de la souris
            const percentScratched = getPercentScratched(e.offsetX,e.offsetY);
            removeOverlay(e.offsetX,e.offsetY);
            //Au bout d'un certain pourcentage gratté révélation du ticket
            if(percentScratched>80){
                afficherLot();
            }
        }
    });
    //fn qui va enlever les px
    function removeOverlay(x,y){
        const radius = 30;//rayon du pointer(px par défaut)
        const diametre = radius*2;
        overlay.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
        overlay.style.webkitClipPath = `circle(${radius}px at ${x}px ${y}px)`;
    }

    //fn qui va retourner la valeur en %
    function getPercentScratched(x,y){
        const totalArea = card.offsetWidth*card.offsetHeight;
        const scratchedArea = x*y;
        return (scratchedArea/totalArea)*100;
    }

    //fn pr afficher le lot
    function afficherLot(){
        alert("Gruiiiiik !");
    }
});