/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[23],{400:function(ia){(function(){ia.exports={DR:function(){function z(e,f){this.scrollLeft=e;this.scrollTop=f}function e(e){if(null===e||"object"!==typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"===typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.");}function fa(e,n){if("Y"===
n)return e.clientHeight+f<e.scrollHeight;if("X"===n)return e.clientWidth+f<e.scrollWidth}function x(e,f){e=ca.getComputedStyle(e,null)["overflow"+f];return"auto"===e||"scroll"===e}function ha(e){var f=fa(e,"Y")&&x(e,"Y");e=fa(e,"X")&&x(e,"X");return f||e}function da(e){var f=(n()-e.startTime)/468;var h=.5*(1-Math.cos(Math.PI*(1<f?1:f)));f=e.Xv+(e.x-e.Xv)*h;h=e.Yv+(e.y-e.Yv)*h;e.method.call(e.hB,f,h);f===e.x&&h===e.y||ca.requestAnimationFrame(da.bind(ca,e))}function ea(e,f,x){var h=n();if(e===w.body){var y=
ca;var aa=ca.scrollX||ca.pageXOffset;e=ca.scrollY||ca.pageYOffset;var ba=r.scroll}else y=e,aa=e.scrollLeft,e=e.scrollTop,ba=z;da({hB:y,method:ba,startTime:h,Xv:aa,Yv:e,x:f,y:x})}var ca=window,w=document;if(!("scrollBehavior"in w.documentElement.style&&!0!==ca.Ffa)){var aa=ca.HTMLElement||ca.Element,r={scroll:ca.scroll||ca.scrollTo,scrollBy:ca.scrollBy,rN:aa.prototype.scroll||z,scrollIntoView:aa.prototype.scrollIntoView},n=ca.performance&&ca.performance.now?ca.performance.now.bind(ca.performance):
Date.now,f=/MSIE |Trident\/|Edge\//.test(ca.navigator.userAgent)?1:0;ca.scroll=ca.scrollTo=function(f,n){void 0!==f&&(!0===e(f)?r.scroll.call(ca,void 0!==f.left?f.left:"object"!==typeof f?f:ca.scrollX||ca.pageXOffset,void 0!==f.top?f.top:void 0!==n?n:ca.scrollY||ca.pageYOffset):ea.call(ca,w.body,void 0!==f.left?~~f.left:ca.scrollX||ca.pageXOffset,void 0!==f.top?~~f.top:ca.scrollY||ca.pageYOffset))};ca.scrollBy=function(f,n){void 0!==f&&(e(f)?r.scrollBy.call(ca,void 0!==f.left?f.left:"object"!==typeof f?
f:0,void 0!==f.top?f.top:void 0!==n?n:0):ea.call(ca,w.body,~~f.left+(ca.scrollX||ca.pageXOffset),~~f.top+(ca.scrollY||ca.pageYOffset)))};aa.prototype.scroll=aa.prototype.scrollTo=function(f,n){if(void 0!==f)if(!0===e(f)){if("number"===typeof f&&void 0===n)throw new SyntaxError("Value could not be converted");r.rN.call(this,void 0!==f.left?~~f.left:"object"!==typeof f?~~f:this.scrollLeft,void 0!==f.top?~~f.top:void 0!==n?~~n:this.scrollTop)}else n=f.left,f=f.top,ea.call(this,this,"undefined"===typeof n?
this.scrollLeft:~~n,"undefined"===typeof f?this.scrollTop:~~f)};aa.prototype.scrollBy=function(f,n){void 0!==f&&(!0===e(f)?r.rN.call(this,void 0!==f.left?~~f.left+this.scrollLeft:~~f+this.scrollLeft,void 0!==f.top?~~f.top+this.scrollTop:~~n+this.scrollTop):this.scroll({left:~~f.left+this.scrollLeft,top:~~f.top+this.scrollTop,behavior:f.behavior}))};aa.prototype.scrollIntoView=function(f){if(!0===e(f))r.scrollIntoView.call(this,void 0===f?!0:f);else{for(f=this;f!==w.body&&!1===ha(f);)f=f.parentNode||
f.host;var h=f.getBoundingClientRect(),n=this.getBoundingClientRect();f!==w.body?(ea.call(this,f,f.scrollLeft+n.left-h.left,f.scrollTop+n.top-h.top),"fixed"!==ca.getComputedStyle(f).position&&ca.scrollBy({left:h.left,top:h.top,behavior:"smooth"})):ca.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}}}}}})()}}]);}).call(this || window)
