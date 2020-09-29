// Your code here:
let bottleLyrics;

function bottlesMilk() {
    bottleLyrics = "";

    for (var bottleCount = 100; bottleCount > 0; bottleCount--) {

        if (bottleCount === 1) {
            bottleLyrics = bottleLyrics + `${bottleCount} bottles of milk on the wall, ${bottleCount} of milk. Take one down and pass it around, no more bottles of milk on the wall. `;
            break;
        }

        bottleLyrics = bottleLyrics + `${bottleCount} bottles of milk on the wall, ${bottleCount} of milk. Take one down and pass it around. `; 
    }

        bottleLyrics = bottleLyrics + 'No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more.'; 


    return bottleLyrics;
}

console.log(bottlesMilk());
