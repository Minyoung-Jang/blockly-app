/*! For license information please see main.4f0de410.chunk.js.LICENSE.txt */
(this["webpackJsonpblockly-react-sample"]=this["webpackJsonpblockly-react-sample"]||[]).push([[0],{142:function(e,_,t){"use strict";var o=t(5);t(44);o.JavaScript.test_react_field=function(e){return"console.log('custom block');\n"},o.JavaScript.test_react_date_field=function(e){return"console.log("+e.getField("DATE").getText()+");\n"}},143:function(e,_,t){"use strict";var o=t(10),n=t(9),r=t(5),c=t.n(r),a=(t(55),Object(o.a)((function e(){Object(n.a)(this,e)})));c.a.alert=function(e,_){console.log("Alert: "+e),a.show("Alert",e,{onCancel:_})},c.a.confirm=function(e,_){console.log("Confirm: "+e),a.show("Confirm",e,{showOkay:!0,onOkay:function(){_(!0)},showCancel:!0,onCancel:function(){_(!1)}})},c.a.prompt=function(e,_,t){console.log("Prompt: "+e),a.show("Prompt",e,{showInput:!0,showOkay:!0,onOkay:function(){t(a.inputField.value)},showCancel:!0,onCancel:function(){t(null)}}),a.inputField.value=_},a.hide=function(){a.backdropDiv_&&(a.backdropDiv_.style.display="none",a.dialogDiv_.style.display="none")},a.show=function(e,_,t){var o=a.backdropDiv_,n=a.dialogDiv_;n||((o=document.createElement("div")).id="customDialogBackdrop",o.style.cssText="position: absolute;top: 0; left: 0; right: 0; bottom: 0;background-color: rgba(0, 0, 0, .7);z-index: 100;",document.body.appendChild(o),(n=document.createElement("div")).id="customDialog",n.style.cssText="background-color: #fff;width: 400px;margin: 20px auto 0;padding: 10px;",o.appendChild(n),n.onclick=function(e){e.stopPropagation()},a.backdropDiv_=o,a.dialogDiv_=n),o.style.display="block",n.style.display="block",n.innerHTML='<header class="customDialogTitle"></header><p class="customDialogMessage"></p>'+(t.showInput?'<div><input id="customDialogInput"></div>':"")+'<div class="customDialogButtons">'+(t.showCancel?'<button id="customDialogCancel">Cancel</button>':"")+(t.showOkay?'<button id="customDialogOkay">OK</button>':"")+"</div>",n.getElementsByClassName("customDialogTitle")[0].appendChild(document.createTextNode(e)),n.getElementsByClassName("customDialogMessage")[0].appendChild(document.createTextNode(_));var r=function(e){a.hide(),t.onOkay&&t.onOkay(),e&&e.stopPropagation()},c=function(e){a.hide(),t.onCancel&&t.onCancel(),e&&e.stopPropagation()},l=document.getElementById("customDialogInput");if(a.inputField=l,l)l.focus(),l.onkeyup=function(e){return 13===e.keyCode?(r(),!1):27===e.keyCode?(c(),!1):void 0};else{var i=document.getElementById("customDialogOkay");i&&i.focus()}t.showOkay&&document.getElementById("customDialogOkay").addEventListener("click",r),t.showCancel&&document.getElementById("customDialogCancel").addEventListener("click",c),o.onclick=c}},148:function(e,_,t){"use strict";var o=t(5),n=t(9),r=t(10),c=t(16),a=t(15),l=t(2),i=t.n(l),s=t(17),u=t.n(s),p=t(6),d=function(e){Object(c.a)(t,e);var _=Object(a.a)(t);function t(){var e;Object(n.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=_.call.apply(_,[this].concat(r))).SERIALIZABLE=!0,e}return Object(r.a)(t,[{key:"showEditor_",value:function(){this.div_=o.DropDownDiv.getContentDiv(),u.a.render(this.render(),this.div_);var e=this.sourceBlock_.style.colourTertiary;e=e.colourBorder||e.colourLight,o.DropDownDiv.setColour(this.sourceBlock_.getColour(),e),o.DropDownDiv.showPositionedByField(this,this.dropdownDispose_.bind(this))}},{key:"dropdownDispose_",value:function(){u.a.unmountComponentAtNode(this.div_)}},{key:"render",value:function(){return Object(p.jsx)(E,{})}}],[{key:"fromJson",value:function(e){return new t(e.text)}}]),t}(o.Field),E=function(e){Object(c.a)(t,e);var _=Object(a.a)(t);function t(){return Object(n.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(p.jsx)("div",{style:{color:"#fff"},children:"Hello from React!"})}}]),t}(i.a.Component);o.fieldRegistry.register("field_react_component",d);var m=d,D=t(30),b=t(68),O=t.n(b),k=(t(84),function(e){Object(c.a)(t,e);var _=Object(a.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=_.call.apply(_,[this].concat(c))).onDateSelected_=function(_){e.setValue(new Date(_)),o.DropDownDiv.hideIfOwner(Object(D.a)(e),!0)},e}return Object(r.a)(t,[{key:"getText_",value:function(){return this.value_.toLocaleDateString()}},{key:"fromXml",value:function(e){this.setValue(new Date(e.textContent))}},{key:"render",value:function(){return Object(p.jsx)(O.a,{selected:this.value_,onChange:this.onDateSelected_,inline:!0})}}],[{key:"fromJson",value:function(e){return new t(new Date(e.date))}}]),t}(m));o.fieldRegistry.register("field_react_date",k);var h=!1,y={type:"start_block",message0:"\u25b6\ufe0e \uc2dc\uc791",nextStatement:!0};o.JavaScript.start_block=function(){return"//Start\n"},o.Blocks.start_block={init:function(){this.jsonInit(y),this.setColour("#DB6464"),this.toLocaleString("ko"),this.disabled=h},onchange:function(e){"dragStop"==="".concat(e.element)&&"start_block"===this.type&&(h=!0),"dragStart"==="".concat(e.element)&&"start_block"===this.type&&(h=!1)}};var j={type:"wait_block",message0:"%1\ucd08 \uae30\ub2e4\ub9ac\uae30",args0:[{type:"field_number",name:"duration",value:1}],nextStatement:null,previousStatement:null};o.JavaScript.wait_block=function(e){var _=e.getFieldValue("duration");return"const date = Date.now();\n  let currentDate = null;\n  do {\n    currentDate = Date.now();\n  } while (currentDate - date < ".concat(_,"000);\n")},o.Blocks.wait_block={init:function(){this.jsonInit(j),this.setColour("#6137D6"),this.toLocaleString("ko")},onchange:function(e){"click"===e.element&&console.log(e)}};var P={type:"infinite_loop",message0:"\uacc4\uc18d \ubc18\ubcf5\ud558\uae30 %1 %2",args0:[{type:"input_dummy"},{type:"input_statement",name:"INFINITE"}],previousStatement:null,nextStatement:null,tooltip:"\ubb34\ud55c \ub8e8\ud504 \ube14\ub7ed"};o.JavaScript.infinite_loop=function(e){var _=e.getInputTargetBlock("INFINITE"),t=o.JavaScript.blockToCode(_);return"while(true){\n      ".concat(t,"\n    }\n")},o.Blocks.infinite_loop={init:function(){this.jsonInit(P),this.setColour("#6137D6"),this.toLocaleString("ko")}}},149:function(e,_,t){"use strict";t.r(_);var o=t(2),n=t.n(o),r=t(17),c=t.n(r),a=(t(77),t(66));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(71),i=t(6);c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(l.a,{basename:"/blockly-app",children:Object(i.jsx)(a.a,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(29),_Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),_Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),_Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(78),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_Blockly__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),blockly_javascript__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(44),blockly_javascript__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(blockly_javascript__WEBPACK_IMPORTED_MODULE_8__),_blocks_customblocks__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(148),_generator_generator__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(142),_widgets_dialog_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(143),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(6),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__),App=function(_React$Component){Object(_Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(props){var _this;return Object(_Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),_this=_super.call(this,props),_this.generateCode=function(){var codeList=blockly_javascript__WEBPACK_IMPORTED_MODULE_8___default.a.workspaceToCode(_this.simpleWorkspace.current.workspace),_iterator=Object(_Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__.a)(codeList.split("\n\n")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var code=_step.value;console.log(code),code.includes("//Start\n")&&eval(code)}}catch(err){_iterator.e(err)}finally{_iterator.f()}},_this.simpleWorkspace=react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef(),_this}return Object(_Users_jangmin_yeong_Desktop_Web_React_blockly_react_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button",{onClick:this.generateCode,children:" \ubc14\uafb8\uae30 "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.f,{readOnly:!1,trashcan:!0,media:"media/",ref:this.simpleWorkspace,move:{scrollbars:!0,drag:!0,wheel:!0},renderer:"zelos",zoom:{controls:!0,wheel:!0,startScale:1,maxScale:3,minScale:.3,scaleSpeed:1.2,pinch:!0},initialXml:'\n              <xml xmlns="http://www.w3.org/1999/xhtml">\n              </xml>\n            ',children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc2dc\uc791",colour:"#DB6464",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"start_block"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\ud750\ub984",colour:"#6137D6",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"wait_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"controls_repeat_ext",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"TIMES",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"10"})})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"infinite_loop"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc790\ub8cc",colour:"300"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc5f0\uc0b0",colour:"400"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\ubcc0\uc218",colour:"330",custom:"VARIABLE"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc2a4\ub9c8\ud2b8\ud648",colour:"500"})]})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},77:function(e,_,t){},78:function(e,_,t){},79:function(e,_,t){},8:function(e,_,t){"use strict";t.d(_,"a",(function(){return P})),t.d(_,"b",(function(){return M})),t.d(_,"e",(function(){return f})),t.d(_,"c",(function(){return C})),t.d(_,"d",(function(){return v}));var o=t(18),n=t(2),r=t.n(n),c=t(72),a=t(9),l=t(10),i=t(16),s=t(15),u=(t(79),t(5)),p=t.n(u),d=t(67),E=t.n(d),m=(t(55),t(6)),D=["initialXml","children"];p.a.setLocale(E.a);var b=function(e){Object(i.a)(t,e);var _=Object(s.a)(t);function t(e){var o;return Object(a.a)(this,t),(o=_.call(this,e)).blocklyDiv=r.a.createRef(),o.toolbox=r.a.createRef(),o}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,_=e.initialXml,t=(e.children,Object(o.a)(e,D));this.primaryWorkspace=p.a.inject(this.blocklyDiv.current,Object(c.a)({toolbox:this.toolbox.current,theme:{blockStyles:{loop_blocks:{colourPrimary:"#6137D6",colourSecondary:"#AD7BE9",colourTertiary:"#CDB6E9"},logic_blocks:{colourPrimary:"#01579b",colourSecondary:"#64C7FF",colourTertiary:"#C5EAFF"},text_blocks:{colourPrimary:"#9B012F",colourSecondary:"#FF6498",colourTertiary:"#FFC5D6"},variable_blocks:{colourPrimary:"#9B012F",colourSecondary:"#FF6498",colourTertiary:"#FFC5D6"}},componentStyles:{}}},t)),_&&p.a.Xml.domToWorkspace(p.a.Xml.textToDom(_),this.primaryWorkspace)}},{key:"workspace",get:function(){return this.primaryWorkspace}},{key:"setXml",value:function(e){p.a.Xml.domToWorkspace(p.a.Xml.textToDom(e),this.primaryWorkspace)}},{key:"render",value:function(){var e=this.props.children;return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)("div",{ref:this.blocklyDiv,id:"blocklyDiv"}),Object(m.jsx)("xml",{xmlns:"https://developers.google.com/blockly/xml",is:"blockly",style:{display:"none"},ref:this.toolbox,children:e})]})}}]),t}(r.a.Component),O=["children"],k=["children"],h=["children"],y=["children"],j=["children"],P=(_.f=b,function(e){var _=e.children,t=Object(o.a)(e,O);return t.is="blockly",r.a.createElement("block",t,_)}),M=function(e){var _=e.children,t=Object(o.a)(e,k);return t.is="blockly",r.a.createElement("category",t,_)},f=function(e){var _=e.children,t=Object(o.a)(e,h);return t.is="blockly",r.a.createElement("value",t,_)},C=function(e){var _=e.children,t=Object(o.a)(e,y);return t.is="blockly",r.a.createElement("field",t,_)},v=function(e){var _=e.children,t=Object(o.a)(e,j);return t.is="blockly",r.a.createElement("shadow",t,_)}}},[[149,1,2]]]);
//# sourceMappingURL=main.4f0de410.chunk.js.map