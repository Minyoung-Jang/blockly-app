/*! For license information please see main.2f4356a2.chunk.js.LICENSE.txt */
(this["webpackJsonpblockly-react-sample"]=this["webpackJsonpblockly-react-sample"]||[]).push([[0],{16:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(25),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_Blockly__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),blockly_javascript__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(13),blockly_javascript__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(blockly_javascript__WEBPACK_IMPORTED_MODULE_8__),_blocks_customblocks__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(32),_generator_generator__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(33),_widgets_dialog_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(34),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__),App=function(_React$Component){Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(props){var _this;return Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),_this=_super.call(this,props),_this.generateCode=function(){var codeList=blockly_javascript__WEBPACK_IMPORTED_MODULE_8___default.a.workspaceToCode(_this.simpleWorkspace.current.workspace),_iterator=Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__.a)(codeList.split("\n\n")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var code=_step.value;console.log(code),code.includes("//Start\n")&&eval(code)}}catch(err){_iterator.e(err)}finally{_iterator.f()}},_this.simpleWorkspace=react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef(),_this}return Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"App",style:{backgroundColor:"transparent",width:"100%",height:"100vh"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button",{id:"codeButton",onClick:this.generateCode,children:" RUN "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.f,{readOnly:!1,trashcan:!0,media:"media/",ref:this.simpleWorkspace,move:{scrollbars:!0,drag:!0,wheel:!0},renderer:"zelos",zoom:{controls:!0,wheel:!0,startScale:1,maxScale:3,minScale:.3,scaleSpeed:1.2,pinch:!0},initialXml:'\n              <xml xmlns="http://www.w3.org/1999/xhtml">\n              </xml>\n            ',children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc2dc\uc791",categorystyle:"start",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"start_block"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\ud750\ub984",colour:"#6137D6",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"wait_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"controls_repeat_ext",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"TIMES",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"10"})})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"infinite_loop"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"break_loop"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"controls_if"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc790\ub8cc",colour:"330",custom:"VARIABLE"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc5f0\uc0b0",colour:"400",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"math_arithmetic",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"A",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"B",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"logic_compare",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"A",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"B",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"logic_operation",colour:"400",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"A",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"logic_boolean",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"BOOL",children:"\ucc38"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"B",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"logic_boolean",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"BOOL",children:"\uac70\uc9d3"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"text_print",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"TEXT",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"text",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"TEXT",children:"abc"})})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc2a4\ub9c8\ud2b8\ud648",colour:"200"})]})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},2:function(_,e,t){"use strict";t.d(e,"a",(function(){return y})),t.d(e,"b",(function(){return B})),t.d(e,"e",(function(){return h})),t.d(e,"c",(function(){return x})),t.d(e,"d",(function(){return C}));var o=t(4),r=t(0),n=t.n(r),c=t(19),a=t(5),l=t(6),i=t(9),s=t(8),E=(t(26),t(3)),u=t.n(E),O=t(17),p=t.n(O),D=(t(14),t(1)),d=["initialXml","children"];u.a.setLocale(p.a);var m=function(_){Object(i.a)(t,_);var e=Object(s.a)(t);function t(_){var o;return Object(a.a)(this,t),(o=e.call(this,_)).blocklyDiv=n.a.createRef(),o.toolbox=n.a.createRef(),o}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var _=this.props,e=_.initialXml,t=(_.children,Object(o.a)(_,d));this.primaryWorkspace=u.a.inject(this.blocklyDiv.current,Object(c.a)({toolbox:this.toolbox.current,theme:{blockStyles:{loop_blocks:{colourPrimary:"#6137D6",colourSecondary:"#AD7BE9",colourTertiary:"#CDB6E9"},logic_blocks:{colourPrimary:"#6137D6",colourSecondary:"#AD7BE9",colourTertiary:"#CDB6E9"},text_blocks:{colourPrimary:"#9B012F",colourSecondary:"#FF6498",colourTertiary:"#FFC5D6"},variable_blocks:{colourPrimary:"#9B012F",colourSecondary:"#FF6498",colourTertiary:"#FFC5D6"},logic_operation:{colourPrimary:"#9B012F",colourSecondary:"#FF6498",colourTertiary:"#FFC5D6"}},componentStyles:{workspaceBackgroundColour:"#FFFFFF00",toolboxBackgroundColour:"#4C536D",flyoutBackgroundColour:"#4C536D99"},categoryStyles:{start:{colour:"#DB6464"}}}},t)),e&&u.a.Xml.domToWorkspace(u.a.Xml.textToDom(e),this.primaryWorkspace)}},{key:"workspace",get:function(){return this.primaryWorkspace}},{key:"setXml",value:function(_){u.a.Xml.domToWorkspace(u.a.Xml.textToDom(_),this.primaryWorkspace)}},{key:"render",value:function(){var _=this.props.children;return Object(D.jsxs)(n.a.Fragment,{children:[Object(D.jsx)("div",{ref:this.blocklyDiv,id:"blocklyDiv"}),Object(D.jsx)("xml",{xmlns:"https://developers.google.com/blockly/xml",is:"blockly",style:{display:"none"},ref:this.toolbox,children:_})]})}}]),t}(n.a.Component),b=["children"],M=["children"],P=["children"],k=["children"],j=["children"],y=(e.f=m,function(_){var e=_.children,t=Object(o.a)(_,b);return t.is="blockly",n.a.createElement("block",t,e)}),B=function(_){var e=_.children,t=Object(o.a)(_,M);return t.is="blockly",n.a.createElement("category",t,e)},h=function(_){var e=_.children,t=Object(o.a)(_,P);return t.is="blockly",n.a.createElement("value",t,e)},x=function(_){var e=_.children,t=Object(o.a)(_,k);return t.is="blockly",n.a.createElement("field",t,e)},C=function(_){var e=_.children,t=Object(o.a)(_,j);return t.is="blockly",n.a.createElement("shadow",t,e)}},24:function(_,e,t){},25:function(_,e,t){},26:function(_,e,t){},32:function(_,e,t){"use strict";var o=t(3),r=!1,n={type:"start_block",message0:"\u25b6\ufe0e \uc2dc\uc791",nextStatement:!0};o.JavaScript.start_block=function(){return"//Start\n"},o.Blocks.start_block={init:function(){this.jsonInit(n),this.setColour("#DB6464"),this.toLocaleString("ko"),this.disabled=r},onchange:function(_){"dragStop"==="".concat(_.element)&&"start_block"===this.type&&(r=!0),"dragStart"==="".concat(_.element)&&"start_block"===this.type&&(r=!1)}};var c={type:"wait_block",message0:"%1\ucd08 \uae30\ub2e4\ub9ac\uae30",args0:[{type:"field_number",name:"duration",value:1}],nextStatement:null,previousStatement:null};o.JavaScript.wait_block=function(_){var e=_.getFieldValue("duration");return"const date = Date.now();\n  let currentDate = null;\n  do {\n    currentDate = Date.now();\n  } while (currentDate - date < ".concat(e,"000);\n")},o.Blocks.wait_block={init:function(){this.jsonInit(c),this.setColour("#6137D6"),this.toLocaleString("ko")},onchange:function(_){"click"===_.element&&console.log(_)}};var a={type:"infinite_loop",message0:"\uacc4\uc18d \ubc18\ubcf5\ud558\uae30 %1 %2",args0:[{type:"input_dummy"},{type:"input_statement",name:"INFINITE"}],previousStatement:null,nextStatement:null,tooltip:"\ubb34\ud55c \ub8e8\ud504 \ube14\ub7ed"};o.JavaScript.infinite_loop=function(_){var e=_.getInputTargetBlock("INFINITE"),t=o.JavaScript.blockToCode(e);return"while(true){\n      ".concat(t,"\n    }\n")},o.Blocks.infinite_loop={init:function(){this.jsonInit(a),this.setColour("#6137D6"),this.toLocaleString("ko")}};var l={type:"break_loop",message0:"\ubc18\ubcf5 \uc911\ub2e8\ud558\uae30",previousStatement:null,tooltip:"\ub8e8\ud504 \ub098\uc624\uae30"};o.JavaScript.break_loop=function(_){return"break;\n"},o.Blocks.break_loop={init:function(){this.jsonInit(l),this.setColour("#6137D6"),this.toLocaleString("ko")}}},33:function(_,e,t){"use strict";var o=t(3);t(13);o.JavaScript.test_react_field=function(_){return"console.log('custom block');\n"},o.JavaScript.test_react_date_field=function(_){return"console.log("+_.getField("DATE").getText()+");\n"}},34:function(_,e,t){"use strict";var o=t(6),r=t(5),n=t(3),c=t.n(n),a=(t(14),Object(o.a)((function _(){Object(r.a)(this,_)})));c.a.alert=function(_,e){console.log("Alert: "+_),a.show("Alert",_,{onCancel:e})},c.a.confirm=function(_,e){console.log("Confirm: "+_),a.show("Confirm",_,{showOkay:!0,onOkay:function(){e(!0)},showCancel:!0,onCancel:function(){e(!1)}})},c.a.prompt=function(_,e,t){console.log("Prompt: "+_),a.show("\ubcc0\uc218 \ub9cc\ub4e4\uae30",_,{showInput:!0,showOkay:!0,onOkay:function(){t(a.inputField.value)},showCancel:!0,onCancel:function(){t(null)}}),a.inputField.value=e},a.hide=function(){a.backdropDiv_&&(a.backdropDiv_.style.display="none",a.dialogDiv_.style.display="none")},a.show=function(_,e,t){var o=a.backdropDiv_,r=a.dialogDiv_;r||((o=document.createElement("div")).id="customDialogBackdrop",o.style.cssText="position: absolute;top: 0; left: 0; right: 0; bottom: 0;background-color: rgba(0, 0, 0, .7);z-index: 100;",document.body.appendChild(o),(r=document.createElement("div")).id="customDialog",r.style.cssText="display: flex;flex-direction: column;max-width: 361px;justify-content: center;border-radius: 10px;align-items: center;padding-top: 10px;padding-bottom: 10px;padding-right: 26px;padding-left: 26px;background-color: rgba(247, 247, 251, 1);margin-right: auto;margin-left: auto;margin-top: 80px;",o.appendChild(r),r.onclick=function(_){_.stopPropagation()},a.backdropDiv_=o,a.dialogDiv_=r),o.style.display="block",r.style.display="block",r.innerHTML='<div class="customDialogTitle" style="color: rgba(99, 125, 220, 1);font-size: 16px;letter-spacing: 0%;padding: 14px;text-align: center;font-weight: bold;border-bottom: solid #000;border-bottom-width: 0.5;font-family: Noto Sans KR, sans-serif;">\ubcc0\uc218\ub9cc\ub4e4\uae30</div><div class="customDialogMessage" style="margin-top: 10px;color: rgba(73, 73, 73, 1);font-size: 16px;letter-spacing: 0%;text-align: left;font-family: Noto Sans KR, sans-serif;">\uc0c8 \ubcc0\uc218 \uc774\ub984 :</div>'+(t.showInput?'<div><input id="customDialogInput" style="display: flex;height: 30px;width: 309px;margin-top: 10px;border-radius: 5px;border-color: rgba(211, 211, 211, 1);border-width: 1px;align-items: center;border-style: solid;background-color: rgba(255, 255, 255, 1);"></div>':"")+'<div class="customDialogButtons">'+(t.showOkay?'<button id="okay" style=" display: flex;flex-direction: row;justify-content: center;margin-top: 10px;border-radius: 17.5px;align-items: center;padding-top: 7px;padding-bottom: 7px;padding-right: 30px;width: 106px;padding-left: 30px;background-color: rgba(99, 125, 220, 1);color: rgba(255, 255, 255, 1);font-size: 12px;border: none;letter-spacing: 0%;text-align: center;text-align: center;font-family: Noto Sans KR, sans-serif;">\uc0dd\uc131\ud558\uae30</button>':"")+(t.showCancel?'<button id="cancel" style="margin-top: 10px;margin-bottom: 20px;background-color: inherit;color: rgba(166, 166, 166, 1);font-size: 10px;letter-spacing: 0%;border: none;text-align: center;font-family: Noto Sans KR, sans-serif;">\ucde8\uc18c</button>':"")+"</div>";var n=function(_){a.hide(),t.onOkay&&t.onOkay(),_&&_.stopPropagation()},c=function(_){a.hide(),t.onCancel&&t.onCancel(),_&&_.stopPropagation()},l=document.getElementById("customDialogInput");if(a.inputField=l,l)l.focus(),l.onkeyup=function(_){return 13===_.keyCode?(n(),!1):27===_.keyCode?(c(),!1):void 0};else{var i=document.getElementById("okay");i&&i.focus()}t.showOkay&&document.getElementById("okay").addEventListener("click",n),t.showCancel&&document.getElementById("cancel").addEventListener("click",c),o.onclick=c}},35:function(_,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),n=t(15),c=t.n(n),a=(t(24),t(16));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(18),i=t(1);c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(l.a,{basename:"/blockly-app",children:Object(i.jsx)(a.a,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.2f4356a2.chunk.js.map