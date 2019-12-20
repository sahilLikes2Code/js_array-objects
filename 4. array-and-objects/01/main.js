
myPenguin.favoriteFoods = ['fish','eggs', 'stake ;)' ];

console.log(myPenguin.favoriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push('chikki');

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] = "pineapples";

var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1];
 
for (let f = 0; f <= myPenguin.favoriteFoods.length - 1; f++) {
    console.log(myPenguin.favoriteFoods[f])
}




var myPenguin = {
    name: 'Onk Beakman',
    orign: 'Skylanders',
    author: 'Kevin Scott',
}