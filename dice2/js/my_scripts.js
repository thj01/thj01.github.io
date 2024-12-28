// menu page opener

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

// declaring variables

var sides = 6;
var max_dices_show = 12;
var dice_rolls_to_array = 15;
// var number_of_dices = 1; 
var roll_counter = 0; 
var dice_roll_array = []; // Array for rolls
var chosen_dices = []; // array for chosen dices

var dice_unchosen = "Ivory";
var dice_chosen = "lightblue";



var all_dices = [];

// Danner variabler

for (let i = 0; i<dice_rolls_to_array; i++ ){
  all_dices.push("dice_"+i)
};

// Skjuler de terninger der ikke skal være med på startsiden

for (let i = 0; i<dice_rolls_to_array; i++ ){
  if (i > 0){ document.getElementById(
    all_dices[i]).style.display = "none";
  };
};

console.log(all_dices)

var dice = {
  roll: function () {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
  }
}


function roll_all_dices(param){

  dice_roll_array = [];

  for (let i = 0; i<dice_rolls_to_array; i++ ){
    switch(param) {
      case "normal_roll":
        dice_roll_array.push(dice.roll()) ; 
        break;
      case "first_roll":
        console.log(all_dices[i]);
        dice_roll_array.push("X") ; 
        break;
      }
    }
  // ikke medtaget ovenfor, for at undgå at hvert slag tæller variablen "dice_rolls_to_array"
  
  if (param == "normal_roll"){ roll_counter += 1; }

  console.log(dice_roll_array);
 
  for (let i = 0; i<dice_rolls_to_array; i++ ){
    let dice_roll_string = '<span style="font-size: 3em">' + dice_roll_array[i] + '</span>';
    if((chosen_dices.includes(all_dices[i]) == false)){
      document.getElementById(all_dices[i]).innerHTML = dice_roll_string;
    }
  }

  document.getElementById("roll_counter").innerHTML = roll_counter;
  console.log(roll_counter)

}

function change_dice_color(dice) {

  if (chosen_dices.includes(dice) == false){
    chosen_dices.push(dice) ; 
    document.getElementById(dice).style.backgroundColor = dice_chosen;

  } else {
    let index = chosen_dices.indexOf(dice);
    chosen_dices.splice(index,1);
    document.getElementById(dice).style.backgroundColor = dice_unchosen;
    console.log(index);
  }
  console.log(chosen_dices);
}

roll_reset.onclick = reset_dice_counter;

function reset_dice_counter() {
  roll_counter = 0;
  document.getElementById("roll_counter").innerHTML = roll_counter;
  console.log("roll_counter reset")
  reset_chosen_dices();
  roll_all_dices("first_roll");
}

function reset_chosen_dices(){
  chosen_dices = [];
  for (let i = 0; i<dice_rolls_to_array; i++ ){
    document.getElementById(all_dices[i]).style.backgroundColor = dice_unchosen;
  };
}

function dices_number_of(n) {
  number_of_dices = n;
  console.log("Antal terninger: " + n)
  document.getElementById("button_number_of_dices").innerHTML = "Terninger: "+n;
  roll_counter = 1;

  reset_dice_counter();
  reset_chosen_dices();

  for (let i = 0; i<dice_rolls_to_array; i++ ){
    document.getElementById(all_dices[i]).style.display = "none";
  }

  for (let i = 0; i<dice_rolls_to_array; i++ ){
    if ( i < n && i < max_dices_show){
      document.getElementById(all_dices[i]).style.display = "inline-block";
    }
  }

  roll_all_dices("first_roll");

}

function dice_change(n) {

  sides = n
  console.log("Dice"+ sides);

  if (sides > 3){
    // document.getElementById('page_header').innerHTML = "Dice";
    document.getElementById('dice_type').innerHTML = 'D' + sides;
    document.getElementById('btn_dice_type').innerHTML = 'D' + sides;
  } else {
    // document.getElementById('page_header').innerHTML = "Plat og krone";
    document.getElementById('dice_type').innerHTML = "Plat og krone";
    document.getElementById('btn_dice_type').innerHTML = "Plat og krone";
  }

  reset_dice_counter();
  roll_all_dices("first_roll");
}