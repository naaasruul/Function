// define a function
function sayHello (){
  console.log("hello");
}
//CAllinf a function
sayHello();

function sayGoodbye(name){
  console.log("goodbye " + name);
}

//calling sayGoodbye
sayGoodbye("abu");

//function w return
function sum(a,b){
  return a+b;
};

console.log(sum(3,4));

function areaVolume(height, width, length){
  return [length*width, width*length*height]
}
console.log(areaVolume(3,4,4));

//create a function minMaxAvg
//10,7,18
function minMaxAvg(a, b , c){
  var min = a;
  var max = b;
  var avg = c;
  avg = (a+b+c)/3;
  
  if(a < b && a < c){
    min = a;
  };
  
  if ( b > a && b > c){
    max = b;
  };
 
  return [min, max, avg]
}
console.log(minMaxAvg(10, 7, 18));

