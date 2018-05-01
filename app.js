'use strict'

function projects(){
    // Yes No Question 1
    var logo = prompt('Do you think I designed the Next Adventure logo?');
    console.log('Did I design the Next Adventure logo?', logo);

    var p = document.getElementById('logo-response');

    if(logo.trim().toLowerCase() === 'no') {
        p.textContent = 'Correct, I did not design the Next Adventure logo, but it sure is nice!';
    }
    else {
        p.textContent = 'Actually, John Doe designed the Next Adventure logo, not me.';
    }
    //Yes No Question 2
    var letterpress = prompt('Have you seen that letterpress poster in the hall? Do you think that is my work?');
    console.log('did I design that letterpress poster in the hall?', letterpress);

    var p = document.getElementById('letterpress-response');

    if(letterpress.trim().toLowerCase() === 'yes') {
        p.textContent = 'Yep! I love working with letterpress.';
    }
    else {
        p.textContent = 'In fact, I did design that poster out there.';
    }
    //Yes No Question 3
    var sculpture = prompt('The city loves to hate that monument to cat ladies on the corner of 1st and Pine. Am I responsible for that monstrosity?');
    console.log('did I make the cat lady sculpture?', sculpture);

    var p = document.getElementById('sculpture-response');

    if(sculpture.trim().toLowerCase() === 'yes') {
        p.textContent = 'Indeed! I love crazy cat ladies, don\'t you?';
    }
    else {
        p.textContent = 'Don\'t Hate! I take full responsibility for honoring the crazy cat ladies of PDX';
    }

}

