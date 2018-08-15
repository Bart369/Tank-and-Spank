
const Move = {
    "bite": (atk) => {
        let damage = atk * 3;
        let bite = {
            "name": "bite",
            "dmg": damage
        }
        return bite;
    },

    "scratch": (atk) => {
        let damage = atk * 1.5;
        let scratch = {
            "name": "scratch",
            "dmg": damage,
        }
        return scratch;
    },

    "empty": () => {

    }


}

export default Move;