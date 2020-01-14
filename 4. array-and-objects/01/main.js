var myPenguin = {
    name: 'Onk Beakman',
    orign: 'Skylanders',
    author: 'Kevin Scott',
}

// Solutions

myPenguin.favoriteFoods = ['fish', 'eggs', 'stake'];

console.log(myPenguin.favoriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push('chikki');

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods.splice(myPenguin.favoriteFoods-1, 1, 'pineapples');

var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1];

for (let i = 0; i < myPenguin.favoriteFoods.length; i++) {
  console.log(myPenguin.favoriteFoods[i]);
}
