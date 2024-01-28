

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


var replacement_string_vocals =[
  ["a","@"],
  ["A","@"],
  ["e","€"],
  ["E","€"],
  ["i","!"],
  ["I","!"],
  ["o","0"],
  ["O","0"],
  ["u","ü"],
  ["U","Ü"],
  ["y","ÿ"],
  ["Y","Ÿ"],
  ["s","$"],
  ["S","$"],
];

var replacement_string_simple = [
  ["a","@","4"],
  ["e","€","3"],
  ["i","!","1"],
  ["o","0"],
  ["u","ü"],
  ["y","ÿ"],
  ["æ","@","ae"],
  ["ø","oe"],
  ["å","aa"],
  ["s","$","ß"],
];

var replacement_string_kinky = [
  // ord 
  ["anal","@nal"],
  ["bryst","bry$t"],
  ["bøsse","bø$$e"],
  ["dildo","d!ldo","d!ld0"],
  ["diller","d!ller","d!ll3r","d!ll€r"],
  ["fisse","f!sse","f!ss3","f!ss€"],
  ["fist","f!st","f!$t"],
  ["patter","p@tter","p@tt€r"],
  ["sex","s3x","s€x"],
  ["seksuel","s3ksu3l","s€ksuel"],
  // forkortelser
  ["BDSM","BD$M"],
];


var replacement_string_geeky = [
  ["a","&#945;"],
  ["b","&#946;"],
  ["c","&#596;"], //mangler
  ["d","&#948;"],
  ["e","&#949;"],
  ["f","&#402;"],
  ["g","&#947;"],
  ["j","&#669;"],
  ["k","&#954;"],
  ["l","&#955;"],
  ["m","&#653;"],
  ["n","&#951;"],
  ["o","&#959;"],
  ["p","&#961;"],
  ["q","&#672;"], //mangler
  ["r","&#638;"], //Mangler
  ["s", "&#963;"],
  ["t","&#964;"],
  ["u","&#965;"],
  ["v","&#957;"],
  ["w","&#982;"],
  ["x","&#967;"],
  ["y","&#978;"],
  ["Y","&#933;"],
  ["z","&#950;"],
  ["æ","æ"],
  ["ø","ø"],
  ["å","å"],
  ["A","&#8704;"],
  ["B","&#914;"],
  ["C","&#8450;"], //mangler
  ["D","&#916;"],
  ["E","&#8707;"],
  ["F","&#8457;"], //mangler
  ["G","&#915;"],
  ["H","&#8461;"],
  ["I","&#921;"],
  ["J","&#8465;"],
  ["K","&#922;"],
  ["L","&#923;"],
  ["M","&#10759;"],
  ["N","&#8469;"],
  ["O","&#8486;"],
  ["P","&#8473;"],
  ["Q","&#8474;"], //mangler
  ["R","&#8477;"], //Mangler
  ["S","&#931;"],
  ["T","&#8868;"],
  ["U","&#8899;"], //mangler
  ["V","&#8897;"],
  ["W","&#10760;"],
  ["X","&#8501;"],
  ["Y","&#933;"],
  ["Z","&#8484;"],
  ["Æ","Æ"],
  ["Ø","&#8709;"],
  ["Å","&#8491;"],
];

var replacement_string_test =[
  ["a","@","4"],
  ["A","@","4"],
  ["e","€","3"],
  ["E","€","3"],
  ["i","!","1"],
  ["I","!","1"],
  ["o","0"],
  ["O","0"],
  ["u","ü"],
  ["U","Ü"],
  ["y","ÿ"],
  ["Y","Ÿ"],
  ["æ","@","ae"],
  ["Æ","@","AE"],
  ["ø","oe"],
  ["Ø","OE"],
  ["å","aa"],
  ["Å","aa"],
  ["s","$","ß"],
  ["S","$","ß"],
];


var chosen_string_list = replacement_string_simple;

function change_string_list(charlist){

  // console.log(charlist);

  switch(charlist) {

    case "simple":
      chosen_string_list = replacement_string_simple;
      console.log("Valgt liste: " + chosen_string_list)
      document.getElementById('btn_char_type').innerHTML = 'Simple';
      break;
    case "geeky":
      chosen_string_list = replacement_string_geeky;
      console.log("Valgt liste: " + chosen_string_list)
      document.getElementById('btn_char_type').innerHTML = 'Geeky';
      break ;     
    case "kinky":
      chosen_string_list = replacement_string_kinky;
      console.log("Valgt liste: " + chosen_string_list)
      document.getElementById('btn_char_type').innerHTML = 'Kinky';
      break;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}




var replacement_string_length = chosen_string_list.length;


// console.log("Antal Replacement chars: " + replacement_string_length);

function read_text() {

  var input_text = document.getElementById("text_to_convert").value;

  // console.log("Tekst der ændres: " + input_text);

  var replacement_string_count = replacement_string_length;

  while(replacement_string_count != 0){

    var my_string = chosen_string_list[replacement_string_count-1][0];

    var strings_to_check = [
      my_string,
      capitalizeFirstLetter(my_string)
    ];


    for (let i = 0; i < strings_to_check.length; i++){

      var string_to_check = strings_to_check[i];

      console.log("test: " + string_to_check);

    };

    

    var my_string_count = input_text.split(my_string).length-1;

    
    //console.log("Antal " + my_string + "(" + my_string_count + ")" );
    //console.log(chosen_string_list[replacement_string_count-1]);
    

    while(my_string_count != 0){

      // var this_char = chosen_string_list[replacement_string_count-1][1];
      var this_string_array = chosen_string_list[replacement_string_count-1];

      for (let i = 0; i < this_string_array.length-1; i ++){
        // console.log(chosen_string_list[replacement_string_count-1][i+1]);
        
        var possible_strings = chosen_string_list[replacement_string_count-1].length;
        // console.log("Array Størrelse: " + chosen_string_list[replacement_string_count-1].length);
        var array_position_chosen = Math.floor(Math.random() * (possible_strings-1)) + 1;
        var this_string = chosen_string_list[replacement_string_count-1][array_position_chosen];
        // console.log(this_char)
      }

      input_text = input_text.replace(my_string,this_string);
      my_string_count -= 1;
      
    }

    replacement_string_count -=1;

  }

  document.getElementById("converted_text").innerHTML = input_text;

}

function copy_to_clipboard(){

  var copyText = document.getElementById("converted_text");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  // alert("Copied the text: " + copyText.value);


}


