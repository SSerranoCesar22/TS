function isString(){
    var name = "Sergio";
   if (typeof name == 'string' ) {
    console.log(name);
   }

}
function isBoolean(){
    var bool = true;
   if (typeof bool == 'boolean' ) {
    console.log(bool);
   }

}
function isInteger(){
    var integer = 2;
   if (typeof integer == 'number') {
    console.log(integer);
   }

}
function isIntegerOrBool(){
    var integer = 1234;
   if (typeof integer == 'number' || integer == 'boolean' ) {
    console.log(integer);
   }

}
isString();
isBoolean();
isInteger();
isIntegerOrBool();