function CheckNumbers(numArr){
    mult=1;
    for( var i=1;i<numArr.length;i++){
        if ((numArr[i]-i)>0) {
            mult*=numArr[i];

        }
    }
    alert(mult);
}
CheckNumbers([0,5,2,7,17,16,64,8]);