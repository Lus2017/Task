function CheckNumbers(numArr,k){
    sum=0;
    for( var i=1;i<numArr.length;++i){
        if (numArr[i]%k==0) {
            sum+=numArr[i];
        }
    }
    alert(sum);
}

CheckNumbers([0,5,2,7,17,16,64,8],8);