var stringCalc = {
    BinToDec: function(inArray) {
        let res = 0;
        for (let i = inArray.length - 1; i >= 0; i--) {
            if (inArray[inArray.length - 1 - i] == '1')
                res += Math.pow(2, i);
        }
        document.getElementById("out6").innerText = "Dec: " + res;
    },

    DecToBin: function(inArray) {
        let input = 0;
        for (let i = 0; i < inArray.length; i++) {
            input += inArray[i] * Math.pow(10, inArray.length - i - 1);
        }

        let maxRazr = 1;
        while (maxRazr * 2 < input) {
            maxRazr *= 2;
        }

        let res = "";
        while (input != 0) {
            if (input - maxRazr >= 0) {
                res += "1";
                input -= maxRazr;
            }
            else {
                res += "0";
            }
            maxRazr /= 2;
        }
        document.getElementById("out6").innerText = "Bin: " + res;
    }
}

document.getElementById("btn6.1").addEventListener("click", function() { stringCalc.BinToDec.call(null, document.getElementById("in6").value.split(",").map(Number)) });
document.getElementById("btn6.2").addEventListener("click", function() { stringCalc.DecToBin.call(null, document.getElementById("in6").value.split(",").map(Number)) });