/*! For license information please see main.e47ff793.chunk.js.LICENSE.txt */
(this["webpackJsonpblockly-react-sample"]=this["webpackJsonpblockly-react-sample"]||[]).push([[0],{16:function(module,__webpack_exports__,__webpack_require__){"use strict";function WebWorker(args){onmessage=function onmessage(e){try{eval("(async () => {"+e.data+"})()"),console.log("END")}catch(err){console.log("CODE_FAIL")}postMessage("Response")}}__webpack_require__.d(__webpack_exports__,"a",(function(){return WebWorker}))},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),i=n(19),l=n.n(i),c=(n(27),n(9)),r=n(5),s=n(6),u=n(11),p=n(10),d=(n(28),n(7)),h=n(22),m=(n(29),n(0)),_=n.n(m),b=n(20),g=n.n(b),k=(n(17),n(1)),f=["initialXml","children"];_.a.setLocale(g.a);var y=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).blocklyDiv=a.a.createRef(),o.toolbox=a.a.createRef(),o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialXml,n=(e.children,Object(d.a)(e,f));_.a.ContextMenuRegistry.registry.unregister("workspaceDelete"),_.a.ContextMenuRegistry.registry.unregister("undoWorkspace"),_.a.ContextMenuRegistry.registry.unregister("redoWorkspace"),_.a.Msg.VARIABLES_SET="%1\ub97c %2\ub85c \uc815\ud558\uae30",_.a.Msg.MATH_CHANGE_TITLE="%1\ub97c %2\ub9cc\ud07c \ub354\ud558\uae30",_.a.Msg.CONTROLS_REPEAT_INPUT_DO="",_.a.Msg.CONTROLS_IF_MSG_THEN="",_.a.Blocks.logic_compare={init:function(){this.jsonInit({type:"logic_compare",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["=","EQ"],["!=","NEQ"],["\u200f>","GT"],["\u200f<","LT"],["\u200f\u2265","GTE"],["\u200f\u2264","LTE"]]},{type:"input_value",name:"B"}],inputsInline:!0,output:"Boolean",style:"logic_blocks",helpUrl:"%{BKY_LOGIC_COMPARE_HELPURL}",extensions:["logic_compare","logic_op_tooltip"]}),this.toLocaleString("ko"),this.setColour("#7AB964")}},_.a.Blocks.controls_if={init:function(){this.jsonInit({type:"controls_if",message0:"%{BKY_CONTROLS_IF_MSG_IF} %1 \ub77c\uba74",args0:[{type:"input_value",name:"IF0",check:"Boolean"}],message1:"%1",args1:[{type:"input_statement",name:"DO0"}],previousStatement:null,nextStatement:null,style:"logic_blocks",helpUrl:"%{BKY_CONTROLS_IF_HELPURL}",mutator:"my_mutator",extensions:["controls_if_tooltip"]}),this.toLocaleString("ko")}},_.a.Blocks.variables_get={init:function(){this.jsonInit({type:"variables_get",message0:"%1 \uac12",args0:[{type:"field_variable",name:"VAR",variable:"%{BKY_VARIABLES_DEFAULT_NAME}"}],output:null,style:"variable_blocks",helpUrl:"%{BKY_VARIABLES_GET_HELPURL}",tooltip:"%{BKY_VARIABLES_GET_TOOLTIP}",extensions:["contextMenu_variableSetterGetter"]}),this.toLocaleString("ko")}},_.a.Blocks.variables_set={init:function(){this.jsonInit({type:"variables_set",message0:"%{BKY_VARIABLES_SET}",args0:[{type:"field_variable",name:"VAR",variable:"%{BKY_VARIABLES_DEFAULT_NAME}"},{type:"input_value",name:"VALUE",check:"Number"}],previousStatement:null,nextStatement:null,style:"variable_blocks",tooltip:"%{BKY_VARIABLES_SET_TOOLTIP}",helpUrl:"%{BKY_VARIABLES_SET_HELPURL}",extensions:["contextMenu_variableSetterGetter"]}),this.toLocaleString("ko");var e=_.a.Xml.textToDom('<shadow type="math_number"><field name="NUM">1</field></shadow>'),t=this.getInput("VALUE").connection;t.setShadowDom(e);var n=t.getShadowDom();n.innerHTML='<field name="NUM" is="blockly">1</field>',t.setShadowDom(n)},onchange:function(e){}},this.primaryWorkspace=_.a.inject(this.blocklyDiv.current,Object(h.a)({toolbox:this.toolbox.current,theme:{blockStyles:{loop_blocks:{colourPrimary:"#A43033",colourSecondary:"#FEAFB1"},logic_blocks:{colourPrimary:"#A43033",colourSecondary:"#FEAFB1"},text_blocks:{colourPrimary:"#7AB964",colourSecondary:"#BEDAB4"},math_blocks:{colourPrimary:"#7AB964",colourSecondary:"#BEDAB4"},variable_blocks:{colourPrimary:"#E99F38",colourSecondary:"#EFC78F"}},componentStyles:{workspaceBackgroundColour:"#F7F7FB",toolboxBackgroundColour:"#4C536D",flyoutBackgroundColour:"#4C536D99"}}},n)),_.a.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN={elseifCount_:0,elseCount_:0,suppressPrefixSuffix:!0,mutationToDom:function(){if(!this.elseifCount_&&!this.elseCount_)return null;var e=_.a.utils.xml.createElement("mutation");return this.elseifCount_&&e.setAttribute("elseif",this.elseifCount_),this.elseCount_&&e.setAttribute("else",1),e},domToMutation:function(e){this.elseifCount_=parseInt(e.getAttribute("elseif"),10)||0,this.elseCount_=parseInt(e.getAttribute("else"),10)||0,this.rebuildShape_()},decompose:function(e){var t=e.newBlock("controls_if_if");t.initSvg();for(var n=t.nextConnection,o=1;o<=this.elseifCount_;o++){var a=e.newBlock("controls_if_elseif");a.initSvg(),n.connect(a.previousConnection),n=a.nextConnection}return this.elseCount_&&((e=e.newBlock("controls_if_else")).initSvg(),n.connect(e.previousConnection)),t},compose:function(e){e=e.nextConnection.targetBlock(),this.elseCount_=this.elseifCount_=0;for(var t=[null],n=[null],o=null;e;){switch(e.type){case"controls_if_elseif":this.elseifCount_++,t.push(e.valueConnection_),n.push(e.statementConnection_);break;case"controls_if_else":this.elseCount_++,o=e.statementConnection_;break;default:throw TypeError("Unknown block type: "+e.type)}e=e.nextConnection&&e.nextConnection.targetBlock()}this.updateShape_(),this.reconnectChildBlocks_(t,n,o)},saveConnections:function(e){e=e.nextConnection.targetBlock();for(var t=1;e;){switch(e.type){case"controls_if_elseif":var n=this.getInput("IF"+t),o=this.getInput("DO"+t);e.valueConnection_=n&&n.connection.targetConnection,e.statementConnection_=o&&o.connection.targetConnection,t++;break;case"controls_if_else":o=this.getInput("ELSE"),e.statementConnection_=o&&o.connection.targetConnection;break;default:throw TypeError("Unknown block type: "+e.type)}e=e.nextConnection&&e.nextConnection.targetBlock()}},rebuildShape_:function(){var e=[null],t=[null],n=null;this.getInput("ELSE")&&(n=this.getInput("ELSE").connection.targetConnection);for(var o=1;this.getInput("IF"+o);){var a=this.getInput("IF"+o),i=this.getInput("DO"+o);e.push(a.connection.targetConnection),t.push(i.connection.targetConnection),o++}this.updateShape_(),this.reconnectChildBlocks_(e,t,n)},updateShape_:function(){this.getInput("ELSE")&&this.removeInput("ELSE");for(var e=1;this.getInput("IF"+e);)this.removeInput("IF"+e),this.removeInput("Dummy"),this.removeInput("DO"+e),e++;for(e=1;e<=this.elseifCount_;e++)this.appendValueInput("IF"+e).setCheck("Boolean").appendField(_.a.Msg.CONTROLS_IF_MSG_ELSEIF),this.appendDummyInput("Dummy").appendField("\ub77c\uba74"),this.appendStatementInput("DO"+e).appendField(_.a.Msg.CONTROLS_IF_MSG_THEN);this.elseCount_&&this.appendStatementInput("ELSE").appendField(_.a.Msg.CONTROLS_IF_MSG_ELSE)},reconnectChildBlocks_:function(e,t,n){for(var o=1;o<=this.elseifCount_;o++)_.a.Mutator.reconnect(e[o],this,"IF"+o),_.a.Mutator.reconnect(t[o],this,"DO"+o);_.a.Mutator.reconnect(n,this,"ELSE")}},_.a.Extensions.registerMutator("my_mutator",_.a.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN,null,["controls_if_elseif","controls_if_else"]),_.a.Constants.Logic.LOGIC_COMPARE_ONCHANGE_MIXIN={onchange:function(e){this.prevBlocks_||(this.prevBlocks_=[null,null]);this.getInputTargetBlock("A"),this.getInputTargetBlock("B");this.prevBlocks_[0]=this.getInputTargetBlock("A"),this.prevBlocks_[1]=this.getInputTargetBlock("B")}},t&&_.a.Xml.domToWorkspace(_.a.Xml.textToDom(t),this.primaryWorkspace),this.primaryWorkspace.trashcan.flyout=null,this.primaryWorkspace.addChangeListener((function(e){}))}},{key:"workspace",get:function(){return this.primaryWorkspace}},{key:"setXml",value:function(e){_.a.Xml.domToWorkspace(_.a.Xml.textToDom(e),this.primaryWorkspace)}},{key:"render",value:function(){var e=this.props.children;return Object(k.jsxs)(a.a.Fragment,{children:[Object(k.jsx)("div",{ref:this.blocklyDiv,id:"blocklyDiv"}),Object(k.jsx)("xml",{xmlns:"https://developers.google.com/blockly/xml",is:"blockly",style:{display:"none"},ref:this.toolbox,children:e})]})}}]),n}(a.a.Component),v=["children"],j=["children"],O=["children"],x=["children"],S=["children"],C=y,E=function(e){var t=e.children,n=Object(d.a)(e,v);return n.is="blockly",a.a.createElement("block",n,t)},I=function(e){var t=e.children,n=Object(d.a)(e,j);return n.is="blockly",a.a.createElement("category",n,t)},B=function(e){var t=e.children,n=Object(d.a)(e,O);return n.is="blockly",a.a.createElement("value",n,t)},D=function(e){var t=e.children,n=Object(d.a)(e,x);return n.is="blockly",a.a.createElement("field",n,t)},w=function(e){var t=e.children,n=Object(d.a)(e,S);return n.is="blockly",a.a.createElement("shadow",n,t)},L=n(15),A=n.n(L),T=(n(18),!1),F={type:"start_block",message0:"START \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc744 \ub54c",nextStatement:!0};m.JavaScript.start_block=function(){return'//Start\n    console.log("START");\n    let date = Date.now();\n    let currentDate = null;\n'},m.Blocks.start_block={init:function(){this.jsonInit(F),this.setColour("#5AA8DF"),this.toLocaleString("ko"),this.disabled=T},onchange:function(e){"dragStop"==="".concat(e.element)&&"start_block"===this.type&&(T=!0),"dragStart"==="".concat(e.element)&&"start_block"===this.type&&(T=!1)}};var R={type:"wait_block",message0:"%1\ucd08 \uae30\ub2e4\ub9ac\uae30",args0:[{type:"field_number",name:"duration",value:1}],nextStatement:null,previousStatement:null};m.JavaScript.wait_block=function(e){var t=e.getFieldValue("duration");return"date = Date.now();\n  do {\n    currentDate = Date.now();\n  } while (currentDate - date < ".concat(t,"000);\n")},m.Blocks.wait_block={init:function(){this.jsonInit(R),this.setColour("#A43033"),this.toLocaleString("ko")}};var M={type:"infinite_loop",message0:"\uacc4\uc18d \ubc18\ubcf5\ud558\uae30 %1 %2",args0:[{type:"input_dummy"},{type:"input_statement",name:"INFINITE"}],previousStatement:null,nextStatement:null,tooltip:"\ubb34\ud55c \ub8e8\ud504 \ube14\ub7ed"};m.JavaScript.infinite_loop=function(e){var t=e.getInputTargetBlock("INFINITE"),n=m.JavaScript.blockToCode(t);return"while(true){\n      ".concat(n,"}\n")},m.Blocks.infinite_loop={init:function(){this.jsonInit(M),this.setColour("#A43033"),this.toLocaleString("ko")}};var N={type:"break_loop",message0:"\ubc18\ubcf5 \uc911\ub2e8\ud558\uae30",previousStatement:null,tooltip:"\ub8e8\ud504 \ub098\uc624\uae30"};m.JavaScript.break_loop=function(e){return"break;\n"},m.Blocks.break_loop={init:function(){this.jsonInit(N),this.setColour("#A43033"),this.toLocaleString("ko")}};var U={type:"not_block",message0:"%1 \uc544\ub2c8\ub2e4",args0:[{type:"input_value",name:"BOOL"}],output:"Boolean",tooltip:"",helpUrl:""};m.JavaScript.not_block=function(e){var t=e.getInputTargetBlock("BOOL"),n=m.JavaScript.blockToCode(t);return["!".concat(n[0]),m.JavaScript.ORDER_ATOMIC]},m.Blocks.not_block={init:function(){this.jsonInit(U),this.setColour("#7AB964"),this.toLocaleString("ko")}};var J={type:"boolean_block",message0:"%1",args0:[{type:"field_dropdown",name:"BOOL",options:[["\ucc38","true"],["\uac70\uc9d3","false"]]}],output:"Boolean",tooltip:"",helpUrl:""};m.JavaScript.boolean_block=function(e){return[e.getFieldValue("BOOL"),m.JavaScript.ORDER_ADDITION]},m.Blocks.boolean_block={init:function(){this.jsonInit(J),this.setColour("#7AB964"),this.toLocaleString("ko")}};var P={message0:"%1 %2 %3",args0:[{type:"input_value",name:"A",text:"1",output:"NUMBER"},{type:"field_dropdown",name:"COMPARE",options:[["=","EQ"],["\u2260","NEQ"],["\u200f<","LT"],["\u200f\u2264","LTE"],["\u200f>","GT"],["\u200f\u2265","GTE"]]},{type:"input_value",name:"B",text:"1",output:"NUMBER"}],inputsInline:!0,output:"Boolean",colour:230,tooltip:"",helpUrl:""};m.JavaScript.compare_block=function(e){var t=e.getInputTargetBlock("A"),n=e.getInputTargetBlock("B");console.log(t),console.log("B : "+n);var o=e.getFieldValue("COMPARE");return["".concat(t," ").concat(o," ").concat(n),m.JavaScript.ORDER_ADDITION]},m.Blocks.compare_block={init:function(){this.jsonInit(P),this.setColour("#7AB964"),this.toLocaleString("ko")}};var V={message0:"%1 %2 %3",args0:[{type:"input_value",name:"A",check:"Boolean",output:"Boolean"},{type:"field_dropdown",name:"COMPARE",options:[["\uadf8\ub9ac\uace0","&&"],["\ub610\ub294","||"]]},{type:"input_value",name:"B",check:"Boolean",output:"Boolean"}],output:"Boolean",inputsInline:!0,tooltip:"",helpUrl:""};m.JavaScript.and_or_block=function(e){var t=e.getInputTargetBlock("A"),n=e.getInputTargetBlock("B"),o=m.JavaScript.blockToCode(t),a=m.JavaScript.blockToCode(n),i=e.getFieldValue("COMPARE");return console.log("".concat(o[0]," ").concat(i," ").concat(a[0])),["".concat(o[0]," ").concat(i," ").concat(a[0]),m.JavaScript.ORDER_ATOMIC]},m.Blocks.and_or_block={init:function(){this.jsonInit(V),this.setColour("#7AB964"),this.setOutput(!0,"Boolean"),this.toLocaleString("ko")}};var G={type:"servo_motor_block",message0:"\uc11c\ubcf4\ubaa8\ud130\ub97c %1\ub85c \uc815\ud558\uae30",args0:[{type:"field_dropdown",name:"degree",options:[["0\xb0","0"],["180\xb0","180"]]}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};m.JavaScript.servo_motor_block=function(e){var t=e.getFieldValue("degree");return'console.log("MOTOR,'.concat(t,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},m.Blocks.servo_motor_block={init:function(){this.jsonInit(G),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var W={type:"rgb_block",message0:"LED \uc0c9\uc0c1 R: %1  G: %2  B: %3",args0:[{type:"field_number",name:"red",value:0,min:0,max:255,precision:1},{type:"field_number",name:"green",value:0,min:0,max:255,precision:1},{type:"field_number",name:"blue",value:0,min:0,max:255,precision:1}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};m.JavaScript.rgb_block=function(e){var t=e.getFieldValue("red"),n=e.getFieldValue("green"),o=e.getFieldValue("blue");return'console.log("LED_COLOR,R'.concat(t,"-G").concat(n,"-B").concat(o,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},m.Blocks.rgb_block={init:function(){this.jsonInit(W),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var K={type:"led_on_off_block",message0:"LED %1",args0:[{type:"field_dropdown",name:"onOff",options:[["\ucf1c\uae30","true"],["\ub044\uae30","false"]]}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};m.JavaScript.led_on_off_block=function(e){var t=e.getFieldValue("onOff");return'console.log("LED,'.concat(t,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},m.Blocks.led_on_off_block={init:function(){this.jsonInit(K),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var X={type:"lcd_clear_block",message0:"LCD \ubaa8\ub450 \uc9c0\uc6b0\uae30",previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};m.JavaScript.lcd_clear_block=function(e){return'console.log("LCD_CLEAR,");\ndate = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n'},m.Blocks.lcd_clear_block={init:function(){this.jsonInit(X),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var H={type:"lcd_set_pos_block",message0:"LCD \uae00\uc790 \uc704\uce58 \uc815\ud558\uae30  %1 \ubc88\uc9f8 \uc904,  %2 \ubc88\uc9f8 \uce78",args0:[{type:"field_number",name:"line",value:0,min:0,max:1,precision:1},{type:"field_number",name:"box",value:0,min:0,max:15,precision:1}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};m.JavaScript.lcd_set_pos_block=function(e){var t=e.getFieldValue("line"),n=e.getFieldValue("box");return'console.log("LCD_SET_POSITION,'.concat(n,"-").concat(t,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},m.Blocks.lcd_set_pos_block={init:function(){this.jsonInit(H),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var Y={type:"lcd_message_block",message0:"LCD\uc5d0 %1 \ucd9c\ub825\ud558\uae30",args0:[{type:"field_input",name:"message",text:"HELLO"}],previousStatement:null,nextStatement:null,tooltip:"",helpUrl:""};m.JavaScript.lcd_message_block=function(e){var t=e.getFieldValue("message");return'console.log("LCD_MSG,'.concat(t,'");\n')+"date = Date.now();\n        do {\n          currentDate = Date.now();\n        } while (currentDate - date < 1000);\n"},m.Blocks.lcd_message_block={init:function(){this.jsonInit(Y),this.setColour("#AE76F5"),this.toLocaleString("ko")}};var z={type:"sound_play_block",message0:"%1 \uc7ac\uc0dd\ud558\uae30",args0:[{type:"field_input",name:"SOUND",text:"\uc548\ub155\ud558\uc138\uc694",output:"String"}],previousStatement:null,nextStatement:null,colour:230,tooltip:"",helpUrl:""};m.JavaScript.sound_play_block=function(e){var t=e.getFieldValue("SOUND");return'console.log("SOUND,'.concat(t,'");\n')+"date = Date.now();\n      do {\n        currentDate = Date.now();\n      } while (currentDate - date < ".concat(t.length,"*150);\n")},m.Blocks.sound_play_block={init:function(){this.jsonInit(z),this.setColour("#F998E3"),this.toLocaleString("ko")}},m.JavaScript.test_react_field=function(e){return"console.log('custom block');\n"},m.JavaScript.test_react_date_field=function(e){return"console.log("+e.getField("DATE").getText()+");\n"};var Q=Object(s.a)((function e(){Object(r.a)(this,e)}));function q(e){document.getElementById(e).disabled=!1}function $(e){document.getElementById(e).disabled=!0}_.a.alert=function(e,t){console.log("Alert: "+e),Q.show("Alert",e,{onCancel:t})},_.a.confirm=function(e,t){console.log("Confirm: "+e),t(!0)},_.a.prompt=function(e,t,n){console.log("Prompt: "+e),"\uc0c8 \ubcc0\uc218 \uc774\ub984:"===e?Q.show("\ubcc0\uc218 \ub9cc\ub4e4\uae30",e,{showInput:!0,showOkay:!0,showDefault:!1,onOkay:function(){n(Q.inputField.value)},showCancel:!0,onCancel:function(){n(null)}}):Q.show(e.substring(0,e.length-1),e,{showInput:!0,showOkay:!0,showDefault:!0,onOkay:function(){n(Q.inputField.value)},showCancel:!0,onCancel:function(){n(null)}}),Q.inputField.value=t},Q.hide=function(e){Q.backdropDiv_&&(Q.backdropDiv_.style.display="none",Q.dialogDiv_.style.display="none",console.log("DIALOG : "+e))},Q.show=function(e,t,n){var o=Q.backdropDiv_,a=Q.dialogDiv_;a||((o=document.createElement("div")).id="customDialogBackdrop",o.style.cssText="position: absolute;top: 0; left: 0; right: 0; bottom: 0;background-color: rgba(0, 0, 0, .7);z-index: 100;",document.body.appendChild(o),(a=document.createElement("div")).id="customDialog",a.style.cssText="display: flex;flex-direction: column;max-width: 361px;justify-content: center;border-radius: 10px;align-items: center;padding-top: 10px;padding-right: 30px;padding-left: 30px;background-color: rgba(247, 247, 251, 1);margin-right: auto;margin-left: auto;margin-top: 80px;",o.appendChild(a),a.onclick=function(e){e.stopPropagation()},Q.backdropDiv_=o,Q.dialogDiv_=a),o.style.display="block",a.style.display="block",a.innerHTML='<div style="display : flex; flex-direction: column;"><div class="customDialogTitle" style="color: rgba(99, 125, 220, 1);font-size: 14px;letter-spacing: 0%;padding: 14px;text-align: center;font-weight: bold;border-bottom: 1px solid #D8D8D8;font-family: Noto Sans KR, sans-serif;'+'">'.concat(e,"</div>")+(n.showDefault?"":'<div class="customDialogMessage" style="margin-top: 10px;color: rgba(73, 73, 73, 1);font-size: 10px;font-weight: bold;letter-spacing: 0%;text-align: left;margin-top: 16px;font-family: Noto Sans KR, sans-serif;">\uc0c8 \ubcc0\uc218 \uc774\ub984 :</div>')+(n.showInput?'<input id="customDialogInput"style="height: 30px;width: 100%;margin-top: 10px;border-radius: 5px;border-color: rgba(211, 211, 211, 1);border-width: 1px;align-self: center;border-style: solid;background-color: rgba(255, 255, 255, 1);">':"")+(n.showOkay?'<button id="okay" style=" display: flex;flex-direction: row;justify-content: center;margin-top: 20px;border-radius: 17.5px;align-self: center;padding-top: 7px;padding-bottom: 7px;padding-right: 30px;width: 106px;padding-left: 30px;background-color: rgba(99, 125, 220, 1);color: rgba(255, 255, 255, 1);font-size: 12px;border: none;letter-spacing: 0%;font-family: Noto Sans KR, sans-serif;'+'">'.concat(n.showDefault?"\ud655\uc778":"\uc0dd\uc131\ud558\uae30","</button>"):"")+(n.showCancel?'<button id="cancel" style="margin-top: 10px;margin-bottom: 20px;background-color: inherit;color: rgba(166, 166, 166, 1);font-size: 10px;letter-spacing: 0%;border: none;text-align: center;font-family: Noto Sans KR, sans-serif;">\ucde8\uc18c</button>':"")+"</div>";var i=function(e){n.onOkay&&n.onOkay(),e&&e.stopPropagation(),Q.hide("OKAY")},l=function(e){n.onCancel&&n.onCancel(),e&&e.stopPropagation(),Q.hide("CANCEL")},c=document.getElementById("customDialogInput");if(Q.inputField=c,c)c.focus(),c.onkeyup=function(e){return 13===e.keyCode?(i(),!1):27===e.keyCode?(l(),!1):void 0};else{var r=document.getElementById("okay");r&&r.focus()}n.showOkay&&($("okay"),document.getElementById("okay").addEventListener("click",i),setTimeout((function(){q("okay")}),1e3)),n.showCancel&&($("cancel"),document.getElementById("cancel").addEventListener("click",l),setTimeout((function(){q("cancel")}),1e3))};var Z=Object(s.a)((function e(t){Object(r.a)(this,e);var n=t.toString();n=n.substring(n.indexOf("{")+1,n.lastIndexOf("}"));var o=new Blob([n],{type:"application/javascript"});return new Worker(URL.createObjectURL(o))})),ee=n(16),te=new Z(ee.a),ne=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).generateCode=function(){var e;te=new Z(ee.a);var t=!1;localStorage.clear();var n=A.a.workspaceToCode(o.simpleWorkspace.current.workspace),a=localStorage.setItem;localStorage.setItem=function(e,t){var n=new Event("itemInserted");n.value=t,n.key=e,document.dispatchEvent(n),a.apply(this,arguments)};document.addEventListener("itemInserted",(function(e){t||(t=!0,te.terminate())}),!1);var i,l=Object(c.a)(n.split("\n\n"));try{for(l.s();!(i=l.n()).done;){var r=i.value;"var"===r.split(" ")[0]&&(e=r),r.includes("//Start\n")&&(e+=r,console.log(e),te.postMessage(e))}}catch(s){l.e(s)}finally{l.f()}},o.simpleWorkspace=a.a.createRef(),o}return Object(s.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"App",style:{display:"flex"},children:[Object(k.jsx)("div",{id:"box"}),Object(k.jsxs)("div",{id:"box1",children:[Object(k.jsxs)("div",{id:"column",children:[Object(k.jsx)("div",{id:"subtitle",children:"PROJECT NAME"}),Object(k.jsx)("div",{id:"title",children:"\uc778\uacf5\uc9c0\ub2a5 \ud648"})]}),Object(k.jsxs)("button",{id:"codeButton",onClick:this.generateCode,children:[Object(k.jsx)("span",{id:"icon",children:"\u25b8\xa0\xa0"}),Object(k.jsxs)("div",{id:"buttonSpace",children:[Object(k.jsx)("span",{id:"blank"}),Object(k.jsx)("span",{id:"start",children:"START\xa0"})]})]})]}),Object(k.jsxs)(C,{readOnly:!1,trashcan:!0,media:"media/",ref:this.simpleWorkspace,move:{scrollbars:!0,drag:!0,wheel:!0},zoom:{controls:!0,wheel:!0,startScale:1,maxScale:1.5,minScale:.7,scaleSpeed:1.1},renderer:"zelos",initialXml:'\n              <xml xmlns="http://www.w3.org/1999/xhtml">\n              </xml>\n            ',children:[Object(k.jsx)(I,{name:"\uc2dc\uc791",colour:"#5AA8DF",children:Object(k.jsx)(E,{type:"start_block"})}),Object(k.jsxs)(I,{name:"\ud750\ub984",colour:"#A43033",children:[Object(k.jsx)(E,{type:"wait_block"}),Object(k.jsx)(E,{type:"controls_repeat_ext",children:Object(k.jsx)(B,{name:"TIMES",children:Object(k.jsx)(w,{type:"math_number",children:Object(k.jsx)(D,{name:"NUM",children:"10"})})})}),Object(k.jsx)(E,{type:"infinite_loop"}),Object(k.jsx)(E,{type:"break_loop"}),Object(k.jsx)(E,{type:"controls_if"})]}),Object(k.jsx)(I,{name:"\ubcc0\uc218",colour:"#E99F38",custom:"VARIABLE"}),Object(k.jsxs)(I,{name:"\uc5f0\uc0b0",colour:"#7AB964",children:[Object(k.jsx)(E,{type:"math_number",children:Object(k.jsx)(D,{name:"NUM",children:"123"})}),Object(k.jsxs)(E,{type:"math_arithmetic",children:[Object(k.jsx)(B,{name:"A",children:Object(k.jsx)(w,{type:"math_number",children:Object(k.jsx)(D,{name:"NUM",children:"1"})})}),Object(k.jsx)(B,{name:"B",children:Object(k.jsx)(w,{type:"math_number",children:Object(k.jsx)(D,{name:"NUM",children:"1"})})})]}),Object(k.jsxs)(E,{type:"logic_compare",children:[Object(k.jsx)(B,{name:"A",children:Object(k.jsx)(w,{type:"math_number",children:Object(k.jsx)(D,{name:"NUM",children:"1"})})}),Object(k.jsx)(B,{name:"B",children:Object(k.jsx)(w,{type:"math_number",children:Object(k.jsx)(D,{name:"NUM",children:"1"})})})]}),Object(k.jsxs)(E,{type:"and_or_block",children:[Object(k.jsx)(B,{name:"A",children:Object(k.jsx)(E,{type:"boolean_block",children:Object(k.jsx)(D,{name:"BOOL",children:"TRUE"})})}),Object(k.jsx)(B,{name:"B",children:Object(k.jsx)(E,{type:"boolean_block",children:Object(k.jsx)(D,{name:"BOOL",children:"TRUE"})})})]}),Object(k.jsx)(E,{type:"not_block",children:Object(k.jsx)(B,{name:"BOOL",children:Object(k.jsx)(E,{type:"boolean_block",children:Object(k.jsx)(D,{name:"B",children:"TRUE"})})})})]}),Object(k.jsx)(I,{name:"\uc18c\ub9ac",colour:"#F998E3",children:Object(k.jsx)(E,{type:"sound_play_block",children:Object(k.jsx)(B,{name:"SOUND",children:Object(k.jsx)(w,{type:"text",children:Object(k.jsx)(D,{name:"TEXT",children:"abc"})})})})}),Object(k.jsxs)(I,{name:"\uc2a4\ub9c8\ud2b8\ud648",colour:"#AE76F5",children:[Object(k.jsx)(E,{type:"servo_motor_block"}),Object(k.jsx)(E,{type:"rgb_block"}),Object(k.jsx)(E,{type:"led_on_off_block"}),Object(k.jsx)(E,{type:"lcd_clear_block"}),Object(k.jsx)(E,{type:"lcd_set_pos_block"}),Object(k.jsx)(E,{type:"lcd_message_block"})]})]})]})}}]),n}(a.a.Component),oe=ne;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(21),ie=n(3),le=(n(34),function(){return Object(k.jsx)("div",{className:"NotFound",children:Object(k.jsx)("h3",{children:"Sorry, Please Check Your Internet!"})})});l.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(ae.a,{basename:"/blockly-app",children:Object(k.jsxs)(ie.c,{children:[Object(k.jsx)(ie.a,{path:"/",element:Object(k.jsx)(oe,{})}),Object(k.jsx)(ie.a,{path:"*",element:Object(k.jsx)(le,{})})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.e47ff793.chunk.js.map