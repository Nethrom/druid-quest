
export default {
    level: 1,
    hitpoints: 10,
    takeDamage: (damage) => {
        return this.hitpoints - damage;
    },
}