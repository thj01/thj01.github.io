

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

var test = 0; // Set værdi til 0 for normal anvendelse og 1 for test.

var show_data_selector = true;


function beregn() {

  var Vo = parseFloat(document.getElementById('optimistisk_tidsforbrug').value);
  var Vs = parseFloat(document.getElementById('sandsynligt_tidsforbrug').value);
  var Vp = parseFloat(document.getElementById('pessimistisk_tidsforbrug').value);
  var Ea = parseFloat(document.getElementById('effektiv_arbejdstid').value);

  if (test == 1){
    Vo = 5;
    Vs = 6;
    Vp = 7;
    Ea = 4;
    };
  
  var Vm = (Vo + Vs*2.95 + Vp)/4.95;
  var s_2 = Math.pow((Vp-Vo),2)/21.66;
  var s = Math.pow(s_2,1/2);
  var kontrol = s/Vm;

  
  console.log("Vm: "+Vm );
  console.log("s²: " + s_2);
  console.log("s: " + s);
  console.log("Kontrol-tal: " + kontrol);
  

  document.getElementById("kontrol").innerHTML = kontrol.toFixed(4);
  document.getElementById("kontrol_evaluate").innerHTML = kontrol.toFixed(2);

  // https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

  var change_kontrol_box_color = document.getElementById("kontrol_box_color");

  var vurderingsfaktor = 20;
  
  var kontrol_jumps = [
    0.0, // Neder
    1/vurderingsfaktor,
    2/vurderingsfaktor,
    3/vurderingsfaktor
  ]

  if (kontrol >= kontrol_jumps[0]) {
    change_kontrol_box_color.className = "bg-success";
    change_kontrol_box_color.classList += " text-white";
  }
  if (kontrol > kontrol_jumps[1]) {
    change_kontrol_box_color.className = "bg-info";
    change_kontrol_box_color.classList += " text-dark";
  }
  if (kontrol > kontrol_jumps[2]) {
    change_kontrol_box_color.className = "bg-warning";
    change_kontrol_box_color.classList += " text-dark";
  }
  if (kontrol > kontrol_jumps[3]) {
    change_kontrol_box_color.className = "bg-danger";
  }


  var succes68_lav = (Vm-s).toFixed(1);
  var succes68_høj = (Vm+s).toFixed(1);
  var succes95_lav = (Vm-2*s).toFixed(1);
  var succes95_høj = (Vm+2*s).toFixed(1);
  var succes99_lav = (Vm-3*s).toFixed(1);
  var succes99_høj = (Vm+3*s).toFixed(1);

//Input
document.getElementById('Vo').innerHTML = Vo;
document.getElementById('Vs').innerHTML = Vs;
document.getElementById('Vp').innerHTML = Vp
document.getElementById('Ea').innerHTML = Ea;

//Calculations
document.getElementById('Vm').innerHTML = Vm.toFixed(4);
document.getElementById('s_2').innerHTML = s_2.toFixed(4);
document.getElementById('s').innerHTML = s.toFixed(4);

//Output
// document.getElementById('gns_lav').innerHTML = Vm.toFixed(1);
// document.getElementById('gns_høj').innerHTML = Vm.toFixed(1);
// document.getElementById('gns_timer').innerHTML = Vm.toFixed(1);
document.getElementById('Vm_top').innerHTML = Vm.toFixed(1);
document.getElementById('gns_dage').innerHTML = (Vm/Ea).toFixed(1);
// document.getElementById('Vm_68').innerHTML = Vm.toFixed(1);
document.getElementById('s_68').innerHTML = 1*parseFloat(s).toFixed(2);
// document.getElementById('Vm_95').innerHTML = Vm.toFixed(1);
document.getElementById('s_95').innerHTML = 2*parseFloat(s).toFixed(2);
// document.getElementById('Vm_99').innerHTML = Vm.toFixed(1);
document.getElementById('s_99').innerHTML = 3*parseFloat(s).toFixed(2);


// document.getElementById('Vm_99').innerHTML = Vm.toFixed(1);
document.getElementById('succes68_lav').innerHTML = succes68_lav;
document.getElementById('succes68_høj').innerHTML = succes68_høj;
document.getElementById('succes95_lav').innerHTML = succes95_lav;
document.getElementById('succes95_høj').innerHTML = succes95_høj;
document.getElementById('succes99_lav').innerHTML = succes99_lav;
document.getElementById('succes99_høj').innerHTML = succes99_høj;
// document.getElementById('succes68_lav_graphics').innerHTML = succes68_lav + " timer";
// document.getElementById('succes68_høj_graphics').innerHTML = succes68_høj + " timer";
// document.getElementById('succes95_lav_graphics').innerHTML = succes95_lav;
// document.getElementById('succes95_høj_graphics').innerHTML = succes95_høj;
// document.getElementById('succes99_lav_graphics').innerHTML = succes99_lav;
// document.getElementById('succes99_høj_graphics').innerHTML = succes99_høj;

// document.getElementById('gns_lav_dage').innerHTML = (Vm/Ea).toFixed(1);
// document.getElementById('gns_høj_dage').innerHTML = (Vm/Ea).toFixed(1);
// document.getElementById('gns_dage').innerHTML = (Vm/Ea).toFixed(1);
document.getElementById('succes68_lav_dage').innerHTML = (succes68_lav/Ea).toFixed(1);
document.getElementById('succes68_høj_dage').innerHTML = (succes68_høj/Ea).toFixed(1);
document.getElementById('succes95_lav_dage').innerHTML = (succes95_lav/Ea).toFixed(1);
document.getElementById('succes95_høj_dage').innerHTML = (succes95_høj/Ea).toFixed(1);
document.getElementById('succes99_lav_dage').innerHTML = (succes99_lav/Ea).toFixed(1);
document.getElementById('succes99_høj_dage').innerHTML = (succes99_høj/Ea).toFixed(1);


}

