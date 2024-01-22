

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

  ["a","@","4"],
  ["A","@","4"],
  ["e","€","3"],
  ["E","€","3"],
  ["i","!"],
  ["I","!"],
  ["o","0"],
  ["O","0"],
  ["u","ü","&mu;"],
  ["U","Ü","&Mu;"],
  ["y","ÿ","&upsih;"]
  ["Y","Ÿ","&upsih;"],
  

];


var replacement_char_simple = [
  ["a","@","&alpha;","4"],
  ["A","@","@Alpha;"],
  ["b","ß","&beta"],
  ["B","ß","&Beta"],
  ["e","€","3"],
  ["E","€","3"]
  
];

var replacement_char_normal = [
  ["a","@","&alpha;","4"],
  ["A","@","@Alpha;"],
  ["b","ß","&beta"],
  ["B","ß","&Beta"],
  ["e","€","3"],
  ["E","€","3"]
  
];

var replacement_char = [
  ["a","@","4"],
  ["A","@","4"],
  ["e","€","3"],
  ["E","€","3"],
  ["i","!"],
  ["I","!"],
  ["o","0"],
  ["O","0"],
  ["u","ü","&mu;"],
  ["U","Ü","&Mu;"],
  ["y","ÿ","&upsih;"],
  ["Y","Ÿ","&upsih;"],
  ["s","$"],
  ["S","$"],
  
];

var replacement_char_length = replacement_char.length;

console.log("antal Replacement chars: " + replacement_char_length);


function read_text() {

  var input_text = document.getElementById("text_to_convert").value;

  console.log("Tekst der ændres: " + input_text);

  var replacement_char_count = replacement_char_length;

  while(replacement_char_count != 0){

    var my_char = replacement_char[replacement_char_count-1][0];

    var my_char_count = input_text.split(my_char).length-1;

    console.log("Antal " + my_char + "(" + my_char_count + ")" );

    while(my_char_count != 0){

      input_text = input_text.replace(my_char,replacement_char[replacement_char_count-1][1]);
      my_char_count -= 1;
      
    }

    replacement_char_count -=1;

  }

  document.getElementById("converted_text").innerHTML = input_text;

}




