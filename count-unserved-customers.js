let a = [1,1];
let b = [1,1,2,2];

function countUnservedCustomers(tables, visitors) {
    let oneplace = tables[0];
    let twoplace = tables[1] * 2;
    
    visitors.forEach((group, index) => {
            if (group === 1) {
                if(oneplace) {
                    oneplace--;
                    visitors[index] -= group;
                } else if(twoplace) {
                    twoplace--;
                    visitors[index] -= group;
                }
            } else if (twoplace >= group) {
                twoplace -= group; 
                visitors[index] -= group;
            }
        }
    );
    
    return visitors.reduce((acc, el) => {
        return acc + el;
    }, 0);
}

console.log(countUnservedCustomers(a, b));
