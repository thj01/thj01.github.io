/* function loadDoc(doc) {
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

function rollDice(max) {
  var dice_value = Math.floor(Math.random() * max )+ 1;
  return dice_value
}
 */

/* var sides = 6 */
var dice = {
  /* var sides = 6; */
  roll: function () {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
  }
}



//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('Dice_roll');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};

function new_dice_type(new_sides_var){
  var sides = new_sides_var

}

function test(n){

  

  if (n != 2) {

    document.getElementById('dice_type').innerHTML = n;
    document.getElementById('btn_dice_type').innerHTML = 'D' + n;
    document.getElementById('Dice_roll').innerHTML = '?';

  } else {
    document.getElementById('dice_type').innerHTML = n;
    document.getElementById('btn_dice_type').innerHTML = 'Møntkast';
    document.getElementById('Dice_roll').innerHTML = '?';


  }



  
  
  
  sides = n

}


var sides = 6