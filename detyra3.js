const akomodim = 94;
const transporti = 42;
const ushqimi = 57;
const persona = 3;
const buxheti = 80;

const totali = akomodimi + transporti + ushqimi;
const perPerson = totali / persona;
const mbetet = buxheti - perPerson;

console.log("Total shpenzimet:" + totali);
console.log("Shpenzimet perPerson:" + perPerson);
console.log("Buxheti mbetet" + mbetet);