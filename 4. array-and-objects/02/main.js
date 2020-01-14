var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function() {
    console.log("QUACK!!!");
  }
}; //Penguin1

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function() {
    console.log("Estoy encantado de conocerle.");
  }
}; //Penguin2

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function() {
    console.log("Hi there!");
  }
}; //Penguin3

// myPenguin from previous exercise
var myPenguin = {
  name: "Onk Beakman",
  orign: "Skylanders",
  author: "Kevin Scott"
};

myPenguin.sayHello = function() {
  console.log("CHIRP CHIRP! Is this what penguins sound like?");
};
//Answers

var penguins = [gunter, ramon, fred];

console.log(penguins[0]);

var secondPenguin = penguins[1];

console.log(penguins[penguins.length - 1]);

penguins.push(myPenguin);

console.log(penguins.length);

penguins[0].canFly = true;

penguins[0].sayHello();

for (let i = 0; i < penguins.length; i++) {
  penguins[i].sayHello();
}

for (let i = 0; i < penguins.length; i++) {
  penguins[i].numberOfFeet = 2;
}

for (let j = 0; j < penguins.length; j++) {
  if (penguins[j].canFly == true) {
    console.log(`${penguins[j].name} can fly`);
  }
}
