const fns = {
    sum,
    res,
    mul,
    div,
    pow,
};

function sum(a, b) {
    return a + b;
}

// Completar estas funciones

function res(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
     if (b != 0){
        return a / b;
    }
    else {
        return "Error: div by 0"
    }
       
}

function pow(a, b) {}

module.exports = fns;
