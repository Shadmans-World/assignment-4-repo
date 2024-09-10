function calculateTax(income, expense){
    let diff = 0;
    let tax = 0;
    
 if(income >= expense && income > 0 && expense > 0){
    
    diff = income - expense;
    tax = diff * .20 ;
    return tax;
 }

 else if(expense<0 || income<0 || expense>income){
    return 'Invalid Input'
    
 }

}

