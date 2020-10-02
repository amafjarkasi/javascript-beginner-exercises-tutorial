// Your code here:
let bottleLyrics;

function bottlesMilk() {
    bottleLyrics = "";

    for (let bottleCount = 99; bottleCount >= 1; bottleCount--) {

        if (bottleCount === 1) {
            console.log(`${bottleCount} bottle of milk, ${bottleCount} of milk. Take one down and pass it around, no more bottles of milk on the wall.\n\nNo more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more.`);
            break;
        }

        console.log(`${bottleCount} bottles of milk on the wall, ${bottleCount} of milk. Take one down and pass it around.\n\n`);
    }

    return;
}

bottlesMilk();
