var myPenguin = {
  name: "Onk Beakman",
  orign: "Skylanders",
  author: "Kevin Scott"
};

myPenguin.sayHello = function() {
  console.log("CHIRP CHIRP! Is this what penguins sound like?");
};

// Answers

myPenguin.outfit = {
  hat: 'baseball cap',
  shirt: 'Hawaiian shirt',
  pants: 'cargo shorts',
  shoes: 'flip-flops',
}
// , comma added purposely to the last key value pair so that in case i add more of them in the future, it wont cause any problems.

const penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

myPenguin.outfit.accessory = 'pocket watch';

myPenguin.outfit.hat = 'top hat';

delete myPenguin.outfit.pants;

for (let key in myPenguin.outfit) {
  console.log(myPenguin.outfit[key]);
}