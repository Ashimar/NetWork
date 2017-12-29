(function(){'use strict';var e;var g=function(){};goog.inherits(g,HTMLElement);e=g.prototype;e.createdCallback=function(){this.b=this.getAttribute("id")+"_data";window[this.b]||(window[this.b]={});this.a=null;this.c=[];this.f=!1;"function"!=typeof window.onAdData&&(this.f=!0,window.onAdData=this.onAdData_.bind(this))};
e.getData=function(){if(this.hasAttribute("is-custom-schema")){var a={};window.dynamicContent?a=window.dynamicContent:window.devDynamicContent&&(a=window.devDynamicContent);return a}if(this.f)return this.a;a=Enabler.getParameter("AdData");return this.a=this.processAdData_(a)};e.isDataLoaded=function(){return!0};e.addDataTransformer=function(a){this.c.push(a)};
e.onAdData_=function(a){if(a){a=this.a=this.processAdData_(a);if(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("ready",!0,!0,a)}else b=document.createEvent("Event"),b.initEvent("ready",!0,!0);this.dispatchEvent(b)}};
e.processAdData_=function(a){if(!a)return null;a=a.google_template_data;if(!a)throw Error("Incorrect data format: missing google_template_data");if((a=a.adData)&&0<a.length){var b=this.toCanonicalForm_(a[0]);a=this.getAttribute("network-schema-id");if(this.hasAttribute("is-custom-schema"))window.dynamicContent=b;else if(!a||416==a||311==a)k(b);else if(442==a||445==a)l(b),445==a&&m(b);this.c.forEach(function(a){"function"==typeof a&&a.call(this,b,this)}.bind(this));return b}throw Error("Incorrect data format: missing google_template_data.adData");
};e.toCanonicalForm_=function(a){var b={},d;for(d in a){var c=d.split("_");if(1==c.length)b[c[0]]=a[d];else{var f=c[0];var h=c[1];c=c[2];b[f]||(b[f]=[]);b[f][h]||(b[f][h]={});b[f][h][c]=a[d]}}return b};
var k=function(a){var b=a.Design;Array.isArray(b)&&1==b.length&&(a.Design=b[0]);b=a.Headline;Array.isArray(b)&&1==b.length&&(a.Headline=b[0])},l=function(a){var b=a.screenshots;if("undefined"==typeof b){for(var b=[],d,c=1;4>=c;c++)(d=a["screenshot"+c])&&b.push(d);a.screenshots=b}"undefined"==typeof a.appIcon&&(b=a.appIconStandard,a.appIcon=a.appIconHighRes||b)},m=function(a){var b=a.callToAction;if(!b){var b=a.callToActionOpen,d=a.callToActionInstall,b=a.isAppInstalled?b:d;a.callToAction=b}};
g.prototype.attributeChangedCallback=function(){};document.registerElement("gwd-gpa-data-provider",{prototype:g.prototype});}).call(this);
