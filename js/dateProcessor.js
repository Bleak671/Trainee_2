var dateProcessor = {
  DateParser: function(inString) {
    let date = new Date(inString);
    document.getElementById("out2").innerText = date.toString();
  },

  DateParserWithPattern: function(inString, inPattern) {
    let date = new Date(this.GetParsedString(inString, inPattern));
    document.getElementById("out2").innerText = date.toString();
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
  }
}


document.getElementById("btn2.1").addEventListener("click", function() { dateProcessor.DateParser.call(null, document.getElementById("in2").value) });
document.getElementById("btn2.2").addEventListener("click", function() { 
  let args = document.getElementById("in2").value.split(",");
  dateProcessor.DateParserWithPattern.call(null, args[0], args[1]) 
});