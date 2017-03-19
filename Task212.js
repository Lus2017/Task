function CheckNumbers(numArr){
    var mult=1;
    var posCount=0;
    for( var i=1;i<numArr.length;i++){
        if (numArr[i]>0) {
            posCount++;
            mult*=numArr[i];
        }
    }
    alert(mult/posCount);
}
CheckNumbers([1,-15,35,-65,5,-12,12])