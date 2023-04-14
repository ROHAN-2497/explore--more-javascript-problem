// chair  = 3sft
// table = 10sft
// bed = 50sft

function woodcalculator(ChairQuantity, TableQuantity, BedQuantity){
    const perchairWood = 3;
    const pertableWood = 10;
    const perbedWood = 50;

const chairWood = perchairWood * ChairQuantity;
const tableWood =  pertableWood * TableQuantity;
const bedWood =  perbedWood * BedQuantity;
const totalwood = chairWood + tableWood + bedWood
return totalwood
}
const totalwood = woodcalculator(2,2,5);
console.log('total wood : ', totalwood);
