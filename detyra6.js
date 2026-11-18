
const minutaTeHene = 95;
const minutaTeMarte = 80;
const minutaTeMerkure = 115;

const gjithsejMinuta = minutaTeHene + minutaTeMarte + minutaTeMerkure;
const kohaNeOre = gjithsejMinuta / 60;
const oreTeplota = Math.floor(gjithsejMinuta / 60);
const minutaTeMbetura = gjithsejMinuta % 60;


console.log("Minuta të hënën: " + minutaTeHene);
console.log("Minuta të martën: " + minutaTeMarte);
console.log("Minuta të mërkurën: " + minutaTeMerkure);
console.log("Gjithsej minuta: " + gjithsejMinuta);
console.log("Koha në orë (dhjetore): " + kohaNeOre.toFixed(2));
console.log("Orë të plota: " + oreTeplota);
console.log("Minuta që mbeten (totali % 60): " + minutaTeMbetura);