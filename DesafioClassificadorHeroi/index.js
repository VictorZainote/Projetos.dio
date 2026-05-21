let nomeHerói = "VH"; 
let xpHerói = 7500;
let nivelHerói = "";


if (xpHerói <= 1000) {
    nivelHerói = "Ferro";
} else if (xpHerói <= 2000) {
    nivelHerói = "Bronze";
} else if (xpHerói <= 5000) {
    nivelHerói = "Prata";
} else if (xpHerói <= 7000) {
    nivelHerói = "Ouro";
} else if (xpHerói <= 8000) {
    nivelHerói = "Platina";
} else if (xpHerói <= 9000) { 
    nivelHerói = "Ascendente";
} else if (xpHerói <= 10000) {
    nivelHerói = "Imortal";
} else {
    nivelHerói = "Radiante"; 
}


console.log(`O Herói de nome ${nomeHerói} está no nível de ${nivelHerói}`);