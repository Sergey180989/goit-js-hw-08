!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var r,i,a,f,u,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function O(e){return c=e,u=setTimeout(T,t),s?b(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function T(){var e=p();if(S(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function h(e){return u=void 0,d&&r?b(e):(r=i=void 0,f)}function w(){var e=p(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return O(l);if(m)return u=setTimeout(T,t),b(l)}return void 0===u&&(u=setTimeout(T,t)),f}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},w.flush=function(){return void 0===u?f:h(p())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O="feedback-form-state",S={form:document.querySelector(".feedback-form")};if(S.form.addEventListener("input",e(t)((function(e){var t={email:S.form.elements.email.value,message:S.form.elements.message.value};localStorage.getItem(O,JSON.stringify(t))}),500)),S.form.addEventListener("submit",(function(e){e.preventDefault();S.form.elements.email.value,S.form.elements.message.value;e.currentTarget.reset(),localStorage.removeItem(O)})),localStorage.getItem(O)){var T=JSON.parse(localStorage.getItem(O));S.form.elements.email.value=T.email,S.form.elements.message.value=T.message}}();
//# sourceMappingURL=03-feedback.fbbf3400.js.map