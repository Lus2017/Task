function CheckNumbers(numArr,t){
    mult=1;
    for( var i=1;i<numArr.length;++i){
        if (numArr[i]>=0 && numArr[i]<t) {
            mult*=numArr[i];
        }
    }
    alert(mult);
}

CheckNumbers([0,5,2,7,17,16,18,9],8);