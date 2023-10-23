
window.interdeal = {
  "sitekey": "85c3bdd2dfedf8107dac3aabebb36ef1",
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
(function (doc, head, body) {
  var coreCall = doc.createElement('script');
  coreCall.src = 'https://cdn.equalweb.com/core/4.2.2/accessibility.js';
  coreCall.defer = true;
  coreCall.integrity = 'sha512-5JFUorutIyGmP61zRJjdTke6AFi8/IYzJ6pyQL0UpUqwMNDuukmNH2qv2s+lj0X6MPtblMt4KgWLoDmqrTa5kg==';
  coreCall.crossOrigin = 'anonymous';
  coreCall.setAttribute('data-cfasync', true);
  body ? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);