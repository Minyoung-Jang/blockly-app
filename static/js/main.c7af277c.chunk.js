/*! For license information please see main.c7af277c.chunk.js.LICENSE.txt */
(this["webpackJsonpblockly-react-sample"]=this["webpackJsonpblockly-react-sample"]||[]).push([[0],{16:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(25),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_Blockly__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3),blockly_javascript__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),blockly_javascript__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(blockly_javascript__WEBPACK_IMPORTED_MODULE_8__),_blocks_customblocks__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(34),_generator_generator__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(32),_widgets_dialog_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(33),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__),App=function(_React$Component){Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(props){var _this;return Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),_this=_super.call(this,props),_this.generateCode=function(){var codeList=blockly_javascript__WEBPACK_IMPORTED_MODULE_8___default.a.workspaceToCode(_this.simpleWorkspace.current.workspace),_iterator=Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__.a)(codeList.split("\n\n")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var code=_step.value;console.log(code),code.includes("//Start\n")&&eval(code)}}catch(err){_iterator.e(err)}finally{_iterator.f()}},_this.simpleWorkspace=react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef(),_this}return Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"App",style:{display:"flex"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{id:"box"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{id:"box1",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{id:"column",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{id:"subtitle",children:"PROJECT NAME"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{id:"title",children:"\uc778\uacf5\uc9c0\ub2a5 \ud648"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button",{id:"codeButton",onClick:this.generateCode,children:" START "})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.f,{readOnly:!1,trashcan:!0,media:"media/",ref:this.simpleWorkspace,move:{scrollbars:!0,drag:!0,wheel:!0},renderer:"zelos",initialXml:'\n              <xml xmlns="http://www.w3.org/1999/xhtml">\n              </xml>\n            ',children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc2dc\uc791",colour:"#5AA8DF",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"start_block"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\ud750\ub984",colour:"#A43033",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"wait_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"controls_repeat_ext",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"TIMES",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"10"})})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"infinite_loop"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"break_loop"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"controls_if"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\ubcc0\uc218",colour:"#E99F38",custom:"VARIABLE"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc5f0\uc0b0",colour:"#7AB964",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"math_arithmetic",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"A",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"B",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"compare_block",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"A",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"B",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"and_or_block",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"A",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"boolean_block",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"BOOL",children:"TRUE"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"B",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"boolean_block",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"BOOL",children:"TRUE"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"not_block",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"BOOL",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"boolean_block",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"B",children:"TRUE"})})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc2a4\ub9c8\ud2b8\ud648",colour:"#AE76F5",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"servo_motor_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"rgb_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"led_on_off_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"lcd_clear_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"lcd_set_pos_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"lcd_message_block"})]})]})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},24:function(_,e,t){},25:function(_,e,t){},26:function(_,e,t){},3:function(_,e,t){"use strict";t.d(e,"a",(function(){return j})),t.d(e,"b",(function(){return y})),t.d(e,"e",(function(){return h})),t.d(e,"c",(function(){return g})),t.d(e,"d",(function(){return x}));var o=t(4),n=t(0),r=t.n(n),c=t(19),l=t(5),a=t(6),i=t(10),s=t(9),E=(t(26),t(1)),u=t.n(E),p=t(17),O=t.n(p),d=(t(7),t(14),t(2)),D=["initialXml","children"];u.a.setLocale(O.a);var m=function(_){Object(i.a)(t,_);var e=Object(s.a)(t);function t(_){var o;return Object(l.a)(this,t),(o=e.call(this,_)).blocklyDiv=r.a.createRef(),o.toolbox=r.a.createRef(),o}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var _=this.props,e=_.initialXml,t=(_.children,Object(o.a)(_,D));this.primaryWorkspace=u.a.inject(this.blocklyDiv.current,Object(c.a)({toolbox:this.toolbox.current,theme:{blockStyles:{loop_blocks:{colourPrimary:"#A43033",colourSecondary:"#FEAFB1"},logic_blocks:{colourPrimary:"#A43033",colourSecondary:"#FEAFB1"},text_blocks:{colourPrimary:"#7AB964",colourSecondary:"#BEDAB4"},math_blocks:{colourPrimary:"#7AB964",colourSecondary:"#BEDAB4"},variable_blocks:{colourPrimary:"#E99F38",colourSecondary:"#EFC78F"}},componentStyles:{workspaceBackgroundColour:"#F7F7FB",toolboxBackgroundColour:"#4C536D",flyoutBackgroundColour:"#4C536D99"}}},t)),e&&u.a.Xml.domToWorkspace(u.a.Xml.textToDom(e),this.primaryWorkspace)}},{key:"workspace",get:function(){return this.primaryWorkspace}},{key:"setXml",value:function(_){u.a.Xml.domToWorkspace(u.a.Xml.textToDom(_),this.primaryWorkspace)}},{key:"render",value:function(){var _=this.props.children;return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("div",{ref:this.blocklyDiv,id:"blocklyDiv"}),Object(d.jsx)("xml",{xmlns:"https://developers.google.com/blockly/xml",is:"blockly",style:{display:"none"},ref:this.toolbox,children:_})]})}}]),t}(r.a.Component),b=["children"],M=["children"],P=["children"],k=["children"],B=["children"],j=(e.f=m,function(_){var e=_.children,t=Object(o.a)(_,b);return t.is="blockly",r.a.createElement("block",t,e)}),y=function(_){var e=_.children,t=Object(o.a)(_,M);return t.is="blockly",r.a.createElement("category",t,e)},h=function(_){var e=_.children,t=Object(o.a)(_,P);return t.is="blockly",r.a.createElement("value",t,e)},g=function(_){var e=_.children,t=Object(o.a)(_,k);return t.is="blockly",r.a.createElement("field",t,e)},x=function(_){var e=_.children,t=Object(o.a)(_,B);return t.is="blockly",r.a.createElement("shadow",t,e)}},32:function(_,e,t){"use strict";var o=t(1);t(7);o.JavaScript.test_react_field=function(_){return"console.log('custom block');\n"},o.JavaScript.test_react_date_field=function(_){return"console.log("+_.getField("DATE").getText()+");\n"}},33:function(_,e,t){"use strict";var o=t(6),n=t(5),r=t(1),c=t.n(r),l=(t(14),Object(o.a)((function _(){Object(n.a)(this,_)})));c.a.alert=function(_,e){console.log("Alert: "+_),l.show("Alert",_,{onCancel:e})},c.a.confirm=function(_,e){console.log("Confirm: "+_),e(!0)},c.a.prompt=function(_,e,t){console.log("Prompt: "+_),l.show("\ubcc0\uc218 \ub9cc\ub4e4\uae30",_,{showInput:!0,showOkay:!0,onOkay:function(){t(l.inputField.value)},showCancel:!0,onCancel:function(){t(null)}}),l.inputField.value=e},l.hide=function(){l.backdropDiv_&&(l.backdropDiv_.style.display="none",l.dialogDiv_.style.display="none")},l.show=function(_,e,t){var o=l.backdropDiv_,n=l.dialogDiv_;n||((o=document.createElement("div")).id="customDialogBackdrop",o.style.cssText="position: absolute;top: 0; left: 0; right: 0; bottom: 0;background-color: rgba(0, 0, 0, .7);z-index: 100;",document.body.appendChild(o),(n=document.createElement("div")).id="customDialog",n.style.cssText="display: flex;flex-direction: column;max-width: 361px;justify-content: center;border-radius: 10px;align-items: center;padding-top: 10px;padding-right: 30px;padding-left: 30px;background-color: rgba(247, 247, 251, 1);margin-right: auto;margin-left: auto;margin-top: 80px;",o.appendChild(n),n.onclick=function(_){_.stopPropagation()},l.backdropDiv_=o,l.dialogDiv_=n),o.style.display="block",n.style.display="block",n.innerHTML='<div style="display : flex; flex-direction: column;"><div class="customDialogTitle" style="color: rgba(99, 125, 220, 1);font-size: 14px;letter-spacing: 0%;padding: 14px;text-align: center;font-weight: bold;border-bottom: 1px solid #D8D8D8;font-family: Noto Sans KR, sans-serif;'+'">'.concat(_,"</div>")+'<div class="customDialogMessage" style="margin-top: 10px;color: rgba(73, 73, 73, 1);font-size: 10px;font-weight: bold;letter-spacing: 0%;text-align: left;margin-top: 16px;font-family: Noto Sans KR, sans-serif;">\uc0c8 \ubcc0\uc218 \uc774\ub984 :</div>'+(t.showInput?'<input id="customDialogInput" style="height: 30px;width: 100%;margin-top: 10px;border-radius: 5px;border-color: rgba(211, 211, 211, 1);border-width: 1px;align-self: center;border-style: solid;background-color: rgba(255, 255, 255, 1);">':"")+(t.showOkay?'<button id="okay" style=" display: flex;flex-direction: row;justify-content: center;margin-top: 20px;border-radius: 17.5px;align-self: center;padding-top: 7px;padding-bottom: 7px;padding-right: 30px;width: 106px;padding-left: 30px;background-color: rgba(99, 125, 220, 1);color: rgba(255, 255, 255, 1);font-size: 12px;border: none;letter-spacing: 0%;font-family: Noto Sans KR, sans-serif;">\uc0dd\uc131\ud558\uae30</button>':"")+(t.showCancel?'<button id="cancel" style="margin-top: 10px;margin-bottom: 20px;background-color: inherit;color: rgba(166, 166, 166, 1);font-size: 10px;letter-spacing: 0%;border: none;text-align: center;font-family: Noto Sans KR, sans-serif;">\ucde8\uc18c</button>':"")+"</div>";var r=function(_){l.hide(),t.onOkay&&t.onOkay(),_&&_.stopPropagation()},c=function(_){l.hide(),t.onCancel&&t.onCancel(),_&&_.stopPropagation()},a=document.getElementById("customDialogInput");if(l.inputField=a,a)a.focus(),a.onkeyup=function(_){return 13===_.keyCode?(r(),!1):27===_.keyCode?(c(),!1):void 0};else{var i=document.getElementById("okay");i&&i.focus()}t.showOkay&&document.getElementById("okay").addEventListener("click",r),t.showCancel&&document.getElementById("cancel").addEventListener("click",c),o.onclick=c}},34:function(_,e,t){"use strict";var o=t(1),n=!1,r={type:"start_block",message0:"\u25b6\ufe0e \uc2dc\uc791",nextStatement:!0};o.JavaScript.start_block=function(){return"//Start\n"},o.Blocks.start_block={init:function(){this.jsonInit(r),this.setColour("#5AA8DF"),this.toLocaleString("ko"),this.disabled=n},onchange:function(_){"dragStop"==="".concat(_.element)&&"start_block"===this.type&&(n=!0),"dragStart"==="".concat(_.element)&&"start_block"===this.type&&(n=!1)}};var c={type:"wait_block",message0:"%1\ucd08 \uae30\ub2e4\ub9ac\uae30",args0:[{type:"field_number",name:"duration",value:1}],nextStatement:null,previousStatement:null};o.JavaScript.wait_block=function(_){var e=_.getFieldValue("duration");return"const date = Date.now();\n  let currentDate = null;\n  do {\n    currentDate = Date.now();\n  } while (currentDate - date < ".concat(e,"000);\n")},o.Blocks.wait_block={init:function(){this.jsonInit(c),this.setColour("#A43033"),this.toLocaleString("ko")}};var l={type:"infinite_loop",message0:"\uacc4\uc18d \ubc18\ubcf5\ud558\uae30 %1 %2",args0:[{type:"input_dummy"},{type:"input_statement",name:"INFINITE"}],previousStatement:null,nextStatement:null,tooltip:"\ubb34\ud55c \ub8e8\ud504 \ube14\ub7ed"};o.JavaScript.infinite_loop=function(_){var e=_.getInputTargetBlock("INFINITE"),t=o.JavaScript.blockToCode(e);return"while(true){\n      ".concat(t,"\n    }\n")},o.Blocks.infinite_loop={init:function(){this.jsonInit(l),this.setColour("#A43033"),this.toLocaleString("ko")}};var a={type:"break_loop",message0:"\ubc18\ubcf5 \uc911\ub2e8\ud558\uae30",previousStatement:null,tooltip:"\ub8e8\ud504 \ub098\uc624\uae30"};o.JavaScript.break_loop=function(_){return"break;\n"},o.Blocks.break_loop={init:function(){this.jsonInit(a),this.setColour("#A43033"),this.toLocaleString("ko")}};var i={type:"not_block",message0:"%1 \uc544\ub2c8\ub2e4",args0:[{type:"input_value",name:"BOOL"}],output:"Boolean",tooltip:"",helpUrl:""};o.JavaScript.not_block=function(_){var e=_.getInputTargetBlock("BOOL"),t=o.JavaScript.blockToCode(e);return["!".concat(t[0]),o.JavaScript.ORDER_ATOMIC]},o.Blocks.not_block={init:function(){this.jsonInit(i),this.setColour("#7AB964"),this.toLocaleString("ko")}};var s={type:"boolean_block",message0:"%1",args0:[{type:"field_dropdown",name:"BOOL",options:[["\ucc38","true"],["\uac70\uc9d3","false"]]}],output:"Boolean",tooltip:"",helpUrl:""};o.JavaScript.boolean_block=function(_){return[_.getFieldValue("BOOL"),o.JavaScript.ORDER_ADDITION]},o.Blocks.boolean_block={init:function(){this.jsonInit(s),this.setColour("#7AB964"),this.toLocaleString("ko")}};var E={message0:"%1 %2 %3",args0:[{type:"field_input",name:"A",text:"1",output:"Number"},{type:"field_dropdown",name:"COMPARE",options:[["<","<"],[">",">"],[">=",">="],["<=","<="],["==","==="]]},{type:"field_input",name:"B",text:"1",output:"Number"}],inputsInline:!1,output:"Boolean",colour:230,tooltip:"",helpUrl:""};o.JavaScript.compare_block=function(_){var e=_.getFieldValue("A"),t=_.getFieldValue("B"),n=_.getFieldValue("COMPARE");return["".concat(e," ").concat(n," ").concat(t),o.JavaScript.ORDER_ADDITION]},o.Blocks.compare_block={init:function(){this.jsonInit(E),this.setColour("#7AB964"),this.toLocaleString("ko")}};var u={message0:"%1 %2 %3",args0:[{type:"input_value",name:"A",check:"Boolean",output:"Boolean"},{type:"field_dropdown",name:"COMPARE",options:[["\uadf8\ub9ac\uace0","&&"],["\ub610\ub294","||"]]},{type:"input_value",name:"B",check:"Boolean",output:"Boolean"}],output:"Boolean",inputsInline:!0,tooltip:"",helpUrl:""};o.JavaScript.and_or_block=function(_){var e=_.getInputTargetBlock("A"),t=_.getInputTargetBlock("B"),n=o.JavaScript.blockToCode(e),r=o.JavaScript.blockToCode(t),c=_.getFieldValue("COMPARE");return console.log("".concat(n[0]," ").concat(c," ").concat(r[0])),["".concat(n[0]," ").concat(c," ").concat(r[0]),o.JavaScript.ORDER_ATOMIC]},o.Blocks.and_or_block={init:function(){this.jsonInit(u),this.setColour("#7AB964"),this.setOutput(!0,"Boolean"),this.toLocaleString("ko")}};var p={type:"servo_motor_block",message0:"\uc11c\ubcf4\ubaa8\ud130\ub97c %1 \ub3cc\ub9ac\uae30",args0:[{type:"field_dropdown",name:"degree",options:[["0\xb0","0"],["180\xb0","180"]]}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};o.JavaScript.servo_motor_block=function(_){var e=_.getFieldValue("degree");return'console.log("MOTOR,'.concat(e,'");\n')},o.Blocks.servo_motor_block={init:function(){this.jsonInit(p),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var O={type:"rgb_block",message0:"LED \uc0c9\uc0c1 R: %1  G: %2  B: %3",args0:[{type:"field_number",name:"red",value:0,min:0,max:255,precision:1},{type:"field_number",name:"green",value:0,min:0,max:255,precision:1},{type:"field_number",name:"blue",value:0,min:0,max:255,precision:1}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};o.JavaScript.rgb_block=function(_){var e=_.getFieldValue("red"),t=_.getFieldValue("green"),o=_.getFieldValue("blue");return'console.log("LED_COLOR,R'.concat(e,"-G").concat(t,"-B").concat(o,'");\n')},o.Blocks.rgb_block={init:function(){this.jsonInit(O),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var d={type:"led_on_off_block",message0:"LED %1",args0:[{type:"field_dropdown",name:"onOff",options:[["\ucf1c\uae30","true"],["\ub044\uae30","false"]]}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};o.JavaScript.led_on_off_block=function(_){var e=_.getFieldValue("onOff");return'console.log("LED,'.concat(e,'");\n')},o.Blocks.led_on_off_block={init:function(){this.jsonInit(d),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var D={type:"lcd_clear_block",message0:"LCD \ubaa8\ub450 \uc9c0\uc6b0\uae30",previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};o.JavaScript.lcd_clear_block=function(_){return'console.log("LED_CLEAR,");\n'},o.Blocks.lcd_clear_block={init:function(){this.jsonInit(D),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var m={type:"lcd_set_pos_block",message0:"LCD \uae00\uc790 \uc704\uce58 \uc815\ud558\uae30  %1 \ubc88\uc9f8 \uc904,  %2 \ubc88\uc9f8 \uce78",args0:[{type:"field_number",name:"line",value:0,min:0,max:1,precision:1},{type:"field_number",name:"box",value:0,min:0,max:15,precision:1}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};o.JavaScript.lcd_set_pos_block=function(_){var e=_.getFieldValue("line"),t=_.getFieldValue("box");return'console.log("LCD_SET_POSITION,'.concat(t,"-").concat(e,'");\n')},o.Blocks.lcd_set_pos_block={init:function(){this.jsonInit(m),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var b={type:"lcd_message_block",message0:'LCD\uc5d0  " %1 "  \ucd9c\ub825\ud558\uae30',args0:[{type:"field_input",name:"message",text:"\uc548\ub155\ud558\uc138\uc694"}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};o.JavaScript.lcd_message_block=function(_){var e=_.getFieldValue("message");return'console.log("LCD_MSG,'.concat(e,'");\n')},o.Blocks.lcd_message_block={init:function(){this.jsonInit(b),this.setColour("#AE76F5"),this.toLocaleString("ko")}}},35:function(_,e,t){"use strict";t.r(e);var o=t(0),n=t.n(o),r=t(15),c=t.n(r),l=(t(24),t(16));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=t(18),i=t(2);c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(a.a,{basename:"/blockly-app",children:Object(i.jsx)(l.a,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.c7af277c.chunk.js.map