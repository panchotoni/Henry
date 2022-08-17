x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);//10
  console.log(a);//8
  var f = function(a, b, c) {
    b = a;
    console.log(b);//8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9
}
c(8,9,10);
console.log(b);//10
console.log(x);//



////////////////////////----

// console.log(bar);//1
// console.log(baz);
// foo();//Hola
// function foo() { console.log('Hola!'); }
// var bar = 1;
// baz = 2;


//////////////-

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);



///////////------
var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";//Franco en caso de que llamen la funcion
      console.log(instructor);
   }
})();
console.log(instructor);//Tony


///////////----

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash"; 
    let pm = "Reverse Flash";
    console.log(instructor);//"The Flash"
    console.log(pm);//"Reverse Flash"
}
console.log(instructor);//"The Flash"
console.log(pm);//"Franco"



/////////////----
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());



//////////-----
function printing() {
  console.log(1);//1
  setTimeout(function() { console.log(2); }, 1000);//2
  setTimeout(function() { console.log(3); }, 0);//3
  console.log(4);//4
}

printing();