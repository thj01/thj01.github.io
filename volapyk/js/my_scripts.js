

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

var replacement_string_simple = [
  ["a","@","4"],
  ["e","€","3"],
  ["i","!","1"],
  ["o","0"],
  ["u","ü"],
  ["y","ÿ"],
  ["æ","@"],
  // ["ø","oe"],
  // ["å","aa"],
  ["s","$","ß"],
];

var replacement_string_kinky = [
  // ord 
  ["anal","@nal"],
  ["BDSM","BD$M"],
  ["bis","b!s"],
  ["bryst","bry$t"],
  ["butt","b0tt"],
  ["bøsse","bø$$e"],
  ["dildo","d!ldo","d!ld0"],
  ["diller","d!ller","d!ll3r","d!ll€r"],
  ["fisse","f!sse","f!ss3","f!ss€"],
  ["fist","f!st","f!$t","fi$t"],
  ["fræk","fr@k"],
  ["fuck","f@ck"],
  ["homo","h0m0"],
  ["hore","h0r3","h0r€"],
  ["kink","k!nk"],
  ["klit","kl!t"],
  ["knep","kn3p","kn€p"],
  ["kusse","ku$$e"],
  ["lebbe","l3ppe","l€ppe"],
  ["lem","l3m","l€m"],
  ["lesbisk","l3sbisk","l3sb!sk"],
  ["lider","l!der","l!d3r"],
  ["lort","l0rt"],
  ["luder","lüder"],
  ["nøgen","n0gen"],
  ["orgasm","0rgasm","org@sm"],
  ["onan","0nan","on@n","0n@n"],
  ["patter","p@tter","p@tt€r"],
  ["penis","p3nis","p€nis","p3n!s","p€n!s","pen!s"],
  ["pik","p!k"],
  ["porno","p0rno","p0rn0"],
  ["prosti","pr0sti","pr0st!"],
  ["røv","r0v"],
  ["sex","s3x","s€x"],
  ["seksuel","s3ksu3l","s€ksu€l"],
  ["seksual","s3ksu@l","s€ksual","s€ksu@l"],
  ["sexuel","s3xu3l","s€xuel"],
  ["strip","str!p"],
  ["smæk","sm@k"],
  ["sæd","s@d"],
  ["sperm","$perm","sp3rm","sp€rm"],
  ["strapon","str@pon","str@p0n"],
  ["udløsning","udl0sning","udl0sn!ng"],
  ["voldtæ","v0ldtæ","v0ldt@"],
  ["voldta","v0ldta","v0ldt@"]
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

var chosen_string_list = replacement_string_simple;
var replacement_string_length = chosen_string_list.length;
var list_with_uppercase = false;
var strings_to_check = [];

var visibility_counter = 4;


function change_string_list(charlist){

  switch(charlist) {

    case "simple":
      chosen_string_list = replacement_string_simple;
      replacement_string_length = chosen_string_list.length;
      list_with_uppercase = false;
      // console.log("Valgt liste: " + chosen_string_list)
      document.getElementById('btn_char_type').innerHTML = 'Simple';
      // document.getElementById('volapyk-edition').innerHTML = 'Simple edition';
      document.getElementById('button').innerHTML = 'Volapyk';
      document.getElementById('copy_text_button').innerHTML = 'Kopier volapykken';
      document.getElementById('header_1').innerHTML = 'Volapyk';
      break;
    case "geeky":
      chosen_string_list = replacement_string_geeky;
      replacement_string_length = chosen_string_list.length;
      list_with_uppercase = true;
      // console.log("Valgt liste: " + chosen_string_list)
      document.getElementById('btn_char_type').innerHTML = 'Geeky';
      document.getElementById('volapyk-edition').innerHTML = 'Γεεκϒ ∃δiτiοη';
      document.getElementById('button').innerHTML = '⋁ολαρϒκ';
      document.getElementById('copy_text_button').innerHTML = 'Κορiεɾ νολαρϒκκεη';
      document.getElementById('header_1').innerHTML = '⋁ολαρϒκ';
      break ;     
    case "kinky":
      chosen_string_list = replacement_string_kinky;
      replacement_string_length = chosen_string_list.length;
      list_with_uppercase = false;
      // console.log("Valgt liste: " + chosen_string_list)
      document.getElementById('btn_char_type').innerHTML = 'Kinky';
      let edition_text = "<span style='color:#c41c22;font-weight:900;font-style: oblique;'>KINKY EDITION</span>"; 
      document.getElementById('volapyk-edition').innerHTML = edition_text;
      document.getElementById('button').innerHTML = 'Volapyk';
      document.getElementById('copy_text_button').innerHTML = 'Kopier volapykken';
      document.getElementById('header_1').innerHTML = 'Volapyk';
      break;
  }
}

function copy_to_clipboard(){

  var copyText = document.getElementById("converted_text");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  // alert("Copied the text: " + copyText.value);

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var visibility_counter = 5;
// console.log(visibility_counter);

function show_hidden_feature(target_id){

  // console.log(visibility_counter);

  switch (visibility_counter -1) {

    case 0:
      document.getElementById(target_id).style.visibility = "visible";
      alert("du har åbnet for Kinky Edition");
      break;
    case -4:
      alert("Der er ikke flere hemmeligheder");
      break;
    case -9:
      alert("42");
      break;
    case -12:
      alert("En ekspert er en person, som har begået alle de fejl, som det er muligt at begå inden for et begrænset område.\n\nNiels Bohr");
      break;
    case -15:
      alert("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\n\nAlbert Einstein");
      break;
    }

    visibility_counter -= 1;
  
};

// console.log("Antal Replacement chars: " + replacement_string_length);

function read_text() {

  var input_text = document.getElementById("text_to_convert").value;

  // console.log("Tekst der ændres: " + input_text);

  var replacement_string_count = replacement_string_length;

  while(replacement_string_count != 0){

    var string_from_array = chosen_string_list[replacement_string_count-1][0];

    switch (list_with_uppercase){

      case true:
        strings_to_check = [
          string_from_array,
        ];
        // console.log("list has uppercase");
        break;
      case false:
        strings_to_check = [
          string_from_array,
          capitalizeFirstLetter(string_from_array)
        ];
        // console.log("list has only lowercase");
        break;
    }

    // console.log(strings_to_check);

    for (let i = 0; i < strings_to_check.length; i++){

      my_string = strings_to_check[i];

      // console.log("test: " + string_to_check);

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

    };

    replacement_string_count -=1;

  };

  document.getElementById("converted_text").innerHTML = input_text;

};




