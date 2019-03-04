define(["exports","./backend-ai-console.js"],function(_exports,_backendAiConsole){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});Object.defineProperty(_exports,"util",{enumerable:!0,get:function(){return _backendAiConsole.$util}});Object.defineProperty(_exports,"MDCRippleFoundation",{enumerable:!0,get:function(){return _backendAiConsole.default}});_exports.MDCSelectionControl=_exports.MDCSelectionControlState=_exports.RippleCapableSurface=_exports.MDCRipple=_exports.Checkbox=_exports.style=_exports.$foundationDefault=_exports.numbers=_exports.strings=_exports.cssClasses=_exports.$adapterDefault=_exports.$componentDefault=_exports.$index$1=_exports.$index=_exports.$mwcCheckbox=_exports.$mwcCheckboxCss=_exports.$foundation=_exports.$constants=_exports.$adapter=_exports.$component=void 0;_backendAiConsole=babelHelpers.interopRequireWildcard(_backendAiConsole);class MDCComponent{static attachTo(root){return new MDCComponent(root,new _backendAiConsole.$foundationDefault())}constructor(root,foundation=void 0,...args){this.root_=root;this.initialize(...args);this.foundation_=foundation===void 0?this.getDefaultFoundation():foundation;this.foundation_.init();this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured "+"foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(evtType,handler){this.root_.addEventListener(evtType,handler)}unlisten(evtType,handler){this.root_.removeEventListener(evtType,handler)}emit(evtType,evtData,shouldBubble=!1){let evt;if("function"===typeof CustomEvent){evt=new CustomEvent(evtType,{detail:evtData,bubbles:shouldBubble})}else{evt=document.createEvent("CustomEvent");evt.initCustomEvent(evtType,shouldBubble,!1,evtData)}this.root_.dispatchEvent(evt)}}_exports.$componentDefault=MDCComponent;var component={default:MDCComponent};_exports.$component=component;class MDCRipple extends MDCComponent{constructor(...args){super(...args);this.disabled=!1;this.unbounded_}static attachTo(root,{isUnbounded=void 0}={}){const ripple$$1=new MDCRipple(root);if(isUnbounded!==void 0){ripple$$1.unbounded=isUnbounded}return ripple$$1}static createAdapter(instance){const MATCHES=(0,_backendAiConsole.getMatchesProperty)(HTMLElement.prototype);return{browserSupportsCssVars:()=>(0,_backendAiConsole.supportsCssVariables)(window),isUnbounded:()=>instance.unbounded,isSurfaceActive:()=>instance.root_[MATCHES](":active"),isSurfaceDisabled:()=>instance.disabled,addClass:className=>instance.root_.classList.add(className),removeClass:className=>instance.root_.classList.remove(className),containsEventTarget:target=>instance.root_.contains(target),registerInteractionHandler:(evtType,handler)=>instance.root_.addEventListener(evtType,handler,(0,_backendAiConsole.applyPassive)()),deregisterInteractionHandler:(evtType,handler)=>instance.root_.removeEventListener(evtType,handler,(0,_backendAiConsole.applyPassive)()),registerDocumentInteractionHandler:(evtType,handler)=>document.documentElement.addEventListener(evtType,handler,(0,_backendAiConsole.applyPassive)()),deregisterDocumentInteractionHandler:(evtType,handler)=>document.documentElement.removeEventListener(evtType,handler,(0,_backendAiConsole.applyPassive)()),registerResizeHandler:handler=>window.addEventListener("resize",handler),deregisterResizeHandler:handler=>window.removeEventListener("resize",handler),updateCssVariable:(varName,value)=>instance.root_.style.setProperty(varName,value),computeBoundingRect:()=>instance.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(unbounded){this.unbounded_=!!unbounded;this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new _backendAiConsole.$foundationDefault$1(MDCRipple.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}_exports.MDCRipple=MDCRipple;class RippleCapableSurface{}_exports.RippleCapableSurface=RippleCapableSurface;RippleCapableSurface.prototype.root_;RippleCapableSurface.prototype.unbounded;RippleCapableSurface.prototype.disabled;var index={MDCRipple:MDCRipple,MDCRippleFoundation:_backendAiConsole.$foundationDefault$1,RippleCapableSurface:RippleCapableSurface,util:_backendAiConsole.$util};_exports.$index=index;let MDCSelectionControlState;_exports.MDCSelectionControlState=MDCSelectionControlState;class MDCSelectionControl{get ripple(){}}_exports.MDCSelectionControl=MDCSelectionControl;var index$1={MDCSelectionControlState:MDCSelectionControlState,MDCSelectionControl:MDCSelectionControl};_exports.$index$1=index$1;class MDCCheckboxAdapter{addClass(className){}removeClass(className){}setNativeControlAttr(attr,value){}removeNativeControlAttr(attr){}getNativeControl(){}forceLayout(){}isAttachedToDOM(){}isIndeterminate(){}isChecked(){}hasNativeControl(){}setNativeControlDisabled(disabled){}}_exports.$adapterDefault=MDCCheckboxAdapter;var adapter={default:MDCCheckboxAdapter};_exports.$adapter=adapter;const ROOT="mdc-checkbox",cssClasses={UPGRADED:"mdc-checkbox--upgraded",CHECKED:"mdc-checkbox--checked",INDETERMINATE:"mdc-checkbox--indeterminate",DISABLED:"mdc-checkbox--disabled",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked"};_exports.cssClasses=cssClasses;const strings={NATIVE_CONTROL_SELECTOR:`.${ROOT}__native-control`,TRANSITION_STATE_INIT:"init",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_UNCHECKED:"unchecked",TRANSITION_STATE_INDETERMINATE:"indeterminate",ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed"};_exports.strings=strings;const numbers={ANIM_END_LATCH_MS:250};_exports.numbers=numbers;var constants={cssClasses:cssClasses,strings:strings,numbers:numbers};_exports.$constants=constants;const CB_PROTO_PROPS=["checked","indeterminate"];class MDCCheckboxFoundation extends _backendAiConsole.$foundationDefault{static get cssClasses(){return cssClasses}static get strings(){return strings}static get numbers(){return numbers}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},setNativeControlAttr:()=>{},removeNativeControlAttr:()=>{},getNativeControl:()=>{},forceLayout:()=>{},isAttachedToDOM:()=>{},isIndeterminate:()=>{},isChecked:()=>{},hasNativeControl:()=>{},setNativeControlDisabled:()=>{}}}constructor(adapter){super(Object.assign(MDCCheckboxFoundation.defaultAdapter,adapter));this.currentCheckState_=strings.TRANSITION_STATE_INIT;this.currentAnimationClass_="";this.animEndLatchTimer_=0;this.enableAnimationEndHandler_=!1}init(){this.currentCheckState_=this.determineCheckState_();this.updateAriaChecked_();this.adapter_.addClass(cssClasses.UPGRADED);this.installPropertyChangeHooks_()}destroy(){this.uninstallPropertyChangeHooks_();clearTimeout(this.animEndLatchTimer_)}setDisabled(disabled){this.adapter_.setNativeControlDisabled(disabled);if(disabled){this.adapter_.addClass(cssClasses.DISABLED)}else{this.adapter_.removeClass(cssClasses.DISABLED)}}handleAnimationEnd(){if(!this.enableAnimationEndHandler_)return;clearTimeout(this.animEndLatchTimer_);this.animEndLatchTimer_=setTimeout(()=>{this.adapter_.removeClass(this.currentAnimationClass_);this.enableAnimationEndHandler_=!1},numbers.ANIM_END_LATCH_MS)}handleChange(){this.transitionCheckState_()}installPropertyChangeHooks_(){const nativeCb=this.getNativeControl_(),cbProto=Object.getPrototypeOf(nativeCb);CB_PROTO_PROPS.forEach(controlState=>{const desc=Object.getOwnPropertyDescriptor(cbProto,controlState);if(validDescriptor(desc)){const nativeCbDesc={get:desc.get,set:state=>{desc.set.call(nativeCb,state);this.transitionCheckState_()},configurable:desc.configurable,enumerable:desc.enumerable};Object.defineProperty(nativeCb,controlState,nativeCbDesc)}})}uninstallPropertyChangeHooks_(){const nativeCb=this.getNativeControl_(),cbProto=Object.getPrototypeOf(nativeCb);CB_PROTO_PROPS.forEach(controlState=>{const desc=Object.getOwnPropertyDescriptor(cbProto,controlState);if(validDescriptor(desc)){Object.defineProperty(nativeCb,controlState,desc)}})}transitionCheckState_(){if(!this.adapter_.hasNativeControl()){return}const oldState=this.currentCheckState_,newState=this.determineCheckState_();if(oldState===newState){return}this.updateAriaChecked_();if(0<this.currentAnimationClass_.length){clearTimeout(this.animEndLatchTimer_);this.adapter_.forceLayout();this.adapter_.removeClass(this.currentAnimationClass_)}this.currentAnimationClass_=this.getTransitionAnimationClass_(oldState,newState);this.currentCheckState_=newState;if(this.adapter_.isAttachedToDOM()&&0<this.currentAnimationClass_.length){this.adapter_.addClass(this.currentAnimationClass_);this.enableAnimationEndHandler_=!0}}determineCheckState_(){const{TRANSITION_STATE_INDETERMINATE,TRANSITION_STATE_CHECKED,TRANSITION_STATE_UNCHECKED}=strings;if(this.adapter_.isIndeterminate()){return TRANSITION_STATE_INDETERMINATE}return this.adapter_.isChecked()?TRANSITION_STATE_CHECKED:TRANSITION_STATE_UNCHECKED}getTransitionAnimationClass_(oldState,newState){const{TRANSITION_STATE_INIT,TRANSITION_STATE_CHECKED,TRANSITION_STATE_UNCHECKED}=strings,{ANIM_UNCHECKED_CHECKED,ANIM_UNCHECKED_INDETERMINATE,ANIM_CHECKED_UNCHECKED,ANIM_CHECKED_INDETERMINATE,ANIM_INDETERMINATE_CHECKED,ANIM_INDETERMINATE_UNCHECKED}=MDCCheckboxFoundation.cssClasses;switch(oldState){case TRANSITION_STATE_INIT:if(newState===TRANSITION_STATE_UNCHECKED){return""}case TRANSITION_STATE_UNCHECKED:return newState===TRANSITION_STATE_CHECKED?ANIM_UNCHECKED_CHECKED:ANIM_UNCHECKED_INDETERMINATE;case TRANSITION_STATE_CHECKED:return newState===TRANSITION_STATE_UNCHECKED?ANIM_CHECKED_UNCHECKED:ANIM_CHECKED_INDETERMINATE;default:return newState===TRANSITION_STATE_CHECKED?ANIM_INDETERMINATE_CHECKED:ANIM_INDETERMINATE_UNCHECKED;}}updateAriaChecked_(){if(this.adapter_.isIndeterminate()){this.adapter_.setNativeControlAttr(strings.ARIA_CHECKED_ATTR,strings.ARIA_CHECKED_INDETERMINATE_VALUE)}else{this.adapter_.removeNativeControlAttr(strings.ARIA_CHECKED_ATTR)}}getNativeControl_(){return this.adapter_.getNativeControl()||{checked:!1,indeterminate:!1,disabled:!1,value:null}}}_exports.$foundationDefault=MDCCheckboxFoundation;function validDescriptor(inputPropDesc){return!!inputPropDesc&&"function"===typeof inputPropDesc.set}var foundation={default:MDCCheckboxFoundation};_exports.$foundation=foundation;const style=_backendAiConsole.css`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;padding:11px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-checkbox::before,.mdc-checkbox::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox::before,.mdc-checkbox::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox::before,.mdc-checkbox::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox:hover::before{opacity:.04}.mdc-checkbox:not(.mdc-ripple-upgraded):focus::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.16}.mdc-checkbox::before,.mdc-checkbox::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded::before,.mdc-checkbox.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-0{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-0{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-0}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-0}.mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.26)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.26)}@media screen and (-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{left:11px;right:initial;display:inline-flex;position:absolute;top:11px;bottom:0;align-items:center;justify-content:center;box-sizing:border-box;width:45%;height:45%;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color}.mdc-checkbox[dir=rtl] .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox__background{left:initial;right:11px}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-width:1px;border-style:solid;opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:180ms linear 0s mdc-checkbox-unchecked-checked-checkmark-path;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s mdc-checkbox-unchecked-indeterminate-mixedmark;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:90ms linear 0s mdc-checkbox-checked-unchecked-checkmark-path;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:90ms linear 0s mdc-checkbox-checked-indeterminate-checkmark;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s mdc-checkbox-checked-indeterminate-mixedmark;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:500ms linear 0s mdc-checkbox-indeterminate-checked-checkmark;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:500ms linear 0s mdc-checkbox-indeterminate-checked-mixedmark;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:300ms linear 0s mdc-checkbox-indeterminate-unchecked-mixedmark;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;transform:scale(0, 0);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(2.75, 2.75);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:.12}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}:host{outline:none}`;_exports.style=style;var mwcCheckboxCss={style:style};_exports.$mwcCheckboxCss=mwcCheckboxCss;var __decorate=void 0||function(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--)if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r;return 3<c&&r&&Object.defineProperty(target,key,r),r};let Checkbox=class Checkbox extends _backendAiConsole.FormElement{constructor(){super(...arguments);this.checked=!1;this.indeterminate=!1;this.disabled=!1;this.value="";this.mdcFoundationClass=MDCCheckboxFoundation}get ripple(){return this.mdcRoot.ripple}createAdapter(){return Object.assign({},super.createAdapter(),{getNativeControl:()=>{return this.formElement},forceLayout:()=>{this.mdcRoot.offsetWidth},isAttachedToDOM:()=>this.isConnected,isIndeterminate:()=>this.indeterminate,isChecked:()=>this.checked,hasNativeControl:()=>!!this.formElement,setNativeControlDisabled:disabled=>{this.formElement.disabled=disabled}})}render(){return _backendAiConsole.html$3`
      <div class="mdc-checkbox" @animationend="${this._animationEndHandler}" .ripple="${(0,_backendAiConsole.ripple)()}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              @change="${this._changeHandler}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}">
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>`}_changeHandler(){this.checked=this.formElement.checked;this.indeterminate=this.formElement.indeterminate;this.mdcFoundation.handleChange()}_animationEndHandler(){this.mdcFoundation.handleAnimationEnd()}};_exports.Checkbox=Checkbox;Checkbox.styles=style;__decorate([(0,_backendAiConsole.query)(".mdc-checkbox")],Checkbox.prototype,"mdcRoot",void 0);__decorate([(0,_backendAiConsole.query)("input")],Checkbox.prototype,"formElement",void 0);__decorate([(0,_backendAiConsole.property)({type:Boolean})],Checkbox.prototype,"checked",void 0);__decorate([(0,_backendAiConsole.property)({type:Boolean})],Checkbox.prototype,"indeterminate",void 0);__decorate([(0,_backendAiConsole.property)({type:Boolean})],Checkbox.prototype,"disabled",void 0);__decorate([(0,_backendAiConsole.property)({type:String})],Checkbox.prototype,"value",void 0);_exports.Checkbox=Checkbox=__decorate([(0,_backendAiConsole.customElement)("mwc-checkbox")],Checkbox);var mwcCheckbox={get Checkbox(){return Checkbox}};_exports.$mwcCheckbox=mwcCheckbox;class BackendAiEnvironmentView extends _backendAiConsole.LitElement{static get is(){return"backend-ai-environment-view"}static get styles(){return[_backendAiConsole.BackendAiStyles,_backendAiConsole.IronFlex,_backendAiConsole.IronFlexAlignment,_backendAiConsole.IronFlexFactors,_backendAiConsole.IronPositioning,_backendAiConsole.css$1`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 210px);
        }

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

      `]}render(){return _backendAiConsole.html$4`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <paper-material elevation="1">
        <h3 class="horizontal center layout">
          <span>Images</span>
          <span class="flex"></span>
          <mwc-button class="fg red" id="add-image" disabled outlined label="Add" icon="add"></mwc-button>
        </h3>

        <vaadin-grid theme="row-stripes column-borders compact" aria-label="Environments" id="testgrid">
          <vaadin-grid-column width="40px">
            <template class="header">
              <vaadin-grid-sorter path="installed"></vaadin-grid-sorter>
            </template>
            <template>
              <div class="layout vertical" style="margin:0; padding:0;">
                <template is="dom-if" if="[[item.installed]]">
                  <mwc-checkbox checked></mwc-checkbox>
                </template>
                <template is="dom-if" if="[[!item.installed]]">
                  <mwc-checkbox></mwc-checkbox>
                </template>
              </div>
            </template>
          </vaadin-grid-column>

          <vaadin-grid-column width="80px" resizable>
            <template class="header">
              <vaadin-grid-sorter path="registry">Registry</vaadin-grid-sorter>
            </template>
            <template>
              <div class="layout vertical">
                <span>[[item.registry]]</span>
              </div>
            </template>
          </vaadin-grid-column>

          <vaadin-grid-column width="50px" resizable>
            <template class="header">Namespace</template>
            <template>
              <div>[[item.namespace]]</div>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column resizable>
            <template class="header">Language</template>
            <template>
              <div>[[item.lang]]</div>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column width="40px" resizable>
            <template class="header">Version</template>
            <template>
              <div>[[item.baseversion]]</div>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column width="60px" resizable>
            <template class="header">Base</template>
            <template>
              <template is="dom-repeat" items="[[ item.baseimage ]]">
                <lablup-shields app="" color="blue" description="[[item]]"></lablup-shields>
              </template>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column width="50px" resizable>
            <template class="header">Constraint</template>
            <template>
              <template is="dom-if" if="[[item.additional_req]]">
                <lablup-shields app="" color="green" description="[[item.additional_req]]"></lablup-shields>
              </template>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column width="150px" flex-grow="0" resizable>
            <template class="header">
              Digest
            </template>
            <template>
              <div class="layout vertical">
                <span class="indicator">[[item.digest]]</span>
              </div>
            </template>
          </vaadin-grid-column>

          <vaadin-grid-column width="150px" flex-grow="0" resizable>
            <template class="header">Resource Limit</template>
            <template>
              <div class="layout horizontal center flex">
                <div class="layout horizontal configuration">
                  <iron-icon class="fg green" icon="hardware:developer-board"></iron-icon>
                  <span>[[item.cpu_limit_min]]</span> ~
                  <span>[[item.cpu_limit_max]]</span>
                  <span class="indicator">core</span>
                </div>
              </div>
              <div class="layout horizontal center flex">
                <div class="layout horizontal configuration">
                  <iron-icon class="fg green" icon="hardware:memory"></iron-icon>
                  <span>[[item.mem_limit_min]]</span> ~
                  <span>[[item.mem_limit_max]]</span>
                </div>
              </div>
              <template is="dom-if" if="[[item.cuda_device_limit_min]]">
                <div class="layout horizontal center flex">
                  <div class="layout horizontal configuration">
                    <iron-icon class="fg green" icon="hardware:icons:view-module"></iron-icon>
                    <span>[[item.cuda_device_limit_min]]</span> ~
                    <span>[[item.cuda_device_limit_max]]</span>
                    <span class="indicator">GPU</span>
                  </div>
                </div>
              </template>
              <template is="dom-if" if="[[item.cuda_shares_limit_min]]">
                <div class="layout horizontal center flex">
                  <div class="layout horizontal configuration">
                    <iron-icon class="fg green" icon="hardware:icons:view-module"></iron-icon>
                    <span>[[item.cuda_shares_limit_min]]</span> ~
                    <span>[[item.cuda_shares_limit_max]]</span>
                    <span class="indicator">vGPU</span>
                  </div>
                </div>
              </template>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column resizable>
            <template class="header">Control</template>
            <template>
              <div id="controls" class="layout horizontal flex center"
                   kernel-id="[[item.digest]]">
                <paper-icon-button class="fg blue controls-running" disabled
                                   on-tap="_modifyImage" icon="icons:settings"></paper-icon-button>
                <paper-icon-button class="fg red controls-running" disabled
                                   on-tap="_deleteImage" icon="delete"></paper-icon-button>
              </div>
            </template>
          </vaadin-grid-column>
        </vaadin-grid>


      </paper-material>
    `}static get properties(){return{active:{type:Boolean},images:{type:Object,hasChanged:()=>!0}}}constructor(){super();(0,_backendAiConsole.setPassiveTouchGestures)(!0);this.images={};this.active=!1}shouldUpdate(){return this.active}firstUpdated(){if(window.backendaiclient===void 0||null===window.backendaiclient){document.addEventListener("backend-ai-connected",()=>{this._getImages()},!0)}else{this._getImages()}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_getImages(){this.shadowRoot.querySelector("#loading-indicator").show();window.backendaiclient.image.list().then(response=>{let images=response.images;images.forEach(image=>{let tags=image.tag.split("-");if(tags[1]!==void 0){image.baseversion=tags[0];image.baseimage=tags[1];if(tags[2]!==void 0){image.additional_req=tags[2].toUpperCase()}}else{image.baseversion=image.tag}let names=image.name.split("/");if(names[1]!==void 0){image.namespace=names[0];image.lang=names[1]}else{image.lang=image.names}let langs=image.lang.split("-"),baseimage=[this._humanizeName(image.baseimage)];if(langs[1]!==void 0){image.lang=langs[1];baseimage.push(this._humanizeName(langs[0]))}image.baseimage=baseimage;image.lang=this._humanizeName(image.lang);var resource_limit=image.resource_limits;resource_limit.forEach(resource=>{if(0==resource.max){resource.max="\u221E"}if("cuda.device"==resource.key){resource.key="cuda_device"}if("cuda.shares"==resource.key){resource.key="cuda_shares"}image[resource.key+"_limit_min"]=this._addUnit(resource.min);image[resource.key+"_limit_max"]=this._addUnit(resource.max)})});let image_keys=Object.keys(images);this.images=images;this.shadowRoot.querySelector("#testgrid").items=this.images;this.shadowRoot.querySelector("#loading-indicator").hide()})}_addUnit(value){let unit=value.substr(-1);if("m"==unit){return value.slice(0,-1)+"MB"}if("g"==unit){return value.slice(0,-1)+"GB"}if("t"==unit){return value.slice(0,-1)+"TB"}return value}_humanizeName(value){this.alias={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node.js",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",digits:"DIGITS",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","anaconda2018.12":"Anaconda 2018.12","alpine3.8":"Alpine Lunux 3.8",ngc:"NVidia GPU Cloud"};if(value in this.alias){return this.alias[value]}else{return value}}_indexFrom1(index){return index+1}}customElements.define(BackendAiEnvironmentView.is,BackendAiEnvironmentView)});