!function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=E.elements;return"string"==typeof t?t.split(" "):t}function o(t,e){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof t&&(t=t.join(" ")),E.elements=n+" "+t,u(e)}function r(t){var e=C[t[x]];return e||(e={},T++,t[x]=T,C[T]=e),e}function s(t,n,i){if(n||(n=e),m)return n.createElement(t);i||(i=r(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():w.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!o.canHaveChildren||b.test(t)||o.tagUrn?o:i.frag.appendChild(o)}function a(t,n){if(t||(t=e),m)return t.createDocumentFragment();n=n||r(t);for(var o=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)o.createElement(a[s]);return o}function l(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return E.shivMethods?s(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(E,e.frag)}function u(t){t||(t=e);var i=r(t);return!E.shivCSS||g||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||l(t,i),t}function c(t){for(var e,n=t.getElementsByTagName("*"),o=n.length,r=RegExp("^(?:"+i().join("|")+")$","i"),s=[];o--;)e=n[o],r.test(e.nodeName)&&s.push(e.applyElement(p(e)));return s}function p(t){for(var e,n=t.attributes,i=n.length,o=t.ownerDocument.createElement(S+":"+t.nodeName);i--;)e=n[i],e.specified&&o.setAttribute(e.nodeName,e.nodeValue);return o.style.cssText=t.style.cssText,o}function d(t){for(var e,n=t.split("{"),o=n.length,r=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),s="$1"+S+"\\:$2";o--;)e=n[o]=n[o].split("}"),e[e.length-1]=e[e.length-1].replace(r,s),n[o]=e.join("}");return n.join("{")}function h(t){for(var e=t.length;e--;)t[e].removeNode()}function f(t){function e(){clearTimeout(s._removeSheetTimer),i&&i.removeNode(!0),i=null}var i,o,s=r(t),a=t.namespaces,l=t.parentWindow;return!k||t.printShived?t:("undefined"==typeof a[S]&&a.add(S),l.attachEvent("onbeforeprint",function(){e();for(var r,s,a,l=t.styleSheets,u=[],p=l.length,h=Array(p);p--;)h[p]=l[p];for(;a=h.pop();)if(!a.disabled&&$.test(a.media)){try{r=a.imports,s=r.length}catch(f){s=0}for(p=0;s>p;p++)h.push(r[p]);try{u.push(a.cssText)}catch(f){}}u=d(u.reverse().join("")),o=c(t),i=n(t,u)}),l.attachEvent("onafterprint",function(){h(o),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(e,500)}),t.printShived=!0,t)}var g,m,v="3.7.2",y=t.html5||{},b=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,w=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,x="_html5shiv",T=0,C={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",g="hidden"in t,m=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){g=!0,m=!0}}();var E={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:y.shivCSS!==!1,supportsUnknownElements:m,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:u,createElement:s,createDocumentFragment:a,addElements:o};t.html5=E,u(e);var $=/^$|\b(?:all|print)\b/,S="html5shiv",k=!m&&function(){var n=e.documentElement;return!("undefined"==typeof e.namespaces||"undefined"==typeof e.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof t.attachEvent)}();E.type+=" print",E.shivPrint=f,f(e)}(this,document),function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=b.elements;return"string"==typeof t?t.split(" "):t}function o(t,e){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof t&&(t=t.join(" ")),b.elements=n+" "+t,u(e)}function r(t){var e=y[t[m]];return e||(e={},v++,t[m]=v,y[v]=e),e}function s(t,n,i){if(n||(n=e),p)return n.createElement(t);i||(i=r(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():g.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!o.canHaveChildren||f.test(t)||o.tagUrn?o:i.frag.appendChild(o)}function a(t,n){if(t||(t=e),p)return t.createDocumentFragment();n=n||r(t);for(var o=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)o.createElement(a[s]);return o}function l(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return b.shivMethods?s(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(b,e.frag)}function u(t){t||(t=e);var i=r(t);return!b.shivCSS||c||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),p||l(t,i),t}var c,p,d="3.7.2",h=t.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,y={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,p=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){c=!0,p=!0}}();var b={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:h.shivCSS!==!1,supportsUnknownElements:p,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:u,createElement:s,createDocumentFragment:a,addElements:o};t.html5=b,u(e)}(this,document),function(t){"use strict";function e(){x(!0)}var n={};t.respond=n,n.update=function(){};var i=[],o=function(){var e=!1;try{e=new t.XMLHttpRequest}catch(n){e=new t.ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}(),r=function(t,e){var n=o();n&&(n.open("GET",t,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||e(n.responseText)},4!==n.readyState&&n.send(null))},s=function(t){return t.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=r,n.queue=i,n.unsupportedmq=s,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=t.matchMedia&&null!==t.matchMedia("only all")&&t.matchMedia("only all").matches,!n.mediaQueriesSupported){var a,l,u,c=t.document,p=c.documentElement,d=[],h=[],f=[],g={},m=30,v=c.getElementsByTagName("head")[0]||p,y=c.getElementsByTagName("base")[0],b=v.getElementsByTagName("link"),w=function(){var t,e=c.createElement("div"),n=c.body,i=p.style.fontSize,o=n&&n.style.fontSize,r=!1;return e.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=r=c.createElement("body"),n.style.background="none"),p.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(e),r&&p.insertBefore(n,p.firstChild),t=e.offsetWidth,r?p.removeChild(n):n.removeChild(e),p.style.fontSize=i,o&&(n.style.fontSize=o),t=u=parseFloat(t)},x=function(e){var n="clientWidth",i=p[n],o="CSS1Compat"===c.compatMode&&i||c.body[n]||i,r={},s=b[b.length-1],g=(new Date).getTime();if(e&&a&&m>g-a)return t.clearTimeout(l),void(l=t.setTimeout(x,m));a=g;for(var y in d)if(d.hasOwnProperty(y)){var T=d[y],C=T.minw,E=T.maxw,$=null===C,S=null===E,k="em";C&&(C=parseFloat(C)*(C.indexOf(k)>-1?u||w():1)),E&&(E=parseFloat(E)*(E.indexOf(k)>-1?u||w():1)),T.hasquery&&($&&S||!($||o>=C)||!(S||E>=o))||(r[T.media]||(r[T.media]=[]),r[T.media].push(h[T.rules]))}for(var N in f)f.hasOwnProperty(N)&&f[N]&&f[N].parentNode===v&&v.removeChild(f[N]);f.length=0;for(var D in r)if(r.hasOwnProperty(D)){var A=c.createElement("style"),j=r[D].join("\n");A.type="text/css",A.media=D,v.insertBefore(A,s.nextSibling),A.styleSheet?A.styleSheet.cssText=j:A.appendChild(c.createTextNode(j)),f.push(A)}},T=function(t,e,i){var o=t.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),r=o&&o.length||0;e=e.substring(0,e.lastIndexOf("/"));var a=function(t){return t.replace(n.regex.urls,"$1"+e+"$2$3")},l=!r&&i;e.length&&(e+="/"),l&&(r=1);for(var u=0;r>u;u++){var c,p,f,g;l?(c=i,h.push(a(t))):(c=o[u].match(n.regex.findStyles)&&RegExp.$1,h.push(RegExp.$2&&a(RegExp.$2))),f=c.split(","),g=f.length;for(var m=0;g>m;m++)p=f[m],s(p)||d.push({media:p.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:h.length-1,hasquery:p.indexOf("(")>-1,minw:p.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:p.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}x()},C=function(){if(i.length){var e=i.shift();r(e.href,function(n){T(n,e.href,e.media),g[e.href]=!0,t.setTimeout(function(){C()},0)})}},E=function(){for(var e=0;e<b.length;e++){var n=b[e],o=n.href,r=n.media,s=n.rel&&"stylesheet"===n.rel.toLowerCase();o&&s&&!g[o]&&(n.styleSheet&&n.styleSheet.rawCssText?(T(n.styleSheet.rawCssText,o,r),g[o]=!0):(!/^([a-zA-Z:]*\/\/)/.test(o)&&!y||o.replace(RegExp.$1,"").split("/")[0]===t.location.host)&&("//"===o.substring(0,2)&&(o=t.location.protocol+o),i.push({href:o,media:r})))}C()};E(),n.update=E,n.getEmValue=w,t.addEventListener?t.addEventListener("resize",e,!1):t.attachEvent&&t.attachEvent("onresize",e)}}(this);