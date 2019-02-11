let fruits = [];

let gyumolcsSzallitmany = (fruitsArray) => {
  for (let i = 0; i < fruitsArray.length; i++) {
    fruits.push(fruitsArray);
  }
};

gyumolcsSzallitmany(['alma', 'körte', 'banán']);

let printFruitList = () => {
  console.log(fruits);

};

printFruitList(gyumolcsSzallitmany);