
var i;
var out = document.getElementById("foot");
var args = ["Brobekkveien 80A, 0582 TRD", "910 03 270 | 922 16 042", "post@mejmimedia.no", "© 2020 | MEJMI • All rights reserved"];
var kilde = ["./Images/footer/FACE_gul.png", "./Images/footer/INSTA_gul.png", "./Images/footer/LINKEDIN_gul.png", "./Images/footer/TWITTER_gul.png"];
var referanse = ["https://www.facebook.com/MEJMI-webdesign-113757423838059", "https://www.instagram.com/mejmi_webdesign/", "https://www.linkedin.com/in/mejmi-webdesign-2665841b8/", "https://www.twitter.com"];
function displayArgs() {
    "use strict";
    for (i = 0; i < args.length -1; i++) {
        out.appendChild(document.createTextNode(args[i]));
        out.appendChild(document.createElement("br"));
        out.appendChild(document.createElement("br"));
    }

    var a = document.createElement('a');   
    var link = document.createTextNode("Kontakt oss"); 
    a.appendChild(link);  
    a.title = "Til kontaktsiden";  
    a.href = "";  
    out.appendChild(a);
    out.appendChild(document.createElement("br"));
    out.appendChild(document.createElement("br"));

    for (i = 0; i < 4; i++){
   	var a = document.createElement('a');   
    var link = document.createElement("img");
    link.src = (kilde[i]);
    link.className = "facelink";
    a.appendChild(link);
    a.href = (referanse[i]);
    a.target= "_blank";
    out.appendChild(a);
    }

    out.appendChild(document.createElement("br"));
    out.appendChild(document.createElement("br"));
    out.appendChild(document.createTextNode(args[args.length-1]));
}
displayArgs(args);


