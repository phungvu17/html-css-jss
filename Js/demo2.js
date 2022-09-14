var obj = {
    name: "Phùng Văn Vũ ",
    age: 18,
    mark: 10,
    girlFriends:["Hoàng Phương Lan","l","A","c"],
    eat:function (){
        console.log(this.name+" đang yêu .....");
    }
};
console.log(obj.name);
obj.eat();
obj.name = "Nguyễn Hữu Khánh";
console.log(obj.name);
for(var i=0;i<obj.girlFriends.length;i++){
    console.log(obj.girlFriends[i]);
//}

//obj.eat();
//var f = 25;
//function demo() {
   // var x = document.getElementById("abc");
    //x.innerText = "Xin Chào Em :3"// đổi nội dung chữ
   // x.innerHTML += '<i>chào bé</i>';// thay đổi cấu trúc html
   // x.style.color = "red";
    //x.style.fontStyle = f+'px';
    //f+=5;
   // x.style.transform = 'rotate('+f+'deg)';
  //  f+=10;
//}
//function quayTron() {
   //setInterval(demo, 10);
}
var m = 10,s=0;
function  timer(){
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    min.innerText = m;
    sec.innerText = s;
    s--;
    if(s<0){
        s = 59;
        m--;
    }
    if(m<0){
        clearInterval(si);
    }
}
var si;
function startTimer() {


    si=setInterval(timer,1000);
}

