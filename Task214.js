function CheckNumbers(numArr){
    var sum=0;
    var bacCount=0;
    for( var i=0;i<numArr.length;i++){
        if (numArr[i]<0) {
            bacCount++;
            sum+=numArr[i];
        }
    }
    alert(sum/bacCount);
}
CheckNumbers([1,-15,35,-65,5,-12,12]);