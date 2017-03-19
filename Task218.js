function CheckNumbers(numArr){
    var sum=0;
    for( var i=1;i<numArr.length;i++){
        if (numArr[i]%2==1 && numArr[i]>0) {
            sum+=numArr[i];
        }
    }
    alert(sum);
}
CheckNumbers([1,5,31,17,-7,-11,12]);