var acc=document.getElementsByClassName("accardion");
var i;
for(i=0;i<acc.length;i++){
    acc[i].onclick=function(){
        this.classList.toggle("accardion");
        this.nextElementSibling.classList.toggle("panel");
    }
}