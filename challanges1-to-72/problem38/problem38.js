//Calculate the average rate(%) of profit


function averageRateOfProfit(profits, invest ){
    let totalProfit = 0;
    for( let i = 0; i < profits.length; i++){
        const index = i ;
        const profit = profits[index];
        totalProfit = totalProfit + profit;
    }
    const averageProfit = totalProfit / profits.length;
    const averageInvest = invest / 2;
    const averageRateOfProfit = (averageProfit / averageInvest) * 100;
    const outputMessage = "Average Rate of profit is "+ averageRateOfProfit.toFixed(1)+"%";
    return outputMessage;

}



const profitsList = [60000, 70000, 75000, 80000, 85000];
const totalInvest = 500000;
const profitRate = averageRateOfProfit(profitsList, totalInvest );

console.log(profitRate);

