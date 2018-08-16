
const Moves = {

    "axeSwing": (atk) => {
        let damage = atk * 2;
        let axe = {
            "name": "Axe Swing",
            "dmg": damage
        }
        return axe;
    },

    "bite": (atk) => {
        let damage = atk * 3;
        let bite = {
            "name": "Bite",
            "dmg": damage
        }
        return bite;
    },

    "revolver": (atk, mp) => {
        let damage = atk * 5;
        let shot = {
            "name": "Revolver Shot",
            "dmg": damage,
            "cost": mp/6
        }
        return shot
    },

    "rickTatorship": (atk, mp, lvl) => {
        let buff = {
            "name": "Ricktatorship",
        // "buff": "Attack buff to party?"
            "cost": 30,
        }
        return buff
    },

    "scratch": (atk) => {
        let damage = atk * 1.5;
        let scratch = {
            "name": "Scratch",
            "dmg": damage,
        }
        return scratch;
    },

    "empty": () => {

    }


}

export default Moves;