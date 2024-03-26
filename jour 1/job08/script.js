function isPrimeNumber(number)
{
    for(let i = 2, squareRoot = Math.sqrt(number); i <= squareRoot; i++) {
        if(number % i === 0) return false;
    }
    return number > 1;
}

function sommeNombresPremiers(number1, number2)
{
    if (isPrimeNumber(number1) && isPrimeNumber(number2)) {
        return number1 + number2;
    }
    else
    {
        return false;
    }
}
console.log(sommeNombresPremiers(5, 5));