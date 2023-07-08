const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['transparent', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsePower: 400,
    weight: 3354
};