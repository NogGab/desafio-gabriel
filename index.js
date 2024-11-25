
const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function determinarRanking(xp) {
    if (xp < 1000) {
        console.log("O herói de nome Sova é Ferro");
    } else if (xp >= 1001 && xp <= 2000) {
        console.log("O herói de nome Sova é Bronze");
    } else if (xp >= 2001 && xp <= 5000) {
        console.log("O herói de nome Sova é Prata Ouro");
    } else if (xp >= 5001 && xp <= 8000) {
        console.log("O herói de nome Sova é Platina Diamante");
    } else if (xp >= 8001 && xp <= 9000) {
        console.log("O herói de nome Sova é Ascendente");
    } else if (xp >= 9001 && xp <= 10000) {
        console.log("O herói de nome Sova é Imortal");
    } else {
        console.log("O herói de nome Sova é Radiante");
    }
}


rl.question("Insira o XP do herói para mostrar seu ranking: ", (input) => {
    const xp = parseInt(input);

   
    if (isNaN(xp)) {
        console.log("Por favor, insira um valor numérico válido.");
    } else {
        determinarRanking(xp);
    }

    
    rl.close();
});
