let dateProcessor = Object.seal({
  DateParser: function(inString, inPattern, toPattern, options) {
    let date;
    if (options == 1 || options == 3) {
      date = new Date(self.GetParsedString(inString, inPattern));
    }
    else {
      date = new Date(inString);
    }

    if (options == 2) {
      return self.PasteDate(date, inPattern);
    }
    else {
      if (options == 3)
        return self.PasteDate(date, toPattern);
    }
    return date.toString();
  },

  self:GetParsedString = function(inString, inPattern) {
    let innerDate = "";
    for (let i = inPattern.indexOf('D'); inPattern[i] == 'D'; i++) {
      innerDate += inString[i];
    }
    innerDate += '.';

    for (let i = inPattern.indexOf('M'); inPattern[i] == 'M'; i++) {
      innerDate += inString[i];
    }
    innerDate += '.';

    for (let i = inPattern.indexOf('Y'); inPattern[i] == 'Y'; i++) {
      innerDate += inString[i];
    }

    return innerDate;
  },

  self:PasteDate = function(date, toPattern) {
    let result = "";
    let i = 0;
    while (i < toPattern.length) {
        switch (toPattern[i]) {
            case 'D' :
                result += date.getDate();
                i++;
                break;
            case 'M' :
                result += date.getMonth() + 1;
                i++;
                break;
            case 'Y' :
                result += date.getFullYear();
                i += 3;
                break;
            default:
                result += toPattern[i];
                break;
        }
        i++;
    }
    return result;
  }
});

module.exports = { dateProcessor };  