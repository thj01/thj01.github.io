

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


var replacement_char_vocals =[
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

var replacement_char_simple = [
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

var replacement_char_geeky = [
  ["a","&#945;"],
  ["b","&#946;"],
  ["c","c"], //mangler
  ["d","&#948;"],
  ["e","&#949;"],
  ["f","&#402;"],
  ["g","&#947;"],
  ["j","j"],
  ["k","&#954;"],
  ["l","&#955;"],
  ["m","m"],
  ["n","&#951;"],
  ["o","&#959;"],
  ["p","&#961;"],
  ["q","q"], //mangler
  ["r","r"], //Mangler
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
]

var replacement_char_test =[
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


var test = 1;
var chosen_char_list = replacement_char_simple;
var replacement_char_length = chosen_char_list.length;

function change_charlist(charlist){

  if (charlist = "simple") {
    chosen_char_list = replacement_char_simple;
  }
  if (charlist = "geeky") {
    chosen_char_list = replacement_char_geeky;
  }

}


// console.log("Antal Replacement chars: " + replacement_char_length);

function read_text() {

  var input_text = document.getElementById("text_to_convert").value;

  // console.log("Tekst der ændres: " + input_text);

  var replacement_char_count = replacement_char_length;

  while(replacement_char_count != 0){

    var my_char = chosen_char_list[replacement_char_count-1][0];

    var my_char_count = input_text.split(my_char).length-1;

    
    //console.log("Antal " + my_char + "(" + my_char_count + ")" );
    //console.log(chosen_char_list[replacement_char_count-1]);
    

    while(my_char_count != 0){

      // var this_char = chosen_char_list[replacement_char_count-1][1];
      var this_char_array = chosen_char_list[replacement_char_count-1];

      for (let i = 0; i < this_char_array.length-1; i ++){
        // console.log(chosen_char_list[replacement_char_count-1][i+1]);
        
        var possible_chars = chosen_char_list[replacement_char_count-1].length;
        console.log("Array Størrelse: " + chosen_char_list[replacement_char_count-1].length);
        var array_position_chosen = Math.floor(Math.random() * (possible_chars-1)) + 1;
        var this_char = chosen_char_list[replacement_char_count-1][array_position_chosen];
        console.log(this_char)
      }

      input_text = input_text.replace(my_char,this_char);
      my_char_count -= 1;
      
    }

    replacement_char_count -=1;

  }

  document.getElementById("converted_text").innerHTML = input_text;

}


