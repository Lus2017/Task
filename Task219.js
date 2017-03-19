function CheckNumbers(numArr,k){
    var mult=1;
    Count=0;
    for( var i=0;i<numArr.length;i++){
        if (numArr[i]%k==0) {
            Count++;
            mult*=numArr[i];
        }
    }
    alert(Count);
}

CheckNumbers([1,5,30,17,-8,-11,12],2);