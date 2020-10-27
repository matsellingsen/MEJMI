var i = 1
setInterval(function() {
    bilde = document.getElementById('hovedbilde')
    console.log(bilde)
    switch (i) {
        case 0:
            bilde.style.backgroundImage = "url('Images/referanse1.jpg')"
            break
        case 1:
            bilde.style.backgroundImage = "url('Images/referanse2.jpg')"
            break
        case 2:
            bilde.style.backgroundImage = "url('Images/referanse3.jpg')"
    }
    i++
    if (i > 2) {
        i = 0
    }
    
}, 5000);
