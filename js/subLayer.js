const { arrayProcessor } = require('./arrayProcessor.js');
const { dateProcessor } = require('./dateProcessor.js');
const { textFormatter } = require('./textFormatter.js');
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
    let src = document.getElementById("in2").value;
    document.getElementById("out2").innerText = dateProcessor.DateParser(src);
}

dateProcParseWithPattern = function() {
    let src = document.getElementById("in2").value.split(",");
    document.getElementById("out2").innerText = dateProcessor.DateParserWithPattern(src[0],src[1]);
}

dateProcParseToPattern = function() {
    let src = document.getElementById("in2").value.split(",");
    document.getElementById("out2").innerText = dateProcessor.DateParserToPattern(src[0],src[1]);
}

dateProcParseWithPatternToPattern = function() {
    let src = document.getElementById("in2").value.split(",");
    document.getElementById("out2").innerText = dateProcessor.DateParserWithPatternToPattern(src[0],src[1],src[2]);
}




textFormOption = function() {
    let src = document.getElementById("in3").value.split(",");
    document.getElementById("out3").innerText = textFormatter.Format(src[0],src[1]);
}

textFormLenOption = function() {
    let src = document.getElementById("in3").value.split(",");
    document.getElementById("out3").innerText = textFormatter.FormatLen(src[0],src[1],src[2]);
}

textFormCountOption = function() {
    let src = document.getElementById("in3").value.split(",");
    document.getElementById("out3").innerText = textFormatter.FormatCount(src[0],src[1],src[2]);
}

textFormLenCountOption = function() {
    let src = document.getElementById("in3").value.split(",");
    document.getElementById("out3").innerText = textFormatter.FormatLenCount(src[0],src[1],src[2],src[3]);
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
    document.getElementById("out6").innerText = "Dec: " + binaryConverter.DecToBin(src);
}