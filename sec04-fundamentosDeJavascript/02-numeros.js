const peso1 = 1.0;
const peso2 = Number('2.5');

console.log(peso1, typeof peso1);
console.log(peso2, typeof peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.54;
const avaliacao2 = 6.51;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(2));
console.log(media.toString());
console.log(media.toString(2));

let sumDec = 0.1 + 0.7;
console.log(sumDec.toFixed(2));
console.log((0.1 + 0.7).toFixed(2));
