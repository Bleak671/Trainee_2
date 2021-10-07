let textFormatter = Object.seal({
    Format: function(inText, maxLen, maxCount, option, adds) {
        let res = self.Parse(inText, option);
        if ( adds == 2) {
            if (res.length > maxLen) {
                res = res.slice(0, maxLen);
            }
        }
        if ( adds == 3) {
            if (res.length > maxCount) {
                res = res.slice(0, maxCount);
            }
        }
        if (adds == 1 || adds == 3) {
            for (let i = 0; i < res.length; i++) {
                if (res[i].length > maxLen)
                    res[i] = res[i].substring(0, maxLen);
            }
        }
        return res;
    },

    self:Parse = function(inText, option) {
        let res = [];
        switch (option) {
            case "перенос по слову":
                res = inText.split(" ");
                break;
            case "перенос по символу":
                for (let i = 0; i < inText.length; i++) {
                    res.push(inText[i]);
                }
                break;
            case "перенос по предложению":
                res = inText.split(".");
                break;
        }
        return res;
    }
});

module.exports = { textFormatter };