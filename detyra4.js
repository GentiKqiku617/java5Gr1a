const produkti1Cmimi = 35;
const produkti1Sasia = 2;
const produkti2Cmimi = 24;
const produkti2Sasia = 1;

const zbritjaPerqind = 15;
const Transporti = 4;


const cmimiParaZbritjes = (produkti1Cmimi * produkti1Sasia) + (produkti2Cmimi * produkti2Sasia);
const shumaZbritjes = cmimiParaZbritjes * zbritjaPerqind /100;
const cmimiPasZbritjes = cmimiPasZbritjes + Transporti;

console.log("Çmimi para zbritjes: " + cmimiParaZbritjes.toFixed(2) 
console.log("Shuma e zbritjes (15%): " + shumaZbritjes.toFixed(2) 
console.log("Çmimi pas zbritjes: " + cmimiPasZbritjes.toFixed(2) 
console.log("Transporti: " + transporti.toFixed(2) 
console.log("Vlera përfundimtare: " + vleraPerfundimtare.toFixed(2) 