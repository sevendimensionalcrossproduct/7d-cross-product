function seven_dimensional_cross_product(x, y) {
    if (x.length !== 7 || y.length !== 7) {
        console.error("bad usage");
    }
    var result = [0, 0, 0, 0, 0, 0, 0];
    var _loop_1 = function (i) {
        var START = function (n) { return (i + n) % 7; };
        result[START(1)] =
            x[START(2)] * y[START(4)] -
                x[START(4)] * y[START(2)] +
                x[START(3)] * y[START(7)] -
                x[START(7)] * y[START(3)] +
                x[START(5)] * y[START(6)] -
                x[START(6)] * y[START(5)];
    };
    for (var i = -1; i < 6; i++) {
        _loop_1(i);
    }
    return result;
}
function seven_dimensional_dot_product(x, y) {
    if (x.length !== 7 || y.length !== 7) {
        console.error("bad usage");
    }
    var result = 0;
    for (var i = 0; i < 7; i++) {
        result += x[i] * y[i];
    }
    return result;
}
