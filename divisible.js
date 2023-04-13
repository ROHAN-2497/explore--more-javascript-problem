// 1-50

// for( let i = 1; i <= 50; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('foobar');
//     }
//     else if ( i % 3 === 0){
//         console.log("foo")
//     }
//     else if (i % 5 === 0){
//         console.log('bar');
//     }
    
//     else{
//         console.log(i);
//     }
    
// }


/* 1- 50 
 3 %  foo
 5 %  bar 
 3 and 5 % then foobar
*/

for (let i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log('foobar')
    }
    else if (i % 3 === 0){
        console.log('foo')

    }
    else if (i % 5 === 0){
        console.log('bar');
    }
    else {
        console.log(i)
    }
}