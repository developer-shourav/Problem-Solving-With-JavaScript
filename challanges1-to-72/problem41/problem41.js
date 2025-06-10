/* ## Find the expensive product  */

function findTheExpesive(product1, product2, product3){
    const mostExpensive = Math.max(product1, product2, product3);
    if( mostExpensive === product1 ){
        return "Most expensive is 'Shirt' ";
    }

    else if( mostExpensive === product2 ){
        return "Most expensive is 'Pants' ";
    }

    else{
        return "Most expensive is 'Watch' ";
    }
};




const shirtsPrice = 1500;
const pantsPrice = 5000;
const watchPrice = 3500;

const mostExpensive = findTheExpesive(shirtsPrice, pantsPrice, watchPrice);
console.log(mostExpensive);