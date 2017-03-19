function CheckNumbers(numArr){
    var mult=1;
    var bacCount=0;
    for( var i=1;i<numArr.length;i++){
        if (numArr[i]<0) {
            bacCount++;
            mult*=numArr[i];
        }
    }
    alert(mult/bacCount);
}
CheckNumbers([1,-15,35,-65,5,-12,12]);