$(document).ready(function(){
    $("button[name='action1']").click(function(){
        //Je selectionne le p ds la div ayant la classe burgonde
        $(".burgonde p").empty().text("J'apprécie les fruits au sirop !!!");
    });
    $("input[type='color']").on("change", function(){
        let couleur = $(this).val();
        if(couleur=="#000000"){
            $("body").addClass("dark");
        }else{
            $("body").removeClass("dark");
        }
        $("body").css("background-color", couleur);
    });
    $(".faq").click(function(){
        $("p", this).toggle();
    });
    $("button[name='action2']").click(function(){
        let width=$(".rouge").css("width");
        let height=$(".rouge").css("height");
        $(".rouge").animate({
            width: "50%",
            height:"450px",
            opacity:0.5,
        },2500, function(){
            $(".rouge").animate({
                width: width,
                height: height,
                opacity:1,
            },5000);
        });
    });
    $("#slide").click(function(){
        $(".animation").slideToggle(2000);
    });
    $("#fade").click(function(){
        $(".animation").fadeToggle("slow");
    });
    $("#btn-ajax").click(function(){//dès qu'on va cliquer sur le bouton ajax, la requête va s'effectuer
        $("#ajax").load("ajax.html");
    });
});