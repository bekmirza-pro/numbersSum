var userNumbers = [1, 3, 5, 9];

function numbersSum(numbers) {

    var result = 0;
    for (var number of numbers){
        result += number
    } 
	return result;
}

console.log(numbersSum(userNumbers));