function CheckNumbers(numArr,k){
    sum=0;
    for( var i=0;i<numArr.length;++i){
        if (numArr[i]>=0 && numArr[i]<k) {
            sum+=Math.pow(numArr[i],3);
        }
    }
    alert(sum);
}

CheckNumbers([0,5,2,17,16,18,9],8);