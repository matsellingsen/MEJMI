var i = 1
setInterval(function() {
    bilde = document.getElementById('hovedbilde')
    switch (i) {
        case 0:
            bilde.style.backgroundImage = "url('Images/referanser/referanse1.jpg')"
            break
        case 1:
            bilde.style.backgroundImage = "url('Images/referanser/referanse2.jpg')"
            break
        case 2:
            bilde.style.backgroundImage = "url('Images/referanser/referanse3.jpg')"
    }
    i++
    if (i > 2) {
        i = 0
    }
    
}, 5000);
