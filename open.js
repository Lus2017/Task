var modal=document.getElementById("myModal");
var btn=document.getElementById("btn");
var span=document.getElementsByClassName("close")[0];
var img=document.getElementById("img");
btn.onclick=function() {
    modal.style.display="block";
}
span.onclick=function(){
    modal.style.display="none";
}
img.onclick=function(){
    modal.style.display="none";
}
