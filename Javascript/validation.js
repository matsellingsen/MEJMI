function mailValidation() {
    let navn = document.getElementById("navn").value
    let email = document.getElementById("email").value
    let tlf = document.getElementById("tlf").value
    let melding = document.getElementById("melding").value
    let output = document.getElementById("output")


    if (navn ==="" && email==="" && tlf==="" && melding === "")  {
        output.innerHTML = "Vennligst fyll ut skjemaet!"
    }
    else if (navn === "") {
        output.innerHTML = "Vennligst fyll inn navn."
    }
    else if (email === "") {
        output.innerHTML = "Vennligst fyll inn en gyldig e-postadresse."
    }
    else if (tlf === "") {
        output.innerHTML = "Vennligst oppgi telefonnummer."
    }
    else if (melding === "") {
        output.innerHTML = "Vennligst skriv inn en melding."
    }
    else {
        output.innerHTML = "E-posten er sendt!"

        //Tømmer feltet
        document.getElementById("navn").value = ""
        document.getElementById("email").value = ""
        document.getElementById("tlf").value = ""
        document.getElementById("melding").value = ""
    }
  }