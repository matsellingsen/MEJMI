// Henter section-element som linkene ligger i, og henter spesifikt canvas-element
const linker = document.getElementById("links");
const canvas = document.getElementById("navbar");
const c = canvas.getContext("2d");
// Liste til å lagre linjene til navBar
    var canvasLines = [];
// Funksjon for å tegne navbar når nettside er stor
    function canvasNavbar(){
        ferdigAnimert = 0;
        canvas.style.position = "fixed";
        canvas.style.top = "1vw";
        canvas.style.right = "3vw";
        canvas.width = (window.innerWidth *0.03);
        canvas.height = (window.innerWidth *0.0385);
        AvstandLinjer = parseInt((canvas.height/3.93));
        for (i=1; i <= 3; i++){
            var fromX = 0;
            var fromY = canvas.height - (canvas.height-(AvstandLinjer*i));
            var toX = canvas.width;
            var toY = fromY;
            drawLine(fromX, fromY, toX, toY);
            canvasLines.push(new drawLine(fromX, fromY, toX, toY));
        }
    }
// Funksjon som tegner linjene til navbar, oppdaterer x og y posisjonene til 
// linjene i navbar slik at de roterer
    function drawLine(fromX, fromY, toX, toY) {
        this.fromX = fromX;
        this.fromY = fromY;
        this.toX = toX;
        this.toY = toY;
    // bruker lineTo() tre ganger slik at linjene blir kraftigere
        this.drawLines = function(){
            c.beginPath();
            c.moveTo(fromX, fromY);
            c.lineTo(toX, toY);
            c.lineTo(fromX, fromY);
            c.lineTo(toX, toY);
            c.strokeStyle = "#03394f";
            c.stroke();
        }
        this.drawLines();
    // Nødvendige booleans slik at ikke linjene blir stuck midt i animasjon
        var booleanX = true;
        var booleanY = true;
        // Animasjonshastighet
            var speed = 5;
    // Får hver linje i navbaren til å spinne 180 grader, dette er funksjonen som blir callet
    // hver gang navbaren blir trykket på
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
// Funksjon for å tegne navbar når nettside er liten
    function petiteNavbar(){
    ferdigAnimert = 0;
    canvas.style.position = "fixed";
    canvas.style.top = "1vw";
    canvas.style.right = "10vw";
    // Størrelseforholdet mellom canvas-størrelsen og navbar-linjene blir bittelitt fakket
    // Når bredden blir mindre enn 420, så da løser jeg det simpelt med å gjøre størrelsene
    // statisk på under 420 bredde.
        if(window.innerWidth > 420){
            canvas.width = (window.innerWidth *0.03*2);
            canvas.height = (window.innerWidth *0.0385*2);
            gigg = parseInt((canvas.height/3.93));
        }
        else{
            canvas.width = 25;
            canvas.height = 32;
            gigg = 8;
        }
        for (i=1; i <= 3; i++){
            var fromX = 0;
            var fromY = canvas.height - (canvas.height-(gigg*i));
            var toX = canvas.width;
            var toY = fromY;
            drawLine(fromX, fromY, toX, toY);
            canvasLines.push(new drawLine(fromX, fromY, toX, toY));
        }
    }
// funksjoner til å posisjonerer linkene når nettsiden er liten
    function petiteHideLinks(){
        for (i=1; i < linker.children.length-1; i++){
            if (i > 1 && i < 3){
                i = 3;
            }
            linker.children[i].style.visibility = "hidden";
        }  
        window.hidden = true;  
    }
    linkerPosPetite = ["", "8%", "", "13%", "16%", "19%"]
    function petiteShowLinks(){
        linker.style.backgroundColor = "rgba("+255+","+255+","+255+","+0.95+")";
        for (i=1; i < linker.children.length-1; i++){
            if (i > 1 && i < 3){
                i = 3;
            }
            if (i == 1){
                linker.children[i].style.paddingTop = "2%"; 
            }
            linker.children[i].style.marginTop = linkerPosPetite[i];
            linker.children[i].style.fontSize = "2vw";
            linker.children[i].style.paddingBottom = "2%"; 
            linker.children[i].style.marginLeft = "0%";
            linker.children[i].style.textAlign = "center";
            linker.children[i].style.width = "100%";
            linker.children[i].style.visibility = "visible";
            linker.children[i].style.opacity = "100";
            linker.children[i].style.transition = "0s";
            linker.children[i].style.backgroundColor = "#03394f";
            linker.children[i].style.color = "white";
        }    
        window.hidden = false;  
    }
// Funksjoner til å posisjonerer linkene når nettside er stor
    linkerPosGrandHidden = [" ","26vw", " ", "44vw", "62vw", "80vw"]
    function grandHideLinks(){
        for (i=1; i < linker.children.length-1; i++){
            if (i > 1 && i < 3){
                i = 3;
            }
            linker.children[i].style.backgroundColor = "";
            linker.children[i].style.fontSize = "1,5vw";
            linker.children[i].style.marginLeft = linkerPosGrandHidden[i]
            linker.children[i].style.marginTop = "0";
            linker.children[i].style.visibility = "hidden";
            linker.children[i].style.opacity = "0";
            linker.children[i].style.paddingTop = "0";
            if (transition){
                linker.children[i].style.transition = "0.35s";
            }    
        }   
        transition = true;
        window.hidden = true; 
    }
    linkerPosGrand = [" ","24vw", " ", "42vw", "60vw", "78vw"]
    function grandShowLinks(){
        for (i=1; i < linker.children.length-1; i++){
            if (i > 1 && i < 3){
                i = 3;
            }
            linker.children[i].style.paddingTop = "0";
            linker.children[i].style.marginLeft = linkerPosGrand[i]
            linker.children[i].style.backgroundColor = "";
            linker.children[i].style.visibility = "visible";
            linker.children[i].style.opacity = "100";
            linker.children[i].style.fontSize = "1.5vw";
            linker.children[i].style.marginTop = "0";
            linker.children[i].style.textAlign = "";
            linker.children[i].style.width = "";
            linker.children[i].style.color = "#03394f";
            if (transition){
                linker.children[i].style.transition = "0.35s";
            }
        } 
        transition = true;  
        window.hidden = false;
    }
// BOOLEANS SOM NAVIGERER TIL RIKTIG VALG I EVENTLISTENERS OG FUNKSJONER
    // Boolean holder styr på at det er transition på linkene når navbar blir klikket
    // Men ikke når vindu bli f.eks resizet
        var transition = true;
    // Holder styr på om linkene er gjemt eller ikke
        window.hidden = true;
    // Boolean for at navbar ikke kan klikkes midt i animasjon
        var midAnimasjon = true;
    // Stopper og starter animasjonen til navbar
        var navbarBool = false;
    // Den miderste streken i navbaren får en lengre linje å rotere 180 grader, og trenger derfor å roteres
    // raskere. speedx2 holder styr på at BARE den miderste linjen roteres raskere
        var speedx2 = true;
// EVENTLISTENERS
    // DROPDOWNBAR MUOUSEOVER
        var tjenesterLink = document.getElementById("drop");
        var dropdownBar = document.getElementById("dropdown");
        tjenesterLink.addEventListener("mouseover", dropdown);
            function dropdown(){
                if (window.innerWidth >= 850){
                linker.children[1].style.transition = "0s";
                linker.children[1].style.color = "white"
                dropdownBar.style.opacity = "95%";
            }}
    // DROPDOWNBAR MOUSELEAVE
        dropdownBar.addEventListener("mouseleave", dropout);
        function dropout(){
            linker.children[1].style.color = "#03394f";
            dropdownBar.style.opacity = "0%";
        }
    // WINDOW RESIZE
        var logo = document.getElementById("logo");
        window.addEventListener("resize", resize);
        function resize(){
            linker.children[1].style.color = "#03394f";
            dropdownBar.style.opacity = "0%";
            transition = false;
            if (window.innerWidth < 850){
                logo.style.marginTop = "0.5vw";
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
            else{ 
                logo.style.marginTop = "-0.5vw";
                logo.style.fontSize = "2.5vw";
                logo.style.left = "2vw";
                linker.style.height = "6vw";
                linker.children[1].style.color = "#03394f";
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
        // kjører resize når vinudet blir loadet, slik at riktig navbar blir laget (petite/grand);
           resize();
    // WINDOW SCROLL
        window.addEventListener("scroll", backgroundLink);
        function backgroundLink(){
                linker.children[1].style.color = "#03394f";
                dropdownBar.style.opacity = "0%"; 
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
    // NAVBAR CLICK
        canvas.addEventListener("click", transformLinks);
        function transformLinks(){
            if (window.innerWidth < 850){   
                if (midAnimasjon){
                    if (window.hidden){
                        petiteShowLinks();
                    }
                    else{
                        petiteHideLinks();
                    }
                    navbarBool = true;
                    speedx2 = true;
                    midAnimasjon = false;   
                    rotateNavbar();
                }
            }
            else{
                if (midAnimasjon){
                    dropdownBar.style.opacity = "0%";
                    if (window.hidden){
                        grandShowLinks();
                    }
                    else{
                        linker.style.backgroundColor = "";
                        grandHideLinks();
                    }
                    navbarBool = true;
                    speedx2 = true;
                    midAnimasjon = false;
                    rotateNavbar();
                }
            }
        }
// Funksjon for å rotere navbar 180 grader
    function rotateNavbar(){ 
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

