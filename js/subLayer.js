const { arrayProcessor } = require('./arrayProcessor.js');
const { dateProcessor } = require('./dateProcessor.js');
const { textFormatter } = require('./textFormatter.js');
const { stringCalc } = require('./stringCalc.js');
const { arraySorter } = require('./arraySorter.js');
const { binaryConverter } = require('./binaryConverter.js');

arrProcSubSum = function() {
    Clear();
    let src = document.getElementById("in1").value.split(",").map(Number);
    document.getElementById("out1.1").innerText = "Max summary: " + arrayProcessor.GetMaxSubSum(src);
}

arrProcMinMaxMedian = function() {
    Clear();
    let src = document.getElementById("in1").value.split(",").map(Number);
    let res = arrayProcessor.GetMaxMinMedian(src);
    document.getElementById("out1.1").innerText = "Max: " + res[0];
    document.getElementById("out1.2").innerText = "Min: " + res[1];
    document.getElementById("out1.3").innerText = "Median: " + res[2];
}

arrProcSortSeq = function() {
    Clear();
    let src = document.getElementById("in1").value.split(",").map(Number);
    document.getElementById("out1.1").innerText = "Max sorted: " + arrayProcessor.GetMaxSortedSequence(src);
}

Clear = function() {
    document.getElementById("out1.1").innerText = "";
    document.getElementById("out1.2").innerText = "";
    document.getElementById("out1.3").innerText = "";
}



dateProcParse = function() {
    let src = document.getElementById("in2").value.split(",");
    for (let i = 0; i < src.length; i++) {
        src[i] = src[i].trim();
    }
    let patterns = document.getElementById("in2adds").value;
    document.getElementById("out2").innerText = dateProcessor.DateParser(src[0],src[1],src[2],patterns);
}



textFormOption = function() {
    let src = document.getElementById("in3").value.split(",");
    for (let i = 0; i < src.length; i++) {
        src[i] = src[i].trim();
    }
    let form = document.getElementById("in3list").value;
    let adds = document.getElementById("in3adds").value;
    document.getElementById("out3").innerText = textFormatter.Format(src[0],src[1],src[2],form,adds);
}



strCalcMinus = function() {
    let src1 = document.getElementById("in4.1").value;
    let src2 = document.getElementById("in4.2").value;
    document.getElementById("out4").innerText = stringCalc.Minus(src1,src2);
}

strCalcPlus = function() {
    let src1 = document.getElementById("in4.1").value;
    let src2 = document.getElementById("in4.2").value;
    document.getElementById("out4").innerText = stringCalc.Plus(src1,src2);
}

strCalcMul = function() {
    let src1 = document.getElementById("in4.1").value;
    let src2 = document.getElementById("in4.2").value;
    document.getElementById("out4").innerText = stringCalc.Mul(src1,src2);
}

strCalcDiv = function() {
    let src1 = document.getElementById("in4.1").value;
    let src2 = document.getElementById("in4.2").value;
    document.getElementById("out4").innerText = stringCalc.Div(src1,src2);
}



arrSortBubble = function() {
    let src = document.getElementById("in5").value.split(",").map(Number);
    document.getElementById("out5").innerText = "Bubble: " + arraySorter.SortBubble(src);
}

arrSortBubbleWF = function() {
    let src = document.getElementById("in5").value.split(",").map(Number);
    document.getElementById("out5").innerText = "Bubble Flag: " + arraySorter.SortBubblewithFlag(src);
}

arrSortShaker = function() {
    let src = document.getElementById("in5").value.split(",").map(Number);
    document.getElementById("out5").innerText = "Shaker: " + arraySorter.SortShaker(src);
}

arrSortInsert = function() {
    let src = document.getElementById("in5").value.split(",").map(Number);
    document.getElementById("out5").innerText = "Insert: " + arraySorter.SortInsert(src);
}



binConvToDec = function() {
    let src = document.getElementById("in6").value.split(",").map(Number);
    document.getElementById("out6").innerText = "Dec: " + binaryConverter.BinToDec(src);
}

binConvToBin = function() {
    let src = document.getElementById("in6").value.split(",").map(Number);
    document.getElementById("out6").innerText = "Bin: " + binaryConverter.DecToBin(src);
}



const cache = window.localStorage;

cachingCalcMinus = function() {
    let src1 = document.getElementById("in7.1").value;
    let src2 = document.getElementById("in7.2").value;
    let key = src1 + " " + src2 + "-";
    document.getElementById("out7").innerText = callClass.Store(key, function() {
        return stringCalc.Minus(src1,src2)
    });
}

cachingCalcPlus = function() {
    let src1 = document.getElementById("in7.1").value;
    let src2 = document.getElementById("in7.2").value;
    let key = src1 + " " + src2 + "+";
    document.getElementById("out7").innerText = callClass.Store(key, function() {
        return stringCalc.Plus(src1,src2)
    });
}

cachingCalcMul = function() {
    let src1 = document.getElementById("in7.1").value;
    let src2 = document.getElementById("in7.2").value;
    let key = src1 + " " + src2 + "*";
    document.getElementById("out7").innerText = callClass.Store(key, function() {
        return stringCalc.Mul(src1,src2)
    });
}

cachingCalcDiv = function() {
    let src1 = document.getElementById("in7.1").value;
    let src2 = document.getElementById("in7.2").value;
    let key = src1 + " " + src2 + "/";
    document.getElementById("out7").innerText = callClass.Store(key, function() {
        return stringCalc.Div(src1,src2)
    });
}

let callClass = {
    Store: function(key, func) {
        let res = cache.getItem(key);
        if (res == null) {
            res = func();
            cache.setItem(key, res);
        }
        return res;
    }
}