// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    recieveDamage(damage){
        this.health=this.health-damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength)
        this.name = name;
    }
    recieveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has recieved ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    recieveDamage(damage){
        super.recieveDamage(damage);
        return (this.health > 0) ? `A Saxon has recieved ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
        this.length = 0;
        this.vikingArmy = [];
        this.saxonArmy = [];

    }
    addViking(Vikings){
        this.vikingArray.push(Vikings)
    }
    addSaxon(Saxons){
        this.saxonArray.push(Saxons)
    }
}