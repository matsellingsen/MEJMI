let nDesign = document.getElementById("tjenester_nDesign");
let gprofil = document.getElementById("tjenester_gProfil");
let seo = document.getElementById("tjenester_SEO");

nDesign.addEventListener("mouseover", storre);
gprofil.addEventListener("mouseover", storre);
seo.addEventListener("mouseover", storre);

nDesign.addEventListener("mouseout", mindre);
gprofil.addEventListener("mouseout", mindre);
seo.addEventListener("mouseout", mindre);



function storre() {
    this.style.transform = "scale(1.06)";
    this.style.transition = "0.3s";
}

function mindre() {
    this.style.transform = "scale(1)";
    this.style.transition = "0.3s";

}

