// var answer = 0;
// var inputOne;
// var inputTwo;
// // function inputs(){
// //   inputOne = document.getElementById('num_one').value;
// //   inputTwo = document.getElementById('num_two').value;
// // };
//
// var calc = document.getElementById('calculateBtn').addEventListener('click', function(event){
//  document.getElementById('answer').innerText = answer;
// });
//
// var add = document.getElementById('add').addEventListener('click',function(){
//   inputOne = document.getElementById('num_one').value;
//   inputTwo = document.getElementById('num_two').value;
//   answer = (parseFloat(inputOne) + parseFloat(inputTwo))
// });
//
// var subtact = document.getElementById('subtract').addEventListener('click', function(){
//   inputOne = document.getElementById('num_one').value;
//   inputTwo = document.getElementById('num_two').value;
//   answer = (parseFloat(inputOne) - parseFloat(inputTwo))
// });
//
// var divide = document.getElementById('divide').addEventListener('click', function(){
//   inputOne = document.getElementById('num_one').value;
//   inputTwo = document.getElementById('num_two').value;
//   answer = (parseFloat(inputOne) / parseFloat(inputTwo))
// });
//
// var multiple = document.getElementById('multiply').addEventListener('click', function(){
//   inputOne = document.getElementById('num_one').value;
//   inputTwo = document.getElementById('num_two').value;
//   answer = (parseFloat(inputOne) * parseFloat(inputTwo))
// });









// function calculator() {
//   var num_one, num_two;
//   var sign = '/';
//   var answer = 0;
//
//   function getNum1() {
//     num_one = document.getElementById('num_one').value;
//     return num_one;
//   }
//   function getNum2() {
//     num_two = document.getElementById('num_two').value;
//     return num_two;
//   }
//   function getSign() {
//     sign = document.getElementById('sign').value;
//     return sign;
//   }
//   function setAnswer() {
//     answer = document.getElementById('answer').innerText = answer;
//   }

//   function calculate() {
//      num_one = parseFloat(getNum1());
//      num_two = parseFloat(getNum2());
//
//     if (getSign() == '+') {
//       answer = (num_one + num_two);
//
//     } else if (getSign() == '-') {
//       answer = (num_one - num_two);
//
//     } else if (getSign() == '*') {
//       answer = (num_one * num_two);
//
//     } else {
//       answer = (num_one / num_two);
//     }
//     setAnswer();
//
//   }
//
//   calculate();
// }


// display
var display = [];

// number variables
function getNumber() {
  var one = document.getElementById('one').value;
  var two = document.getElementById('two').value;
  var three = document.getElementById('three').value;
  var four = document.getElementById('four').value;
  var five = document.getElementById('five').value;
  var six = document.getElementById('six').value;
  var seven = document.getElementById('seven').value;
  var eight = document.getElementById('eight').value;
  var nine = document.getElementById('nine').value;
  var zero = document.getElementById('zero').value;
  var decimal = document.getElementById('decimal').value;
}

// clear
var clear = document.getElementById('clear').value[''];

// operator variables

function getSign() {
  var division = document.getElementById('division').value;
  var multiplication = document.getElementById('multiplication').value;
  var subtraction = document.getElementById('subtraction').value;
  var addition = document.getElementById('addition').value;
}

function doCalc() {
  var equals = document.getElementById('equals').value;
}
