var stringCalc = {
    Minus: function(src1,src2) {
        return Number(src1) - Number(src2);
    },

    Plus: function(src1,src2) {
        return Number(src1) + Number(src2);
    },

    Mul: function(src1,src2) {
        return Number(src1) * Number(src2);
    },

    Div: function(src1,src2) {
        return Number(src1) / Number(src2);
    }
}

module.exports = { stringCalc };