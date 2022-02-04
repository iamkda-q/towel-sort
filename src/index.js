
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length == 0) return [];
    const res = [];
    matrix.forEach((item, i) => {
        if (i % 2) {
            res.push(...item.reverse());
        } else {
            res.push(...item);
        }
    });
    return res;
}
