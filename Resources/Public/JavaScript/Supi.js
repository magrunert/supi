!function(){"use strict";var e={22:function(e,t){var o=this&&this.__read||function(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var i,n,l=o.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=l.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return a},i=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],i=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};t.__esModule=!0,t.cookie=void 0,t.cookie=new(function(){function e(){var e=this;this.values=new Map,this.lifetime=7,document.cookie.split("; ").forEach((function(t){var n,l,a=o(t.split("="),2),s=a[0],r=a[1];if("supi"==s){var c=JSON.parse(decodeURIComponent(r));try{for(var u=i(Object.keys(c)),d=u.next();!d.done;d=u.next()){var p=d.value;e.values.set(p,c[p])}}catch(e){n={error:e}}finally{try{d&&!d.done&&(l=u.return)&&l.call(u)}finally{if(n)throw n.error}}}}))}return e.prototype.get=function(e){return this.values.has(e)?this.values.get(e):null},e.prototype.has=function(e){return this.values.has(e)},e.prototype.set=function(e,t){this.values.set(e,t),this.persist()},e.prototype.setLifetime=function(e){e>0&&e<367&&(this.lifetime=e,this.persist())},e.prototype.remove=function(e){this.values.delete(e),this.persist()},e.prototype.persist=function(){var e=this;this.persistTimeout&&clearTimeout(this.persistTimeout),this.persistTimeout=setTimeout((function(){e.persistTimeout=null;var t=new Date,o={};e.values.forEach((function(e,t){o[t]=e})),t.setTime(t.getTime()+24*e.lifetime*60*60*1e3);var i="supi="+encodeURIComponent(JSON.stringify(o))+"; expires="+t.toUTCString()+"; path=/;";window.MSInputMethodContext||document.documentMode||(i+="; SameSite=Strict","https:"==location.protocol&&(i+="; Secure")),document.cookie=i}),20)},e.prototype.getCookieNames=function(){return document.cookie.split("; ").map((function(e){return e.split("=").shift()})).filter((function(e){return"supi"!==e}))},e.prototype.purgeCookie=function(e){var t=new Date;t.setTime(t.getTime()-216e6);var o=document.domain.split("."),i=e+"=x; expires="+t.toUTCString()+"; path=/;";o.length>1&&(i+=" domain=."+o.slice(-2).join(".")+";"),document.cookie=i},e}())},642:function(e,t){var o,i,n,l;t.__esModule=!0,t.findAll=t.findOne=void 0,t.findOne=function(e,t){return void 0===t&&(t=null),(t||document).querySelector(e)},t.findAll=function(e,t){return void 0===t&&(t=null),Array.from((t||document).querySelectorAll(e))},Array.from||(Array.from=(o=Object.prototype.toString,i=function(e){return"function"==typeof e||"[object Function]"===o.call(e)},n=Math.pow(2,53)-1,l=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),n)},function(e){var t=this,o=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var n,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!i(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(n=arguments[2])}for(var s,r=l(o.length),c=i(t)?Object(new t(r)):new Array(r),u=0;u<r;)s=o[u],c[u]=a?void 0===n?a(s,u):a.call(n,s,u):s,u+=1;return c.length=r,c}))},429:function(e,t,o){var i=this&&this.__read||function(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var i,n,l=o.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=l.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return a},n=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e},l=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],i=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};t.__esModule=!0;var a=o(905),s=o(642),r=o(22),c=function(){function e(){var e,t,o,i,n,l,c,u,d,p,f,h,v=this;if(this.cookieNameStatus="status",this.cookieNameAllowed="allowed",this.cookieNameYoutube="yt",this.cookieNameGoogleMaps="gmaps",this.overlay=!1,this.allowed=[],this.ttlAll=30,this.ttlReduced=7,this.allowAll=!1,this.allowYoutube=!1,this.allowMaps=!1,this.writeLog=!1,this.services=[],this.root=s.findOne("#supi"),this.root){this.dismiss=s.findOne("[data-toggle=dismiss]",this.root),this.choose=s.findOne("#supi__choose"),this.banner=null!==(e=s.findOne("#supi__overlay"))&&void 0!==e?e:s.findOne("#supi__banner"),this.modal=s.findOne("#supi__banner"),this.focusTrapEventHandler=this.focusTrapNavigator.bind(this),this.overlay=!!s.findOne("#supi__overlay"),this.html=s.findOne("html"),this.body=document.body,this.switch=s.findOne("#supi__switchTo"),this.save=s.findOne("[data-toggle=save]",this.root),this.writeLog=this.body.classList.contains("develop"),this.config=JSON.parse(this.root.getAttribute("data-supi-config")),this.log("Loaded config %o",this.config),this.ttlReduced=null!==(i=null===(o=null===(t=this.config)||void 0===t?void 0:t.cookieTTL)||void 0===o?void 0:o.reduced)&&void 0!==i?i:this.ttlReduced,this.ttlAll=null!==(c=null===(l=null===(n=this.config)||void 0===n?void 0:n.cookieTTL)||void 0===l?void 0:l.all)&&void 0!==c?c:this.ttlAll;var g=r.cookie.get(this.cookieNameAllowed);Array.isArray(g)&&g.length&&(this.allowed=g),null===(p=null===(d=null===(u=this.config)||void 0===u?void 0:u.elements)||void 0===d?void 0:d.essential)||void 0===p||p.names.split(",").forEach((function(e){-1===v.allowed.indexOf(e)&&v.allowed.push(e)})),Object.keys(this.config.elements).forEach((function(e){Object.keys(v.config.elements[e].items).forEach((function(t){v.config.elements[e].items[t].service&&v.services.push(v.config.elements[e].items[t].service)}))})),this.log("Collected services %o",this.services);var m=r.cookie.get(this.cookieNameStatus);m==a.Status.All?(this.allowAll=!0,this.injectJavaScripts(),this.updateCookieTTL()):m==a.Status.Selected?(this.injectJavaScripts(),this.updateCookieTTL()):r.cookie.get(this.cookieNameStatus)||(r.cookie.remove(this.cookieNameStatus),s.findOne('[data-hide-overlay="1"]')?this.log('Hides the Banner-Overlay due to the given Setting "hideOverlayOnButtonCe"',"",""):this.toggleBanner()),this.log("Checking for yt cookie"),this.allowYoutube="y"===r.cookie.get(this.cookieNameYoutube)||this.allowAll||m==a.Status.Selected&&(null===(f=this.config)||void 0===f?void 0:f.essentialIncludesYoutube),this.log('Youtube cookie is "%o" resulting in %o',r.cookie.get(this.cookieNameYoutube),this.allowYoutube),this.enableYoutubeVideos(),this.allowMaps="y"===r.cookie.get(this.cookieNameGoogleMaps)||this.allowAll||m==a.Status.Selected&&(null===(h=this.config)||void 0===h?void 0:h.essentialIncludesMaps),this.log('Maps cookie is "%o" resulting in %o',r.cookie.get(this.cookieNameGoogleMaps),this.allowMaps),this.enableMaps(),this.addClickHandler(),this.setDetailDefaults(),this.toggleAllServices()}else this.log("Found no supi root element")}return e.prototype.toggleAllServices=function(){var e=this;this.services.forEach((function(t){return e.toggleService(t)}))},e.prototype.updateCookieTTL=function(){r.cookie.setLifetime(this.allowAll?this.ttlAll:this.ttlReduced)},e.prototype.addClickHandler=function(){var e=this;s.findAll("[data-toggle=allow]",this.root).forEach((function(t){e.log("Allow all on click on %o",t),t.addEventListener("click",(function(t){e.log("Allow all was clicked, processing"),e.allowAll=!0,e.allowMaps=!0,e.allowYoutube=!0,e.collectAllowed(a.Mode.All),e.removeScripts(),!0===e.injectJavaScripts()&&(e.toggleBanner(),r.cookie.set(e.cookieNameStatus,a.Status.All),r.cookie.set(e.cookieNameYoutube,"y"),r.cookie.set(e.cookieNameGoogleMaps,"y")),e.setDetailDefaults(),e.enableMaps(),e.enableYoutubeVideos(),e.removeNotAllowedCookies(),e.toggleAllServices(),t.preventDefault()}))})),this.dismiss&&this.dismiss.addEventListener("click",(function(t){var o,i;t.preventDefault(),e.allowAll=!1,e.collectAllowed(a.Mode.Essential)&&e.removeScripts(),(null===(o=e.config)||void 0===o?void 0:o.essentialIncludesYoutube)&&(e.allowYoutube=!0,r.cookie.set(e.cookieNameYoutube,"y"),e.enableYoutubeVideos()),(null===(i=e.config)||void 0===i?void 0:i.essentialIncludesMaps)&&(e.allowMaps=!0,r.cookie.set(e.cookieNameGoogleMaps,"y"),e.enableMaps()),!0===e.removeScripts()&&(e.toggleBanner(),r.cookie.set(e.cookieNameStatus,a.Status.Selected)),e.toggleAllServices(),e.setDetailDefaults(),e.removeNotAllowedCookies()})),this.save&&this.save.addEventListener("click",(function(t){t.preventDefault(),e.allowAll=!1,e.collectAllowed(a.Mode.Selected),e.removeScripts(),e.injectJavaScripts()&&(e.toggleBanner(),r.cookie.set(e.cookieNameStatus,a.Status.Selected)),e.toggleAllServices(),e.removeNotAllowedCookies()})),this.choose&&(this.log("Add main choose toggle to %o",this.choose),this.choose.addEventListener("click",(function(t){t.preventDefault(),e.toggleBanner()}))),s.findAll("a, button").filter((function(e){return"#supi-choose"==e.getAttribute("href")})).forEach((function(t){e.log("Add choose toggle to %o",t),t.addEventListener("click",(function(t){t.preventDefault(),e.toggleBanner()}))})),s.findAll("[data-toggle=switch]").filter((function(e){return s.findOne(e.dataset.switchFrom)&&s.findOne(e.dataset.switchTo)})).forEach((function(t){t.addEventListener("click",(function(o){s.findOne(t.dataset.switchFrom).classList.add("tx-supi__pane-hidden"),s.findOne(t.dataset.switchFrom).setAttribute("hidden",""),s.findOne(t.dataset.switchTo).classList.remove("tx-supi__pane-hidden"),s.findOne(t.dataset.switchTo).removeAttribute("hidden"),"disable"===t.dataset.inputs&&e.allowed.length<1&&s.findAll("input[type=checkbox]").forEach((function(e){e.checked=e.disabled||!!e.dataset.required})),e.focusTrapElements=e.getFocusTrapElements(),o.preventDefault()}))})),s.findAll("[data-toggle=visibility]").filter((function(e){return!!s.findOne(e.dataset.target)})).forEach((function(t){t.addEventListener("click",(function(o){t.classList.toggle("tx-supi__pane-active"),"false"===t.getAttribute("aria-expanded")?(t.setAttribute("aria-expanded","true"),e.focusTrapElements=e.getFocusTrapElements()):t.setAttribute("aria-expanded","false");var i=s.findOne(t.dataset.target);i.classList.toggle("tx-supi__pane-hidden"),i.classList.contains("tx-supi__pane-hidden")||(e.focusTrapElements=e.getFocusTrapElements()),i.toggleAttribute("hidden"),o.preventDefault()}))})),s.findAll("input[data-supi-block]").filter((function(e){return!e.disabled})).forEach((function(e){e.addEventListener("click",(function(t){if(e.dataset.supiParent)s.findAll("[data-supi-block="+e.dataset.supiBlock+"]").forEach((function(t){t.dataset.supiParent||(t.checked=e.checked)}));else{var o=s.findOne("[data-supi-parent="+e.dataset.supiBlock+"]"),i=s.findAll("[data-supi-block="+e.dataset.supiBlock+"]").filter((function(e){return!!e.dataset.supiItem}));o&&i.length&&(o.checked=i.reduce((function(e,t){return e&&t.checked}),!0))}t.stopPropagation()}))})),s.findAll(".tx-supi__youtube").forEach((function(t){var o,i;e.log("Add listener to child of %o",t),null===(o=t.querySelector("[data-toggle=youtube]"))||void 0===o||o.addEventListener("click",(function(){e.log("Enabling all youtube elements"),r.cookie.set(e.cookieNameYoutube,"y"),e.toggleYoutubeVideos(t)})),null===(i=t.querySelector("[data-toggle=youtube-once]"))||void 0===i||i.addEventListener("click",(function(){e.log("Enabling one youtube element: %o",t),e.toggleYoutubeVideos(t,!0)}))})),s.findAll(".tx_supi__map").forEach((function(t){var o=t.querySelector("[data-toggle=map]");e.log("Add listener to toggle %o for map %o",o,t),null==o||o.addEventListener("click",(function(){e.allowMaps=!0,r.cookie.set(e.cookieNameGoogleMaps,"y"),e.enableMaps()}))})),s.findAll(".tx-supi__simpleMaps").forEach((function(t){var o,i;e.log("Add listener to for simpleMap %o",t),null===(o=t.querySelector("[data-toggle=simpleMaps]"))||void 0===o||o.addEventListener("click",(function(){e.log("Enabling all simple google maps elements"),r.cookie.set(e.cookieNameGoogleMaps,"y"),e.toggleSimpleMaps(t)})),null===(i=t.querySelector("[data-toggle=simpleMaps-once]"))||void 0===i||i.addEventListener("click",(function(){e.log("Enabling onr simple google maps elements"),e.toggleSimpleMaps(t,!0)}))})),s.findAll("[data-supi-service-container]").forEach((function(t){var o,i=t.dataset.supiServiceContainer||"";i&&(null===(o=t.querySelector("[data-toggle=supiServiceContainer]"))||void 0===o||o.addEventListener("click",(function(){e.log("Enabling service "+i),r.cookie.set(i,"y"),e.toggleService(i)})))})),s.findAll("[data-toggle=supiDetails]").forEach((function(e){e.addEventListener("click",(function(t){var o=s.findOne(e.dataset.target);if(o){var i=o.classList.contains("open")?"open":"closed",n=o.classList.contains("open")?"closed":"open";[o,e].forEach((function(e){return e.classList.add(n)})),[o,e].forEach((function(e){return e.classList.remove(i)}))}t.preventDefault()}))}))},e.prototype.injectJavaScripts=function(){var e=this;return s.findAll("script").filter((function(e){return"application/supi"==e.type})).filter((function(t){var o=e.allowAll||!!t.dataset.supiRequired;return!o&&t.dataset.supiCookies&&(o=t.dataset.supiCookies.split(",").reduce((function(t,o){return t||e.allowed.indexOf(o)>-1}),!1)),o})).forEach((function(e){var t=document.createElement("script");t.type="text/javascript",t.className="supi-scripts",t.dataset.supiCookies=e.dataset.supiCookies,t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e)})),!0},e.prototype.toggleBanner=function(){var e=this;1==this.overlay&&(this.body.classList.toggle("tx-supi__overlay"),this.html.classList.toggle("tx-supi__overlay")),this.banner.classList.toggle("hide"),this.banner.classList.contains("hide")?this.disableFocusTrap():(requestAnimationFrame((function(){e.modal.focus()})),this.enableFocusTrap());var t=!0,o=s.findOne("[data-supi-service=googleMaps]",this.root);o&&(t=this.allowMaps&&t,o.checked=this.allowMaps);var i=s.findOne("[data-supi-service=youtube]",this.root);i&&(t=this.allowYoutube&&t,i.checked=this.allowYoutube),s.findAll("[data-supi-service]",this.root).forEach((function(o){if(!o.dataset.supiParent&&"youtube"!=o.dataset.supiService&&"googleMaps"!=o.dataset.supiService){var i=e.allowAll||"y"==r.cookie.get(o.dataset.supiService);o.checked=i,t=i&&t}}));var n=s.findOne("[data-supi-parent=media]",this.root);n&&(n.checked=t)},e.prototype.removeScripts=function(){return s.findAll(".supi-scripts").forEach((function(e){var t=document.createElement("script");t.type="application/supi",t.dataset.supiCookies=e.dataset.supiCookies,t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e)})),!0},e.prototype.collectAllowed=function(e){var t=this;void 0===e&&(e=a.Mode.Essential);var o=this.allowed.sort().join();switch(this.allowed=[],e){case a.Mode.All:Object.keys(this.config.elements).forEach((function(e){var o,i;null===(i=null===(o=t.config.elements[e])||void 0===o?void 0:o.names)||void 0===i||i.split(",").forEach((function(e){t.allowed.push(e)}))}));break;case a.Mode.Essential:r.cookie.set(this.cookieNameGoogleMaps,"n"),this.allowMaps=!1,r.cookie.set(this.cookieNameYoutube,"n"),this.allowYoutube=!1,this.services.forEach((function(e){return r.cookie.set(e,"n")})),Object.keys(this.config.elements||{}).filter((function(e){var o,i;return!!(null===(i=null===(o=t.config)||void 0===o?void 0:o.elements[e])||void 0===i?void 0:i.required)})).forEach((function(e){var o,i;null===(i=null===(o=t.config.elements[e])||void 0===o?void 0:o.names)||void 0===i||i.split(",").forEach((function(e){t.allowed.push(e)}))}));break;case a.Mode.Selected:r.cookie.set(this.cookieNameGoogleMaps,"n"),this.allowMaps=!1,r.cookie.set(this.cookieNameYoutube,"n"),this.allowYoutube=!1,this.services.forEach((function(e){return r.cookie.set(e,"n")})),s.findAll("input[type=checkbox]",this.root).filter((function(e){return e.checked||(parseInt(e.dataset.supiRequired)||0)>0})).forEach((function(e){if(e.dataset.supiService)switch(e.dataset.supiService){case"googleMaps":r.cookie.set(t.cookieNameGoogleMaps,"y"),t.allowMaps=!0,t.enableMaps();break;case"youtube":r.cookie.set(t.cookieNameYoutube,"y"),t.allowYoutube=!0,t.enableYoutubeVideos();break;default:r.cookie.set(e.dataset.supiService,"y"),t.toggleAllServices()}else e.value.split(",").map((function(e){return e.trim()})).forEach((function(e){-1===t.allowed.indexOf(e)&&t.allowed.push(e)}))}))}return this.allowed.sort().join()===o},e.prototype.enableFocusTrap=function(){this.preFocusTrapActiveElement=void 0,document.activeElement instanceof HTMLElement&&(this.preFocusTrapActiveElement=document.activeElement,document.activeElement.blur()),document.addEventListener("keydown",this.focusTrapEventHandler)},e.prototype.disableFocusTrap=function(){document.removeEventListener("keydown",this.focusTrapEventHandler),this.preFocusTrapActiveElement instanceof HTMLElement&&this.preFocusTrapActiveElement.focus()},e.prototype.focusTrapNavigator=function(e){if("Tab"===e.key){e.preventDefault(),this.focusTrapElements=this.getFocusTrapElements();var t=this.focusTrapElements.indexOf(document.activeElement)+(e.shiftKey?-1:1);t<0?t=this.focusTrapElements.length-1:t>=this.focusTrapElements.length&&(t=0),this.focusTrapElements[t].focus()}},e.prototype.getFocusTrapElements=function(){return s.findAll("a, button, *[tabindex], input[type=checkbox]:not([disabled])",this.banner).filter((function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}))},e.prototype.removeNotAllowedCookies=function(){var e=this;this.log("Comparing currently set cookies %o with allowed %o, allow all is %o",r.cookie.getCookieNames(),this.allowed,this.allowAll),r.cookie.getCookieNames().forEach((function(t){e.allowAll||-1!==e.allowed.indexOf(t)||(e.log("Removing cookie "+t),r.cookie.purgeCookie(t))})),r.cookie.set(this.cookieNameAllowed,this.allowed)},e.prototype.setDetailDefaults=function(){var e=this;s.findAll("input[data-supi-parent]").forEach((function(t){var o=s.findAll("input[data-supi-block="+t.dataset.supiParent+"][data-supi-item]");o.length?(t.checked=!0,o.forEach((function(t){t.checked=t.disabled||e.allowAll||t.value.split(",").reduce((function(t,o){return t&&e.allowed.indexOf(o)>-1}),!0)})),t.checked=o.reduce((function(e,t){return e&&t.checked}),!0),e.log("Set parent %o to %o",t,t.checked)):(e.log("Check if all of parent values %s",t.value,e.allowed),t.checked=t.disabled||e.allowAll||t.value.split(",").reduce((function(t,o){return e.log("Checking value %s with prev of %o",o,t),t&&(o=o.replace(/\s+/g,""),e.log("Prev still true, checking if value %s is in %o",o,e.allowed),""!==o&&-1===e.allowed.indexOf(o)&&(e.log("Value %s is not in %o, setting to false",o,e.allowed),t=!1)),t}),!0))}))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.writeLog&&console.log.apply(console,n(e))},e.prototype.enableYoutubeVideos=function(){var e=this;this.allowYoutube&&(this.log("Enabling all videos, non autostart"),s.findAll(".tx-supi__youtube").forEach((function(t){e.log("Enabling %o",t),e.addVideo(t,"")})))},e.prototype.toggleYoutubeVideos=function(e,t){void 0===t&&(t=!1),this.log("Enabling youtube"),this.allowYoutube=!0,this.log("Start video for %o",e),this.addVideo(e,"&autoplay=1&mute=1"),t?this.allowYoutube=!1:(r.cookie.set(this.cookieNameYoutube,"y"),this.log("Enabling other videos"),this.enableYoutubeVideos())},e.prototype.addVideo=function(e,t){if(this.allowYoutube){var o=e.querySelector(".tx-supi__youtube-preview-image").getBoundingClientRect(),i="https://www.youtube-nocookie.com/embed/"+e.dataset.youtubeId+"?rel=0&modestbranding=1"+t,n=document.createElement("iframe");n.src=i,n.frameBorder="0",n.style.border="0",n.width=o.width+"",n.height=o.height+"",n.setAttribute("autoplay","true"),e.parentNode.replaceChild(n,e);var l=new CustomEvent("onYouTubeAllowed",{detail:n});window.dispatchEvent(l)}else this.log("Youtube not enabled")},e.prototype.enableMaps=function(){this.allowMaps&&(s.findAll(".tx_supi__map").forEach((function(e){var t=e.querySelector("[data-toggle=map]");if(t){var o=t.dataset.callback;e.classList.add("active"),window[o]()}})),this.enableSimpleMaps())},e.prototype.enableSimpleMaps=function(){var e=this;this.log("Enabling all simple maps implementations"),s.findAll(".tx-supi__simpleMaps").forEach((function(t){e.log("Enabling %o",t),e.addSimpleMap(t)}))},e.prototype.toggleSimpleMaps=function(e,t){void 0===t&&(t=!1),this.log("Enabling Simple Maps"),this.allowMaps=!0,this.addSimpleMap(e),t?this.allowMaps=!1:(r.cookie.set(this.cookieNameGoogleMaps,"y"),this.log("Enabling all maps"),this.enableSimpleMaps())},e.prototype.addSimpleMap=function(e){var t,o;if(this.allowMaps){var i="https://maps.google.com/maps?q="+e.dataset.mapAddress+"&t=&z="+((null===(t=e.dataset)||void 0===t?void 0:t.mapZoom)?null===(o=e.dataset)||void 0===o?void 0:o.mapZoom:15)+"&ie=UTF8&iwloc=&output=embed",n=document.createElement("iframe");n.src=i,n.frameBorder="0",n.style.border="0",n.width="800",n.height="600",e.parentNode.replaceChild(n,e);var l=new CustomEvent("onSimpleMapsAllowedEvent",{detail:n});window.dispatchEvent(l)}else this.log("Google Maps not enabled")},e.prototype.toggleService=function(e){var t=this;("y"==r.cookie.get(e)||this.allowAll)&&(this.log("Enabling service %o",e),s.findAll("[data-supi-service-container="+e+"]").forEach((function(o){var n,a,s,r=o.parentNode,c=o.dataset.supiServiceAttr;if("callback"===o.dataset.supiServiceType)return t.log("Executing service %s callback %s",e,o.dataset.supiServiceCallback),void setTimeout((function(){try{var i=o.dataset.supiServiceCallback;window[i](o);var n=new CustomEvent("serviceCallback",{detail:{parent:r,service:e}});r.dispatchEvent(n)}catch(e){t.log("Cannot call service callback %s: %s",o.dataset.supiServiceCallback,e)}}),10);switch(t.log("Enable element %o of service %o",o,e),o.dataset.supiServiceType){case"script":(s=document.createElement("script")).type="text/javascript",s.async=!0,s.defer=!0;break;case"img":(s=document.createElement("img")).alt="",s.border="0";break;default:(s=document.createElement("iframe")).frameBorder="0",s.referrerPolicy="no-referrer",s.style.border="0"}if(c)try{try{for(var u=l(Object.entries(JSON.parse(c))),d=u.next();!d.done;d=u.next()){var p=i(d.value,2),f=p[0],h=p[1];s.setAttribute(f,h+""),t.log("Setting property %s to %s",f,h)}}catch(e){n={error:e}}finally{try{d&&!d.done&&(a=u.return)&&a.call(u)}finally{if(n)throw n.error}}}catch(e){t.log(e)}t.log("Replacing %o with %o",o,s),r.replaceChild(s,o);var v=new CustomEvent("serviceEmbeded",{detail:s});r.dispatchEvent(v)})))},e}(),u=function(){window.supi=new c,window.removeEventListener("load",u)};window.addEventListener("load",u)},905:function(e,t){var o,i,n;t.__esModule=!0,t.Mode=t.Status=t.Position=void 0,(n=t.Position||(t.Position={}))[n.CenterCenter=0]="CenterCenter",n[n.BottomLeft=1]="BottomLeft",(i=t.Status||(t.Status={}))[i.None=0]="None",i[i.All=1]="All",i[i.Selected=2]="Selected",(o=t.Mode||(t.Mode={}))[o.All=0]="All",o[o.Essential=1]="Essential",o[o.Selected=2]="Selected"}},t={};!function o(i){if(t[i])return t[i].exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,o),n.exports}(429)}();
//# sourceMappingURL=Supi.js.map