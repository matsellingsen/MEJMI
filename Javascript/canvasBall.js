var canvas = document.querySelector('canvas');
   // canvas.style.border = "1px solid black";
    canvas.style.marginLeft = "30%";
    canvas.style.marginRight = "auto";
    
    canvas.width = 500;
    canvas.height = 500;    
var c = canvas.getContext("2d");
var circleAmount = 6;



function Circle(a, d, ax, dy, radius) { 
    this.a = a;
    this.d = d;
    this.ax = ax;
    this.dy = dy;
    this.radius = radius;

// tegner sirkel i canvas
    this.draw = function() {      
        c.beginPath();
        c.arc(this.a , this.d, this.radius, 0, Math.PI * 2, false );
        //c.lineWidth = 1
        c.fillStyle = "#ff6600";
        c.strokeStyle = "white";
        
        
        c.fill();
        c.stroke(); 
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
        if (this.a + this.radius > canvas.width || this.a - this.radius <= 0) {
            this.ax = -this.ax;
        }
        // Hvis ball treffer taket
         if ( this.d - this.radius <= 0) {
          this.dy = -this.dy;
      }
      // Hvis ball treffer bunnen
        if ( this.d + this.radius > canvas.height) {
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
var a = Math.random() * (canvas.width - radius * 2) + radius;
var d = Math.random() * (canvas.height - radius * 2) + radius;
var ax = (Math.random() - 0.5)*0.5;
var dy = (Math.random() - 0.5)*0.5;
circleArray.push(new Circle(a, d, ax, dy, radius));
}}
leggTilSirkel();

function animate() {
    requestAnimationFrame(animate);  
    c.clearRect(0, 0, innerWidth, innerHeight); 
       
    // Oppdaterer sirklene 
    for (i = 0; i < circleAmount  ; i++){ 
        circleArray[i].update();  
    }
    }
  
 
        
    animate();
    
   
  




