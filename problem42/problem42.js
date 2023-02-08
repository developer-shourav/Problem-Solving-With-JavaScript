/* ## Find the lowest price product  */



function findTheLowest(product1, product2, product3, product4){
    const lowestPrice = Math.min(product1, product2, product3, product4);

    if(product1 === lowestPrice){
        const outputMassage1 = "The lowest price product is Phone. " + "And it's price is " + product1;
        return outputMassage1;
    }

    else if(product2 === lowestPrice){
        const outputMassage2 = "The lowest price product is Computer. " + "And it's price is " + product2;
        return outputMassage2;
    }

    else if(product3 === lowestPrice){
        const outputMassage3 = "The lowest price product is Tv. " + "And it's price is " + product3;
        return outputMassage3;
    }

    else{
        const outputMassage4 = "The lowest price product is Fridge. " + "And it's price is " + product4;
        return outputMassage4;
    }


};



const phone = 120000;
const computer = 65000;
const tv = 20000;
const fridge = 27000;

const lowestPriceProduct = findTheLowest(phone, computer, tv, fridge);
console.log(lowestPriceProduct);