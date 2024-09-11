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





function sendNotification(email){

    let initialEmail = email;

    for(i=0; i<initialEmail.length; i++){
        if(initialEmail[i]==='@'){
            let middleEmail = initialEmail.split('@');
            return `${middleEmail[0]} sent you an email from ${middleEmail[1]}` ;  
        }
      
    }
    return 'Invalid Email';

}







function checkDigitsInName(name) {
    const strings = name;
    var string = '';
    var array = [];
    if(typeof strings === 'string'){
        for( string of strings){
            array.push(string);
            for(var i = 0; i<array.length ; i++){
                if(array[i]>0){
                    return true;
                }   
            }   
       }
    }
   else{
    return 'Invalid Input';
   }

   return false;

}








function calculateFinalScore(obj) {
    var { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof obj === 'object') {
        if (typeof name === 'string' && typeof testScore === 'number' && typeof schoolGrade === 'number' && typeof isFFamily === 'boolean' && testScore <= 50 && schoolGrade <= 30) {
            if (isFFamily === true && testScore + schoolGrade + 20 >= 80) {
                    return true;
            } 
            
         else {
            return false;
        }
    }
}
    
        return 'Invalid Input';
    
}







function  waitingTime(waitingTimes  , serialNumber) {
    length = waitingTimes.length;
    var sum = 0;
    if(Array.isArray(waitingTimes) && typeof serialNumber === 'number'){
        for(var i=0; i < waitingTimes.length; i++){
            sum = sum + waitingTimes[i]; 
        }
        var avg = sum / length;
       avg = Math.round(avg);
       
        var memberLeft = (serialNumber - length) - 1;
        
        var leftTime = memberLeft * avg ;
        
        return leftTime;

    }
    return 'Invalid Input';
}