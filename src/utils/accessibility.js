
window.interdeal = {
  "sitekey": "39c82b6ea9e5330432e0fac83b972b49",
  "Position": "Right",
  "Menulang": "ES",
  "domains": {
      "js": "https://cdn.equalweb.com/",
      "acc": "https://access.equalweb.com/"
  },
  "btnStyle": {
      "vPosition": [
          "50%",
          null
      ],
      "scale": [
          "0.7",
          "0.7"
      ],
"color": {
      "main": "#003A70",
      "second": "#F8E08E"
    },
      "icon": {
          "type": 12,
          "shape": "semicircle",
          "outline": true
      }
  }
};
(function(doc, head, body){
var coreCall             = doc.createElement('script');
coreCall.src             = interdeal.domains.js + 'core/4.5.11/accessibility.js';
coreCall.defer           = true;
coreCall.integrity       = 'sha512-ituk7fx8YI2pGzcu9bn3wbur6GvkBObBAGbpaq/9oRHAiODhgNxe7fstsL6nJJ8JmSwn3b6nH9i2Mtfr5tdkVw==';
coreCall.crossOrigin     = 'anonymous';
coreCall.setAttribute('data-cfasync', true );
body? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);