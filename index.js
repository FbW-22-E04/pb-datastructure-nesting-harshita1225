//2D array

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (let item of board) {
  for (let value of item) {
    console.log(value);
  }
}

console.log("++++++++++++++++++++++++++++++");
//2, Doggo

const doggo = {
  name: "coco",
  breed: "Spitz",
  food: ["peanuts", "fruit", "meat", "cheese"],
  printfood: function () {
    for (let item of doggo.food) {
      console.log(item);
    }
  },
};

console.log("only second food element:", doggo.food[1]);
doggo.printfood();
console.log("++++++++++++++++++++++++++++++");

//3.

const recipes = {
  ingredients: {
    sugar: "15 gms",
    butter: "50 gms",
    flour: "50 gms",
  },
  printIngre: function () {
    for (let item of recipes.ingredients) {
      console.log(item);
    }
  },
};

recipes.ingredients.ginger = "1 gms";
recipes.ingredients.chilli = "1 spoon";
delete recipes.ingredients.chilli;
recipes.ingredients.sugar = "brown sugar";
//const { sugar: brownsugar } = recipes.ingredients;
console.log(recipes);

console.log("++++++++++++++++++++++++++++++");
