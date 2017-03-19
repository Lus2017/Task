function CheckNumbers(numArr,a,b){
    sum=0;
    for( var i=0;i<numArr.length;i++){
        if (numArr[i]>=a && numArr[i]<=b) {
            sum+=numArr[i];
        }
    }
    alert(sum);
}

CheckNumbers([0,5,30,17,16],8,18);