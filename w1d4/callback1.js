
var namelist = [];

function findWaldo(arr, found) {

  arr.forEach(function(element, index){

    if(element === "Waldo"){
      namelist = index;
      found()
    }
  });


}

function actionWhenFound() {
  var index = namelist;
  console.log("Found him at Index" + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// function logArrayElements(element, index, array) {
//   console.log('a[' + index + '] = ' + element);
// }

// // 인덱스 2는 배열의 그 위치에 항목이 없기에
// // 건너뜀을 주의하세요.
// [2, 5, , 9].forEach(logArrayElements);
// // 기록:
// // a[0] = 2
// // a[1] = 5
// // a[3] = 9


// var friends = ["Mike", "Stacy", "Andy", "Rick"];
// ​
// friends.forEach(function (eachName, index){
// console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
// });


// A very common implementation of callback functions is with forEach which uses callbacks to
// allow us to easily iterate through the elements of an array.

// Read about iterating through elements of an array using JavaScript's Array.prototype.forEach()
//  method.

// Refactor the function findWaldo to use the forEach() method instead of a for loop.