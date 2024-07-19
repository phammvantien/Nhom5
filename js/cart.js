
var lenght_items=document.querySelectorAll('.list-items');
var number= document.querySelectorAll('.inp-number-items');
var nuttang=document.querySelectorAll('btn-increase');
for(var i =0;i<lenght_items.length;i++){
   

 

nuttang.onclick=function (e){
        var number=e.target.value;
        console.log(number);
   //      var doikieu=parseInt(number);
   //      doikieu=doikieu+1;
   //      console.log(doikieu);
   //  number.value=doikieu.toString();


    }

}


// var numbers= document.querySelector('.inp-number-items').value;

// var price=document.querySelector('.price-new').textContent;
// var numbers= document.querySelector('.inp-number-items').value;
// var total =price*numbers


// function giamsl(){
//     var number=numbers[i].value;
//     console.log(number);
//     var doikieu=parseInt(number);
//     doikieu=doikieu-1;
//     var nguoc=doikieu.toString();
//    numbers.value=nguoc.toString();


// }
