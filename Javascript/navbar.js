
// Henter section-element som linkene ligger i, og henter spesifikt canvas-element
const linker = document.getElementById("links");
const canvas = document.getElementById("navbar");
const canvasClick = document.getElementById("canvasPosition");
// Liste til å store linjene til navBar
var canvasLines = [];
// Kan evt ta vekk denne funksjonen og gjøre de hidden i vanlig css
// farge på navbar
colorNavbar = "#03394f";


function canvasNavbar(){

ferdigAnimert = 0;
canvas.style.position = "fixed";
canvas.style.top = "3%";
canvas.style.right = "3%";
canvas.width = (window.innerWidth *0.03);
canvas.height = (window.innerWidth *0.0385);
console.log(canvas.height)
//canvas.style.border = "1px solid black";

gigg = parseInt((canvas.height/3.93));
console.log("gigg:", gigg);

for (i=1; i <= 3; i++){
    var fromX = 0;
    var fromY = canvas.height - (canvas.height-(gigg*i));
    var toX = canvas.width;
    var toY = fromY;
    drawLine(fromX, fromY, toX, toY);
    canvasLines.push(new drawLine(fromX, fromY, toX, toY));
}

}
const c = canvas.getContext("2d");
canvasNavbar()
// Tegner de tre linjene, og legger hver linje inn i liste
function drawLine(fromX, fromY, toX, toY) {
    this.fromX = fromX;
    this.fromY = fromY;
    this.toX = toX;
    this.toY = toY;
// using lineTo() three times so color of lines become stronger
    this.drawLines = function(){
        c.beginPath();
        c.moveTo(fromX, fromY);
        c.lineTo(toX, toY);
        c.lineTo(fromX, fromY);
        c.lineTo(toX, toY);
        c.strokeStyle = colorNavbar;
        c.stroke();
    }
    this.drawLines();
// Nødvendige booleans slik at ikke linjene blir stuck midt i animasjon
    var booleanX = true;
    var booleanY = true;
// Får hver linje i navbaren til å spinne 180 grader
    var speed = 5;
    this.updateNavbar = function(){  
       
       if (i==1 && speedx2){
           speed = speed*1.387;
           speedx2 = false;
       }
        if ((fromY > 0 && toY < canvas.height) && booleanY == true){
            
            fromY -= speed;
            toY += speed;
            }
        
        else if ( fromX < canvas.width  && toX > 0  && booleanX == true){
            fromX += speed;
            toX -=speed;
        }
        else if ( fromY < canvas.height && toY > 0){
            booleanY = false;
            fromY += speed;
            toY -= speed;
        }
        else if ( toX > canvas.width && fromX < 0){
            booleanX = false;
            fromX -= speed;
            toX += speed;
        }
        this.drawLines();

    // SLik at de slutter å spinne etter 180 grader
    // om dette stemmer er y-veridene i nøyaktig samme y-verdi som de ble satt i fra start.
        if (fromY == toY ){
            
            ferdigAnimert += 1;
            return; 
        }    
    } 
}
var check = 0
window.addEventListener("scroll", backgroundLink);

window.addEventListener("resize", resize);

function resize(){
    canvasLines = [];
    canvasNavbar();
}

function backgroundLink(){
        linker.style.backgroundColor = "rgba("+255+","+255+","+255+","+0.95+")";
        linker.style.transition = "0,25s";


}

//window.addEventListener("resize", resize());


// klikker på navbaren, og animasjon til linker og navbar blir satt i gang
canvas.addEventListener("click", transformLinks);
// Holder styr på om linkene er gjemt eller ikke
window.hidden = true;
function transformLinks(){
        console.log(canvas)
    if (window.hidden){
        window.hidden = false;
        for (i=1; i < linker.children.length; i++){
            linker.children[i].style.marginLeft = "11%";
            linker.children[i].style.visibility = "visible";
            linker.children[i].style.opacity = "100";
            linker.children[i].style.transition = "0.35s";
        }   
    }
    else if (window.hidden == false){
        linker.style.backgroundColor = "";
        window.hidden = true;
        for (i=1; i < linker.children.length-1; i++){
            linker.children[i].style.marginLeft = "14%";
            linker.children[i].style.visibility = "hidden";
            linker.children[i].style.opacity = "0";
            linker.children[i].style.transition = "0.35s";
        }    
    }
// boolean for å bestemme om navbar-animasjon skal kjøre eller ikkex
    navbarBool = true;
    speedx2 = true;
    rotateNavbar();
}

// Setter i gang animasjon til navbar
function rotateNavbar(){
   console.log("hmm")
// settes true hver gang navbar blir klikket på
    if (navbarBool == true){
        requestAnimationFrame(rotateNavbar);
        c.clearRect(0, 0, innerWidth, innerHeight); 
        check += 1
        for (i=0; i < canvasLines.length; i++){
            
            canvasLines[i].updateNavbar();
            if (ferdigAnimert >= 3){
                
                navbarBool = false;
                canvasLines = [];
                canvasNavbar()
                return;
            }
        }
    }
}

