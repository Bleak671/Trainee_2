var arraySorter = {
    SortBubble: function(srcArray) {
        for (let i = 0; i < srcArray.length - 1; i++) {
            for (let j = 0; j < srcArray.length - 1; j++) {
                if (srcArray[j] > srcArray[j + 1])
                    Swap(srcArray, j);
            }
        }
        document.getElementById("out5").innerText = "bubble: " + srcArray;
    },

    SortBubblewithFlag: function(srcArray) {
        let flag = true;
        while (flag) {
            flag = false;
            for (let i = 0; i < srcArray.length - 1; i++) {
                if (srcArray[i] > srcArray[i + 1]) {
                    Swap(srcArray, i);
                    flag = true;
                }
            }
        }
        document.getElementById("out5").innerText = "bubble with flag: " + srcArray;
    },

    SortShaker: function(srcArray) {
        let left = 0;
        let right = srcArray.length - 1;
        while (left < right) {
            for (let i = left; i < right; i++) {
                if (srcArray[i] > srcArray[i + 1])
                    Swap(srcArray, i);
            }
            right--;

            for (let i = right; i > left; i--) {
                if (srcArray[i - 1] > srcArray[i])
                    Swap(srcArray, i - 1);
            }
            left++;
        }
        document.getElementById("out5").innerText = "shaker: " + srcArray;
    },

    SortInsert: function(srcArray) {
        for (let i = 1; i < srcArray.length; i++) {
            let key = srcArray[i];
            let j = i - 1;
            while (j >= 0 && srcArray[j] > key) {
                srcArray[j + 1] = srcArray[j];
                j--;
            }
            srcArray[j + 1] = key;
        }
        document.getElementById("out5").innerText = "insert: " + srcArray;
    }
}

function Swap(array, index) {
    let tmp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = tmp;
}

document.getElementById("btn5.1").addEventListener("click", function() { arraySorter.SortBubble.call(null, document.getElementById("in5").value.split(",").map(Number)) });
document.getElementById("btn5.2").addEventListener("click", function() { arraySorter.SortBubblewithFlag.call(null, document.getElementById("in5").value.split(",").map(Number)) });
document.getElementById("btn5.3").addEventListener("click", function() { arraySorter.SortShaker.call(null, document.getElementById("in5").value.split(",").map(Number)) });
document.getElementById("btn5.4").addEventListener("click", function() { arraySorter.SortInsert.call(null, document.getElementById("in5").value.split(",").map(Number)) });