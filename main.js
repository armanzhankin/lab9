// function for problem number 6
function greeting(name) {
    return "Hi, " + name
}

// function for problem number 10



function equal(number_1, number_2){
    if (number_1 == number_2){
        return "Equal numbers"
    }else {
        return "Unequal numbers"
    }
}




//function for problem number 14

function greatest_of_three(number_1, number_2, number_3) {
    let arr = [number_1, number_2, number_3]
    for (let i=0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        }
    }

    return arr[arr.length-1]
}
