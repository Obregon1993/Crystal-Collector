let random;
let wins = 0;
let loses = 0;
let red;
let blue;
let yellow;
let green;
var score = 0;



random = Math.floor((Math.random() * 102) + 19);
red = Math.floor((Math.random() * 12) + 1);
blue = Math.floor((Math.random() * 12) + 1);
yellow = Math.floor((Math.random() * 12) + 1);
green = Math.floor((Math.random() * 12) + 1);
$("#number").text(random);

if (score < random) {
   
    $("#red").on("click", function () {
        score += red;
        $("#score").text(score);
        return score
    });
    $("#yellow").on("click", function () {
        score += yellow;
        $("#score").text(score);
    });
    $("#blue").on("click", function () {
        score += blue;
        $("#score").text(score);
    });
    $("#green").on("click", function () {
        score += green;
        $("#score").text(score);
    });

}
// } else if (score == random) {
//     alert("you won!!");
//     wins++;
//     $("#wins").text(wins);
//     random = Math.floor((Math.random() * 102) + 19);
//     red = Math.floor((Math.random() * 12) + 1);
//     blue = Math.floor((Math.random() * 12) + 1);
//     yellow = Math.floor((Math.random() * 12) + 1);
//     green = Math.floor((Math.random() * 12) + 1);
//     score = 0;
//     $("#score").text(score);

// } else {
// alert("You lost!!");
// loses++;
// $("#loses").text(loses);
// random = Math.floor((Math.random() * 102) + 19);
//     red = Math.floor((Math.random() * 12) + 1);
//     blue = Math.floor((Math.random() * 12) + 1);
//     yellow = Math.floor((Math.random() * 12) + 1);
//     green = Math.floor((Math.random() * 12) + 1);
//     score = 0;
//     $("#score").text(score);
// }