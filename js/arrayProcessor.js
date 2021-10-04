var arrayProcessor = {
    GetMaxSubSum: function(srcArray) {
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
        return sum;
    },

    GetMaxMinMedian: function(srcArray) {
        srcArray.sort(function compareNumbers(a, b) {
            return a - b;
        });
        return [ srcArray[srcArray.length - 1],srcArray[0],srcArray[Math.trunc(srcArray.length / 2)] ];
    },

    GetMaxSortedSequence: function(srcArray) {
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
        return resArray;
    }
}

module.exports = {arrayProcessor};