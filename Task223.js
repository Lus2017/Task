function CheckNumbers(numArr,a,b){
    Count=0;
    for( var i=0;i<numArr.length;i++){
        if (numArr[i]>a && numArr[i]<b) {
            Count++;
        }
    }
    alert(Count);
}

CheckNumbers([0,5,30,17,16,8,18,9],8,18);