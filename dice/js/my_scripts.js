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
  
  click_counter_dice00 = 0;
  click_counter_dice01 = 0;
  click_counter_dice02 = 0;
  click_counter_dice03 = 0;
  click_counter_dice04 = 0;

  throw_counter = 0;
  document.getElementById("ThrowCount").innerHTML = throw_counter;

}

var sides = 6;
var throw_counter = 0;
var click_counter_dice00 = 0;
var click_counter_dice01 = 0;
var click_counter_dice02 = 0;
var click_counter_dice03 = 0;
var click_counter_dice04 = 0;

var dice_unchosen = "Ivory";
var dice_chosen = "lightblue";

var dice = {
  roll: function () {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
  }
}

function change_background_color(param) {

  if (param == "dice00") {
    if (click_counter_dice00%2 == 0 ) {  
      document.getElementById(param).style.backgroundColor = dice_chosen;
      click_counter_dice00 +=1;
        } else {
          document.getElementById(param).style.backgroundColor = dice_unchosen;
          click_counter_dice00 +=1;
        }
      } else if (param == "dice01"){ 
      if (click_counter_dice01%2 == 0 ) {  
        document.getElementById(param).style.backgroundColor = dice_chosen;
        click_counter_dice01 +=1;
      } else {
        document.getElementById(param).style.backgroundColor = dice_unchosen;
        click_counter_dice01 +=1;
      }
      } else if (param == "dice02") { 
        if (click_counter_dice02%2 == 0 ) {  
          document.getElementById(param).style.backgroundColor = dice_chosen;
          click_counter_dice02 +=1
        } else {
          document.getElementById(param).style.backgroundColor = dice_unchosen;
          click_counter_dice02 +=1
        }
      } else if (param == "dice03"){ 
        if (click_counter_dice03%2 == 0 ) {  
          document.getElementById(param).style.backgroundColor = dice_chosen;
          click_counter_dice03 +=1
        } else {
          document.getElementById(param).style.backgroundColor = dice_unchosen;
          click_counter_dice03 +=1
        }
      } else if (param == "dice04"){ 
        if (click_counter_dice04%2 == 0 ) {  
          document.getElementById(param).style.backgroundColor = dice_chosen;
          click_counter_dice04 +=1
        } else {
          document.getElementById(param).style.backgroundColor = dice_unchosen;
          click_counter_dice04 +=1
        }
      }
  }



function all_dices(d0,d1,d2,d3,d4){

  var diceroll00 = document.getElementById('dice00');
  var diceroll01 = document.getElementById('dice01');
  var diceroll02 = document.getElementById('dice02');
  var diceroll03 = document.getElementById('dice03');
  var diceroll04 = document.getElementById('dice04');
  
  if (click_counter_dice00%2 == 0 ){
    diceroll00.innerHTML = d0;}
  if (click_counter_dice01%2 == 0 ){
    diceroll01.innerHTML = d1;}
  if (click_counter_dice02%2 == 0 ){
    diceroll02.innerHTML = d2;}
  if (click_counter_dice03%2 == 0 ){
    diceroll03.innerHTML = d3;}
  if (click_counter_dice04%2 == 0 ){
    diceroll04.innerHTML = d4;}        

}

var button = document.getElementById('button');

button.onclick = function() {
  
  throw_counter += 1;

  document.getElementById("ThrowCount").innerHTML = throw_counter;
  
  var result00 = dice.roll();
  var result00 = dice.roll();
  var result01 = dice.roll();
  var result02 = dice.roll();
  var result03 = dice.roll();
  var result04 = dice.roll();
  all_dices(result00,result01,result02,result03,result04);

}

var reset_button = document.getElementById('reset_button');

reset_button.onclick = function() {

  throw_counter = 0;
  document.getElementById("ThrowCount").innerHTML = throw_counter;

  click_counter_dice00 = 0;
  click_counter_dice01 = 0;
  click_counter_dice02 = 0;
  click_counter_dice03 = 0;
  click_counter_dice04 = 0;

  const dices = ["dice00","dice01","dice02","dice03","dice04"]

  for (const i of dices){
    document.getElementById(i).style.backgroundColor = dice_unchosen;  
    document.getElementById(i).innerHTML = "&#9733;";  

  }



  // document.getElementById("dice00").style.backgroundColor = dice_unchosen;
  // document.getElementById("dice01").style.backgroundColor = dice_unchosen;
  // document.getElementById("dice02").style.backgroundColor = dice_unchosen;
  // document.getElementById("dice03").style.backgroundColor = dice_unchosen;
  // document.getElementById("dice04").style.backgroundColor = dice_unchosen;

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