function showDiv() {
 document.getElementById('result').style.display = "block";
 document.getElementById('grunddata').style.display = "none";
};

function show_grunddata() {
  document.getElementById('grunddata').style.display = "block";

  if (show_data_selector == true) {

    document.getElementById("data_button_text").innerHTML = "Skjul Grunddata";
    show_data_selector = false;

  } else {

    document.getElementById("data_button_text").innerHTML = "Vis Grunddata";
    document.getElementById('grunddata').style.display = "none";
    show_data_selector = true;


  }



 };
 

// new Chart("myChart", {
//   type: "line",
//   data: {
//     // labels: xValues,
//     datasets: [{ 
//       label: "graph",
//       data: [
//         {x:0,y:0},
//         {x:5,y:1},
//         {x:10,y:4},
//         {x:15,y:10},
//         {x:20,y:16},
//         {x:25,y:21},
//         {x:30,y:24},
//         {x:35,y:25},
//         {x:40,y:24},
//         {x:45,y:22},
//         {x:50,y:19},
//         {x:55,y:15},
//         {x:60,y:11},
//         {x:65,y:8},
//         {x:70,y:5.8},
//         {x:75,y:4.2},
//         {x:80,y:3},        
//         {x:85,y:1.8},
//         {x:90,y:1},
//         {x:95,y:.65},
//         {x:100,y:.5},
//       ],
//       borderColor: "black",
//       borderWidth: 1,
//       fill: false

//     }, 
//      { 
//       label: "Vo",
//       data: [
//         {x:5,y:-2},
//         {x:5,y:3},
//       ],
//       borderColor: "limegreen",
//       borderWidth:5,
//       fill: false,

//     }, { 
//       label: "Vs",
//       data: [
//         {x:35,y:-2},
//         {x:35,y:28},
//       ],
//       borderColor: "DodgerBlue ",
//       borderWidth: 5,
//       fill: false,

//     }, { 
//       label: "Vm",
//       data: [
//         {x:45,y:-2},
//         {x:45,y:25},
//       ],
//       borderColor: "Gold ",
//       borderWidth: 5,
//       fill: false,

//     },  { 
//       label: "Vp",
//       data: [
//         {x:92,y:-2},
//         {x:92,y:3},
//       ],
//       borderColor: "red",
//       borderWidth: 5,
//       fill: false,

//     }]

//   },
  

//   options: {
//     // legend: {display: false},
//     elements: {
//       point:{radius: 0}
//     },
//     scales: {
//       xAxes: [{
//           type: 'linear',
//           position: 'bottom',
//           display: true,
//           ticks: {
//             display:false,
//           },
//           // gridLines: {
//           //   display:false,
//           // },
//       }],
//       yAxes: [{
//         type: "linear",
//         position: "left",
//         display: true,
//         ticks: {
//           display:false,
//         },
//         // gridLines: {
//         //   display:false,
//         // },
//       }],
//       // y: {
//       //   suggestedMin: 50,
//       //   suggestedMax: 100
//       // },
//     // datalabels: {display: false,}
//     }
//   }

// });

