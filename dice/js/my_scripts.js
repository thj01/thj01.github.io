function loadDoc(doc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", doc , true);
  xhttp.send();
}

var sides = 6

var dice = {
  roll: function () {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
  }
}


function change_background_color(this_dice) {
  document.getElementById(this_dice).style.backgroundColor = "lightblue";


}



function all_dices(d0,d1,d2,d3,d4){

  var diceroll00 = document.getElementById('dice00');
  var diceroll01 = document.getElementById('dice01');
  var diceroll02 = document.getElementById('dice02');
  var diceroll03 = document.getElementById('dice03');
  var diceroll04 = document.getElementById('dice04');
  diceroll00.innerHTML = d0;
  diceroll01.innerHTML = d1;
  diceroll02.innerHTML = d2;
  diceroll03.innerHTML = d3;
  diceroll04.innerHTML = d4;


}

var button = document.getElementById('button');

button.onclick = function() {
  // var result = dice.roll();
  // printNumber(result);
  var dice00 = dice.roll();
  var dice01 = dice.roll();
  var dice02 = dice.roll();
  var dice03 = dice.roll();
  var dice04 = dice.roll();
  all_dices(dice00,dice01,dice02,dice03,dice04)

}

function new_dice_type(new_sides_var){
  var sides = new_sides_var;

}

function test(n){

  sides = n;

  if (n != 2) {

    document.getElementById('dice_type').innerHTML = n;
    document.getElementById('btn_dice_type').innerHTML = 'D' + n;
    document.getElementById('Dice_roll').innerHTML = 1;

  } else {
    document.getElementById('dice_type').innerHTML = n;
    document.getElementById('btn_dice_type').innerHTML = 'Møntkast';
    document.getElementById('Dice_roll').innerHTML = 1;

  }

  

}

