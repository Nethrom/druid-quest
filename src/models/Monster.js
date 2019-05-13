
export default class Monster {
    constructor(stats, name = 'Corrupt Animal') {
        this.stats = stats;
        this.name = name;
        this.isCorrupt = true;
    }

    takeDamage(dmg) {
        const { hitpoints } = this.stats;
        hitpoints -= dmg;

        if (hitpoints <= 0) {
            this.isCorrupt = false;
        }

        return hitpoints;
    }
}