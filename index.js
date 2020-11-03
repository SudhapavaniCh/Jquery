for(i=0;i<6;i++){
document.querySelectorAll("button")[i].addEventListener("keypress",function(e){
 console.log(e);
});
}


$("document").keypress(function(event){
$("h1").text(event.key);
});