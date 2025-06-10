
/* =====================================================
   ------ An Ideal Example of Callback Function --------
   ===================================================== */

   const totalMoney = (depositOne, depositTwo, interest) => {
    
    const totalDepositAmount = depositOne + depositTwo ;
    const profit = interest(totalDepositAmount);
    return totalDepositAmount + parseFloat(profit) ;
  }
  
  
  const totalInterest = totalDeposit => {
    const interestRate = 7 / 100 ; // Suppose Interest Rate is 7 %
    return (totalDeposit*interestRate).toFixed(2);
  };
  
  
  const grandTotal = totalMoney(900, 1100, totalInterest);
  
  console.log(grandTotal);

  