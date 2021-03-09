let selec1 = document.getElementById('selc1');
let selec2 = document.getElementById('selc2');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');

window.addEventListener('load', loadselec2);
selec1.addEventListener('change', loadselec2);
document.getElementById('con_but').addEventListener('click', calc);

let units = ['MM','CM','M','KM'];
let unit = ['MM','CM','yy','M', 'zz','aa','KM'];

function loadselec2(){
    selec2.innerHTML = "";
    for(i=0;i<units.length; i++){
        if(units[i] != selec1.value){
        selec2.innerHTML += "<option value=" +units[i] + "> "+ units[i] +" </option>";
        }
    }
}
function calc(){
    let u1 = selec1.value;
    let u2 = selec2.value;
    let u1i;
    let u2i;
    for(i=0;i<unit.length; i++){
        if(unit[i] == u1){
            u1i = i;
        }
    }
    for(i=0;i<unit.length; i++){
        if(unit[i] == u2){
            u2i = i;
        }
    }
    let difunit = u1i - u2i;
    inp2.value = Math.round(inp1.value * (10 ** difunit)); 
}

