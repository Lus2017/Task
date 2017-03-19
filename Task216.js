
function CheckNumbers(numArr){
    var mult=1;
    for( var i=2;i<numArr.length;i++){
        if (numArr[i]%2==0) {
            mult*=numArr[i];
        }
    }
    alert(mult);
}
CheckNumbers([1,-15,36,-65,5,-14,12]);