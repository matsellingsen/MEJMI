/*Hentet koden fra https://stackoverflow.com/questions/30388118/trying-to-make-multiple-background-images-cycle-through-a-slideshow-with-css-and */

var i = 1;
setInterval(function() { 
    e = document.getElementById('hovedbilde');
    switch (i) {
        case 0:
            e.style.backgroundPosition = 'center top, center top, center top';
            break;
        case 1:
            e.style.backgroundPosition = screen.width + 'px top, center top, center top';
            break;
        case 2:
            e.style.backgroundPosition = screen.width + 'px top, ' + screen.width + 'px top, center top';
            break;
    }
    i++;    
    if (i > 2) i = 0;   
}, 5000);
