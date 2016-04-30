var Flattener = function(){
  this.flattenedArray = [];
};

//simplier way to write it recursively and Object Oriented
Flattener.prototype.flatten = function(unflattenedArray, flattenedArray) {

   var self = this;
    unflattenedArray.forEach(function(m){
    if(Array.isArray(m)){
     return self.flatten(m, self.flattenedArray);
     }else if( m !== null){
     self.flattenedArray.push(m);
}
  });
  return self.flattenedArray;
  }

Flattener.prototype.clear = function(){
  this.flattenedArray = [];
}
;

module.exports = Flattener;







//THIS WAS A CODE CHALLENGE I RECIEVED AND THOUGHT THIS WAS A GOOD ALGORITHM BECAUSE I WAS SHOWING USAGE OF
//CALLBACKS AND MAKING A HELPER FUNCTION. ENDED UP GETTING REJECTED
function flatten(unflattenedArray) {
  //Created an array to store values trapped in inner arrays
  var flattenedArray = [];
  //Created a helper method which is also a recursive method, to check if element is not null and not an array , it will push to the flattened_array else it will recurse down to the innermost array;
  function flattener(element){
    if(!Array.isArray(element) && element !== null){
      flattenedArray.push(element);
    }else if( element !== null){
    element.forEach(flattener);
}
  }
  //Looping through the array and run the callback method for each element in the array
   unflattenedArray.forEach(flattener);
 
  return flattenedArray;
}
// console.log(flatten([0, 2, [[2, 3], 8, 100, null, [[null]]], -2])); // [0, 2, 2, 3, 8, 100, -2]




