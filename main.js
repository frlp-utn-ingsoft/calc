const fns = require("./fns.js");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function loop() {
    let exit = false;

    while (!exit) {
        readline.question(
            "Ingrese función (sum, res, mul, div, pow, exit): ",
            (fnName) => {
                if (fnName === "exit") {
                    console.log("👋👋👋");
                    readline.close();
                    exit = true;
                    return;
                }

                const fn = fns[fnName];

                readline.question("Ingrese 2 numeros: ", (numbers) => {
                    const [a, b] = numbers.split(" ").map(Number);
                });
            }
        );
    }
}

loop();
