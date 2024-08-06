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
    let arrayRoute = Array.isArray(route) ? route : Object.values(route);

    let currentPosition = [0, 0];
    arrayRoute.forEach(el => {
        currentPosition =  currentPosition.map((num, index) => num + directions[el.toUpperCase()][index])
    });
    return currentPosition;

}

console.log(optimalRoute(["Север", "Юг", "Юг", "Запад", "Восток", "СЕВЕР", "Восток"]));