

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

var test = 0;


function beregn() {
	
  var Vo = parseFloat(document.getElementById('optimistisk_tidsforbrug').value);
  var Vs = parseFloat(document.getElementById('sandsynligt_tidsforbrug').value);
  var Vp = parseFloat(document.getElementById('pessimistisk_tidsforbrug').value);
  var Ea = parseFloat(document.getElementById('effektiv_arbejdstid').value);
  
  // til test //

  if (test == 1) {

  Vo = 1;
  Vs = 3;
  Vp = 4;
  Ea = 6;

  }


  var Vm = (Vo + Vs*2.95 + Vp)/4.95;
  var s_2 = Math.pow((Vp-Vo),2)/21.66;
  var s = Math.pow(s_2,1/2);

  console.log(Vm+s)


  var succes68_lav = (Vm-s).toFixed(1);
  var succes68_høj = (Vm+s).toFixed(1);
  var succes95_lav = (Vm-2*s).toFixed(1);
  var succes95_høj = (Vm+2*s).toFixed(1);
  var succes99_lav = (Vm-3*s).toFixed(1);
  var succes99_høj = (Vm+3*s).toFixed(1);

//Input
// document.getElementById('Vo').innerHTML = Vo;
// document.getElementById('Vs').innerHTML = Vs;
// document.getElementById('Vp').innerHTML = Vp
// document.getElementById('Ea').innerHTML = Ea;

//Calculations
document.getElementById('Vm').innerHTML = Vm.toFixed(4);
document.getElementById('s_2').innerHTML = s_2.toFixed(4);
document.getElementById('s').innerHTML = s.toFixed(4);

//Output
document.getElementById('gns_lav').innerHTML = Vm.toFixed(1);
document.getElementById('gns_høj').innerHTML = Vm.toFixed(1);
document.getElementById('succes68_lav').innerHTML = succes68_lav;
document.getElementById('succes68_høj').innerHTML = succes68_høj;
document.getElementById('succes95_lav').innerHTML = succes95_lav;
document.getElementById('succes95_høj').innerHTML = succes95_høj;
document.getElementById('succes99_lav').innerHTML = succes99_lav;
document.getElementById('succes99_høj').innerHTML = succes99_høj;

document.getElementById('gns_lav_dage').innerHTML = (Vm/Ea).toFixed(1);
document.getElementById('gns_høj_dage').innerHTML = (Vm/Ea).toFixed(1);
document.getElementById('succes68_lav_dage').innerHTML = (succes68_lav/Ea).toFixed(1);
document.getElementById('succes68_høj_dage').innerHTML = (succes68_høj/Ea).toFixed(1);
document.getElementById('succes95_lav_dage').innerHTML = (succes95_lav/Ea).toFixed(1);
document.getElementById('succes95_høj_dage').innerHTML = (succes95_høj/Ea).toFixed(1);
document.getElementById('succes99_lav_dage').innerHTML = (succes99_lav/Ea).toFixed(1);
document.getElementById('succes99_høj_dage').innerHTML = (succes99_høj/Ea).toFixed(1);


}

function showDiv() {
 document.getElementById('showoff').style.display = "block";
}


