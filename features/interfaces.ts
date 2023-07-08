interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `
        Name: ${this.name}
        Year: ${this.year}
        Broken: ${this.broken}`
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `Drink has ${this.sugar} grams of sugar`
    }
}

const logSummary = (item: Reportable): void => {
    console.log(item.summary());
};

logSummary(oldCivic);

logSummary(drink)