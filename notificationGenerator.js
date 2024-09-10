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

