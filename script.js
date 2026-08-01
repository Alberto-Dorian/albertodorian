function compartir(){

if(navigator.share){

navigator.share({
title:"Baila Sin Control",
text:"Escucha el nuevo sencillo de Alberto Dorian",
url:window.location.href
});

}else{

navigator.clipboard.writeText(window.location.href);

alert("¡Link copiado!");

}

}
