let songString;

function sing() {
    songString = "";

    for (var counter = 1; counter < 5; counter++) {
        songString = songString + 'let it be, ';
        console.log(songString);
    }

    songString = songString + 'words of wisdom, ';

    for (var counter = 1; counter < 6; counter++) {
        songString = songString + 'let it be, ';
        console.log(songString);
    }

    songString = songString + 'there will be an answer, let it be';

    return songString;

}

//Your code above ^^^

console.log(sing());