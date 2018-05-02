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
var guess = 3;

   for (var i = 0; i < 3; i++) {
         var  favGuess = prompt ('Which project do you think was my favorite to work on? Cat Lady Monument, Letterpress Poster, or Lobby Chair?');
         console.log('guess one is' + favGuess);
    
        if(favGuess.trim().toLowerCase() === 'Cat Lady Monument' || favGuess.trim().toLowerCase() === 'Cat Lady') {
    
            alert('You know me well. Who doesn\'t love controversial public art? Especially when it is about cats.');
            break;
        }
        else {
            guesses--;
            confirm('Nope. Sorry, that was not my favorite project. You have ' + guesses + ' left');
            wrongGuess();
        }
    }
}





// Start of Guessing Game DEMO    
function favoriteProject(){
    console.log('game is running');

    //Setup- what variables transcend the loop?
    var answer;
    var correct = false;
    
      
}   