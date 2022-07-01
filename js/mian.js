// Créons un objet en javascripts en ligne d'instruction

/*
var nomObjet = new Object();
objet.propriete1 = valeur1;
objet.propriete2 = valeur2;
objet.methode1 = function name(parametre1,parametre2) {
    instruction1;
    instruction2;
    etc;
};

// Créons un objet en javascritp en bloc

var nomObjet = {
    propriete1 : valeur1,
    propriete2 : valeur2,

    methode1 : function(parametre1,parametre2,etc) {
        instruction1;
        instruction2;
        etc;
    }
};

*/

/*
var voiture = {
    coleur : "Verte",
    nombrePorte : 4,
    nombreRou : 5,
    boiteVitesse : "Manuelle",
    typeMoteur : "Essence",
    
    demarer : function() {
        document.write("La voiture démare");
    },
    
    eclairage : function() {
        document.write("La voiture eclaire la route pendant qu'il fait noir !");
    }
}
*/

//Creons un modele objet 
/*
var namModelObjet = function() {

    //Attributs ou proprietés
    this.propriete1 = valeur1;
    this.propriete2 = valeur2;

    //Methodes
    this.methode1 = function() {
        instruction1;
        instruction2;
        etc;
    }
}
*/


var modelVoiture = function(name, speed, color, price) {
    this.name = name;
    this.speed = speed;
    this.color = color;
    this.price = price;

    this.avancer = function(x) {
        var i = 0;
        while (i < x) {
            document.write("la voiture " + this.name + " avance vouummm ! <br/>");
            i++;
        }
        
    }

}



