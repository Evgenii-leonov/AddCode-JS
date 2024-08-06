function sortMixedValues(values) {
    let sortedValues = {};
    
    values.forEach(value => {
        let valueType = typeof value;
        if (!sortedValues[valueType]) {
            sortedValues[valueType] = [];
        }
        sortedValues[valueType].push(value);
    });
    
    for (let key in sortedValues) {
    
        switch (key) {
            case `number`: 
                sortedValues[key].sort((a,b) => a - b);
                
                break;
        
            default: 
                sortedValues[key].sort();
                break;
        }
    }
    
    return sortedValues;
}

console.log(sortMixedValues(['b', 1, 2, false, 9 ,'a' , 'cers', 12, 10, true]));
