"use strict";!function(){try{addEventListener("message",(function(e){var t=e.data;if(t.wappalyzer&&t.wappalyzer.technologies){var n=t.wappalyzer.technologies;postMessage({wappalyzer:{js:n.reduce((function(e,t){var n=t.name;return t.chains.forEach((function(t,a){var r=t.split(".").reduce((function(e,t){return e&&e instanceof Object&&Object.prototype.hasOwnProperty.call(e,t)&&!(Object.getOwnPropertyDescriptor(e,t)||{}).get?e[t]:"__UNDEFINED__"}),window);"__UNDEFINED__"!==r&&e.push({name:n,chain:t,value:"string"==typeof r||"number"==typeof r?r:!!r})})),e}),[])}})}}),{once:!0})}catch(e){}}();
//# sourceMappingURL=js.js.map
