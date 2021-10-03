let module = await import("arrayProcessor.js");

arrProcSubSum = function() {
    Clear();
    let src = document.getElementById("in1").value.split(",").map(Number);
    document.getElementById("out1.1").innerText = "Max summary: " + arrayProcessor.GetMaxSubSum(src);
}


Clear = function() {
    document.getElementById("out1.1").innerText = "";
    document.getElementById("out1.2").innerText = "";
    document.getElementById("out1.3").innerText = "";
}

$('#btn1.1').on('click', arrProcSubSum);