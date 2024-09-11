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


