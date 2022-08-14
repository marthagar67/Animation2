var id = null;
        function myMove() {
            var elem = document.getElementById("myAnimation");
            var posx = 0; //posición en el eje x (horizontal)
            var posy = 0; //posición en el eye y (vertical)
            clearInterval(id);
            id = setInterval(frame, 10);
            function frame() {
                if (posx == 750) {
                    clearInterval(id);
                } else {
                    posx++; //se desplaza de a 1px en el eje horizontal
                    posy += 0.467; //se desplaza 0.467 unidades de un pixel en el eje vertical
                    elem.style.top = posy + 'px';
                    elem.style.left = posx + 'px';
                }
            }
        }
/*
var id = null;
function myMove(){
    var puppy = document.getElementById("puppy");
    var position = 0;

    clearInterval(id);
    id=setInterval(frame, 10);
    function frame() {
        if (position==800){
            clearInterval(id);
        }
        else {
            position += 1;
            puppy.style.left = position + "px";
            puppy.style.top = position + "px";
        }
    }
}
/*
function runPuppy() {
    var elem = document.getElementById("puppy");
    var y=200
    var x=0
    id = setInterval (runPuppy,100);
    let width = screen.availWidth;
    
    if (x < width) {
        x++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        var step=1;
        x=x+step;
        console.log(x);
        document.getElementById("puppy").style.left=x+"px"}
    
    else { 
        
    clearInterval(id);}
    
    }

    /*var id = null
    function myMove() {
    var elem = document.getElementById("puppy");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 100);
    
    function frame(){
        if (pos== 500){
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}*/
    
// add if it reaches the screen end (you can check with screen.availwidth)

