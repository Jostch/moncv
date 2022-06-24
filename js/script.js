/*
var score = 100;

if(score == 100){
    alert("Vous avez gagné 100 point !");
}
*/

// var expression = 50;
// switch (expression) {
//     case 50:
//         alert("Vous avez gagé !!");
//         break;

//     default:
//         alert("Veillez verifier votre vos information !");
//         break;
// }

var title = document.getElementById("title");
    title.innerHTML = "Mon nouveaux Titre";

var paras = document.getElementsByClassName("para");
    for (let i = 0; i < paras.length; i++){
        paras[i].innerHTML = "Mon paragraphe";
    }

function calculer() {

    var result = document.createElement('h1');
    var body = document.getElementById("body");

    var x = document.getElementById("x");
    var y = document.getElementById("y");

    var sum = Number(x.value) + Number(y.value);

    //var result = document.getElementById("result");
    result.innerHTML = '<span style="color: yellowgreen;">' + sum + '</span>';

    body.appendChild(result);

    //x.classList.add('error');
    x.style.backgroundColor ="#F00";
    y.classList.add('error');
}
       
    