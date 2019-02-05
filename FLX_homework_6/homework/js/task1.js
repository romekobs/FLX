// Your code goes here
const a = prompt("Enter value a:");
const b = prompt("Enter value b:");
const c = prompt("Enter value c:");
quadratic(a, b, c);
function quadratic(a, b, c)
 {
    if(isNaN(a) || isNaN(b) || isNaN(c))
     {
        return alert('Invalid input data');
    }
     else 
     {
        if (a !== null && b !== null && c !== null) 
        {
            const d = (b * b) - (4 * a * c);
            if (Math.sqrt(d) || d > 0) 
            {
                let x1 = (-b - Math.sqrt(d))/(2*a);
                let x2 = (-b + Math.sqrt(d))/(2*a);
                return alert(
                    `x1 = ${x1} and x2 = ${x2}`
                );
            } 
            else if (d === 0) 
            {
                if(b === 0)
                 {
                    return alert('no result');
                } 
                else
                 {
                    let x = (-b / (2 * a));
                    return alert(`x = ${x}`);
                }
            } 
            else 
            {
                return alert('When Discriminant < 0 - no result');
            }
        } 
        else 
        {
            return alert('Invalid input data');
        }
    }
}