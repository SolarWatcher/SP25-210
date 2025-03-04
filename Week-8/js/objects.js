function attack(enemyDef) {
    const dmg = this.atk - enemyDef
    if (dmg <= 0) {
        return 1;
    }
    else {
        return dmg;
    }
}

// Objects
const person = {
    //Properties (variables that belong to this object)
    name: "Sunny The Necromancer",
    hp: 6,
    def: 0,
    atk: 4,
    spd: 4,

    // Methods (functions that belong to this object)
    attack: attack,

    takeDamage(damageAmount) {
        health = this.hp -= damageAmount;
    },
};


const enemy = {
    name: "Slime",
    hp: 4,
    def: 3,
    atk: 1,
    spd: 1,

    attack: attack,

    takeDamage(damageAmount) {
        health = this.hp -= damageAmount;
    },
};

// Person attacks slime
const playerDamage = person.attack(enemy.def);
console.log("Slime HP:", enemy.hp)

enemy.takeDamage(playerDamage)
console.log("Slime HP:", enemy.hp)

const characters = [
    {name: "Paladin", hp: 10, def: 10, atk: 5, spd: 1},
    {name: "Knight", hp: 7, def: 7, atk: 7, spd: 1},
    {name: "Rogue", hp: 5, def: 2, atk: 5, spd: 8},
    {name: "John", hp: 99, def: 99, atk: 99, spd: 99},
]

console.log("First Characters:",
    characters[0].name);