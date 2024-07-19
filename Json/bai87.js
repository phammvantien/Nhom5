// //JSON_87

// var json='1' // number
// var jsontrue='true' // boolean
// var jsonString='"Hoang"'

// var myI='{"name":"tuan anh","age":18}'

// // console.log( typeof JSON.parse(json))
// // console.log( typeof JSON.parse(jsontrue))
// // console.log( typeof JSON.parse(jsonString))
// // console.log( typeof JSON.parse(jsonarray))
// // console.log(  JSON.parse(myI)) 
// // parse()// chuyen tui kieu dl sangkieeur dl sang js 
// // var a='"asdjkb"'
// // console.log( typeof JSON.parse(a))
// var jsonarray='["Haong","tuan","anh"]';

// var chuyensong=JSON.parse(jsonarray)
// var objects ='{"Hoang":"tuan","age":"anh"}'
// var chuyen=JSON.parse(objects)
// // console.log(chuyen);

// // chuyensong.forEach(element => {
// //     console.log(element);
    
// // });
// var chuyenchuoiusangJson= JSON.stringify(['Hoang','tuan'])
// var a=JSON.stringify({
//     name:"Hoang tuan anh",
//     age:21,
//     adress:'Thais nguyen'
// })
// // console.log( typeof chuyenchuoiusangJson);
// console.log( typeof a);

//========================================================================

// // PROMISE 88NN
// setTimeout(function(){
//    console.log(1);
//     setTimeout(function(){
//        console.log(2);
//         setTimeout(function(){
//            console.log(3);
          
//             setTimeout(function(){
//                console.log(4);
                                
//                 setTimeout(function(){
//                    console.log(5);
                                        
//                     setTimeout(function(){
//                        console.log(6);

//                     },1000)          

//                 },1000)

//             },1000)

//         },1000)

//     },1000)

// },1000)

// =========================================================
// PROMISE 90
var promise= new Promise(
    function(resolve,reject){
        // resolve();// thanh cong
        // reject(); // that bai
        // resolve([
        //     {
        //     id:1,
        //     name:"hoang",
        //     age:18
        //     }
        // ])
        reject("co loi")



    }
);
promise
.then(function(a){
    console.log(a);

})
.catch(function(b){
    console.log(b);


})
.finally(function(){
    console.log("Done");


})







