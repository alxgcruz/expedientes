"use strict";var q=Math.pow;(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2349],{2349:(Ee,J,m)=>{m.r(J),m.d(J,{ion_modal:()=>ae});var C=m(5861),l=m(2361),j=m(6254),Y=m(2362),F=m(1878),g=m(3756),Q=m(1316),$=m(7208),L=m(599),le=m(2854),ce=m(4318),c=m(9442),X=m(8685),ee=m(3139);m(3509);const te=function(){var e=(0,C.Z)(function*(t,o){"function"!=typeof t.canDismiss||!(yield t.canDismiss())||(o.isRunning()?o.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(o,n){return e.apply(this,arguments)}}(),G=e=>.00255275*q(2.71828,-14.9619*e)-1.00255*q(2.71828,-.0380968*e)+1,oe=(e,t)=>(0,g.l)(400,e/Math.abs(1.1*t),500),Z=(e,t)=>{const o=1/(1-t);return e*o+-t*o},ne=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,n=void 0===o||o<t,s=n?`calc(var(--backdrop-opacity) * ${t})`:"0",i=(0,c.c)("backdropAnimation").fromTo("opacity",0,s);return n&&i.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,c.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:i}},re=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,n=`calc(var(--backdrop-opacity) * ${Z(t,o)})`,s=[{offset:0,opacity:n},{offset:1,opacity:0}],i=[{offset:0,opacity:n},{offset:o,opacity:0},{offset:1,opacity:0}],r=(0,c.c)("backdropAnimation").keyframes(0!==o?i:s);return{wrapperAnimation:(0,c.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:r}},ie=(e,t)=>{const{presentingEl:o,currentBreakpoint:n}=t,s=(0,g.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?ne(t):{backdropAnimation:(0,c.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,c.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};r.addElement(s.querySelector("ion-backdrop")),i.addElement(s.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=(0,c.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(i);if(o){const p=window.innerWidth<768,D="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,A=(0,g.g)(o),x=(0,c.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),w=document.body;if(p){const b=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",y=`translateY(${D?"-10px":b}) scale(0.93)`;x.afterStyles({transform:y}).beforeAddWrite(()=>w.style.setProperty("background-color","black")).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:y,borderRadius:"10px 10px 0 0"}]),a.addAnimation(x)}else if(a.addAnimation(r),D){const f=`translateY(-10px) scale(${D?.93:1})`;x.afterStyles({transform:f}).addElement(A.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:f}]);const d=(0,c.c)().afterStyles({transform:f}).addElement(A.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:f}]);a.addAnimation([x,d])}else i.fromTo("opacity","0","1")}else a.addAnimation(r);return a},se=(e,t,o=500)=>{const{presentingEl:n,currentBreakpoint:s}=t,i=(0,g.g)(e),{wrapperAnimation:r,backdropAnimation:a}=void 0!==s?re(t):{backdropAnimation:(0,c.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,c.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};a.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const p=(0,c.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(r);if(n){const D=window.innerWidth<768,A="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,x=(0,g.g)(n),w=(0,c.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(f=>{1===f&&(n.style.setProperty("overflow",""),Array.from(b.querySelectorAll("ion-modal")).filter(y=>void 0!==y.presentingElement).length<=1&&b.style.setProperty("background-color",""))}),b=document.body;if(D){const f=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",B=`translateY(${A?"-10px":f}) scale(0.93)`;w.addElement(n).keyframes([{offset:0,filter:"contrast(0.85)",transform:B,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),p.addAnimation(w)}else if(p.addAnimation(a),A){const d=`translateY(-10px) scale(${A?.93:1})`;w.addElement(x.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:d},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const y=(0,c.c)().addElement(x.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:d},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);p.addAnimation([w,y])}else r.fromTo("opacity","1","0")}else p.addAnimation(a);return p},ue=(e,t)=>{const{currentBreakpoint:o}=t,n=(0,g.g)(e),{wrapperAnimation:s,backdropAnimation:i}=void 0!==o?ne(t):{backdropAnimation:(0,c.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,c.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return i.addElement(n.querySelector("ion-backdrop")),s.addElement(n.querySelector(".modal-wrapper")),(0,c.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([i,s])},be=(e,t)=>{const{currentBreakpoint:o}=t,n=(0,g.g)(e),{wrapperAnimation:s,backdropAnimation:i}=void 0!==o?re(t):{backdropAnimation:(0,c.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,c.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return i.addElement(n.querySelector("ion-backdrop")),s.addElement(n.querySelector(".modal-wrapper")),(0,c.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,s])},ae=class{constructor(e){(0,l.r)(this,e),this.didPresent=(0,l.e)(this,"ionModalDidPresent",7),this.willPresent=(0,l.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,l.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,l.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,l.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,l.e)(this,"didPresent",7),this.willPresentShorthand=(0,l.e)(this,"willPresent",7),this.willDismissShorthand=(0,l.e)(this,"willDismiss",7),this.didDismissShorthand=(0,l.e)(this,"didDismiss",7),this.modalIndex=ve++,this.coreDelegate=(0,F.C)(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:o,destroyTriggerInteraction:n}=this;n&&n();const s=void 0!==t?document.getElementById(t):null;s&&(this.destroyTriggerInteraction=((r,a)=>{const p=()=>{a.present()};return r.addEventListener("click",p),()=>{r.removeEventListener("click",p)}})(s,o))},this.onBackdropTap=()=>{this.dismiss(void 0,L.B)},this.onLifecycle=t=>{const o=this.usersElement,n=xe[t.type];if(o&&n){const s=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(s)}}}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(e){var t=this;return(0,C.Z)(function*(){t.gesture?t.gesture.enable(e):e&&(yield t.initSwipeToClose())})()}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,o)=>t-o))}connectedCallback(){(0,L.e)(this.el)}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,swipeToClose:o}=this;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==e&&void 0!==t)&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,$.p)("Your breakpoints array must include the initialBreakpoint value."),o&&(0,$.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")}componentDidLoad(){!0===this.isOpen&&(0,g.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.configureTriggerInteraction()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(){var e=this;return(0,C.Z)(function*(){const{canDismiss:t}=e;return void 0===t||("function"==typeof t?t():t)})()}present(){var e=this;return(0,C.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition),e.currentBreakpoint=e.initialBreakpoint;const t=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),{inline:o,delegate:n}=e.getDelegate(!0);e.usersElement=yield(0,F.a)(n,e.el,e.component,["ion-page"],t,o),yield(0,ce.e)(e.usersElement),(0,l.c)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,L.d)(e,"modalEnter",ie,ue,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():(e.swipeToClose||void 0!==e.canDismiss&&void 0!==e.presentingElement)&&(yield e.initSwipeToClose()),"undefined"!=typeof window&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,g.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(Q.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.currentTransition=void 0})()}initSwipeToClose(){var e=this;if("ios"!==(0,j.b)(this))return;const{el:t}=this,o=this.leaveAnimation||j.c.get("modalLeave",se),n=this.animation=o(t,{presentingEl:this.presentingElement});(0,Y.a)(t)?(this.gesture=((e,t,o)=>{const n=e.offsetHeight;let s=!1,i=!1,r=null,a=null,D=!0;const x=()=>{!r||((0,Y.i)(r)?r.scrollY=!1:r.style.setProperty("overflow","hidden"))},B=(0,ee.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:v=>{const h=v.event.target;return null===h||!h.closest||(r=(0,Y.f)(h),r?(a=(0,Y.i)(r)?(0,g.g)(r).querySelector(".inner-scroll"):r,!r.querySelector("ion-refresher")&&0===a.scrollTop):null===h.closest("ion-footer"))},onStart:v=>{const{deltaY:h}=v;D=!r||!(0,Y.i)(r)||r.scrollY,i=void 0!==e.canDismiss&&!0!==e.canDismiss,h>0&&x(),t.progressStart(!0,s?1:0)},onMove:v=>{const{deltaY:h}=v;h>0&&x();const u=v.deltaY/n,S=u>=0&&i,M=S?.2:.9999,K=S?G(u/M):u,T=(0,g.l)(1e-4,K,M);t.progressStep(T)},onEnd:v=>{const h=v.velocityY,u=v.deltaY/n,S=u>=0&&i,M=S?.2:.9999,K=S?G(u/M):u,T=(0,g.l)(1e-4,K,M),P=!S&&(v.deltaY+1e3*h)/n>=.5;let N=P?-.001:.001;P?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),N+=(0,X.g)([0,0],[.32,.72],[0,1],[1,1],T)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),N+=(0,X.g)([0,0],[1,0],[.68,.28],[1,1],T)[0]);const H=oe(P?u*n:(1-T)*n,h);s=P,B.enable(!1),!r||((0,Y.i)(r)?r.scrollY=D:r.style.removeProperty("overflow")),t.onFinish(()=>{P||B.enable(!0)}).progressEnd(P?1:0,N,H),S&&T>M/4?te(e,t):P&&o()}});return B})(t,n,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,C.Z)(function*(){yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)):(0,Y.p)(t)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:o}=this;if(!e||void 0===t)return;const n=this.enterAnimation||j.c.get("modalEnter",ie),s=this.animation=n(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:o});s.progressStart(!0,1);const{gesture:i,moveSheetToBreakpoint:r}=((e,t,o,n,s,i,r=[],a,p,D)=>{const w={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==s?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-s,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},b=e.querySelector("ion-content"),f=o.clientHeight;let d=n,y=0,B=!1;const h=i.childAnimations.find(k=>"wrapperAnimation"===k.id),u=i.childAnimations.find(k=>"backdropAnimation"===k.id),S=r[r.length-1],M=r[0],K=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},T=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};h&&u&&(h.keyframes([...w.WRAPPER_KEYFRAMES]),u.keyframes([...w.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-d),d>s?K():T()),b&&d!==S&&(b.scrollY=!1);const de=k=>{const{breakpoint:I,canDismiss:_,breakpointOffset:O}=k,R=_&&0===I,E=R?d:I,W=0!==E;d=0,h&&u&&(h.keyframes([{offset:0,transform:`translateY(${100*O}%)`},{offset:1,transform:`translateY(${100*(1-E)}%)`}]),u.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${Z(1-O,s)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${Z(E,s)})`}]),i.progressStep(0)),z.enable(!1),i.onFinish(()=>{W&&(h&&u?(0,g.r)(()=>{h.keyframes([...w.WRAPPER_KEYFRAMES]),u.keyframes([...w.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-E),d=E,D(d),b&&d===r[r.length-1]&&(b.scrollY=!0),d>s?K():T(),z.enable(!0)}):z.enable(!0))},{oneTimeCallback:!0}).progressEnd(1,0,500),R?te(e,i):W||p()},z=(0,ee.createGesture)({el:o,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:k=>{const I=k.event.target.closest("ion-content");return d=a(),!(1===d&&I)},onStart:()=>{B=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===M,b&&(b.scrollY=!1),(0,g.r)(()=>{e.focus()}),i.progressStart(!0,1-d)},onMove:k=>{const _=r.length>1?1-r[1]:void 0,O=1-d+k.deltaY/f,R=void 0!==_&&O>=_&&B,E=R?.95:.9999,W=R&&void 0!==_?_+G((O-_)/(E-_)):O;y=(0,g.l)(1e-4,W,E),i.progressStep(y)},onEnd:k=>{const O=d-(k.deltaY+100*k.velocityY)/f,R=r.reduce((E,W)=>Math.abs(W-O)<Math.abs(E-O)?W:E);de({breakpoint:R,breakpointOffset:y,canDismiss:B})}});return{gesture:z,moveSheetToBreakpoint:de}})(this.el,this.backdropEl,e,t,o,s,this.sortedBreakpoints,()=>{var a;return null!==(a=this.currentBreakpoint)&&void 0!==a?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=i,this.moveSheetToBreakpoint=r,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,C.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var o=this;return(0,C.Z)(function*(){if(o.gestureAnimationDismissing&&"gesture"!==t||"handler"!==t&&!(yield o.checkCanDismiss()))return!1;"undefined"!=typeof window&&o.keyboardOpenCallback&&window.removeEventListener(Q.KEYBOARD_DID_OPEN,o.keyboardOpenCallback),void 0!==o.currentTransition&&(yield o.currentTransition);const n=L.h.get(o)||[];o.currentTransition=(0,L.f)(o,e,t,"modalLeave",se,be,{presentingEl:o.presentingElement,currentBreakpoint:o.currentBreakpoint||o.initialBreakpoint,backdropBreakpoint:o.backdropBreakpoint});const s=yield o.currentTransition;if(s){const{delegate:i}=o.getDelegate();yield(0,F.d)(i,o.usersElement),(0,l.c)(()=>o.el.classList.remove("show-modal")),o.animation&&o.animation.destroy(),o.gesture&&o.gesture.destroy(),n.forEach(r=>r.destroy())}return o.currentBreakpoint=void 0,o.currentTransition=void 0,o.animation=void 0,s})()}onDidDismiss(){return(0,L.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,L.g)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,C.Z)(function*(){if(!t.isSheetModal)return void(0,$.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,$.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:o,moveSheetToBreakpoint:n,canDismiss:s,breakpoints:i}=t;o!==e&&n&&n({breakpoint:e,breakpointOffset:1-o,canDismiss:void 0!==s&&!0!==s&&0===i[0]})})()}getCurrentBreakpoint(){var e=this;return(0,C.Z)(function*(){return e.currentBreakpoint})()}render(){const{handle:e,isSheetModal:t,presentingElement:o,htmlAttributes:n}=this,s=!1!==e&&t,i=(0,j.b)(this),{modalId:r}=this,a=void 0!==o&&"ios"===i;return(0,l.h)(l.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},n,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[i]:!0,"modal-default":!a&&!t,"modal-card":a,"modal-sheet":t,"overlay-hidden":!0},(0,le.g)(this.cssClass)),id:r,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,l.h)("ion-backdrop",{ref:p=>this.backdropEl=p,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===i&&(0,l.h)("div",{class:"modal-shadow"}),(0,l.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:p=>this.wrapperEl=p},s&&(0,l.h)("div",{class:"modal-handle",part:"handle"}),(0,l.h)("slot",null)))}get el(){return(0,l.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},xe={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let ve=0;ae.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);