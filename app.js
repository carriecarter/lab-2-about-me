'use strict'

function projects(){
    var correctCount = 0; 

    // Yes No Question 1
    var logo = prompt('Do you think I designed the Next Adventure logo?');
    console.log('Did I design the Next Adventure logo?', logo);

    var p = document.getElementById('logo-response');
    

    if(logo.trim().toLowerCase() === 'no') {
        p.textContent = 'Correct, I did not design the Next Adventure logo, but it sure is nice!';
        correctCount++
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
        correctCount++
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
        correctCount++
    }
    else {
        p.textContent = 'Don\'t Hate! I take full responsibility for honoring the crazy cat ladies of PDX';
    }
    //Yes No Question 4
    var chair = prompt('That handsome chair in the lobby sure is comfy. Think I designed that?');
    console.log('did I design the lobby chair', chair);

    var p = document.getElementById('chair-response');

    if(chair.trim().toLowerCase() === 'yes') {
        p.textContent = 'I\'ve always been an Eames fan and that chair was one of my first furniture designs inspired by them';
        correctCount++
    }
    else {
        p.textContent = 'Believe it or not, I can also design and build furniture and that is one of my first designs.';
    }
    //Yes No Question 5
    var nike = prompt('Nike finally released a skate shoe built for women. Did I have a part in that?');
    console.log('did I design Nike sneakers?', nike);

    var p = document.getElementById('nike-response');

    if(nike.trim().toLowerCase() === 'yes') {
        p.textContent = 'I have been an advocate for female skaters for years, but I did not design that shoe.';
    }
    else {
        p.textContent = 'You got me. I am a fan, but did not design that shoe.';
        correctCount++
    }
    p.textContent = 'You got ' + correctCount + ' out of 5 right';
}

// Start of Guessing Game    
function favoriteProject(){
    console.log('guessing game is running');
    var correctAnswer = 'cat lady monument';
//setup
//what variables transcend loop?
    var answer;
    var correct = false;

//loop for guesses
    for(var i = 0; i < 3; i++) {
        console.log('guesses remaining', i);

        answer= prompt('What do you think my favorite project was? Cat Lady Monument, Letterpress Poster, or Lobby Chair?');
        console.log('user guessed', answer);
        var p = document.getElementById('favorite-guess');
        if(answer.trim().toLowerCase() === correctAnswer || answer.trim().toLowerCase() === 'cl') {
            correct = true;
            alert('Long Live Crazy Cat Ladies!');
            p.textContent = ('you guessed ' + answer + ' good work');
            break;
        }
        else {
            alert('nope. not that one. Guesses remaining: ' + (2 - i) );
            p.textContent = ('you guessed ' + answer + ' sorry, but that was not my favorite project. CAT LADIES FTW!'); 
        }
    }
} 





