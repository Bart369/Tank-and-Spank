import Character from './Characters';
import Moves from './Moves';

class Enemy extends Character {
    constructor(name, lvl, hp, mp, atk, spd, move1, move2, move3, move4) {
        super(name, lvl, hp, mp, atk, spd)
        this.move1 = move1(this.atk);
        this.move2 = move2(this.atk);
        this.move3 = move3(this.atk);
        this.move4 = move4(this.atk);
    }

    this
}

const move = Moves;

let zombie = new Enemy("Walker", 1, 100, 30, 15, 5, move.bite, move.scratch, move.empty, move.empty);


console.log(zombie);


export default Enemy;