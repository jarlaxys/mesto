/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=document.querySelector("#edit-popup"),e=document.querySelector(".profile__edit-profile"),r=t.querySelector(".popup__content"),n=t.querySelector(".popup__input_info_name"),o=t.querySelector(".popup__input_info_job"),i=document.querySelector("#add-popup"),a=document.querySelector(".profile__add-card"),c=i.querySelector(".popup__content"),u=document.querySelector("#edit-avatar"),l=document.querySelector(".profile__edit-avatar"),s=u.querySelector(".popup__content"),f={inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_invalid",inputErrorClass:"popup__input_state_invalid"};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var h=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=e,this._config=r,this._inputsList=this._formElement.querySelectorAll(this._config.inputSelector),this._submitButtonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var e,r;return e=t,(r=[{key:"resetValidation",value:function(){var t=this;this._inputsList.forEach((function(e){var r=t._formElement.querySelector("#".concat(e.name,"-error"));e.classList.remove(t._config.inputErrorClass),r.textContent=""}))}},{key:"_showError",value:function(t,e){t.classList.add(this._config.inputErrorClass),e.textContent=t.validationMessage}},{key:"_hideError",value:function(t,e){t.classList.remove(this._config.inputErrorClass),e.textContent=t.validationMessage}},{key:"disabledButton",value:function(){this._submitButtonElement.disabled=!0,this._submitButtonElement.classList.add(this._config.inactiveButtonClass)}},{key:"_enableButton",value:function(){this._submitButtonElement.disabled=!1,this._submitButtonElement.classList.remove(this._config.inactiveButtonClass)}},{key:"_toggleButtonState",value:function(t){t?this._enableButton():this.disabledButton()}},{key:"_checkInputValidity",value:function(t){var e=t.validity.valid,r=this._formElement.querySelector("#".concat(t.name,"-error"));e?this._hideError(t,r):this._showError(t,r)}},{key:"_setEventListener",value:function(){var t=this;this._toggleButtonState(this._formElement.checkValidity()),this._inputsList.forEach((function(e){e.addEventListener("input",(function(){t._toggleButtonState(t._formElement.checkValidity()),t._checkInputValidity(e)}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var m=function(){function t(e,r,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this._like=r.likes,this._userId=e.getUserInfo().id,this._authorId=r.owner._id,this._cardId=r._id,this._templateElement=n,this._handleCardClick=o.handleCardClick,this._openPopupDelete=o.openPopupDelete,this._addLike=o.addLikeCard,this._removeLike=o.removeLikeCard}var e,r;return e=t,(r=[{key:"_likeCard",value:function(){var t=this;return this._like.some((function(e){return e._id===t._userId}))}},{key:"addLike",value:function(t){this._cardLikeButton.classList.add("card__like_active"),this._like=t,this._likeCounter.textContent=this._like.length}},{key:"removeLike",value:function(t){this._cardLikeButton.classList.remove("card__like_active"),this._like=t,this._likeCounter.textContent=this._like.length}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._cardLikeButton.addEventListener("click",(function(){t._likeCard()?t._removeLike(t._cardId):t._addLike(t._cardId)})),this._userId===this._authorId?this._deleteIcon.addEventListener("click",(function(){t._openPopupDelete(t._cardId,t._cardElement)})):this._deleteIcon.remove()}},{key:"newCard",value:function(){return this._cardElement=document.querySelector(this._templateElement).content.querySelector(".card").cloneNode(!0),this._cardImage=this._cardElement.querySelector(".card__img"),this._deleteIcon=this._cardElement.querySelector(".card__delete"),this._cardLikeButton=this._cardElement.querySelector(".card__like"),this._likeCounter=this._cardElement.querySelector(".card__likes-counter"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardElement.querySelector(".card__txt").textContent=this._name,this._likeCounter.textContent=this._like.length,this._likeCard()?this._cardLikeButton.classList.add("card__like_active"):this._cardLikeButton.classList.remove("card__like_active"),this._setEventListeners(),this._cardElement}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function g(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var w=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=g(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".popup__close")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.target===e.currentTarget&&t.close()})),this._buttonClose.addEventListener("click",(function(){return t.close()}))}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(n);if(o){var r=j(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__img"),e._popupSubtitle=e._popup.querySelector(".popup__subtitle"),e}return e=a,(r=[{key:"open",value:function(t,e){E(j(a.prototype),"open",this).call(this),this._popupImg.src=e,this._popupImg.alt=t,this._popupSubtitle.textContent=t}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(w);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},x.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(n);if(o){var r=T(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var r,n=e.callbackSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._callbackSubmitForm=n,r._form=r._popup.querySelector(".popup__content"),r._inputs=Array.from(r._form.querySelectorAll(".popup__input")),r._saveButton=r._popup.querySelector(".popup__save"),r._buttonText=r._saveButton.textContent,r}return e=a,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setLoading",value:function(t){this._saveButton.textContent=t?"Сохранение...":this._buttonText}},{key:"setEventListeners",value:function(){var t=this;x(T(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm(t._getInputValues())}))}},{key:"close",value:function(){x(T(a.prototype),"close",this).call(this),this._form.reset()}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(w);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}var R=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._containerSelector=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderAllCards",value:function(t){var e=this;t.forEach((function(t){e.renderItem(e._renderer(t))}))}},{key:"renderItem",value:function(t){this._containerSelector.prepend(t)}}])&&A(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}var N=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e),this._info=document.querySelector(r),this._avatar=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._info.textContent,id:this._id}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.info,n=t.avatar,o=t.id;this._name.textContent=e,this._info.textContent=r,this._avatar.src=n,this._id=o}},{key:"setAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&D(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function F(){F=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:w(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function y(){}function h(){}var d={};u(d,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&r.call(m,i)&&(d=m);var b=h.prototype=p.prototype=Object.create(d);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==V(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return y.prototype=h,n(b,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:y,configurable:!0}),y.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(g.prototype),u(g.prototype,a,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function G(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function J(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){G(i,n,o,a,c,"next",t)}function c(t){G(i,n,o,a,c,"throw",t)}a(void 0)}))}}function M(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Y(n.key),n)}}function H(t,e,r){return(e=Y(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Y(t){var e=function(t,e){if("object"!==V(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===V(e)?e:String(e)}var z=new(function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),H(this,"getUserInfo",J(F().mark((function t(){var e;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/users/me"),{headers:r._headers});case 2:return e=t.sent,t.abrupt("return",r._checkAnswer(e));case 4:case"end":return t.stop()}}),t)})))),H(this,"getCards",J(F().mark((function t(){var e;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/cards"),{headers:r._headers});case 2:return e=t.sent,t.abrupt("return",r._checkAnswer(e));case 4:case"end":return t.stop()}}),t)})))),H(this,"patchUserInfo",function(){var t=J(F().mark((function t(e){var n;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/users/me"),{method:"PATCH",headers:r._headers,body:JSON.stringify({name:e.name,about:e.job})});case 2:return n=t.sent,t.abrupt("return",r._checkAnswer(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),H(this,"postNewCard",function(){var t=J(F().mark((function t(e){var n;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/cards"),{method:"POST",headers:r._headers,body:JSON.stringify({name:e.title,link:e.link})});case 2:return n=t.sent,t.abrupt("return",r._checkAnswer(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),H(this,"deleteCard",function(){var t=J(F().mark((function t(e){var n;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:r._headers});case 2:return n=t.sent,t.abrupt("return",r._checkAnswer(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),H(this,"addLike",function(){var t=J(F().mark((function t(e){var n;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:r._headers});case 2:return n=t.sent,t.abrupt("return",r._checkAnswer(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),H(this,"deleteLike",function(){var t=J(F().mark((function t(e){var n;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:r._headers});case 2:return n=t.sent,t.abrupt("return",r._checkAnswer(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),H(this,"setAvatar",function(){var t=J(F().mark((function t(e){var n;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r._headers,body:JSON.stringify({avatar:e.avatar})});case 2:return n=t.sent,t.abrupt("return",r._checkAnswer(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_checkAnswer",value:function(t){if(t.ok)return t.json();throw new Error("Ошибка: ".concat(t.status))}}])&&M(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-70",headers:{authorization:"507ca991-9d37-4650-bfef-b2e1fd6da74a","Content-Type":"application/json"}});function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===$(o)?o:String(o)),n)}var o}function Q(){return Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=X(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},Q.apply(this,arguments)}function W(t,e){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},W(t,e)}function X(t){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},X(t)}var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&W(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=X(n);if(o){var r=X(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===$(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._form=e._popup.querySelector(".popup__content"),e}return e=a,(r=[{key:"open",value:function(t){Q(X(a.prototype),"open",this).call(this),this._onDelete=t}},{key:"setEventListeners",value:function(){var t=this;Q(X(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._onDelete()}))}}])&&K(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(w);function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var et=new q("#add-popup",{callbackSubmitForm:function(t){et.setLoading(!0),z.postNewCard(t).then((function(t){ut.renderItem(ct(t)),et.close()})).catch((function(t){return console.log("Ошибка сохранения: ".concat(t))})).finally((function(){et.setLoading(!1)}))}});a.addEventListener("click",(function(){et.open(),lt.resetValidation(),lt.disabledButton()})),et.setEventListeners();var rt=new q("#edit-avatar",{callbackSubmitForm:function(t){rt.setLoading(!0),z.setAvatar(t).then((function(t){nt.setAvatar({avatar:t.avatar}),rt.close()})).catch((function(t){return console.log("Ошибка сохранения: ".concat(t))})).finally((function(){rt.setLoading(!1)}))}});l.addEventListener("click",(function(){rt.open(),ft.resetValidation()})),rt.setEventListeners();var nt=new N(".profile__title",".profile__subtitle",".profile__avatar"),ot=new q("#edit-popup",{callbackSubmitForm:function(t){ot.setLoading(!0),z.patchUserInfo(t).then((function(t){nt.setUserInfo({name:t.name,info:t.about,avatar:t.avatar,id:t._id}),ot.close()})).catch((function(t){return console.log("Ошибка сохранения: ".concat(t))})).finally((function(){ot.setLoading(!1)}))}});e.addEventListener("click",(function(){ot.open();var t=nt.getUserInfo(),e=t.name,r=t.job;n.value=e,o.value=r,st.resetValidation()})),ot.setEventListeners();var it=new O("#img-popup");it.setEventListeners();var at=new Z("#delete-card");at.setEventListeners();var ct=function(t){var e=new m(nt,t,"#card",{handleCardClick:function(t,e){it.open(t,e)},openPopupDelete:function(t,e){at.open((function(){return function(t,e){z.deleteCard(t).then((function(){at.close(),e.remove()})).catch((function(t){return console.log("Ошибка удаления карточки: ".concat(t))}))}(t,e)}))},addLikeCard:function(t){z.addLike(t).then((function(t){e.addLike(t.likes)})).catch((function(t){return console.log("Ошибка постановки лайка: ".concat(t))}))},removeLikeCard:function(t){z.deleteLike(t).then((function(t){e.removeLike(t.likes)})).catch((function(t){return console.log("Ошибка снятия лайка: ".concat(t))}))}});return e.newCard()},ut=new R({renderer:ct},".gallery__cards");Promise.all([z.getUserInfo(),z.getCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return tt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tt(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];nt.setUserInfo({name:o.name,info:o.about,avatar:o.avatar,id:o._id}),ut.renderAllCards(i.reverse())})).catch((function(t){return console.log("Ошибка загрузки данных: ".concat(t))}));var lt=new h(c,f),st=new h(r,f),ft=new h(s,f);lt.enableValidation(),st.enableValidation(),ft.enableValidation()})();