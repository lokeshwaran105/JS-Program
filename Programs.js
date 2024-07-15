// Program 1


function fizzBuzz() {
    
    for(let i=1; i<=100; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        }
        else if(i%3 == 0){
            console.log("Fizz");
        }
        else if(i%5 == 0){
            console.log("Buzz")
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz();

// Program 2

function palindrom(str) {
    let i=0; 
    let j=str.length-1;
    let flag = true;
    while(i<j){
        if(str.charAt(i) != str.charAt(j)){
            flag = false;
        }
        i++;
        j--;
    }

    if(flag == true){
        console.log(true);
    }
    else{
        console.log(false);
    }
}


palindrom("aabra");


// Program 3

function largestElement(arr) {
    let max = 0;

    for(let i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }

    return max;
}

let arr = [1,2,5,8];

console.log(largestElement(arr));

// Program 4

function factorial(num) {
    
    let fact = 1;
    for(let i=num; i>=1; i--){
        fact *= i;
    }

    return fact;
}


console.log(factorial(5));


// Program 5

function missingNumber(arr) {
    
    for(let i=0; i<arr.length-1; i++){
        if((arr[i]+1) != (arr[i+1])){
            return arr[i]+1;
        }
    }
}

let arr = [1,2,3,5];
console.log(missingNumber(arr));


// Program 6

function occurance(str) {

    let occ = {};
    for(let i=0; i<str.length; i++){
        let res = 1;
        
        if(str.charAt(i) in occ){
            continue;
        }
        for(let j=i+1; j<str.length; j++){
            if(str.charAt(i) == str.charAt(j)){
                console.log(str.charAt(j));
                res += 1;
            }
        }
        
        occ[str.charAt(i)] = res;
    }

    console.log(occ);
}

occurance("hello what is");

// Program 7

function celsiusToFarenhiet(celsius){

    let farenhiet = 0;

    farenhiet = (9/5 * celsius) + 32;

    return farenhiet;
}

console.log(celsiusToFarenhiet(45));



// Program 8

function longestWord(str) {
    
    let arr = str.split(" ");
    let max = 0;

    for(let i=0; i<arr.length; i++){

        if(arr[i].length > max){
            max = i;
        }
    }

    return arr[max];
}

let str = "Hello this is string";

console.log(longestWord(str));