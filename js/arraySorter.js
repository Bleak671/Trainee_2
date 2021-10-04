var arraySorter = {
    SortBubble: function(srcArray) {
        for (let i = 0; i < srcArray.length - 1; i++) {
            for (let j = 0; j < srcArray.length - 1; j++) {
                if (srcArray[j] > srcArray[j + 1]) {
                    let tmp = srcArray[j];
                    srcArray[j] = srcArray[j + 1];
                    srcArray[j + 1] = tmp;
                }         
            }
        }
        return srcArray;
    },

    SortBubblewithFlag: function(srcArray) {
        let flag = true;
        while (flag) {
            flag = false;
            for (let i = 0; i < srcArray.length - 1; i++) {
                if (srcArray[i] > srcArray[i + 1]) {
                    let tmp = srcArray[i];
                    srcArray[i] = srcArray[i + 1];
                    srcArray[i + 1] = tmp;     
                    flag = true;
                }
            }
        }
        return srcArray;
    },

    SortShaker: function(srcArray) {
        let left = 0;
        let right = srcArray.length - 1;
        while (left < right) {
            for (let i = left; i < right; i++) {
                if (srcArray[i] > srcArray[i + 1]) {
                    let tmp = srcArray[i];
                    srcArray[i] = srcArray[i + 1];
                    srcArray[i + 1] = tmp;
                }               
            }
            right--;

            for (let i = right; i > left; i--) {
                if (srcArray[i - 1] > srcArray[i]){
                    let tmp = srcArray[i - 1];
                    srcArray[i - 1] = srcArray[i];
                    srcArray[i] = tmp;
                }                
            }
            left++;
        }
        return srcArray;
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
        return srcArray;
    },
}

module.exports = { arraySorter };