$(document).ready(function() {

    var minutes = 25;
    var secondes = 0;
    var pause = 0;
    var interval = 0;

    //Affichage par défaut
    $("#minutes").html(minutes + ":");
    $("#secondes").html("0" + secondes);


    $("#lancer").click(function() {

        //Décompte
        var interval = setInterval(function() {
            secondes -= 1;
            if (secondes < 0) {
                minutes--;
                secondes = 59;
            }
            if (minutes < 0) {
                minutes = 0;
                secondes = 0;
                interval = 0;
                alert("Décompte terminé !");
            }

            $("#secondes").html(secondes);
            $("#minutes").html(minutes + ":");
        }, 1000);


        //Bouton pour mettre en pause le timer
        $("#pause").click(function() {
            clearInterval(interval);
            secondes;
            $("#secondes").html(secondes);
        });

    });
    //Bouton pour la pause
    $("#courtePause").click(function() {
        setInterval;
        minutes = 5;

        $("#secondes").html(secondes);
        $("#minutes").html(minutes + ":");
    });

    //Bouton pour reset le timer
    $("#reset").click(function() {
        clearInterval(interval);
        secondes = 0;
        minutes = 25;

        $("#secondes").html("0" + secondes);
        $("#minutes").html(minutes + ":");

    });

});