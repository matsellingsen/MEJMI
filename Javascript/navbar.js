
// Henter section-element som linkene ligger i, og henter spesifikt canvas-element
const linker = document.getElementById("links");
const canvas = document.getElementById("navbar");
const canvasClick = document.getElementById("canvasPosition");
// Liste til å store linjene til navBar
var canvasLines = [];
// Kan evt ta vekk denne funksjonen og gjøre de hidden i vanlig css
// farge på navbar
colorNavbar = "#03394f";
// necessary things to be set on window.onload



function canvasNavbar(){
ferdigAnimert = 0;
canvas.style.position = "fixed";
canvas.style.top = "1vw";
canvas.style.right = "3vw";
canvas.width = (window.innerWidth *0.03);
canvas.height = (window.innerWidth *0.0385);

//canvas.style.border = "1px solid black";

gigg = parseInt((canvas.height/3.93));

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

function petiteNavbar(){
ferdigAnimert = 0;
canvas.style.position = "fixed";
canvas.style.top = "1vw";
canvas.style.right = "10vw";
canvas.width = (window.innerWidth *0.03*2);
canvas.height = (window.innerWidth *0.0385*2);
gigg = parseInt((canvas.height/3.93));

for (i=1; i <= 3; i++){
    var fromX = 0;
    var fromY = canvas.height - (canvas.height-(gigg*i));
    var toX = canvas.width;
    var toY = fromY;
    drawLine(fromX, fromY, toX, toY);
    canvasLines.push(new drawLine(fromX, fromY, toX, toY));
}
}
function petiteHideLinks(){
    for (i=1; i < linker.children.length-1; i++){
        if (i > 1 && i < 3){
            i = 3;
        }
        if (i == 1){
            linker.children[i].style.paddingTop = "0%"; 
            linker.children[i].style.marginTop = "4%";
        }
        else if(i==3){
            linker.children[i].style.marginTop = "8%";
        }
        else if (i == 4){
            linker.children[i].style.marginTop = "12%";
        }
        else if (i == 5){
            linker.children[i].style.marginTop = "16%";
        }
        
        linker.children[i].style.marginLeft = "";
       // linker.children[i].style.margin = "auto";
       
        linker.children[i].style.visibility = "hidden";
        linker.children[i].style.opacity = "0";
        linker.children[i].style.transition = "0s";
        linker.children[i].style.backgroundColor = "";
    }  
    window.hidden = true; 
    navbarClick = false;    
}
function petiteShowLinks(){
    linker.style.backgroundColor = "rgba("+255+","+255+","+255+","+0.95+")";
  
    linker.style.transition = "0,25s";
    for (i=1; i < linker.children.length-1; i++){
        if (i > 1 && i < 3){
            i = 3;
        }
        if (i == 1){
            linker.children[i].style.paddingTop = "2%"; 
            linker.children[i].style.marginTop = "8%";
        }
        else if(i==3){
            linker.children[i].style.marginTop = "13%";
        }
        else if (i == 4){
            linker.children[i].style.marginTop = "16%";
        }
        else if (i == 5){
            linker.children[i].style.marginTop = "19%";
        }
       // linker.children[i].style.paddingTop = "2%"; 
        linker.children[i].style.fontSize = "2vw";
        linker.children[i].style.paddingBottom = "2%"; 
        linker.children[i].style.marginLeft = "0%";
        linker.children[i].style.textAlign = "center";
       // linker.children[i].style.margin = "auto";
        linker.children[i].style.width = "100%";
        linker.children[i].style.visibility = "visible";
        linker.children[i].style.opacity = "100";
        linker.children[i].style.transition = "0s";
        linker.children[i].style.backgroundColor = "#03394f";
        linker.children[i].style.color = "white";
    }    
    window.hidden = false; 
    navbarClick = true; 
}

function grandHideLinks(){
    for (i=1; i < linker.children.length-1; i++){
        if (i > 1 && i < 3){
            i = 3;
        }
       // linker.children[i].style.margin = "";
        if (i == 1){
            linker.children[i].style.marginLeft = "26vw";
        }
        else if(i==3){
            linker.children[i].style.marginLeft = "44vw";
        }
        else if (i == 4){
            linker.children[i].style.marginLeft = "62vw";
        }
        else if (i == 5){
            linker.children[i].style.marginLeft = "80vw";
        }
        
        linker.children[i].style.visibility = "hidden";
        linker.children[i].style.opacity = "0";
        linker.children[i].style.marginTop = "0";
        if (transition){
            linker.children[i].style.transition = "0.35s";
        }
        
    }   
    transition = true;
    window.hidden = true; 
    navbarClick = false;
}

function grandShowLinks(){
    for (i=1; i < linker.children.length; i++){
        if (i > 1 && i < 3){
            i = 3;
        }
       // linker.children[i].style.margin = "";
    // Gjorde linkene position: absolute, så da må posisjoneringen gjøres slik..:
        if (i == 1){
            linker.children[i].style.paddingTop = "0%"; 
            linker.children[i].style.marginLeft = "24vw";
        }
        else if(i==3){
            linker.children[i].style.marginLeft = "42vw";
        }
        else if (i == 4){
            linker.children[i].style.marginLeft = "60vw";
        }
        else if (i == 5){
            linker.children[i].style.marginLeft = "78vw";
        }
        linker.style.backgroundColor = "";
        linker.children[i].style.backgroundColor = "";
        linker.children[i].style.visibility = "visible";
        linker.children[i].style.opacity = "100";
        linker.children[i].style.fontSize = "1.5vw";
        linker.children[i].style.marginTop = "0";
        linker.children[i].style.textAlign = "";
        // linker.children[i].style.margin = "auto";
        linker.children[i].style.width = "";
        linker.children[i].style.color = "#03394f";
        if (transition){
            linker.children[i].style.transition = "0.35s";
        }
     
    } 
    transition = true;  
    window.hidden = false;
    navbarClick = true;
}
//var check = 0
/*
linker.children[1].addEventListener("click", lillScroll);
function lillScroll(){
    var tjenester = document.getElementById("tjenester");
    var dest = tjenester.offsetHeight*0.90;
    window.scrollTo(0, 300);
   
    window.scroll({
        top: dest,
        behavior: 'smooth',
      }
      )
}
*/
// Eventlisteners
    var hover = document.getElementById("drop");
    var dropdownBar = document.getElementById("dropdown");
    hover.addEventListener("mouseover", dropdown);
    function dropdown(){
        if (window.innerWidth >= 850){
        dropdownBar.style.opacity = "95%";
    }}

    dropdownBar.addEventListener("mouseleave", dropout);
    function dropout(){
        dropdownBar.style.opacity = "0%";
    }

    var logo = document.getElementById("logo");
    window.addEventListener("resize", resize);
    var transition = true;
    function resize(){
        transition = false;
        if (window.innerWidth < 850){
            logo.style.fontSize = "5vw";
            logo.style.left = "10vw";
            linker.style.height = "10vw";
            if (window.hidden){
                linker.style.backgroundColor = "";
                petiteHideLinks();
            }
            else{
                linker.style.backgroundColor = "rgba("+255+","+255+","+255+","+0.95+")";
                petiteShowLinks();
            }
           
            canvasLines = [];
            petiteNavbar();
        }
        else if (window.innerWidth >= 850){ 
            logo.style.fontSize = "2.5vw";
            logo.style.left = "2vw";
            linker.style.height = "6vw";
            dropdownBar.style.opacity = "0%";
            if (window.hidden){
                grandHideLinks();
            }
            else{
                grandShowLinks();
            }
            canvasLines = [];
            canvasNavbar();
        }
        
    }
    
    window.addEventListener("scroll", backgroundLink);
    function backgroundLink(){
            if(window.scrollY==0){
                linker.style.backgroundColor = "";
                linker.style.transition = "0,25s";
     
            }
            else{
                linker.style.backgroundColor = "rgba("+255+","+255+","+255+","+0.95+")";
                linker.style.transition = "0,25s";
            }
            if (window.innerWidth < 850){
               petiteHideLinks();
            }
           
    }
    // klikker på navbaren, og animasjon til linker og navbar blir satt i gang
        canvas.addEventListener("click", transformLinks);


// Holder styr på om linkene er gjemt eller ikke
    window.hidden = true;
// kjører resize når vinudet blir loadet, slik at riktig navbar blir laget (petite/grand);
    resize();
// Boolean for at navbar ikke kan klikkes midt i animasjon
    midAnimasjon = true;
   // navbarClick = true;
function transformLinks(){
    if (window.innerWidth < 850){
        dropdownBar.style.opacity = "0%";
    if (midAnimasjon){
        if (window.hidden){
            navbarClick = true;
            petiteShowLinks();
        }
        else if (window.hidden == false){
            window.hidden = true;
            console.log("hmmmm")
           // navbarClick = false;
            linker.style.backgroundColor = "";
            petiteHideLinks();
           
        }
    // boolean for å bestemme om navbar-animasjon skal kjøre eller ikkex
        navbarBool = true;
        speedx2 = true;
        midAnimasjon = false;
        
        rotateNavbar();
    }}

    else{
    dropdownBar.style.opacity = "0%";
    if (midAnimasjon){
        if (window.hidden){
            navbarClick = true;
            grandShowLinks();
        }
        else if (window.hidden == false){
            linker.style.backgroundColor = "";
            grandHideLinks();
           
        }
    // boolean for å bestemme om navbar-animasjon skal kjøre eller ikkex
        navbarBool = true;
        speedx2 = true;
        midAnimasjon = false;
        
        rotateNavbar();
    }
}
}

// Setter i gang animasjon til navbar
function rotateNavbar(){ 
// settes true hver gang navbar blir klikket på
    if (navbarBool == true){
        requestAnimationFrame(rotateNavbar);
        c.clearRect(0, 0, innerWidth, innerHeight); 
        for (i=0; i < canvasLines.length; i++){
            
            canvasLines[i].updateNavbar();
            if (ferdigAnimert >= 3){
                midAnimasjon = true;
                navbarBool = false;
                canvasLines = [];
                if (window.innerWidth < 850){
                    petiteNavbar();
                }
                else{
                canvasNavbar()
                }
                return;
            }
        }
    }
}

