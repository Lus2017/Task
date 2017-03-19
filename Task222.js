function CheckNumbers(numArr,c,d){
    mult=1;
    for( var i=0;i<numArr.length;i++){
        if (numArr[i]>=c && numArr[i]<d) {
            mult*=numArr[i];
        }
    }
    alert(mult);
}
CheckNumbers([0,5,30,17,16,8,18],8,18);