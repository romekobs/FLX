function addOne(x) {
    return x + 1;
}

function pipe(argument, ...addOnes) {
    for (let i = 0; i < addOnes.length; i++) {
        argument = addOnes[i](argument);
    }
    return argument;
}

pipe(1, addOne, addOne);