var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(input){


    return Math.sqrt(input.x * input.x + input.y * input.y);

})

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


// var kvArray = [{key: 1, value: 10},
//                {key: 2, value: 20},
//                {key: 3, value: 30}];

// var reformattedArray = kvArray.map(function(obj) {
//    var rObj = {};
//    rObj[obj.key] = obj.value;
//    return rObj;
// });




// findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(result) {
//   console.log("The result is:", result);
// });


// Related to filter, is Array.prototype.map.

// If you recall Pythagorean Theorem (x^2 + y^2 = z^2), then this should be a breeze.

// Complete the following code for the assertion to pass. The result should be an array of
// numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y)