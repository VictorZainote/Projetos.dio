class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); 
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque básico"; 
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Gandalf", 150, "mago");
const heroi2 = new Heroi("Hercules", 35, "guerreiro");


heroi1.atacar(); 
heroi2.atacar();

const nomeHeroi = "VH";
const idadeHeroi = 29;
const tipoHeroi = "ninja";

const heroiPersonalizado = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
heroiPersonalizado.atacar(); 