function fizzBuzz() {  
    // Your code here
    for (var counter = 1; counter < 101; counter++) {
        if (counter % 3 == 0 && counter % 5 == 0)
                console.log('FizzBuzz');
        else if (counter % 5 == 0)
                console.log('Buzz');
        else if (counter % 3 == 0)
                console.log('Fizz');
        else
                console.log(`${counter}`);
        }
}

fizzBuzz();