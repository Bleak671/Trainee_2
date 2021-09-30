var arrayProcessor = {
    GetMaxSubSum: function() {
        Clear();
        let srcArray = document.getElementById("in1").value.split(",").map(Number);
        let sum = 0;
        for (let i = 0; i < srcArray.length; i++) {
            let tmpSum = srcArray[i];
            if (tmpSum > sum)
                sum = tmpSum;
            for (let j = i + 1; j < srcArray.length; j++) {
                tmpSum = tmpSum + srcArray[j] + 0;
                if (tmpSum > sum)
                    sum = tmpSum;
            }
        }
        document.getElementById("out1.1").innerText = "Max summary: " + sum;
    },

    GetMaxMinMedian: function() {
        let srcArray = document.getElementById("in1").value.split(",").map(Number);
        srcArray.sort(function compareNumbers(a, b) {
            return a - b;
        });
        document.getElementById("out1.1").innerText = "Min: " + srcArray[0];
        document.getElementById("out1.2").innerText = "Max: " + srcArray[srcArray.length - 1];
        document.getElementById("out1.3").innerText = "Median: " + srcArray[Math.trunc(srcArray.length / 2)];
    },

    GetMaxSortedSequence: function() {
        Clear();
        let srcArray = document.getElementById("in1").value.split(",").map(Number);
        let resArray = [];
        for (let i = 0; i < srcArray.length; i++) {
            let tmpArray = [srcArray[i]];
            let j = i + 1;
            while (j < srcArray.length && srcArray[j] > srcArray[j - 1]) {
                tmpArray.push(srcArray[j]);
                j++;
            }
            if (tmpArray.length > resArray.length)
                resArray = tmpArray;
        }
        document.getElementById("out1.1").innerText = "Sequence: " + resArray;
    },
}

Clear = function() {
    document.getElementById("out1.1").innerText = "";
    document.getElementById("out1.2").innerText = "";
    document.getElementById("out1.3").innerText = "";
}

document.getElementById("btn1.1").addEventListener("click", arrayProcessor.GetMaxSubSum);
document.getElementById("btn1.2").addEventListener("click", arrayProcessor.GetMaxMinMedian);
document.getElementById("btn1.3").addEventListener("click", arrayProcessor.GetMaxSortedSequence);