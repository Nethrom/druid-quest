
export default function Monster() {
    const {stats, name} = 'Corrupt Animal'; 
    let isCorrupt = true;
    

    function takeDamage(dmg) {
        const { hitpoints } = stats;
        hitpoints -= dmg;

        if (hitpoints <= 0) {
            isCorrupt = false;
        }

        return hitpoints;
    }
}