//'use strict';

/*function filter(arr, func) {
  const result = [];

  for (const val of arr) {
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}

function inBetween(a,  return (x) => x >= a && x <= b;
}

function inArray(arr) {
  return (x) => arr.some((a) => a == x);
}

let arr = [1, 22, 4, 5, 23, -2];

console.log( filter(arr, inArray([1, 4, 23])) );
*/
// - 2.1
/*
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function (i) { // функция-стрелок
      return () => console.log(i); // выводит свой номер
    }(i);

    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[2]();
army[9]();
*/
// - 2.2
/*
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) (function (i) {
    var shooter = function () { // функция-стрелок
        console.log(i); // выводит свой номер
    };

    shooters.push(shooter);
  })(i);

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[2]();
army[9]();
*/
// - 2.3
/*
function makeArmy() {

  const shooters = [];

  for (let i = 0; i < 10; i++) {
    const shooter = function () { // функция-стрелок
        console.log(i); // выводит свой номер
    };

    shooters.push(shooter);
  };

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[2]();
army[9]();


const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Moskov', 'Riga'];
const f = s => s.length;

function f1() {
    const cities = ['Roma', 'Moskov', 'Riga'];
    const f = s => s.toUpperCase();
    console.dir({ cities });
    console.dir(cities.map(f));

  {
      const f = s => s.toLowerCase();
      console.dir({ cities });
      console.dir(cities.map(f));
  }
}

f1();

console.log("hi");


const person = {
  name: "Alex Ts",
  age: 28,
  city: "Roma",
  get location() {
    return this.city;
  },
  set location(value) {
    this.city = value;
  },
  print() {
    console.log(this.name, this.city);
  }
};

for (const key in person) {
  const value = person[key];
  console.dir({ key, value });
}

const name = "Kate";
const city = "London";
const person2 = {name, city};
console.log({ person2 });

const fildeName = "city";
const valueName = "Krasnoyarck";
const person3 = {
  [fildeName]: valueName,
};

console.log({ person3 });


const letters = [];
letters.push("B");
letters.unshift("A");
letters.push("C");

console.log({letters});


const person = {
  name: "Alex Ts",
  age: 28,
  city: "Roma",
  get location() {
    return this.city;
  },
  set location(value) {
    this.city = value;
  },
  print() {
    console.log(this.name, this.city);
  }
};

const s = JSON.stringify(person);
console.log(s);

const obj = JSON.parse(s);
console.log(obj);

//             0  1  2  3  4  5  6  7  8  9   10  11  12  13
const lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let count = 0;

 const counter = function () {
  console.log ("Attempt: " + ++count);
 }

function binerySearch(list, item) {
  let lowNum = 0;
  let highNum = list.length - 1;

  while( lowNum <= highNum ) {
    let midNum = Math.floor((lowNum + highNum) / 2);
    let guess = list[midNum];
    counter();
    if (guess == item) {
      return midNum;
    } else if (guess > item){
      highNum = midNum - 1;
    } else {
      lowNum = midNum + 1;
    }
  }

  return null;
}

console.log(binerySearch(lists, 10));

//const log = x => console.log(x);

const log = console.log;

lists.forEach(log);


let count = 0;
const list = [1, 4, -2, 5, 6, 11];
const sum = (acc, val) => (++count, acc + val);Ё
const res = list.reduce(sum);
console.log({ res, count });

function Point(x, y) {
  this.x = x;
  this.y = y;
}

console.log(Point.prototype);
console.log( (()=> {}).prototype);

//--------------------------------------------------------------------------------------
const log = (s, i) => {
  console.log(i, s);
  return s;
};

const f1 = x => x * 2;
const f2 = x => ++x;

const compose = (...funcs) => x =>  funcs.reduce((v, f) => f(v), x);

const f3 = compose(f1, f2);

const res1 = [7, 10, 1, 5, 2]
  .filter(x => x > 4)
  .map(f3)
  .reduce((acc, val) => acc + val);

console.log(res1);

//--------------------------------------------------------------------------------------
var friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
  ]

  // allbooks - список, который будет содержать все книги друзей +
  // дополнительный список указанный в initialValue
  var allbooks = friends.reduce(function(prev, curr) {
    return [...prev, ...curr.books];
  }, []);


console.log(allbooks);

const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0]
];

const max = (a, b) => (a > b ? a : b);
const min = (a, b) => (a < b ? a : b);
const sum = (a, b) => a + b;
const sortAz = (a, b) => (a < b ? 1 : -1);
const sortZa = (a, b) => (a > b ? 1 : -1);

const res1 = matrix
  .map(row => row.reduce(max))
  .reduce((acc, val) => acc.concat(val), [])
  .reduce(sum);

let total = [];

matrix.forEach(row => row.forEach(val => total.push(val)));


console.log(total.filter((a, b)=> a > b ));



const isPrime = (num) => {
  for (let div = 2; div < num; div += 1) {
    console.log(div);
    if (num % div === 0) return false;
  }
  return true;
};

  console.log(isPrime(17));
*/

