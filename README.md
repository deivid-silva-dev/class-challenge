📌 Sobre o Projeto

Este é um projeto simples de um jogo de heróis desenvolvido em JavaScript, onde cada herói pode atacar usando uma habilidade específica baseada em sua classe. O código implementa uma classe Hero com propriedades e métodos para exibir os ataques de diferentes tipos de heróis.

🎯 Objetivo

O objetivo deste projeto é praticar os conceitos de POO (Programação Orientada a Objetos), incluindo:

Classes e Objetos

Propriedades e Métodos

Uso do this para acessar propriedades do objeto

Estruturas condicionais (if-else)

🛠️ Tecnologias Utilizadas

JavaScript (ES6+)

🚀 Como Funciona

Cada herói tem um nome, idade e classe. Dependendo da classe do herói, ele atacará usando um tipo de habilidade específica:

Classe

Ataque

Knight

Sword

Mage

Magic

Monk

Martial Arts

Ninja

Shuriken

📝 Código

class Hero {
    constructor(heroName, heroAge, heroClass) {
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroClass = heroClass;
    }

    heroStatus() {
        let heroSkill;

        if (this.heroClass === "knight") {
            heroSkill = "sword";
        } else if (this.heroClass === "mage") {
            heroSkill = "magic";
        } else if (this.heroClass === "monk") {
            heroSkill = "martial arts";
        } else if (this.heroClass === "ninja") {
            heroSkill = "shuriken";
        } else {
            heroSkill = "unknown attack";
        }

        console.log(`The ${this.heroClass} ${this.heroName} attacked using ${heroSkill}.`);
    }
}

// Criando os heróis
let hero1 = new Hero("Deivid", 17, "knight");
let hero2 = new Hero("Pg", 17, "mage");
let hero3 = new Hero("Gustavo", 17, "monk");
let hero4 = new Hero("Pf", 18, "ninja");

// Chamando o método para exibir os ataques
hero1.heroStatus();
hero2.heroStatus();
hero3.heroStatus();
hero4.heroStatus();

▶️ Como Executar o Código

Copie o código acima e cole em um arquivo .js.

Abra o terminal na pasta onde o arquivo está salvo.

Execute o código com o Node.js:

node nome_do_arquivo.js

Veja os ataques dos heróis sendo exibidos no console!

📌 Melhorias Futuras

Criar subclasses para cada tipo de herói e utilizar herança.

Adicionar mais interatividade ao jogo, permitindo entrada de dados do usuário.

Criar um sistema de níveis e atributos para os heróis.

Desenvolver uma interface gráfica para melhorar a experiência do usuário.

📜 Licença

Este projeto é de código aberto e pode ser modificado livremente.

