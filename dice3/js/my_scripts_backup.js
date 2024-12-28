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
var dice_rolls_to_array = 10;
var roll_counter = 0;
var dice_array = [];
var number_of_dices = 1;


var dice = {
  roll: function () {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
  }
}

// for (let i = 0; i<dice_rolls_to_array; i++ ){
//   dice_array.push(dice.roll())  

// }

// declaring buttons
// var roll_button = document.getElementById("roll_button");
// var roll_reset = document.getElementById("roll_reset");
// var dice_roll = document.getElementById("dice_roll");


// declaring onclick-functions associated with buttons

roll_button.onclick = function(){
  
  dice_array = [];
  
  for (let i = 0; i<dice_rolls_to_array; i++ ){
    dice_array.push(dice.roll()) ; 
  }
  console.log(dice_array);

  let dice_roll_string = "";

  for(let i = 0;i<number_of_dices;i++){
    // if (i = number_of_dices - 1){
    //   dice_roll_string = dice_roll_string.concat(dice_array[i])
    // }

    if(i%3 == 0){

      dice_roll_string = dice_roll_string.concat("</br>");

    }


    let front_html_tag = '<div style="\
margin-left: auto; \
margin-right: auto; \
border: 1px solid black; \
border-radius: .3em; \
background-color: ivory;\
height: 1.8em;\
width: 1.8em;\
display:inline-block;\
align-items: center;\
justify-content:center;\
font-size: 2.5em;\
margin: .2em";\
><div  style="">'
    
    
    let end_html_tag = '</div></div>';



    dice_roll_string = dice_roll_string.concat(front_html_tag + dice_array[i] + end_html_tag);
  };

  document.getElementById("dice_roll").innerHTML = dice_roll_string;

  // document.getElementById("dice_roll").innerHTML = dice_array[0];
  roll_counter += 1;
  document.getElementById("roll_counter").innerHTML = roll_counter;
  console.log(roll_counter)
}

roll_reset.onclick = function() {
  roll_counter = 0;
  document.getElementById("roll_counter").innerHTML = roll_counter;
  console.log("roll_counter reset")
}

function dices_number_of(n) {
  number_of_dices = n;
  console.log("Antal terninger: " + n)
  document.getElementById("number_of_dices").innerHTML = n;
  document.getElementById("button_number_of_dices").innerHTML = "Terninger: "+n;

}

function dice_change(n) {

  sides = n
  
  console.log("Dice"+ sides);



  if (sides > 3){
    
    document.getElementById('page_header').innerHTML = "Dice";
    document.getElementById('dice_type').innerHTML = 'D' + sides;
    document.getElementById('btn_dice_type').innerHTML = 'D' + sides;

  } else {
    document.getElementById('page_header').innerHTML = "Plat og krone";
    document.getElementById('dice_type').innerHTML = "&nbsp;";
    document.getElementById('btn_dice_type').innerHTML = "Plat og krone";

  }

  

}






dice_array.push(dice.roll())




console.log(dice_array)




