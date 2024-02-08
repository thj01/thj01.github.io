

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

function beregn() {
	
  var Vo = parseInt(document.getElementById('optimistisk').value);
  var Vs = parseInt(document.getElementById('sandsynligt').value);
  var Vp = parseInt(document.getElementById('pessimistisk').value);
  var Ea = parseFloat(document.getElementById('effektiv_arbejdstid').value);
  
  var Vm = (Vo + Vs*2.95 + Vp)/4.95;
  var s_2 = Math.pow((Vp-Vo),2)/21.66;
  var s = Math.pow(s_2,1/2);
  
  var succes68_lav = Math.ceil(Vm-s);
var succes68_høj = Math.ceil(Vm+s);
var succes95_lav = Math.ceil(Vm-2*s);
var succes95_høj = Math.ceil(Vm+2*s);

//Input
document.getElementById('Vo').innerHTML = Vo;
document.getElementById('Vs').innerHTML = Vs;
document.getElementById('Vp').innerHTML = Vp;
document.getElementById('Ea').innerHTML = Ea;

//Calculations
document.getElementById('Vm').innerHTML = Vm.toFixed(4);
document.getElementById('s_2').innerHTML = s_2.toFixed(4);
document.getElementById('s').innerHTML = s.toFixed(4);

//Output
document.getElementById('succes68_lav').innerHTML = succes68_lav.toFixed(2);
document.getElementById('succes68_høj').innerHTML = succes68_høj.toFixed(2);
document.getElementById('succes95_lav').innerHTML = succes95_lav.toFixed(2);
document.getElementById('succes95_høj').innerHTML = succes95_høj.toFixed(2);

document.getElementById('succes68_lav_dage').innerHTML = (succes68_lav/Ea).toFixed(2);
document.getElementById('succes68_høj_dage').innerHTML = (succes68_høj/Ea).toFixed(2);
document.getElementById('succes95_lav_dage').innerHTML = (succes95_lav/Ea).toFixed(2);
document.getElementById('succes95_høj_dage').innerHTML = (succes95_høj/Ea).toFixed(2);

}

// function beregn() {
	
//   var Vo = parseInt(document.getElementById('optimistisk_tidsforbrug').value);
//   var Vs = parseInt(document.getElementById('sandsynligt_tidsforbrug').value);
//   var Vp = parseInt(document.getElementById('pessimistisk_tidsforbrug').value);
//   var Ea = parseFloat(document.getElementById('effektiv_arbejdstid').value);
  
//   var Vm = (Vo + Vs*2.95 + Vp)/4.95;
//   var s_2 = Math.pow((Vp-Vo),2)/21.66;
//   var s = Math.pow(s_2,1/2);
  
//   var succes68_lav = Math.ceil(Vm-s);
// var succes68_høj = Math.ceil(Vm+s);
// var succes95_lav = Math.ceil(Vm-2*s);
// var succes95_høj = Math.ceil(Vm+2*s);

// //Input
// document.getElementById('Vo').innerHTML = Vo;
// document.getElementById('Vs').innerHTML = Vs;
// document.getElementById('Vp').innerHTML = Vp;
// document.getElementById('Ea').innerHTML = Ea;

// //Calculations
// document.getElementById('Vm').innerHTML = Vm.toFixed(4);
// document.getElementById('s_2').innerHTML = s_2.toFixed(4);
// document.getElementById('s').innerHTML = s.toFixed(4);

// //Output
// document.getElementById('succes68_lav').innerHTML = succes68_lav.toFixed(2);
// document.getElementById('succes68_høj').innerHTML = succes68_høj.toFixed(2);
// document.getElementById('succes95_lav').innerHTML = succes95_lav.toFixed(2);
// document.getElementById('succes95_høj').innerHTML = succes95_høj.toFixed(2);

// document.getElementById('succes68_lav_dage').innerHTML = (succes68_lav/Ea).toFixed(2);
// document.getElementById('succes68_høj_dage').innerHTML = (succes68_høj/Ea).toFixed(2);
// document.getElementById('succes95_lav_dage').innerHTML = (succes95_lav/Ea).toFixed(2);
// document.getElementById('succes95_høj_dage').innerHTML = (succes95_høj/Ea).toFixed(2);

// }




function showDiv() {
 document.getElementById('showoff').style.display = "block";
}


