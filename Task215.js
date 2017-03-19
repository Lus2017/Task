
function CheckNumbers(numArr){
    var sum=0;
    for( var i=2;i<numArr.length;i++){
        if (numArr[i]%2==0) {
            sum+=numArr[i];
        }
    }
    alert(sum);
}
CheckNumbers([1,-15,36,-65,5,14,12]);