function dot_function() {
    x="010"
    y="002"
    let ps;
    ps = x[0] * y[0] + x[1] * y[1] + x[2] * y[2];
    if (ps === 0) {
        return 0;
    }
    else return ps;
}

console.log(dot_function());