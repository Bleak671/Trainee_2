var dateProcessor = {
  DateParser: function(inString) {
    let date = new Date(inString);
    return date.toString();
  },

  DateParserWithPattern: function(inString, inPattern) {
    let date = new Date(self.GetParsedString(inString, inPattern));
    return date.toString();
  },

  DateParserToPattern: function(inString, toPattern) {
    let date = new Date(inString);
    return self.PasteDate(date, toPattern);
  },

  DateParserWithPatternToPattern: function(inString, inPattern, toPattern) {
    let date = new Date(self.GetParsedString(inString, inPattern));
    return self.PasteDate(date, toPattern);
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
}

module.exports = { dateProcessor };  