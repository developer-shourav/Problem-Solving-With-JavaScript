//Write an array with the prices of all the books you have. The books whose price is above 200 rupees will be skipped. That is, they will not show as output. The rest will be displayed as output. See if you can.


var myBooksPrice = [90, 300, 85, 35, 125, 48, 98, 99, 20, 500, 820, 400];

for( var i = 0; i < myBooksPrice.length; i++){

    var booksPrice = myBooksPrice[i];

    if( booksPrice >= 100){
        continue;
    }
    console.log(booksPrice);

}

