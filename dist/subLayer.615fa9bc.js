// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/arrayProcessor.js":[function(require,module,exports) {
var arrayProcessor = Object.seal({
  GetMaxSubSum: function GetMaxSubSum(srcArray) {
    var sum = 0;

    for (var i = 0; i < srcArray.length; i++) {
      var tmpSum = srcArray[i];
      if (tmpSum > sum) sum = tmpSum;

      for (var j = i + 1; j < srcArray.length; j++) {
        tmpSum = tmpSum + srcArray[j] + 0;
        if (tmpSum > sum) sum = tmpSum;
      }
    }

    return sum;
  },
  GetMaxMinMedian: function GetMaxMinMedian(srcArray) {
    srcArray.sort(function compareNumbers(a, b) {
      return a - b;
    });
    return [srcArray[srcArray.length - 1], srcArray[0], srcArray[Math.trunc(srcArray.length / 2)]];
  },
  GetMaxSortedSequence: function GetMaxSortedSequence(srcArray) {
    var resArray = [];

    for (var i = 0; i < srcArray.length; i++) {
      var tmpArray = [srcArray[i]];
      var j = i + 1;

      while (j < srcArray.length && srcArray[j] > srcArray[j - 1]) {
        tmpArray.push(srcArray[j]);
        j++;
      }

      if (tmpArray.length > resArray.length) resArray = tmpArray;
    }

    return resArray;
  }
});
module.exports = {
  arrayProcessor: arrayProcessor
};
},{}],"js/dateProcessor.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dateProcessor = Object.seal(_defineProperty({
  DateParser: function DateParser(inString, inPattern, toPattern, options) {
    var date;

    if (options == 1 || options == 3) {
      date = new Date(self.GetParsedString(inString, inPattern));
    } else {
      date = new Date(inString);
    }

    if (options == 2) {
      return self.PasteDate(date, inPattern);
    } else {
      if (options == 3) return self.PasteDate(date, toPattern);
    }

    return date.toString();
  },
  self: GetParsedString = function GetParsedString(inString, inPattern) {
    var innerDate = "";

    for (var i = inPattern.indexOf('M'); inPattern[i] == 'M'; i++) {
      innerDate += inString[i];
    }

    innerDate += '.';

    for (var _i = inPattern.indexOf('D'); inPattern[_i] == 'D'; _i++) {
      innerDate += inString[_i];
    }

    innerDate += '.';

    for (var _i2 = inPattern.indexOf('Y'); inPattern[_i2] == 'Y'; _i2++) {
      innerDate += inString[_i2];
    }

    return innerDate;
  }
}, "self", PasteDate = function PasteDate(date, toPattern) {
  var result = "";
  var i = 0;

  while (i < toPattern.length) {
    switch (toPattern[i]) {
      case 'D':
        result += date.getDate();
        i++;
        break;

      case 'M':
        result += date.getMonth() + 1;
        i++;
        break;

      case 'Y':
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
}));
module.exports = {
  dateProcessor: dateProcessor
};
},{}],"js/textFormatter.js":[function(require,module,exports) {
var textFormatter = Object.seal({
  Format: function Format(inText, maxLen, maxCount, option, adds) {
    var res = self.Parse(inText, option);

    if (adds == 2) {
      if (res.length > maxLen) {
        res = res.slice(0, maxLen);
      }
    }

    if (adds == 3) {
      if (res.length > maxCount) {
        res = res.slice(0, maxCount);
      }
    }

    if (adds == 1 || adds == 3) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].length > maxLen) res[i] = res[i].substring(0, maxLen);
      }
    }

    return res;
  },
  self: Parse = function Parse(inText, option) {
    var res = [];

    switch (option) {
      case "перенос по слову":
        res = inText.split(" ");
        break;

      case "перенос по символу":
        for (var i = 0; i < inText.length; i++) {
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
module.exports = {
  textFormatter: textFormatter
};
},{}],"js/stringCalc.js":[function(require,module,exports) {
var stringCalc = Object.seal({
  Minus: function Minus(src1, src2) {
    return Number(src1) - Number(src2);
  },
  Plus: function Plus(src1, src2) {
    return Number(src1) + Number(src2);
  },
  Mul: function Mul(src1, src2) {
    return Number(src1) * Number(src2);
  },
  Div: function Div(src1, src2) {
    return Number(src1) / Number(src2);
  }
});
module.exports = {
  stringCalc: stringCalc
};
},{}],"js/arraySorter.js":[function(require,module,exports) {
var arraySorter = Object.seal({
  SortBubble: function SortBubble(srcArray) {
    for (var i = 0; i < srcArray.length - 1; i++) {
      for (var j = 0; j < srcArray.length - 1; j++) {
        if (srcArray[j] > srcArray[j + 1]) {
          var tmp = srcArray[j];
          srcArray[j] = srcArray[j + 1];
          srcArray[j + 1] = tmp;
        }
      }
    }

    return srcArray;
  },
  SortBubblewithFlag: function SortBubblewithFlag(srcArray) {
    var flag = true;

    while (flag) {
      flag = false;

      for (var i = 0; i < srcArray.length - 1; i++) {
        if (srcArray[i] > srcArray[i + 1]) {
          var tmp = srcArray[i];
          srcArray[i] = srcArray[i + 1];
          srcArray[i + 1] = tmp;
          flag = true;
        }
      }
    }

    return srcArray;
  },
  SortShaker: function SortShaker(srcArray) {
    var left = 0;
    var right = srcArray.length - 1;

    while (left < right) {
      for (var i = left; i < right; i++) {
        if (srcArray[i] > srcArray[i + 1]) {
          var tmp = srcArray[i];
          srcArray[i] = srcArray[i + 1];
          srcArray[i + 1] = tmp;
        }
      }

      right--;

      for (var _i = right; _i > left; _i--) {
        if (srcArray[_i - 1] > srcArray[_i]) {
          var _tmp = srcArray[_i - 1];
          srcArray[_i - 1] = srcArray[_i];
          srcArray[_i] = _tmp;
        }
      }

      left++;
    }

    return srcArray;
  },
  SortInsert: function SortInsert(srcArray) {
    for (var i = 1; i < srcArray.length; i++) {
      var key = srcArray[i];
      var j = i - 1;

      while (j >= 0 && srcArray[j] > key) {
        srcArray[j + 1] = srcArray[j];
        j--;
      }

      srcArray[j + 1] = key;
    }

    return srcArray;
  }
});
module.exports = {
  arraySorter: arraySorter
};
},{}],"js/binaryConverter.js":[function(require,module,exports) {
var binaryConverter = Object.seal({
  BinToDec: function BinToDec(inArray) {
    var res = 0;

    for (var i = inArray.length - 1; i >= 0; i--) {
      if (inArray[inArray.length - 1 - i] == '1') res += Math.pow(2, i);
    }

    return res;
  },
  DecToBin: function DecToBin(inArray) {
    var input = 0;

    for (var i = 0; i < inArray.length; i++) {
      input += inArray[i] * Math.pow(10, inArray.length - i - 1);
    }

    var maxRazr = 1;

    while (maxRazr * 2 < input) {
      maxRazr *= 2;
    }

    var res = "";

    while (input != 0) {
      if (input - maxRazr >= 0) {
        res += "1";
        input -= maxRazr;
      } else {
        res += "0";
      }

      maxRazr /= 2;
    }

    return res;
  }
});
module.exports = {
  binaryConverter: binaryConverter
};
},{}],"js/subLayer.js":[function(require,module,exports) {
var _require = require('./arrayProcessor.js'),
    arrayProcessor = _require.arrayProcessor;

var _require2 = require('./dateProcessor.js'),
    dateProcessor = _require2.dateProcessor;

var _require3 = require('./textFormatter.js'),
    textFormatter = _require3.textFormatter;

var _require4 = require('./stringCalc.js'),
    stringCalc = _require4.stringCalc;

var _require5 = require('./arraySorter.js'),
    arraySorter = _require5.arraySorter;

var _require6 = require('./binaryConverter.js'),
    binaryConverter = _require6.binaryConverter;

arrProcSubSum = function arrProcSubSum() {
  Clear();
  var src = document.getElementById("in1").value.split(",").map(Number);
  document.getElementById("out1.1").innerText = "Max summary: " + arrayProcessor.GetMaxSubSum(src);
};

arrProcMinMaxMedian = function arrProcMinMaxMedian() {
  Clear();
  var src = document.getElementById("in1").value.split(",").map(Number);
  var res = arrayProcessor.GetMaxMinMedian(src);
  document.getElementById("out1.1").innerText = "Max: " + res[0];
  document.getElementById("out1.2").innerText = "Min: " + res[1];
  document.getElementById("out1.3").innerText = "Median: " + res[2];
};

arrProcSortSeq = function arrProcSortSeq() {
  Clear();
  var src = document.getElementById("in1").value.split(",").map(Number);
  document.getElementById("out1.1").innerText = "Max sorted: " + arrayProcessor.GetMaxSortedSequence(src);
};

Clear = function Clear() {
  document.getElementById("out1.1").innerText = "";
  document.getElementById("out1.2").innerText = "";
  document.getElementById("out1.3").innerText = "";
};

dateProcParse = function dateProcParse() {
  var src = document.getElementById("in2").value.split(",");

  for (var i = 0; i < src.length; i++) {
    src[i] = src[i].trim();
  }

  var patterns = document.getElementById("in2adds").value;
  document.getElementById("out2").innerText = dateProcessor.DateParser(src[0], src[1], src[2], patterns);
};

textFormOption = function textFormOption() {
  var src = document.getElementById("in3").value.split(",");

  for (var i = 0; i < src.length; i++) {
    src[i] = src[i].trim();
  }

  var form = document.getElementById("in3list").value;
  var adds = document.getElementById("in3adds").value;
  document.getElementById("out3").innerText = textFormatter.Format(src[0], src[1], src[2], form, adds);
};

strCalcMinus = function strCalcMinus() {
  var src1 = document.getElementById("in4.1").value;
  var src2 = document.getElementById("in4.2").value;
  document.getElementById("out4").innerText = stringCalc.Minus(src1, src2);
};

strCalcPlus = function strCalcPlus() {
  var src1 = document.getElementById("in4.1").value;
  var src2 = document.getElementById("in4.2").value;
  document.getElementById("out4").innerText = stringCalc.Plus(src1, src2);
};

strCalcMul = function strCalcMul() {
  var src1 = document.getElementById("in4.1").value;
  var src2 = document.getElementById("in4.2").value;
  document.getElementById("out4").innerText = stringCalc.Mul(src1, src2);
};

strCalcDiv = function strCalcDiv() {
  var src1 = document.getElementById("in4.1").value;
  var src2 = document.getElementById("in4.2").value;
  document.getElementById("out4").innerText = stringCalc.Div(src1, src2);
};

arrSortBubble = function arrSortBubble() {
  var src = document.getElementById("in5").value.split(",").map(Number);
  document.getElementById("out5").innerText = "Bubble: " + arraySorter.SortBubble(src);
};

arrSortBubbleWF = function arrSortBubbleWF() {
  var src = document.getElementById("in5").value.split(",").map(Number);
  document.getElementById("out5").innerText = "Bubble Flag: " + arraySorter.SortBubblewithFlag(src);
};

arrSortShaker = function arrSortShaker() {
  var src = document.getElementById("in5").value.split(",").map(Number);
  document.getElementById("out5").innerText = "Shaker: " + arraySorter.SortShaker(src);
};

arrSortInsert = function arrSortInsert() {
  var src = document.getElementById("in5").value.split(",").map(Number);
  document.getElementById("out5").innerText = "Insert: " + arraySorter.SortInsert(src);
};

binConvToDec = function binConvToDec() {
  var src = document.getElementById("in6").value.split(",").map(Number);
  document.getElementById("out6").innerText = "Dec: " + binaryConverter.BinToDec(src);
};

binConvToBin = function binConvToBin() {
  var src = document.getElementById("in6").value.split(",").map(Number);
  document.getElementById("out6").innerText = "Bin: " + binaryConverter.DecToBin(src);
};

cachingCalcMinus = function cachingCalcMinus() {
  var src1 = document.getElementById("in7.1").value;
  var src2 = document.getElementById("in7.2").value;
  var key = src1 + " " + src2 + "-";
  document.getElementById("out7").innerText = callClass.Store(key, function () {
    return stringCalc.Minus(src1, src2);
  });
};

cachingCalcPlus = function cachingCalcPlus() {
  var src1 = document.getElementById("in7.1").value;
  var src2 = document.getElementById("in7.2").value;
  var key = src1 + " " + src2 + "+";
  document.getElementById("out7").innerText = callClass.Store(key, function () {
    return stringCalc.Plus(src1, src2);
  });
};

cachingCalcMul = function cachingCalcMul() {
  var src1 = document.getElementById("in7.1").value;
  var src2 = document.getElementById("in7.2").value;
  var key = src1 + " " + src2 + "*";
  document.getElementById("out7").innerText = callClass.Store(key, function () {
    return stringCalc.Mul(src1, src2);
  });
};

cachingCalcDiv = function cachingCalcDiv() {
  var src1 = document.getElementById("in7.1").value;
  var src2 = document.getElementById("in7.2").value;
  var key = src1 + " " + src2 + "/";
  document.getElementById("out7").innerText = callClass.Store(key, function () {
    return stringCalc.Div(src1, src2);
  });
};

var callClass = {
  Store: function Store(key, func) {
    var cache = window.localStorage;
    var res = cache.getItem(key);

    if (res == null) {
      res = func();
      cache.setItem(key, res);
    }

    return res;
  }
};
},{"./arrayProcessor.js":"js/arrayProcessor.js","./dateProcessor.js":"js/dateProcessor.js","./textFormatter.js":"js/textFormatter.js","./stringCalc.js":"js/stringCalc.js","./arraySorter.js":"js/arraySorter.js","./binaryConverter.js":"js/binaryConverter.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63246" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/subLayer.js"], null)
//# sourceMappingURL=/subLayer.615fa9bc.js.map