var arayimg = [
    '/img/ss1.jpg',//0
    '/img/ss2.jpg',//1
    '/img/ss3.jpg',//2
    '/img/ss4.jpg',//3
    '/img/ss5.jpg',//4
    '/img/ip1.jpg',//5
];

var  biendem=0;
function trunggian(){
    var chuyen= document.querySelector('.anhchuyen');
  chuyen.src=arayimg[biendem];
}
function before(){
    biendem=(biendem>0)? biendem-1: arayimg.length-1;
    trunggian();
 

}
function after(){
    biendem=(biendem<arayimg.length-1)? biendem+1:0;
    trunggian();

}
function trunggian2(){
    var anhchuyen2= document.querySelector('.anhchuyen2');
    anhchuyen2.src=arayimg[chuyeen()];

}

function chuyeen(){
    biendem=(biendem<arayimg.length-1)? biendem+1:0;
   return biendem;
}
setInterval(trunggian2, 1000);

var chuyenchinhno= document.querySelector('.backgrounds');
function xanh(){
    chuyenchinhno.style.background='blue';

}
function dos(){
    chuyenchinhno.style.background='red';
    
}
function tim(){
    chuyenchinhno.style.background='green';
}
function vang(){
    chuyenchinhno.style.background='yellow';
}
var number = document.querySelector('.shopincart .number').textContent;
var demm= parseInt(number);
function tinhsotien(){
    var price=document.querySelector('.shopincart .price').textContent;
   
    var tongtien = document.querySelector('.shopincart .tongtien');


var dem = parseInt(price);

tongtien.innerText=dem*demm;
}

function giamsl(){
    demm--;
    document.querySelector('.shopincart .number').innerHTML=demm;
    tinhsotien();
    
  

}
function tangsl(){
   demm++;
   document.querySelector('.shopincart .number').innerHTML=demm;
   tinhsotien();

}
function nam(){
    alert('Nam')
}
function nu(){
    alert('Nu');
}
var tuan = document.querySelector('.suadoi');
tuan.onblur=function(){
    alert('da thoat ly');
}


function sualuon(){
    var sua = document.querySelector('.suanoidung').value;
  
     var dddd=document.querySelector('.suadoidayu');
     dddd.innerText=sua;
  
}
function chuyenwebcvolor(){
    document.querySelector('body').style.opacity=0.5;

}
function chuyenwebcvolor2(){
    document.querySelector('body').style.opacity=1;

}
var doisoimg= document.querySelector('.imghand .asdasdaasda');
function giam(){
   
    doisoimg.style.zoom=0.8;

}
function tang(){
   
    doisoimg.style.zoom=3;

}
var cochus = document.querySelector('.tanggiam');
var cochu=20;
// console.log(cochu);
function tangcochu(){
   cochu=cochu+1;
    cochus.style.fontSize=cochu +'px';
  

}

function giamcochu(){
      cochu=cochu-1;
    cochus.style.fontSize=cochu +'px';
  

}
document.addEventListener('keydown', function(event){

if((event.altKey)&&(event.key=='n')){
    alert('ban da nhan to hop phim alt +n');
}



})

















