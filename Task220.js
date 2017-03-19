function CheckNumbers(numArr){
    Count=0;
    for( var i=0;i<numArr.length;i++){
        if (numArr[i]>0) {
            Count++;
        }
    }
    for( var j=0;j<numArr.length;j++){
        if (numArr[j]<0) {
            Count++;
        }
    }
    alert(Count);
}

CheckNumbers([0,5,30,17,-8,-11,12,-6,-8,12]);