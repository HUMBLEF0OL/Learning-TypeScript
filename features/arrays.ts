let carMakers: string[] = [];
carMakers = ['Honda', 'Ford', 'KIA'];

const dates = [new Date, new Date()];

const carsByMake: string[][] = [
    ['City'],
    ['EcoSport'],
    ['Sonnet']
]

// help with inference when extracting values
const carX = carMakers[0];

// prevent incompatible values
// carMakers.push(14);

// help with map or forEach

carMakers.map((car: string): string => {
    return car;
})

// flexible types
const importantDates: (String | Date)[] = [new Date(), '2023-10-12'];