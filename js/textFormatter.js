var textFormatter = {
    Format: function(inText, option) {
        return self.Parse(inText, option);
    },

    FormatLen: function(inText, maxLen, option) {
        let res = self.Parse(inText, option);
        for (let i = 0; i < res.length; i++) {
            if (res[i].length > maxLen)
                res[i] = res[i].substring(0, maxLen);
        }
        return res;
    },

    FormatCount: function(inText, maxCount, option) {
        let res = self.Parse(inText, option);
        if (res.length > maxCount)
            res = res.slice(0, maxCount);
        return res;
    },

    FormatLenCount: function(inText, maxLen, maxCount, option) {
        let res = self.Parse(inText, option);
        if (res.length > maxCount) {
            res = res.slice(0, maxCount);
        }
        for (let i = 0; i < res.length; i++) {
            if (res[i].length > maxLen)
                res[i] = res[i].substring(0, maxLen);
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
}

module.exports = { textFormatter };