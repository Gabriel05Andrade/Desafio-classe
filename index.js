class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
  
    atacar() {
        let ataque;
  
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "usou um ataque desconhecido";
        }
  
        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
    }
  }
  
  const heroi1 = new Heroi("ABLUBLÉBLÉ", 30, "guerreiro");
  heroi1.atacar();