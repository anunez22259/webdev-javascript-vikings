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
        this.health -= null
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    
}

// Saxon
class Saxon {}

// War
class War {}
