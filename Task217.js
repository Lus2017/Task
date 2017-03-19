function CheckNumbers(numArr){
    var sum=0;
    for( var i=1;i<numArr.length;i++){
        if (numArr[i]%2==1) {
            sum+=(numArr[i]*numArr[i]);
        }
    }
    alert(sum);
}
CheckNumbers([1,5,36,17,7,-14,12]);