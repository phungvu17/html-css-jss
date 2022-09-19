var f= false;
var v=0;
var a=0;
function quaycanhquat() {
    if (f == true) {
        var canhquat = document.getElementById("abc");
        canhquat.style.transform = 'rotate(' + v + 'deg)';
        v += a;
    }
}
setInterval(quaycanhquat,10);
function off(){
    f=false;
    v=0;
    a=0;
}
function f1(){
    if (f == false){
        f=true;
    }
    v=0;
    a=1;

}
function f2(){
    if (f == false){
        f=true;
    }
    v=0;
    a=3;
}
function f3(){
    if (f == false){
        f=true;
    }
    v=0;
    a=200;
}
var m=1;
var s=0;

function Timer(){
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");
    min.innerText=m;
    sec.innerText=s;
    s--;
    if (s<0){
        s=59;
        m--;
    }
    if (m < 0){
        clearInterval(si);
    }
}