var age = 42;
var price = 80;
var finalPrice = 75;

if( age < 19 ){
  finalPrice = price*0.5;
}
else if(age > 19 && age < 40){
  finalPrice = price;
}
else if(age > 41 && age < 66 ){
  finalPrice = price*0.75;
}
else
{
  finalPrice = price * 0.5;
}
console.log("the final price is "+finalPrice)
