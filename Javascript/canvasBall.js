var canvasBouncing = document.getElementById("bouncing");
function getPosition(){
    var tjenester = document.getElementById("tjenester");
    const position = tjenester.getBoundingClientRect();
    var width = tjenester.offsetWidth;
    var height = tjenester.offsetHeight;
    canvasBouncing.style.position = "absolute";
    canvasBouncing.style.top = "140%";
    canvasBouncing.style.zIndex = "-1";
    canvasBouncing.width = width;
    canvasBouncing.height = height*0.75;  
    //canvasBouncing.style.border = "1px solid black";  
    }
    getPosition();
    var cBouncing = canvasBouncing.getContext("2d");
    var circleAmount = 6;

window.addEventListener("resize", resizer);

function resizer(){
    circleArray = [];
    getPosition(); 
    leggTilSirkel(); 
}

function Circle(a, d, ax, dy, radius) { 
    this.a = a;
    this.d = d;
    this.ax = ax;
    this.dy = dy;
    this.radius = radius;

// tegner sirkel i canvas
    this.draw = function() {      
        cBouncing.beginPath();
        cBouncing.arc(this.a , this.d, this.radius, 0, Math.PI * 2, false );
        //c.lineWidth = 1
<<<<<<< HEAD
        cBouncing.fillStyle = "#fcc201";
=======
        cBouncing.fillStyle = "#E9B56A";
>>>>>>> e8daf56aeabc6ca824564e460156cd609025fc4e
        cBouncing.strokeStyle = "white";
        
        
        cBouncing.fill();
        cBouncing.stroke(); 
/*
        c.beginPath()
        c.arc(this.a, this.d,this.radius-10,0,Math.PI * 2,false);
        c.shadowColor='black';
        c.shadowBlur = 10
        c.fillStyle = "#ff6600";
       
        c.fill();
       // c.stroke();
    */
    }

// setter argumenter for hva som skjer når sirklene treffer sidene
    this.update =  function() {

        //Hvis ball treffer vegg
        if (this.a + this.radius > canvasBouncing.width || this.a - this.radius <= 0) {
            this.ax = -this.ax;
        }
        // Hvis ball treffer taket
         if ( this.d - this.radius <= 0) {
          this.dy = -this.dy;
      }
      // Hvis ball treffer bunnen
        if ( this.d + this.radius > canvasBouncing.height) {
        this.dy = -this.dy;
        
         
        }
         
        this.a += this.ax;
        this.d += this.dy;

        this.draw();
    }
   
}

var circleArray = [];

// setter posisijon, størrelse og bevegelsesfart til sirkel 
function leggTilSirkel(){
for (i = 0; i < circleAmount; i++){
var radius = 30;
var a = Math.random() * (canvasBouncing.width - radius * 2) + radius;
var d = Math.random() * (canvasBouncing.height - radius * 2) + radius;
var ax = (Math.random() - 0.5)*0.5;
var dy = (Math.random() - 0.5)*0.5;
circleArray.push(new Circle(a, d, ax, dy, radius));
}}
leggTilSirkel();

function animate() {
    requestAnimationFrame(animate);  
    cBouncing.clearRect(0, 0, innerWidth, innerHeight); 
       
    // Oppdaterer sirklene 
    for (i = 0; i < circleAmount  ; i++){ 
        circleArray[i].update();  
    }
    }
  
 
animate();
    
   
  




