(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameData=e.name,this._imgData=e.link,this._id=e._id,this._likesCount=e.likes,this._templateSelector=n,this._handleCardClick=r.handleCardClick,this._handleDeleteClick=r.handleDeleteClick,this.__handleHeartClick=r.handleHeartClick,this._api=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_seteventListeners",value:function(){var t=this;this._heart.addEventListener("click",(function(){t._heart.classList.contains("element__heart_active")?t._api.removeLike(t._id).then((function(e){t._likes.textContent=e.likes.length,t._heart.classList.remove("element__heart_active")})).catch((function(t){console.log(t)})):t._api.addLike(t._id).then((function(e){t._likes.textContent=e.likes.length,t._heart.classList.add("element__heart_active")})).catch((function(t){console.log(t)}))})),this._delete.addEventListener("click",(function(e){t._handleDeleteClick(t._id,e)})),this._img.addEventListener("click",(function(){t._handleCardClick(t._nameData,t._imgData)}))}},{key:"generateCard",value:function(t,e){var n=this;return this._card=this._getTemplate(),this._name=this._card.querySelector(".element__name"),this._img=this._card.querySelector(".element__photo"),this._heart=this._card.querySelector(".element__heart"),this._delete=this._card.querySelector(".element__delete"),t!=e&&this._delete.remove(),this._likes=this._card.querySelector(".element__like-count"),this._likesCount.forEach((function(t){"Mokwar"==t.name&&n._heart.classList.add("element__heart_active")})),this._likes.textContent=this._likesCount.length,this._name.textContent=this._nameData,this._img.src=this._imgData,this._img.alt="Фото "+this._nameData,this._seteventListeners(),this._card}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function i(t,e,n){return(e=u(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var a=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"_showInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));t.classList.add(r._config.inputErrorClass),e.textContent=t.validationMessage,e.classList.add(r._config.spanErrorClass)})),i(this,"_hideInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._config.inputErrorClass),e.textContent=" ",e.classList.remove(r._config.spanErrorClass)})),i(this,"disableButton",(function(){r._button.classList.add(r._config.saveButtonInactiveClass),r._button.disabled=!0})),i(this,"_enableButton",(function(){r._button.classList.remove(r._config.saveButtonInactiveClass),r._button.disabled=!1})),this._config=e,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._button=this._form.querySelector(this._config.saveButtonSelector)}var e,n;return e=t,(n=[{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this._enableButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}},{key:"removeValidationErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e),e.value=""}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupName=e._popup.querySelector(".popup-image__name"),e._popupImg=e._popup.querySelector(".popup-image__photo"),e}return e=u,(n=[{key:"open",value:function(t,e){y(d(u.prototype),"open",this).call(this),this._popupName.textContent=e,this._popupImg.src=t,this._popupImg.alt="фото "+e}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n._button=n._form.querySelector(".popup__save-button"),n._buttonText=n._button.textContent,n}return e=u,n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputs.forEach((function(e){t._inputValues[e.id]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.id]}))}},{key:"setEventListeners",value:function(){var t=this;_(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._button.textContent=t?e:this._buttonText}},{key:"close",value:function(){_(S(u.prototype),"close",this).call(this),this._form.reset()}}],n&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var P=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e),this._bio=document.querySelector(n),this._ava=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._info={name:this._name.textContent,about:this._bio.textContent},this._info}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._bio.textContent=t.about,this._ava.style.backgroundImage="url(".concat(t.avatar,")"),this._id=t._id}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),j={formSelector:".popup__form",saveButtonSelector:".popup__save-button",inputSelector:".popup__input",inputErrorClass:"popup__input_error",spanErrorClass:"popup__span-error",saveButtonInactiveClass:"popup__save-button_inactive",templateSelector:"#template_element"},O=document.querySelector(".popup-image");function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}O.querySelector(".popup-image__name"),O.querySelector(".popup-image__photo");var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkPesponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._checkPesponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._checkPesponse)}},{key:"changeeProfileInfo",value:function(t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._checkPesponse)}},{key:"addNewCard",value:function(t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.naming,link:t.link})}).then(this._checkPesponse)}},{key:"removeCard",value:function(t){return fetch("".concat(this._url,"cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkPesponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkPesponse)}},{key:"removeLike",value:function(t){return fetch("".concat(this._url,"cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkPesponse)}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkPesponse)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;R(D(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._id,t._evt)}))}},{key:"open",value:function(t,e){R(D(u.prototype),"open",this).call(this),this._id="",this._id=t,this._evt=e}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var F=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderElement",value:function(t){this._renderer(t)}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var N=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__avatar"),M=document.forms.profile,G=document.forms.post,z=document.forms.avatar,$="",K=new a(j,M),Q=new a(j,G),W=new a(j,z),X=new P(".profile__name",".profile__description",".profile__avatar");document.querySelector(".profile__avatar"),K.enableValidation(),Q.enableValidation(),W.enableValidation();var Y=new I({url:"https://nomoreparties.co/v1/cohort-64/",headers:{authorization:"3e25cf54-975f-4847-af07-471e48c9313d","Content-Type":"application/json"}}),Z=new B({handleFormSubmit:function(t,e){Y.removeCard(t).then((function(){e.target.closest(".element").remove(),Z.close()})).catch((function(t){console.log(t)}))}},".popup-delete");Z.setEventListeners();var tt=new F({renderer:function(t){var e=new n(t,j.templateSelector,{handleCardClick:function(t,e){et.open(e,t)},handleDeleteClick:function(t,e){Z.open(t,e)}},Y).generateCard(t.owner._id,$);tt.addItem(e)}},".elements");Promise.all([Y.getUserInfo(),Y.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return U(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$=o._id,X.setUserInfo(o),i.forEach((function(t){tt.renderElement(t)}))})).catch((function(t){console.log(t)}));var et=new v(".popup-image");et.setEventListeners();var nt=new w({handleFormSubmit:function(t){nt.renderLoading(!0),Y.changeeProfileInfo(t).then((function(t){nt.close(),X.setUserInfo(t)})).catch((function(t){console.log(t)})).finally((function(){nt.renderLoading(!1)}))}},".popup-profile");nt.setEventListeners(),N.addEventListener("click",(function(){nt.open(),nt.setInputValues(X.getUserInfo()),K.disableButton()}));var rt=new w({handleFormSubmit:function(t){rt.renderLoading(!0),Y.addNewCard(t).then((function(t){tt.renderElement(t),rt.close()})).catch((function(t){console.log(t)})).finally((function(){rt.renderLoading(!1)}))}},".popup-post");rt.setEventListeners(),H.addEventListener("click",(function(){rt.open(),Q.disableButton()}));var ot=new w({handleFormSubmit:function(t){ot.renderLoading(!0),Y.updateAvatar(t.links).then((function(t){X.setUserInfo(t),ot.close()})).catch((function(t){console.log(t)})).finally((function(){ot.renderLoading(!1)}))}},".popup-avatar");ot.setEventListeners(),J.addEventListener("click",(function(){ot.open(),W.disableButton()}))})();