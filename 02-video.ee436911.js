!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,m=Math.min,v=function(){return s.Date.now()};function y(t,e,n){var r,o,u,f,a,c,l=0,s=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError(i);function T(e){var n=r,i=o;return r=o=void 0,l=e,f=t.apply(i,n)}function j(t){return l=t,a=setTimeout(h,e),s?T(t):f}function w(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=u}function h(){var t=v();if(w(t))return O(t);a=setTimeout(h,function(t){var n=e-(t-c);return d?m(n,u-(t-l)):n}(t))}function O(t){return a=void 0,y&&r?T(t):(r=o=void 0,f)}function S(){var t=v(),n=w(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return j(c);if(d)return a=setTimeout(h,e),T(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=b(e)||0,g(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(b(n.maxWait)||0,e):u,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},S.flush=function(){return void 0===a?f:O(v())},S}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=u.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(t,e,{leading:r,maxWait:e,trailing:o})};const T=document.querySelector("iframe"),j=new Vimeo.Player(T),w="videoplayer-current-time";let h;j.on("timeupdate",t(e)((function({seconds:t}){localStorage.setItem(w,t)}),1e3)),localStorage.getItem(w)?(h=JSON.parse(localStorage.getItem(w)),j.setCurrentTime(h)):(h=0,j.setCurrentTime(h))}();
//# sourceMappingURL=02-video.ee436911.js.map