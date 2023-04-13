// const names = ['abul', 'babul', 'cabul', 'habul', 'babul', 'abul', 'babul', 'cabul'
// ];
// function removeduplicate(names){
//     const unique =[];
//     for (let i = 0; i < names.length; i ++){
//         const name = names[i];
//         if(unique.includes(name) === false){
//           unique.push(name);
//         }
//     }
//     return unique;
// }
// const uniqueName = removeduplicate(names);
// console.log(uniqueName);
const names = ['abul', 'babul', 'cabul', 'habul', 'babul', 'abul', 'babul', 'cabul', 'ebul', 'gabul']

function removeduplicate(names){
    const unique = [];
 for (let i = 0; i < names.length ; i++){
    const name = names [i];
   if (unique.includes(name) === false){
    unique.push(name);
   }
 }
 return unique;
}

const uniqueName = removeduplicate(names);
console.log(uniqueName);