/* 
 const f = (str) => {
  //   const lastIndex = str.length - 1;
  //   // BEGIN (write your solution here)
  //   const iter = (i, acc) => {
  //     return (i <= lastIndex) ? iter(++i, `${acc}${str[lastIndex - i + 1]}`) : acc;
  //   };
  //   // END
  //   return iter(0, '');
  // };

  const lastIndex = str.length - 1;
  // BEGIN (write your solution here)
  const iter = (index, acc) => {
    return (index <= lastIndex) ? iter(index + 1, `${str[index]}${acc}`) : acc;
  };
  // END
  return iter(0, '');
};

console.log(f("aadsqweqewqeqqwpodkwofinbhcnAS;CK'AW;IJVBALSDKAF;CJALFWDII;OWEHFACFJ"));


export default (str) => {
  const lastIndex = str.length - 1;
  // BEGIN (write your solution here)
  const iter = (index, acc) => {
    if (index > lastIndex) {
      return acc;
    }
    return iter(index + 1, `${str[index]}${acc}`);

  };
  return iter(0, '');
};




const add = x => y => {
  const z = x + y;
  console.log(`z = x + y: ${z} = ${x} + ${y}`);
  return add(z);
};

const f1 = add(1);
const f2 = f1(10);
const f3 = f2(31)(22);

console.log(f3);


const person = {};
person.name = "Mark";
person.city = "Moscov";
person.born = "1990";
person.get = function city() {
  return this.city;
};

person.set = function city(value) {
  this.city = value;
};
person.set("Magadan");

if ('city' in person) {
  console.log('True');
}else {
  console.log('False');
}

for (const key in person) {
  const value = person[key];
  console.dir({ key, value });
}

const f1 = x => x * 2;
const f2 = x => ++x;

const compose = (...funcs) => x => funcs.reduce((v, f) => f(v), x);

const f3 = compose(f1, f2);

const res1 = [7, 10, 1, 5, 2]
  .filter(x => x > 4)
  .map(f3)
  .reduce((acc, val) => acc + val);
console.log(res1);


const matrix = [
  [1, 4, 5, 22, 44],
  [-23, 44, 85, 2, -2],
  [1, 2, 3, 66, 83, 33]
];

const max = (a, b) => (a > v ? a : b);

const res = matrix
  .map(row => row.reduce(max));


lable1: {
  console.log("level - 1");
  lable2: {
    console.log("level - 2");
    break lable;
    console.log("leval - 3");
  } 
  console.log("leval - 4");
}
console.log("leval - 5");



let i = 0;

while (i <= 10) {
i++;
console.log(i);
if (i == 6) break;
console.log("hi", i);
}



const p = x => console.log(x);

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.from = function (obj) {
  const {
    x,
    y
  } = obj;
  return new Point(x, y);
};

Point.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
};

Point.prototype.toString = function () {
  return `[${this.x}, ${this.y}]`;
};

const o = new Point(10, 15);

p(o);

o.move(-25, 5);

p(o);

p(Point.prototype);
p(Point.prototype.move.prototype);


const p = x => console.log(x);
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

  static frome(obj) {
    const { x, y } = obj;
    return new Point(x, y);
  }
}

const o = new Point(20, 44);

p(o.toString());

o.move(-20, 4);

p(o.toString());


const p = x => console.log(x);

const point = (x, y) => {
  const p = {};

  p.move = (dx, dy) => {
    x += dx;
    y += dy;
  }

  p.toString = () => `[${x}, ${y}]`;

  return p;
};

const o = point(10, 2);

p(o.toString());
o.move(-2, -21);
p(o.toString());



function move(x, y) {
  this.x += x;
  this.y += y;
}

function toString() {
  return `[${this.x}, ${this.y}]`;
}

const o = { x: 10, y: 21};

const o1move = move.bind(o);
const o1toString = toString.bind(o);
o1move(1, -22);

console.log(o);



function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function() {
  return `${this.x}, ${this.y}, ${this.width}, ${this.height}`;
}

function Square(x, y, side) {
  Rect.call(this, x, y, side, side);
}

// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;

Object.setPrototypeOf(Square.prototype, Rect.prototype);

 const o = new Square(10, 20, 50);
 console.log(o.toString());



class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toString() {
    return `${this.x}, ${this.y}, ${this.width}, ${this.height}`;
  }
}

class Square extends Rect {
  constructor(x, y, side) {
    super(x, y, side, side);
  }
}

const o = new Square(10, 20, 50);
console.log(o.toString());

*/

/*
const family = [
  ['father', 'Aleksandr', 59],
  ['mother', "Svetlana", 57],
  ['son', 'Aleksey', 32],
  ['son', 'Aleksandr', 28]
];

 class Person{
  get name(){
    return this[1]
  }
  get age() {
    return this[2] 
 }
  toString() {
    return `${this.name} age is ${this.age}`;
  }
}

family.forEach(item => Object.setPrototypeOf(item, Person.prototype));

const query = person => {
  return person.age <= 30;
};

const res = family.filter(query);
console.log(res.join('\n'));
*/