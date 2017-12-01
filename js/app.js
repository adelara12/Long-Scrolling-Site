var canvas= document.getElementById("canvas");
var counter= document.getElementById("counter");
var submarine= document.getElementById("submarine");

window.onscroll = function(){

  var y = window.pageYOffset;

    console.log(y);

    counter.style.top = 400 + y + .97 + "px";

    counter.innerHTML = y + "px and also" + 400 + y + .97 + "px";

    submarine.style.top = 400 + y + .97 + "px";



    if(y>2000){counter.style.backgroundColor = "green";}
    if(y<2000){counter.style.backgroundColor = "blue";}

  };
