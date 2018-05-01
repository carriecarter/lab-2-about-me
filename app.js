'use strict'

function designServices(){
    var logo = prompt('Do you need a logo?');
    console.log('Do they need a logo designed?', logo);

    var p = document.getElementById('logo-response');

    if(logo.trim().toLowerCase() === 'yes') {
        p.textContent = 'Great! I can do that for you.';
    }
    else {
        p.textContent = 'No problem, let\'s see what else you might need.';
    }
}

