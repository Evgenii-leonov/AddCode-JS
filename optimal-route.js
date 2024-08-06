
const СЕВЕР = "СЕВЕР";
const ЮГ = "ЮГ";
const ЗАПАД = "ЗАПАД";
const ВОСТОК = "ВОСТОК";
const directions = {
    СЕВЕР: [0, 1],
    ЮГ: [0, -1],
    ЗАПАД: [-1, 0],
    ВОСТОК: [1, 0],
}

function optimalRoute(route) {
    console.log(directions);
    let currentPosition = [0, 0];
    route.forEach(el => {
        currentPosition =  currentPosition.map((num, index) => num + directions[el][index])
    });
    return currentPosition;
}

optimalRoute(["СЕВЕР", "ЮГ", "ЮГ", "ЗАПАД", "ВОСТОК", "СЕВЕР", "ВОСТОК"]);