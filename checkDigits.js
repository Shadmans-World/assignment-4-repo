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
