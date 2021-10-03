var dateProcessor = {
  DateParser: function(inString) {
    let date = new Date(inString);
    document.getElementById("out2").innerText = date.toString();
  },

  DateParserWithPattern: function(inString, inPattern) {
    let date = new Date(this.GetParsedString(inString, inPattern));
    document.getElementById("out2").innerText = date.toString();
  },

  DateParserToPattern: function(inString, toPattern) {
    let date = new Date(inString);
    document.getElementById("out2").innerText = PasteDate(date, toPattern);
  },

  DateParserWithPatternToPattern: function(inString, inPattern, toPattern) {
    let date = new Date(this.GetParsedString(inString, inPattern));
    document.getElementById("out2").innerText = PasteDate(date, toPattern);
  },

  this:GetParsedString = function(inString, inPattern) {
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

  this:PasteDate = function(date, toPattern) {
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


document.getElementById("btn2.1").addEventListener("click", function() { dateProcessor.DateParser.call(null, document.getElementById("in2").value) });
document.getElementById("btn2.2").addEventListener("click", function() { 
  let args = document.getElementById("in2").value.split(",");
  dateProcessor.DateParserWithPattern.call(null, args[0], args[1]) ;
});
document.getElementById("btn2.3").addEventListener("click", function() { 
    let args = document.getElementById("in2").value.split(",");
    dateProcessor.DateParserToPattern.call(null, args[0], args[1]) ;
});
document.getElementById("btn2.4").addEventListener("click", function() { 
    let args = document.getElementById("in2").value.split(",");
    dateProcessor.DateParserWithPatternToPattern.call(null, args[0], args[1], args[2]) ;
});
  