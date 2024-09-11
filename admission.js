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



