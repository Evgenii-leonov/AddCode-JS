
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
    if (Array.isArray(route) === false) {
        let currentPosition = [0, 0];
        Object.values(route).forEach(el => {
            currentPosition =  currentPosition.map((num, index) => num + directions[el][index])
        });
        return currentPosition;
    } else {
        let currentPosition = [0, 0];
        route.forEach(el => {
            currentPosition =  currentPosition.map((num, index) => num + directions[el][index])
        });
        return currentPosition;
    }
    
   
}

optimalRoute({
    dir1: "СЕВЕР",
    dir2: "ЮГ",
    dir3: "ЮГ",
    dir4: "ЗАПАД",
    dir5: "ВОСТОК",
    dir6: "СЕВЕР",
    dir7: "ВОСТОК",
    dir8: "ЗАПАД",
    dir9: "ЗАПАД",
  })