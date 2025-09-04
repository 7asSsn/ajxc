// function test(userName) {
//   console.log("test"+ userName);
// }
// var myElement = document.getElementById('x');

// // myElement.addEventListener("click", function(){
// //             test('hassan')
// // });

// myElement.addEventListener('click', function(){
//     test('hassan')
//     console.log('ha n');
// });

// try{
//     var x  =10;
//     console.log(x);
//     throw new Error('DELETE','fuck there is error');
// }
// catch(e){
//     myElement.innerHTML = e
// }

// // var x = new Event()xrbb buX

// XMLHttpRequest
// var myHttp = new XMLHttpRequest();
// myHttp.open('GET ', ' https : //ecommerce. routemis r. com/api/vl/products ')
// myHttp.send();
// // myHttp.response;
// console.log(myHttp.response);V
// var element = document.getElementById("x");

// try {
//     var x = 19;
//     console.log(x);
//     throw new Error("kos omk")
// }
// catch(error) {
//     element.innerHTML = error;
// }

// ! XMLHttpRequest
// let x = XMLHttpRequest;
// console.log(x);

// // 1- إنشاء object
// let xhr = new XMLHttpRequest();

// // 2- تحديد نوع الطلب والـ URL
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

// // 3- تحديد ايه اللي يحصل لما يكتمل الطلب
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     console.log("Response:", xhr.responseText);
//   } else {
//     console.log("Error:", xhr.status);
//   }
// };

// // 4- إرسال الطلب
// xhr.send();

// ~ load = onload
// ? if these four stetment done will can run and get data
// myHttp.readyState = 0; //~ request not initialize
// myHttp.readyState = 1; //~connection established
// myHttp.readyState = 2; //~request received
// myHttp.readyState = 3; //~ request processing
// myHttp.readyState = 4; //~ request is done/ ready

// let myHttp = new XMLHttpRequest();
// arrProducts = [];

// myHttp.open("GET", "https://ecommerce.routemisr.com/api/v1/products", true);
// myHttp.send();

// myHttp.addEventListener("error", function () {
//   alert("Error in loading data from server");
//   console.log(allProducts);
// });

// myHttp.addEventListener("load", function () {
//   arrProducts = JSON.parse(myHttp.response).data;
// });

// myHttp.addEventListener("readystatechange", function () {
//   if (myHttp.readyState == 4) {
//     console.log(myHttp.response);
//   }

// ! Asynchronous |and| synchronous
// function getPizza() {
//   let myHttp = new XMLHttpRequest();
//   allRecipes = [];
//   myHttp.open(
//     "GET",
//     "https://forkify-api.herokuapp.com/api/search?q=pizza",
//     true
//   );
//   myHttp.send();
//   myHttp.addEventListener("load", function () {
//     allRecipes = JSON.parse(myHttp.response);
//     console.log(allRecipes);
//   });
// }

// console.log('hello');
// for (let i = 0; i < 10; i++){
//     console.log('hello')
// }

// getPizza();

// console.log('gi');
// !fix Asynchronous by callBack function
function one(callBack) {
  console.log("hello1");
  callBack();
}
function two(callBack) {
  console.log("hello2");
  callBack();
}
function three() {
  console.log("hello3");
  callBack();
} 
one(two);
two(three);


function getPizza(callBack) {
  var allRecipes = [];
  var myHttp = new XMLHttpRequest();
  myHttp.open("GET", "");
  myHttp.send();
  myHttp.addEventListener("load", function () {
    console.log("pizze");
    allRecipes = JSON.parse(myHttp.response).recipes;
    callBack();

  });
}
getPizza();
