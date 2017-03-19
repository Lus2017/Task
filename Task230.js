function CheckNumbers(numArr,k){
    mult=1;
    posCount=0;
    for( var i=1;i<numArr.length;i++){
        if (numArr[i]%k==0) {
            posCount++;
            mult*=numArr[i];

        }
    }
    alert(mult/posCount);
}
CheckNumbers([0,5,2,7,17,16,64,8],8);