/*
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */
(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):(b.Glide=a())}(this,(function(){var n={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:false,hoverpause:true,keyboard:true,bound:false,swipeThreshold:80,dragThreshold:120,perTouch:false,touchRatio:0.5,touchAngle:45,animationDuration:400,rewind:true,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function at(e){console.error("[Glide warn]: "+e)}var b=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var h=function(au,e){if(!(au instanceof e)){throw new TypeError("Cannot call a class as a function")}};var m=function(){function e(ax,aw){for(var av=0;av<aw.length;av++){var au=aw[av];au.enumerable=au.enumerable||false;au.configurable=true;if("value" in au){au.writable=true}Object.defineProperty(ax,au.key,au)}}return function(au,av,aw){if(av){e(au.prototype,av)}if(aw){e(au,aw)}return au}}();var a=Object.assign||function(aw){for(var e=1;e<arguments.length;e++){var av=arguments[e];for(var au in av){if(Object.prototype.hasOwnProperty.call(av,au)){aw[au]=av[au]}}}return aw};var z=function z(av,ax,ay){if(av===null){av=Function.prototype}var e=Object.getOwnPropertyDescriptor(av,ax);if(e===undefined){var aw=Object.getPrototypeOf(av);if(aw===null){return undefined}else{return z(aw,ax,ay)}}else{if("value" in e){return e.value}else{var au=e.get;if(au===undefined){return undefined}return au.call(ay)}}};var F=function(e,au){if(typeof au!=="function"&&au!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof au)}e.prototype=Object.create(au&&au.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(au){Object.setPrototypeOf?Object.setPrototypeOf(e,au):e.__proto__=au}};var Z=function(au,e){if(!au){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e&&(typeof e==="object"||typeof e==="function")?e:au};function an(e){return parseInt(e)}function am(e){return parseFloat(e)}function K(e){return typeof e==="string"}function J(au){var e=typeof au==="undefined"?"undefined":b(au);return e==="function"||e==="object"&&!!au}function I(e){return typeof e==="number"}function H(e){return typeof e==="function"}function L(e){return typeof e==="undefined"}function G(e){return e.constructor===Array}function P(ax,aw,av){var au={};for(var ay in aw){if(H(aw[ay])){au[ay]=aw[ay](ax,au,av)}else{at("Extension must be a function")}}for(var e in au){if(H(au[e].mount)){au[e].mount()}}return au}function o(au,av,e){Object.defineProperty(au,av,e)}function ag(e){return Object.keys(e).sort().reduce(function(av,au){av[au]=e[au];return av[au],av},{})}function O(e,av){var au=a({},e,av);if(av.hasOwnProperty("classes")){au.classes=a({},e.classes,av.classes);if(av.classes.hasOwnProperty("direction")){au.classes.direction=a({},e.classes.direction,av.classes.direction)}}if(av.hasOwnProperty("breakpoints")){au.breakpoints=a({},e.breakpoints,av.breakpoints)}return au}var t=function(){function au(){var aw=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};h(this,au);this.events=aw;this.hop=aw.hasOwnProperty}m(au,[{key:"on",value:function av(aw,ax){if(G(aw)){for(var ay=0;ay<aw.length;ay++){this.on(aw[ay],ax)}}if(!this.hop.call(this.events,aw)){this.events[aw]=[]}var az=this.events[aw].push(ax)-1;return{remove:function aA(){delete this.events[aw][az]}}}},{key:"emit",value:function e(ax,aw){if(G(ax)){for(var ay=0;ay<ax.length;ay++){this.emit(ax[ay],aw)}}if(!this.hop.call(this.events,ax)){return}this.events[ax].forEach(function(az){az(aw||{})})}}]);return au}();var A=function(){function ax(aJ){var aI=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};h(this,ax);this._c={};this._t=[];this._e=new t();this.disabled=false;this.selector=aJ;this.settings=O(n,aI);this.index=this.settings.startAt}m(ax,[{key:"mount",value:function aA(){var aI=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this._e.emit("mount.before");if(J(aI)){this._c=P(this,aI,this._e)}else{at("You need to provide a object on `mount()`")}this._e.emit("mount.after");return this}},{key:"mutate",value:function aC(){var aI=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];if(G(aI)){this._t=aI}else{at("You need to provide a array on `mutate()`")}return this}},{key:"update",value:function aH(){var aI=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.settings=O(this.settings,aI);if(aI.hasOwnProperty("startAt")){this.index=aI.startAt}this._e.emit("update");return this}},{key:"go",value:function ay(aI){this._c.Run.make(aI);return this}},{key:"move",value:function aB(aI){this._c.Transition.disable();this._c.Move.make(aI);return this}},{key:"destroy",value:function e(){this._e.emit("destroy");return this}},{key:"play",value:function aF(){var aI=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(aI){this.settings.autoplay=aI}this._e.emit("play");return this}},{key:"pause",value:function aE(){this._e.emit("pause");return this}},{key:"disable",value:function au(){this.disabled=true;return this}},{key:"enable",value:function av(){this.disabled=false;return this}},{key:"on",value:function aD(aI,aJ){this._e.on(aI,aJ);return this}},{key:"isType",value:function az(aI){return this.settings.type===aI}},{key:"settings",get:function aw(){return this._o},set:function aG(aI){if(J(aI)){this._o=aI}else{at("Options must be an `object` instance.")}}},{key:"index",get:function aw(){return this._i},set:function aG(aI){this._i=an(aI)}},{key:"type",get:function aw(){return this.settings.type}},{key:"disabled",get:function aw(){return this._d},set:function aG(aI){this._d=!!aI}}]);return ax}();function ac(ax,au,av){var aD={mount:function aC(){this._o=false},make:function aB(aG){var aF=this;if(!ax.disabled){ax.disable();this.move=aG;av.emit("run.before",this.move);this.calculate();av.emit("run",this.move);au.Transition.after(function(){if(aF.isStart()){av.emit("run.start",aF.move)}if(aF.isEnd()){av.emit("run.end",aF.move)}if(aF.isOffset("<")||aF.isOffset(">")){aF._o=false;av.emit("run.offset",aF.move)}av.emit("run.after",aF.move);ax.enable()})}},calculate:function e(){var aI=this.move,aH=this.length;var aJ=aI.steps,aG=aI.direction;var aF=I(an(aJ))&&an(aJ)!==0;switch(aG){case">":if(aJ===">"){ax.index=aH}else{if(this.isEnd()){if(!(ax.isType("slider")&&!ax.settings.rewind)){this._o=true;ax.index=0}}else{if(aF){ax.index+=Math.min(aH-ax.index,-an(aJ))}else{ax.index++}}}break;case"<":if(aJ==="<"){ax.index=0}else{if(this.isStart()){if(!(ax.isType("slider")&&!ax.settings.rewind)){this._o=true;ax.index=aH}}else{if(aF){ax.index-=Math.min(ax.index,an(aJ))}else{ax.index--}}}break;case"=":ax.index=aJ;break;default:at("Invalid direction pattern ["+aG+aJ+"] has been used");break}},isStart:function aA(){return ax.index===0},isEnd:function ay(){return ax.index===this.length},isOffset:function az(aF){return this._o&&this.move.direction===aF}};o(aD,"move",{get:function aw(){return this._m},set:function aE(aG){var aF=aG.substr(1);this._m={direction:aG.substr(0,1),steps:aF?an(aF)?an(aF):aF:0}}});o(aD,"length",{get:function aw(){var aG=ax.settings;var aF=au.Html.slides.length;if(ax.isType("slider")&&aG.focusAt!=="center"&&aG.bound){return aF-1-(an(aG.perView)-1)+an(aG.focusAt)}return aF-1}});o(aD,"offset",{get:function aw(){return this._o}});return aD}function V(){return new Date().getTime()}function al(av,aC,ax){var aB=void 0,au=void 0,e=void 0,az=void 0;var ay=0;if(!ax){ax={}}var aw=function aw(){ay=ax.leading===false?0:V();aB=null;az=av.apply(au,e);if(!aB){au=e=null}};var aA=function aA(){var aD=V();if(!ay&&ax.leading===false){ay=aD}var aE=aC-(aD-ay);au=this;e=arguments;if(aE<=0||aE>aC){if(aB){clearTimeout(aB);aB=null}ay=aD;az=av.apply(au,e);if(!aB){au=e=null}}else{if(!aB&&ax.trailing!==false){aB=setTimeout(aw,aE)}}return az};aA.cancel=function(){clearTimeout(aB);ay=0;aB=au=e=null};return aA}var N={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function y(ay,au,av){var aw={apply:function e(aD){for(var aB=0,aC=aD.length;aB<aC;aB++){var aE=aD[aB].style;var aA=au.Direction.value;if(aB!==0){aE[N[aA][0]]=this.value/2+"px"}else{aE[N[aA][0]]=""}if(aB!==aD.length-1){aE[N[aA][1]]=this.value/2+"px"}else{aE[N[aA][1]]=""}}},remove:function az(aC){for(var aA=0,aB=aC.length;aA<aB;aA++){var aD=aC[aA].style;aD.marginLeft="";aD.marginRight=""}}};o(aw,"value",{get:function ax(){return an(ay.settings.gap)}});o(aw,"grow",{get:function ax(){return aw.value*(au.Sizes.length-1)}});o(aw,"reductor",{get:function ax(){var aA=ay.settings.perView;return aw.value*(aA-1)/aA}});av.on(["build.after","update"],al(function(){aw.apply(au.Html.wrapper.children)},30));av.on("destroy",function(){aw.remove(au.Html.wrapper.children)});return aw}function ad(av){if(av&&av.parentNode){var au=av.parentNode.firstChild;var e=[];for(;au;au=au.nextSibling){if(au.nodeType===1&&au!==av){e.push(au)}}return e}return[]}function u(e){if(e&&e instanceof window.HTMLElement){return true}return false}var ao='[data-glide-el="track"]';function D(av,e){var aw={mount:function ax(){this.root=av.selector;this.track=this.root.querySelector(ao);this.slides=Array.prototype.slice.call(this.wrapper.children).filter(function(az){return !az.classList.contains(av.settings.classes.cloneSlide)})}};o(aw,"root",{get:function au(){return aw._r},set:function ay(az){if(K(az)){az=document.querySelector(az)}if(u(az)){aw._r=az}else{at("Root element must be a existing Html node")}}});o(aw,"track",{get:function au(){return aw._t},set:function ay(az){if(u(az)){aw._t=az}else{at("Could not find track element. Please use "+ao+" attribute.")}}});o(aw,"wrapper",{get:function au(){return aw.track.children[0]}});return aw}function X(aw,e,au){var ay={mount:function ax(){this.value=aw.settings.peek}};o(ay,"value",{get:function av(){return ay._v},set:function az(aA){if(J(aA)){aA.before=an(aA.before);aA.after=an(aA.after)}else{aA=an(aA)}ay._v=aA}});o(ay,"reductor",{get:function av(){var aB=ay.value;var aA=aw.settings.perView;if(J(aB)){return aB.before/aA+aB.after/aA}return aB*2/aA}});au.on(["resize","update"],function(){ay.mount()});return ay}function R(aw,e,au){var az={mount:function ay(){this._o=0},make:function ax(){var aB=this;var aC=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;this.offset=aC;au.emit("move",{movement:this.value});e.Transition.after(function(){au.emit("move.after",{movement:aB.value})})}};o(az,"offset",{get:function av(){return az._o},set:function aA(aB){az._o=!L(aB)?an(aB):0}});o(az,"translate",{get:function av(){return e.Sizes.slideWidth*aw.index}});o(az,"value",{get:function av(){var aB=this.offset;var aC=this.translate;if(e.Direction.is("rtl")){return aC+aB}return aC-aB}});au.on(["build.before","run"],function(){az.make()});return az}function ae(aw,e,au){var aA={setupSlides:function ay(){var aD=this.slideWidth+"px";var aC=e.Html.slides;for(var aB=0;aB<aC.length;aB++){aC[aB].style.width=aD}},setupWrapper:function az(aB){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function ax(){var aC=e.Html.slides;for(var aB=0;aB<aC.length;aB++){aC[aB].style.width=""}e.Html.wrapper.style.width=""}};o(aA,"length",{get:function av(){return e.Html.slides.length}});o(aA,"width",{get:function av(){return e.Html.root.offsetWidth}});o(aA,"wrapperSize",{get:function av(){return aA.slideWidth*aA.length+e.Gaps.grow+e.Clones.grow}});o(aA,"slideWidth",{get:function av(){return aA.width/aw.settings.perView-e.Peek.reductor-e.Gaps.reductor}});au.on(["build.before","resize","update"],function(){aA.setupSlides();aA.setupWrapper()});au.on("destroy",function(){aA.remove()});return aA}function g(ax,av,aw){var au={mount:function ay(){aw.emit("build.before");this.typeClass();this.activeClass();aw.emit("build.after")},typeClass:function aA(){av.Html.root.classList.add(ax.settings.classes[ax.settings.type])},activeClass:function e(){var aB=ax.settings.classes;var aC=av.Html.slides[ax.index];if(aC){aC.classList.add(aB.activeSlide);ad(aC).forEach(function(aD){aD.classList.remove(aB.activeSlide)})}},removeClasses:function az(){var aB=ax.settings.classes;av.Html.root.classList.remove(aB[ax.settings.type]);av.Html.slides.forEach(function(aC){aC.classList.remove(aB.activeSlide)})}};aw.on(["destroy","update"],function(){au.removeClasses()});aw.on(["resize","update"],function(){au.mount()});aw.on("move.after",function(){au.activeClass()});return au}function i(az,aw,ax){var au={mount:function aA(){this.items=[];if(az.isType("carousel")){this.items=this.collect()}},collect:function av(){var aJ=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var aO=aw.Html.slides;var aD=az.settings,aM=aD.perView,aF=aD.classes;var aL=+!!az.settings.peek;var aK=aM+aL;var aP=aO.slice(0,aK);var aH=aO.slice(-aK);for(var aN=0;aN<Math.max(1,Math.floor(aM/aO.length));aN++){for(var aI=0;aI<aP.length;aI++){var aG=aP[aI].cloneNode(true);aG.classList.add(aF.cloneSlide);aJ.push(aG)}for(var aE=0;aE<aH.length;aE++){var aC=aH[aE].cloneNode(true);aC.classList.add(aF.cloneSlide);aJ.unshift(aC)}}return aJ},append:function e(){var aI=this.items;var aC=aw.Html,aM=aC.wrapper,aK=aC.slides;var aG=Math.floor(aI.length/2);var aJ=aI.slice(0,aG).reverse();var aF=aI.slice(aG,aI.length);var aL=aw.Sizes.slideWidth+"px";for(var aH=0;aH<aF.length;aH++){aM.appendChild(aF[aH])}for(var aD=0;aD<aJ.length;aD++){aM.insertBefore(aJ[aD],aK[0])}for(var aE=0;aE<aI.length;aE++){aI[aE].style.width=aL}},remove:function aB(){var aD=this.items;for(var aC=0;aC<aD.length;aC++){aw.Html.wrapper.removeChild(aD[aC])}}};o(au,"grow",{get:function ay(){return(aw.Sizes.slideWidth+aw.Gaps.value)*au.items.length}});ax.on("update",function(){au.remove();au.mount();au.append()});ax.on("build.before",function(){if(az.isType("carousel")){au.append()}});ax.on("destroy",function(){au.remove()});return au}var s=function(){function au(){var ax=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};h(this,au);this.listeners=ax}m(au,[{key:"on",value:function aw(aA,az,ay){var ax=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(K(aA)){aA=[aA]}for(var aB=0;aB<aA.length;aB++){this.listeners[aA[aB]]=ay;az.addEventListener(aA[aB],this.listeners[aA[aB]],ax)}}},{key:"off",value:function av(az,ay){var ax=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(K(az)){az=[az]}for(var aA=0;aA<az.length;aA++){ay.removeEventListener(az[aA],this.listeners[az[aA]],ax)}}},{key:"destroy",value:function e(){delete this.listeners}}]);return au}();function aa(ax,av,aw){var au=new s();var az={mount:function ay(){this.bind()},bind:function e(){au.on("resize",window,al(function(){aw.emit("resize")},ax.settings.throttle))},unbind:function aA(){au.off("resize",window)}};aw.on("destroy",function(){az.unbind();au.destroy()});return az}var ar=["ltr","rtl"];var v={">":"<","<":">","=":"="};function p(ay,au,aw){var av={mount:function aA(){this.value=ay.settings.direction},resolve:function aC(aE){var aF=aE.slice(0,1);if(this.is("rtl")){return aE.split(aF).join(v[aF])}return aE},is:function az(aE){return this.value===aE},addClass:function e(){au.Html.root.classList.add(ay.settings.classes.direction[this.value])},removeClass:function aB(){au.Html.root.classList.remove(ay.settings.classes.direction[this.value])}};o(av,"value",{get:function ax(){return av._v},set:function aD(aE){if(ar.indexOf(aE)>-1){av._v=aE}else{at("Direction value must be `ltr` or `rtl`")}}});aw.on(["destroy","update"],function(){av.removeClass()});aw.on("update",function(){av.mount()});aw.on(["build.before","update"],function(){av.addClass()});return av}function ab(au,e){return{modify:function av(aw){if(e.Direction.is("rtl")){return -aw}return aw}}}function x(au,e){return{modify:function av(aw){return aw+e.Gaps.value*au.index}}}function C(au,e){return{modify:function av(aw){return aw+e.Clones.grow/2}}}function Y(au,e){return{modify:function av(ax){if(au.settings.focusAt>=0){var aw=e.Peek.value;if(J(aw)){return ax-aw.before}return ax-aw}return ax}}}function w(au,e){return{modify:function av(az){var ax=e.Gaps.value;var aA=e.Sizes.width;var aw=au.settings.focusAt;var ay=e.Sizes.slideWidth;if(aw==="center"){return az-(aA/2-ay/2)}return az-ay*aw-ax*aw}}}function T(av,e,au){var ax=[x,C,Y,w].concat(av._t,[ab]);return{mutate:function aw(aA){for(var ay=0;ay<ax.length;ay++){var az=ax[ay];if(H(az)&&H(az().modify)){aA=az(av,e,au).modify(aA)}else{at("Transformer should be a function that returns an object with `modify()` method")}}return aA}}}function aq(av,e,au){var ay={set:function ax(aA){var az=T(av,e).mutate(aA);e.Html.wrapper.style.transform="translate3d("+-1*az+"px, 0px, 0px)"},remove:function aw(){e.Html.wrapper.style.transform=""}};au.on("move",function(az){var aA=e.Gaps.value;var aB=e.Sizes.length;var aC=e.Sizes.slideWidth;if(av.isType("carousel")&&e.Run.isOffset("<")){e.Transition.after(function(){au.emit("translate.jump");ay.set(aC*(aB-1))});return ay.set(-aC-aA*aB)}if(av.isType("carousel")&&e.Run.isOffset(">")){e.Transition.after(function(){au.emit("translate.jump");ay.set(0)});return ay.set(aC*aB+aA*aB)}return ay.set(az.movement)});au.on("destroy",function(){ay.remove()});return ay}function ap(aB,au,az){var ax=false;var aE={compose:function av(aF){var aG=aB.settings;if(!ax){return aF+" "+this.duration+"ms "+aG.animationTimingFunc}return aF+" 0ms "+aG.animationTimingFunc},set:function aD(){var aF=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"transform";au.Html.wrapper.style.transition=this.compose(aF)},remove:function aC(){au.Html.wrapper.style.transition=""},after:function e(aF){setTimeout(function(){aF()},this.duration)},enable:function ay(){ax=false;this.set()},disable:function aw(){ax=true;this.set()}};o(aE,"duration",{get:function aA(){var aF=aB.settings;if(aB.isType("slider")&&au.Run.offset){return aF.rewindDuration}return aF.animationDuration}});az.on("move",function(){aE.set()});az.on(["build.before","resize","translate.jump"],function(){aE.disable()});az.on("run",function(){aE.enable()});az.on("destroy",function(){aE.remove()});return aE}var ai=false;try{var W=Object.defineProperty({},"passive",{get:function z(){ai=true}});window.addEventListener("testPassive",null,W);window.removeEventListener("testPassive",null,W)}catch(q){}var aj=ai;var ah=["touchstart","mousedown"];var S=["touchmove","mousemove"];var r=["touchend","touchcancel","mouseup","mouseleave"];var Q=["mousedown","mousemove","mouseup","mouseleave"];function ak(aE,ay,aD){var e=new s();var aJ=0;var aK=0;var aL=0;var aA=false;var ax=aj?{passive:true}:false;var aI={mount:function aF(){this.bindSwipeStart()},start:function aH(aR){if(!aA&&!aE.disabled){this.disable();var aS=this.touches(aR);aJ=null;aK=an(aS.pageX);aL=an(aS.pageY);this.bindSwipeMove();this.bindSwipeEnd();aD.emit("swipe.start")}},move:function aG(aT){if(!aE.disabled){var aR=aE.settings,a1=aR.touchAngle,a2=aR.touchRatio,aS=aR.classes;var aY=this.touches(aT);var aW=an(aY.pageX)-aK;var aX=an(aY.pageY)-aL;var aU=Math.abs(aW<<2);var aV=Math.abs(aX<<2);var a0=Math.sqrt(aU+aV);var aZ=Math.sqrt(aV);aJ=Math.asin(aZ/a0);if(aJ*180/Math.PI<a1){aT.stopPropagation();ay.Move.make(aW*am(a2));ay.Html.root.classList.add(aS.dragging);aD.emit("swipe.move")}else{return false}}},end:function aC(aR){if(!aE.disabled){var aS=aE.settings;var aU=this.touches(aR);var aX=this.threshold(aR);var aW=aU.pageX-aK;var aV=aJ*180/Math.PI;var aT=Math.round(aW/ay.Sizes.slideWidth);this.enable();if(aW>aX&&aV<aS.touchAngle){if(aS.perTouch){aT=Math.min(aT,an(aS.perTouch))}if(ay.Direction.is("rtl")){aT=-aT}ay.Run.make(ay.Direction.resolve("<"+aT))}else{if(aW<-aX&&aV<aS.touchAngle){if(aS.perTouch){aT=Math.max(aT,-an(aS.perTouch))}if(ay.Direction.is("rtl")){aT=-aT}ay.Run.make(ay.Direction.resolve(">"+aT))}else{ay.Move.make()}}ay.Html.root.classList.remove(aS.classes.dragging);this.unbindSwipeMove();this.unbindSwipeEnd();aD.emit("swipe.end")}},bindSwipeStart:function aw(){var aR=this;var aS=aE.settings;if(aS.swipeThreshold){e.on(ah[0],ay.Html.wrapper,function(aT){aR.start(aT)},ax)}if(aS.dragThreshold){e.on(ah[1],ay.Html.wrapper,function(aT){aR.start(aT)},ax)}},unbindSwipeStart:function aQ(){e.off(ah[0],ay.Html.wrapper,ax);e.off(ah[1],ay.Html.wrapper,ax)},bindSwipeMove:function av(){var aR=this;e.on(S,ay.Html.wrapper,al(function(aS){aR.move(aS)},aE.settings.throttle),ax)},unbindSwipeMove:function aP(){e.off(S,ay.Html.wrapper,ax)},bindSwipeEnd:function au(){var aR=this;e.on(r,ay.Html.wrapper,function(aS){aR.end(aS)})},unbindSwipeEnd:function aO(){e.off(r,ay.Html.wrapper)},touches:function aN(aR){if(Q.indexOf(aR.type)>-1){return aR}return aR.touches[0]||aR.changedTouches[0]},threshold:function aM(aR){var aS=aE.settings;if(Q.indexOf(aR.type)>-1){return aS.dragThreshold}return aS.swipeThreshold},enable:function aB(){aA=false;ay.Transition.enable();return this},disable:function az(){aA=true;ay.Transition.disable();return this}};aD.on("build.after",function(){ay.Html.root.classList.add(aE.settings.classes.swipeable)});aD.on("destroy",function(){aI.unbindSwipeStart();aI.unbindSwipeMove();aI.unbindSwipeEnd();e.destroy()});return aI}function E(ay,av,ax){var au=new s();var az={mount:function aA(){this.bind()},bind:function e(){au.on("dragstart",av.Html.wrapper,this.dragstart)},unbind:function aB(){au.off("dragstart",av.Html.wrapper)},dragstart:function aw(aC){aC.preventDefault()}};ax.on("destroy",function(){az.unbind();au.destroy()});return az}function c(aD,ay,aB){var aw=new s();var aA=false;var aF=false;var e={mount:function aE(){this._a=ay.Html.wrapper.querySelectorAll("a");this.bind()},bind:function av(){aw.on("click",ay.Html.wrapper,this.click)},unbind:function aG(){aw.off("click",ay.Html.wrapper)},click:function ax(aH){if(aF){aH.stopPropagation();aH.preventDefault()}},detach:function az(){aF=true;if(!aA){for(var aH=0;aH<this.items.length;aH++){this.items[aH].draggable=false;this.items[aH].setAttribute("data-href",this.items[aH].getAttribute("href"));this.items[aH].removeAttribute("href")}aA=true}return this},attach:function au(){aF=false;if(aA){for(var aH=0;aH<this.items.length;aH++){this.items[aH].draggable=true;this.items[aH].setAttribute("href",this.items[aH].getAttribute("data-href"))}aA=false}return this}};o(e,"items",{get:function aC(){return e._a}});aB.on("swipe.move",function(){e.detach()});aB.on("swipe.end",function(){ay.Transition.after(function(){e.attach()})});aB.on("destroy",function(){e.attach();e.unbind();aw.destroy()});return e}var U='[data-glide-el="controls[nav]"]';var l='[data-glide-el^="controls"]';function k(aD,az,aB){var aw=new s();var ax=aj?{passive:true}:false;var aA={mount:function aE(){this._n=az.Html.root.querySelectorAll(U);this._c=az.Html.root.querySelectorAll(l);this.addBindings()},setActive:function aI(){for(var aK=0;aK<this._n.length;aK++){this.addClass(this._n[aK].children)}},removeActive:function aF(){for(var aK=0;aK<this._n.length;aK++){this.removeClass(this._n[aK].children)}},addClass:function au(aK){var aM=aD.settings;var aL=aK[aD.index];if(aL){aL.classList.add(aM.classes.activeNav);ad(aL).forEach(function(aN){aN.classList.remove(aM.classes.activeNav)})}},removeClass:function aH(aK){var aL=aK[aD.index];if(aL){aL.classList.remove(aD.settings.classes.activeNav)}},addBindings:function e(){for(var aK=0;aK<this._c.length;aK++){this.bind(this._c[aK].children)}},removeBindings:function aG(){for(var aK=0;aK<this._c.length;aK++){this.unbind(this._c[aK].children)}},bind:function av(aK){for(var aL=0;aL<aK.length;aL++){aw.on("click",aK[aL],this.click);aw.on("touchstart",aK[aL],this.click,ax)}},unbind:function aJ(aK){for(var aL=0;aL<aK.length;aL++){aw.off(["click","touchstart"],aK[aL])}},click:function ay(aK){aK.preventDefault();az.Run.make(az.Direction.resolve(aK.currentTarget.getAttribute("data-glide-dir")))}};o(aA,"items",{get:function aC(){return aA._c}});aB.on(["mount.after","move.after"],function(){aA.setActive()});aB.on("destroy",function(){aA.removeBindings();aA.removeActive();aw.destroy()});return aA}function M(ax,av,aw){var au=new s();var ay={mount:function az(){if(ax.settings.keyboard){this.bind()}},bind:function e(){au.on("keyup",document,this.press)},unbind:function aB(){au.off("keyup",document)},press:function aA(aC){if(aC.keyCode===39){av.Run.make(av.Direction.resolve(">"))}if(aC.keyCode===37){av.Run.make(av.Direction.resolve("<"))}}};aw.on(["destroy","update"],function(){ay.unbind()});aw.on("update",function(){ay.mount()});aw.on("destroy",function(){au.destroy()});return ay}function d(az,aw,ax){var av=new s();var e={mount:function aA(){this.start();if(az.settings.hoverpause){this.bind()}},start:function aB(){var aE=this;if(az.settings.autoplay){if(L(this._i)){this._i=setInterval(function(){aE.stop();aw.Run.make(">");aE.start()},this.time)}}},stop:function aC(){this._i=clearInterval(this._i)},bind:function au(){var aE=this;av.on("mouseover",aw.Html.root,function(){aE.stop()});av.on("mouseout",aw.Html.root,function(){aE.start()})},unbind:function aD(){av.off(["mouseover","mouseout"],aw.Html.root)}};o(e,"time",{get:function ay(){var aE=aw.Html.slides[az.index].getAttribute("data-glide-autoplay");if(aE){return an(aE)}return an(az.settings.autoplay)}});ax.on(["destroy","update"],function(){e.unbind()});ax.on(["run.before","pause","destroy","swipe.start","update"],function(){e.stop()});ax.on(["run.after","play","swipe.end"],function(){e.start()});ax.on("update",function(){e.mount()});ax.on("destroy",function(){av.destroy()});return e}function af(e){if(J(e)){return ag(e)}else{at("Breakpoints option must be an object")}return{}}function f(ay,av,ax){var e=new s();var aB=ay.settings;var aA=af(aB.breakpoints);var aw=a({},aB);var au={match:function az(aD){if(typeof window.matchMedia!=="undefined"){for(var aC in aD){if(aD.hasOwnProperty(aC)){if(window.matchMedia("(max-width: "+aC+"px)").matches){return aD[aC]}}}}return aw}};a(aB,au.match(aA));e.on("resize",window,al(function(){ay.settings=O(aB,au.match(aA))},ay.settings.throttle));ax.on("update",function(){aA=af(aA);aw=a({},aB)});ax.on("destroy",function(){e.off("resize",window)});return au}var j={Html:D,Translate:aq,Transition:ap,Direction:p,Peek:X,Sizes:ae,Gaps:y,Move:R,Clones:i,Resize:aa,Build:g,Run:ac,Swipe:ak,Images:E,Anchors:c,Controls:k,Keyboard:M,Autoplay:d,Breakpoints:f};var B=function(e){F(au,e);function au(){h(this,au);return Z(this,(au.__proto__||Object.getPrototypeOf(au)).apply(this,arguments))}m(au,[{key:"mount",value:function av(){var aw=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return z(au.prototype.__proto__||Object.getPrototypeOf(au.prototype),"mount",this).call(this,a({},j,aw))}}]);return au}(A);return B})));