// // function z() {
// //     var b =900;
// //     function x() {    
// //         var a= 7;  
// //         function y() {
// //             console.log(a,b);
// //         }
// //       y()
// //     }
// //     x()
    
// // }
// // z()
// // function x() {

// //     for(var i=1;i<=5;i++){
// //         setTimeout(function(){
// //             console.log(i);
// //         }, i* 1000)
// //     }
    
// //     console.log("hai");

    
// // }
// // x()

// const data ={
//     name:"amar",
//     age:25,
//     greet:function(){
 
//             setTimeout(function() {
     
//                 console.log("hello",this.name);
//             } )
//     }
// }

// const data ={
//     name:"amar",
//     age:25,
//     greet:function(){
            
//                 console.log("hello",this.name);
         
//     }
// }

//  data.greet();
// const a =[1,2,3];
// const b =[]
// function square(a){
//    if(a.length<1){
//     return  b
//    }
//     b.push(a[0]*a[0]);
    
//     return [square(a.slice(1))]

// }
// square(a);
// console.log(b);

function createEmployeeObjects(name) {
    return {
       name: name,
       work: function () {
          console.log('New Employee Created with name: ' + name);
       }
    };
 }
