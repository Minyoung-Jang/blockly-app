/*! For license information please see main.be283ea4.chunk.js.LICENSE.txt */
(this["webpackJsonpblockly-react-sample"]=this["webpackJsonpblockly-react-sample"]||[]).push([[0],{16:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(25),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_Blockly__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3),blockly_javascript__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(13),blockly_javascript__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(blockly_javascript__WEBPACK_IMPORTED_MODULE_8__),_blocks_customblocks__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(34),_generator_generator__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(32),_widgets_dialog_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(33),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__),App=function(_React$Component){Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(props){var _this;return Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),_this=_super.call(this,props),_this.generateCode=function(){var evalCode,codeList=blockly_javascript__WEBPACK_IMPORTED_MODULE_8___default.a.workspaceToCode(_this.simpleWorkspace.current.workspace),_iterator=Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__.a)(codeList.split("\n\n")),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var code=_step.value;if("var"===code.split(" ")[0]&&(evalCode=code),code.includes("//Start\n")){evalCode+=code;try{eval(evalCode),console.log("END")}catch(err){console.log("CODE_FAIL")}}}}catch(err){_iterator.e(err)}finally{_iterator.f()}},_this.simpleWorkspace=react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef(),_this}return Object(_Users_jangmin_yeong_Desktop_Dev_Web_blockly_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{className:"App",style:{display:"flex"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{id:"box"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{id:"box1",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{id:"column",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{id:"subtitle",children:"PROJECT NAME"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{id:"title",children:"\uc778\uacf5\uc9c0\ub2a5 \ud648"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("button",{id:"codeButton",onClick:this.generateCode,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"\u25b8\xa0\xa0"}),"START"]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.f,{readOnly:!1,trashcan:!0,media:"media/",ref:this.simpleWorkspace,move:{scrollbars:!0,drag:!0,wheel:!0},renderer:"zelos",initialXml:'\n              <xml xmlns="http://www.w3.org/1999/xhtml">\n              </xml>\n            ',children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc2dc\uc791",colour:"#5AA8DF",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"start_block"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\ud750\ub984",colour:"#A43033",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"wait_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"controls_repeat_ext",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"TIMES",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"10"})})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"infinite_loop"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"break_loop"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"controls_if"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\ubcc0\uc218",colour:"#E99F38",custom:"VARIABLE"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc5f0\uc0b0",colour:"#7AB964",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"math_arithmetic",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"A",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"B",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"compare_block",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"A",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"B",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"math_number",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"NUM",children:"1"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"and_or_block",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"A",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"boolean_block",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"BOOL",children:"TRUE"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"B",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"boolean_block",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"BOOL",children:"TRUE"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"not_block",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"BOOL",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"boolean_block",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"B",children:"TRUE"})})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc18c\ub9ac",colour:"#F998E3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"sound_play_block",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.e,{name:"SOUND",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.d,{type:"text",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.c,{name:"TEXT",children:"abc"})})})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.b,{name:"\uc2a4\ub9c8\ud2b8\ud648",colour:"#AE76F5",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"servo_motor_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"rgb_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"led_on_off_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"lcd_clear_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"lcd_set_pos_block"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Blockly__WEBPACK_IMPORTED_MODULE_7__.a,{type:"lcd_message_block"})]})]})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},24:function(e,_,t){},25:function(e,_,t){},26:function(e,_,t){},3:function(e,_,t){"use strict";t.d(_,"a",(function(){return B})),t.d(_,"b",(function(){return C})),t.d(_,"e",(function(){return g})),t.d(_,"c",(function(){return y})),t.d(_,"d",(function(){return j}));var n=t(4),o=t(1),r=t.n(o),l=t(19),a=t(5),c=t(6),i=t(9),s=t(8),u=(t(26),t(0)),E=t.n(u),p=t(17),O=t.n(p),d=(t(14),t(2)),D=["initialXml","children"];E.a.setLocale(O.a);var m=function(e){Object(i.a)(t,e);var _=Object(s.a)(t);function t(e){var n;return Object(a.a)(this,t),(n=_.call(this,e)).blocklyDiv=r.a.createRef(),n.toolbox=r.a.createRef(),n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,_=e.initialXml,t=(e.children,Object(n.a)(e,D));E.a.ContextMenuRegistry.registry.unregister("workspaceDelete"),E.a.ContextMenuRegistry.registry.unregister("undoWorkspace"),E.a.ContextMenuRegistry.registry.unregister("redoWorkspace"),E.a.Msg.VARIABLES_SET="%1\ub97c %2\ub85c \uc815\ud558\uae30",E.a.Msg.MATH_CHANGE_TITLE="%1\ub97c %2\ub9cc\ud07c \ub354\ud558\uae30",E.a.Msg.CONTROLS_REPEAT_INPUT_DO="",E.a.Msg.CONTROLS_IF_MSG_THEN="",E.a.Blocks.controls_if={init:function(){this.jsonInit({type:"controls_if",message0:"%{BKY_CONTROLS_IF_MSG_IF} %1 \ub77c\uba74",args0:[{type:"input_value",name:"IF0",check:"Boolean"}],message1:"%1",args1:[{type:"input_statement",name:"DO0"}],previousStatement:null,nextStatement:null,style:"logic_blocks",helpUrl:"%{BKY_CONTROLS_IF_HELPURL}",mutator:"my_mutator",extensions:["controls_if_tooltip"]}),this.toLocaleString("ko")}},E.a.Blocks.variables_get={init:function(){this.jsonInit({type:"variables_get",message0:"%1 \uac12",args0:[{type:"field_variable",name:"VAR",variable:"%{BKY_VARIABLES_DEFAULT_NAME}"}],output:null,style:"variable_blocks",helpUrl:"%{BKY_VARIABLES_GET_HELPURL}",tooltip:"%{BKY_VARIABLES_GET_TOOLTIP}",extensions:["contextMenu_variableSetterGetter"]}),this.toLocaleString("ko")}},this.primaryWorkspace=E.a.inject(this.blocklyDiv.current,Object(l.a)({toolbox:this.toolbox.current,theme:{blockStyles:{loop_blocks:{colourPrimary:"#A43033",colourSecondary:"#FEAFB1"},logic_blocks:{colourPrimary:"#A43033",colourSecondary:"#FEAFB1"},text_blocks:{colourPrimary:"#7AB964",colourSecondary:"#BEDAB4"},math_blocks:{colourPrimary:"#7AB964",colourSecondary:"#BEDAB4"},variable_blocks:{colourPrimary:"#E99F38",colourSecondary:"#EFC78F"}},componentStyles:{workspaceBackgroundColour:"#F7F7FB",toolboxBackgroundColour:"#4C536D",flyoutBackgroundColour:"#4C536D99"}}},t)),E.a.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN={elseifCount_:0,elseCount_:0,suppressPrefixSuffix:!0,mutationToDom:function(){if(!this.elseifCount_&&!this.elseCount_)return null;var e=E.a.utils.xml.createElement("mutation");return this.elseifCount_&&e.setAttribute("elseif",this.elseifCount_),this.elseCount_&&e.setAttribute("else",1),e},domToMutation:function(e){this.elseifCount_=parseInt(e.getAttribute("elseif"),10)||0,this.elseCount_=parseInt(e.getAttribute("else"),10)||0,this.rebuildShape_()},decompose:function(e){var _=e.newBlock("controls_if_if");_.initSvg();for(var t=_.nextConnection,n=1;n<=this.elseifCount_;n++){var o=e.newBlock("controls_if_elseif");o.initSvg(),t.connect(o.previousConnection),t=o.nextConnection}return this.elseCount_&&((e=e.newBlock("controls_if_else")).initSvg(),t.connect(e.previousConnection)),_},compose:function(e){e=e.nextConnection.targetBlock(),this.elseCount_=this.elseifCount_=0;for(var _=[null],t=[null],n=null;e;){switch(e.type){case"controls_if_elseif":this.elseifCount_++,_.push(e.valueConnection_),t.push(e.statementConnection_);break;case"controls_if_else":this.elseCount_++,n=e.statementConnection_;break;default:throw TypeError("Unknown block type: "+e.type)}e=e.nextConnection&&e.nextConnection.targetBlock()}this.updateShape_(),this.reconnectChildBlocks_(_,t,n)},saveConnections:function(e){e=e.nextConnection.targetBlock();for(var _=1;e;){switch(e.type){case"controls_if_elseif":var t=this.getInput("IF"+_),n=this.getInput("DO"+_);e.valueConnection_=t&&t.connection.targetConnection,e.statementConnection_=n&&n.connection.targetConnection,_++;break;case"controls_if_else":n=this.getInput("ELSE"),e.statementConnection_=n&&n.connection.targetConnection;break;default:throw TypeError("Unknown block type: "+e.type)}e=e.nextConnection&&e.nextConnection.targetBlock()}},rebuildShape_:function(){var e=[null],_=[null],t=null;this.getInput("ELSE")&&(t=this.getInput("ELSE").connection.targetConnection);for(var n=1;this.getInput("IF"+n);){var o=this.getInput("IF"+n),r=this.getInput("DO"+n);e.push(o.connection.targetConnection),_.push(r.connection.targetConnection),n++}this.updateShape_(),this.reconnectChildBlocks_(e,_,t)},updateShape_:function(){this.getInput("ELSE")&&this.removeInput("ELSE");for(var e=1;this.getInput("IF"+e);)this.removeInput("IF"+e),this.removeInput("Dummy"),this.removeInput("DO"+e),e++;for(e=1;e<=this.elseifCount_;e++)this.appendValueInput("IF"+e).setCheck("Boolean").appendField(E.a.Msg.CONTROLS_IF_MSG_ELSEIF),this.appendDummyInput("Dummy").appendField("\ub77c\uba74"),this.appendStatementInput("DO"+e).appendField(E.a.Msg.CONTROLS_IF_MSG_THEN);this.elseCount_&&this.appendStatementInput("ELSE").appendField(E.a.Msg.CONTROLS_IF_MSG_ELSE)},reconnectChildBlocks_:function(e,_,t){for(var n=1;n<=this.elseifCount_;n++)E.a.Mutator.reconnect(e[n],this,"IF"+n),E.a.Mutator.reconnect(_[n],this,"DO"+n);E.a.Mutator.reconnect(t,this,"ELSE")}},E.a.Extensions.registerMutator("my_mutator",E.a.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN,null,["controls_if_elseif","controls_if_else"]),E.a.Constants.Logic.LOGIC_COMPARE_ONCHANGE_MIXIN={onchange:function(e){this.prevBlocks_||(this.prevBlocks_=[null,null]);this.getInputTargetBlock("A"),this.getInputTargetBlock("B");this.prevBlocks_[0]=this.getInputTargetBlock("A"),this.prevBlocks_[1]=this.getInputTargetBlock("B")}},_&&E.a.Xml.domToWorkspace(E.a.Xml.textToDom(_),this.primaryWorkspace),this.primaryWorkspace.addChangeListener((function(e){}))}},{key:"workspace",get:function(){return this.primaryWorkspace}},{key:"setXml",value:function(e){E.a.Xml.domToWorkspace(E.a.Xml.textToDom(e),this.primaryWorkspace)}},{key:"render",value:function(){var e=this.props.children;return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("div",{ref:this.blocklyDiv,id:"blocklyDiv"}),Object(d.jsx)("xml",{xmlns:"https://developers.google.com/blockly/xml",is:"blockly",style:{display:"none"},ref:this.toolbox,children:e})]})}}]),t}(r.a.Component),b=["children"],M=["children"],k=["children"],h=["children"],P=["children"],B=(_.f=m,function(e){var _=e.children,t=Object(n.a)(e,b);return t.is="blockly",r.a.createElement("block",t,_)}),C=function(e){var _=e.children,t=Object(n.a)(e,M);return t.is="blockly",r.a.createElement("category",t,_)},g=function(e){var _=e.children,t=Object(n.a)(e,k);return t.is="blockly",r.a.createElement("value",t,_)},y=function(e){var _=e.children,t=Object(n.a)(e,h);return t.is="blockly",r.a.createElement("field",t,_)},j=function(e){var _=e.children,t=Object(n.a)(e,P);return t.is="blockly",r.a.createElement("shadow",t,_)}},32:function(e,_,t){"use strict";var n=t(0);t(13);n.JavaScript.test_react_field=function(e){return"console.log('custom block');\n"},n.JavaScript.test_react_date_field=function(e){return"console.log("+e.getField("DATE").getText()+");\n"}},33:function(e,_,t){"use strict";var n=t(6),o=t(5),r=t(0),l=t.n(r),a=(t(14),Object(n.a)((function e(){Object(o.a)(this,e)})));l.a.alert=function(e,_){console.log("Alert: "+e),a.show("Alert",e,{onCancel:_})},l.a.confirm=function(e,_){console.log("Confirm: "+e),_(!0)},l.a.prompt=function(e,_,t){console.log("Prompt: "+e),"\uc0c8 \ubcc0\uc218 \uc774\ub984:"===e?a.show("\ubcc0\uc218 \ub9cc\ub4e4\uae30",e,{showInput:!0,showOkay:!0,showDefault:!1,onOkay:function(){t(a.inputField.value)},showCancel:!0,onCancel:function(){t(null)}}):a.show(e.substring(0,e.length-1),e,{showInput:!0,showOkay:!0,showDefault:!0,onOkay:function(){t(a.inputField.value)},showCancel:!0,onCancel:function(){t(null)}}),a.inputField.value=_},a.hide=function(){a.backdropDiv_&&(a.backdropDiv_.style.display="none",a.dialogDiv_.style.display="none")},a.show=function(e,_,t){var n=a.backdropDiv_,o=a.dialogDiv_;o||((n=document.createElement("div")).id="customDialogBackdrop",n.style.cssText="position: absolute;top: 0; left: 0; right: 0; bottom: 0;background-color: rgba(0, 0, 0, .7);z-index: 100;",document.body.appendChild(n),(o=document.createElement("div")).id="customDialog",o.style.cssText="display: flex;flex-direction: column;max-width: 361px;justify-content: center;border-radius: 10px;align-items: center;padding-top: 10px;padding-right: 30px;padding-left: 30px;background-color: rgba(247, 247, 251, 1);margin-right: auto;margin-left: auto;margin-top: 80px;",n.appendChild(o),o.onclick=function(e){e.stopPropagation()},a.backdropDiv_=n,a.dialogDiv_=o),n.style.display="block",o.style.display="block",o.innerHTML='<div style="display : flex; flex-direction: column;"><div class="customDialogTitle" style="color: rgba(99, 125, 220, 1);font-size: 14px;letter-spacing: 0%;padding: 14px;text-align: center;font-weight: bold;border-bottom: 1px solid #D8D8D8;font-family: Noto Sans KR, sans-serif;'+'">'.concat(e,"</div>")+(t.showDefault?"":'<div class="customDialogMessage" style="margin-top: 10px;color: rgba(73, 73, 73, 1);font-size: 10px;font-weight: bold;letter-spacing: 0%;text-align: left;margin-top: 16px;font-family: Noto Sans KR, sans-serif;">\uc0c8 \ubcc0\uc218 \uc774\ub984 :</div>')+(t.showInput?'<input id="customDialogInput" style="height: 30px;width: 100%;margin-top: 10px;border-radius: 5px;border-color: rgba(211, 211, 211, 1);border-width: 1px;align-self: center;border-style: solid;background-color: rgba(255, 255, 255, 1);">':"")+(t.showOkay?'<button id="okay" style=" display: flex;flex-direction: row;justify-content: center;margin-top: 20px;border-radius: 17.5px;align-self: center;padding-top: 7px;padding-bottom: 7px;padding-right: 30px;width: 106px;padding-left: 30px;background-color: rgba(99, 125, 220, 1);color: rgba(255, 255, 255, 1);font-size: 12px;border: none;letter-spacing: 0%;font-family: Noto Sans KR, sans-serif;'+'">'.concat(t.showDefault?"\ud655\uc778":"\uc0dd\uc131\ud558\uae30","</button>"):"")+(t.showCancel?'<button id="cancel" style="margin-top: 10px;margin-bottom: 20px;background-color: inherit;color: rgba(166, 166, 166, 1);font-size: 10px;letter-spacing: 0%;border: none;text-align: center;font-family: Noto Sans KR, sans-serif;">\ucde8\uc18c</button>':"")+"</div>";var r=function(e){a.hide(),t.onOkay&&t.onOkay(),e&&e.stopPropagation()},l=function(e){a.hide(),t.onCancel&&t.onCancel(),e&&e.stopPropagation()},c=document.getElementById("customDialogInput");if(a.inputField=c,c)c.focus(),c.onkeyup=function(e){return 13===e.keyCode?(r(),!1):27===e.keyCode?(l(),!1):void 0};else{var i=document.getElementById("okay");i&&i.focus()}t.showOkay&&document.getElementById("okay").addEventListener("click",r),t.showCancel&&document.getElementById("cancel").addEventListener("click",l)}},34:function(e,_,t){"use strict";var n=t(0),o=!1,r={type:"start_block",message0:"\u25b6\ufe0e \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc744 \ub54c",nextStatement:!0};n.JavaScript.start_block=function(){return'//Start\n    console.log("START");\n    let date = Date.now();\n    let currentDate = null;\n'},n.Blocks.start_block={init:function(){this.jsonInit(r),this.setColour("#5AA8DF"),this.toLocaleString("ko"),this.disabled=o},onchange:function(e){"dragStop"==="".concat(e.element)&&"start_block"===this.type&&(o=!0),"dragStart"==="".concat(e.element)&&"start_block"===this.type&&(o=!1)}};var l={type:"wait_block",message0:"%1\ucd08 \uae30\ub2e4\ub9ac\uae30",args0:[{type:"field_number",name:"duration",value:1}],nextStatement:null,previousStatement:null};n.JavaScript.wait_block=function(e){var _=e.getFieldValue("duration");return"date = Date.now();\n  do {\n    currentDate = Date.now();\n  } while (currentDate - date < ".concat(_,"000);\n")},n.Blocks.wait_block={init:function(){this.jsonInit(l),this.setColour("#A43033"),this.toLocaleString("ko")}};var a={type:"infinite_loop",message0:"\uacc4\uc18d \ubc18\ubcf5\ud558\uae30 %1 %2",args0:[{type:"input_dummy"},{type:"input_statement",name:"INFINITE"}],previousStatement:null,nextStatement:null,tooltip:"\ubb34\ud55c \ub8e8\ud504 \ube14\ub7ed"};n.JavaScript.infinite_loop=function(e){var _=e.getInputTargetBlock("INFINITE"),t=n.JavaScript.blockToCode(_);return"while(true){\n      ".concat(t,"}\n")},n.Blocks.infinite_loop={init:function(){this.jsonInit(a),this.setColour("#A43033"),this.toLocaleString("ko")}};var c={type:"break_loop",message0:"\ubc18\ubcf5 \uc911\ub2e8\ud558\uae30",previousStatement:null,tooltip:"\ub8e8\ud504 \ub098\uc624\uae30"};n.JavaScript.break_loop=function(e){return"break;\n"},n.Blocks.break_loop={init:function(){this.jsonInit(c),this.setColour("#A43033"),this.toLocaleString("ko")}};var i={type:"not_block",message0:"%1 \uc544\ub2c8\ub2e4",args0:[{type:"input_value",name:"BOOL"}],output:"Boolean",tooltip:"",helpUrl:""};n.JavaScript.not_block=function(e){var _=e.getInputTargetBlock("BOOL"),t=n.JavaScript.blockToCode(_);return["!".concat(t[0]),n.JavaScript.ORDER_ATOMIC]},n.Blocks.not_block={init:function(){this.jsonInit(i),this.setColour("#7AB964"),this.toLocaleString("ko")}};var s={type:"boolean_block",message0:"%1",args0:[{type:"field_dropdown",name:"BOOL",options:[["\ucc38","true"],["\uac70\uc9d3","false"]]}],output:"Boolean",tooltip:"",helpUrl:""};n.JavaScript.boolean_block=function(e){return[e.getFieldValue("BOOL"),n.JavaScript.ORDER_ADDITION]},n.Blocks.boolean_block={init:function(){this.jsonInit(s),this.setColour("#7AB964"),this.toLocaleString("ko")}};var u={message0:"%1 %2 %3",args0:[{type:"field_input",name:"A",text:"1",output:"Number"},{type:"field_dropdown",name:"COMPARE",options:[["<","<"],[">",">"],[">=",">="],["<=","<="],["==","==="]]},{type:"field_input",name:"B",text:"1",output:"Number"}],inputsInline:!1,output:"Boolean",colour:230,tooltip:"",helpUrl:""};n.JavaScript.compare_block=function(e){var _=e.getFieldValue("A"),t=e.getFieldValue("B"),o=e.getFieldValue("COMPARE");return["".concat(_," ").concat(o," ").concat(t),n.JavaScript.ORDER_ADDITION]},n.Blocks.compare_block={init:function(){this.jsonInit(u),this.setColour("#7AB964"),this.toLocaleString("ko")}};var E={message0:"%1 %2 %3",args0:[{type:"input_value",name:"A",check:"Boolean",output:"Boolean"},{type:"field_dropdown",name:"COMPARE",options:[["\uadf8\ub9ac\uace0","&&"],["\ub610\ub294","||"]]},{type:"input_value",name:"B",check:"Boolean",output:"Boolean"}],output:"Boolean",inputsInline:!0,tooltip:"",helpUrl:""};n.JavaScript.and_or_block=function(e){var _=e.getInputTargetBlock("A"),t=e.getInputTargetBlock("B"),o=n.JavaScript.blockToCode(_),r=n.JavaScript.blockToCode(t),l=e.getFieldValue("COMPARE");return console.log("".concat(o[0]," ").concat(l," ").concat(r[0])),["".concat(o[0]," ").concat(l," ").concat(r[0]),n.JavaScript.ORDER_ATOMIC]},n.Blocks.and_or_block={init:function(){this.jsonInit(E),this.setColour("#7AB964"),this.setOutput(!0,"Boolean"),this.toLocaleString("ko")}};var p={type:"servo_motor_block",message0:"\uc11c\ubcf4\ubaa8\ud130\ub97c %1\ub85c \uc815\ud558\uae30",args0:[{type:"field_dropdown",name:"degree",options:[["0\xb0","0"],["180\xb0","180"]]}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};n.JavaScript.servo_motor_block=function(e){var _=e.getFieldValue("degree");return'console.log("MOTOR,'.concat(_,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},n.Blocks.servo_motor_block={init:function(){this.jsonInit(p),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var O={type:"rgb_block",message0:"LED \uc0c9\uc0c1 R: %1  G: %2  B: %3",args0:[{type:"field_number",name:"red",value:0,min:0,max:255,precision:1},{type:"field_number",name:"green",value:0,min:0,max:255,precision:1},{type:"field_number",name:"blue",value:0,min:0,max:255,precision:1}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};n.JavaScript.rgb_block=function(e){var _=e.getFieldValue("red"),t=e.getFieldValue("green"),n=e.getFieldValue("blue");return'console.log("LED_COLOR,R'.concat(_,"-G").concat(t,"-B").concat(n,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},n.Blocks.rgb_block={init:function(){this.jsonInit(O),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var d={type:"led_on_off_block",message0:"LED %1",args0:[{type:"field_dropdown",name:"onOff",options:[["\ucf1c\uae30","true"],["\ub044\uae30","false"]]}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};n.JavaScript.led_on_off_block=function(e){var _=e.getFieldValue("onOff");return'console.log("LED,'.concat(_,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},n.Blocks.led_on_off_block={init:function(){this.jsonInit(d),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var D={type:"lcd_clear_block",message0:"LCD \ubaa8\ub450 \uc9c0\uc6b0\uae30",previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};n.JavaScript.lcd_clear_block=function(e){return'console.log("LCD_CLEAR,");\ndate = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n'},n.Blocks.lcd_clear_block={init:function(){this.jsonInit(D),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var m={type:"lcd_set_pos_block",message0:"LCD \uae00\uc790 \uc704\uce58 \uc815\ud558\uae30  %1 \ubc88\uc9f8 \uc904,  %2 \ubc88\uc9f8 \uce78",args0:[{type:"field_number",name:"line",value:0,min:0,max:1,precision:1},{type:"field_number",name:"box",value:0,min:0,max:15,precision:1}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};n.JavaScript.lcd_set_pos_block=function(e){var _=e.getFieldValue("line"),t=e.getFieldValue("box");return'console.log("LCD_SET_POSITION,'.concat(t,"-").concat(_,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},n.Blocks.lcd_set_pos_block={init:function(){this.jsonInit(m),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var b={type:"lcd_message_block",message0:"LCD\uc5d0 %1 \ucd9c\ub825\ud558\uae30",args0:[{type:"field_input",name:"message",text:"HELLO"}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};n.JavaScript.lcd_message_block=function(e){var _=e.getFieldValue("message");return'console.log("LCD_MSG,'.concat(_,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},n.Blocks.lcd_message_block={init:function(){this.jsonInit(b),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var M={type:"sound_play_block",message0:"%1 \uc7ac\uc0dd\ud558\uae30",args0:[{type:"field_input",name:"SOUND",text:"abc",output:"String"}],previousStatement:null,nextStatement:null,colour:230,tooltip:"",helpUrl:""};n.JavaScript.sound_play_block=function(e){var _=e.getFieldValue("SOUND");return'console.log("SOUND,'.concat(_,'");\n')},n.Blocks.sound_play_block={init:function(){this.jsonInit(M),this.setColour("#F998E3"),this.toLocaleString("ko")}}},35:function(e,_,t){"use strict";t.r(_);var n=t(1),o=t.n(n),r=t(15),l=t.n(r),a=(t(24),t(16));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(18),i=t(2);l.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(c.a,{basename:"/blockly-app",children:Object(i.jsx)(a.a,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.be283ea4.chunk.js.map