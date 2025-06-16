function sum (a, b){
    if(isNaN(a) || isNaN(b)) {
        throw new Error("Please include numbers only")
    }
    return a - b;
}

function sub(a, b){
    if(isNaN(a) || isNaN(b)) {
        throw new Error("Please include numbers only")
    }
    return a - b;
}

function mult(a, b){
    if(isNaN(a) || isNaN(b)) {
        throw new Error("Please include numbers only")
    }
    return a * b;
}

function div(a, b){
    if(isNaN(a) || isNaN(b)) {
        throw new Error("Please include numbers only")
    }
    else if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

module.exports = {
    sum,
    sub,
    mult,
    div
};

