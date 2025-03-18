class Hero {
    constructor(heroName, heroAge, heroClass){
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroClass = heroClass;
        
    }
    heroStatus() {
        let heroSkill;

        if (this.heroClass === "knight") {
            heroSkill = "sword"
        } else if (this.heroClass === "mage") {
            heroSkill = "magic"
        } else if (this.heroClass === "monk") {
            heroSkill = "martial arts"
        } else if (this.heroClass === "ninja") {
            heroSkill = "shuriken"
        }
        return console.log(`The ${this.heroClass} ${this.heroName} attacked using ${heroSkill}.`);
    }
}

let hero1 = new Hero("Deivid", 17, "knight");
let hero2 = new Hero("Pg", 17, "mage");
let hero3 = new Hero("Gustavo", 17, "monk");
let hero4 = new Hero("Pf", 18, "ninja");

hero1.heroStatus();
hero2.heroStatus();
hero3.heroStatus();
hero4.heroStatus();