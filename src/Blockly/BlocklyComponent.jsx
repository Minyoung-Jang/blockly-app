import React from 'react';
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/ko';
import 'blockly/blocks';

Blockly.setLocale(locale);

class BlocklyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.blocklyDiv = React.createRef();
        this.toolbox = React.createRef();
    }

    componentDidMount() {
        const { initialXml, children, ...rest } = this.props;
        Blockly.ContextMenuRegistry.registry.unregister('workspaceDelete');
        Blockly.ContextMenuRegistry.registry.unregister('undoWorkspace');
        Blockly.ContextMenuRegistry.registry.unregister('redoWorkspace');
        Blockly.Msg.VARIABLES_SET = "%1를 %2로 정하기";
        Blockly.Msg.MATH_CHANGE_TITLE = "%1를 %2만큼 더하기";
        Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "";
        Blockly.Msg.CONTROLS_IF_MSG_THEN = "";

        Blockly.Blocks['controls_if'] = {
            init: function () {
                this.jsonInit({
                    type: "controls_if",
                    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1 라면",
                    args0: [{
                        type: "input_value",
                        name: "IF0", check: "Boolean"
                    }],
                    message1: "%1",
                    args1: [{ type: "input_statement", name: "DO0" }],
                    previousStatement: null, nextStatement: null,
                    style: "logic_blocks",
                    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
                    mutator: "my_mutator",
                    extensions: ["controls_if_tooltip"]
                });
                this.toLocaleString('ko');
            },


        };


        Blockly.Blocks['variables_get'] = {
            init: function () {
                this.jsonInit({
                    type: "variables_get",
                    message0: "%1 값",
                    args0: [{ type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}" }],
                    output: null, style: "variable_blocks",
                    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
                    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
                    extensions: ["contextMenu_variableSetterGetter"]
                })
                this.toLocaleString('ko');
            },
        };

        this.primaryWorkspace = Blockly.inject(
            this.blocklyDiv.current,
            {
                toolbox: this.toolbox.current,
                theme: {
                    'blockStyles': {
                        "loop_blocks": {
                            "colourPrimary": "#A43033",
                            "colourSecondary": "#FEAFB1",
                        },
                        "logic_blocks": {
                            "colourPrimary": "#A43033",
                            "colourSecondary": "#FEAFB1",
                        },
                        "text_blocks": {
                            "colourPrimary": "#7AB964",
                            "colourSecondary": "#BEDAB4",
                        },
                        "math_blocks": {
                            "colourPrimary": "#7AB964",
                            "colourSecondary": "#BEDAB4",
                        },
                        "variable_blocks": {
                            "colourPrimary": "#E99F38",
                            "colourSecondary": "#EFC78F",
                        },
                    },
                    'componentStyles': {
                        'workspaceBackgroundColour': '#F7F7FB',
                        'toolboxBackgroundColour': '#4C536D',
                        'flyoutBackgroundColour': '#4C536D99'
                    },
                },


                ...rest
            },

        );

        Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN = {
            elseifCount_: 0,
            elseCount_: 0,
            suppressPrefixSuffix: !0,
            mutationToDom: function () {
                if (!this.elseifCount_ && !this.elseCount_)
                    return null;
                var e = Blockly.utils.xml.createElement("mutation");
                return this.elseifCount_ && e.setAttribute("elseif", this.elseifCount_), this.elseCount_ && e.setAttribute("else", 1), e
            },
            domToMutation: function (t) {
                this.elseifCount_ = parseInt(t.getAttribute("elseif"), 10) || 0;
                this.elseCount_ = parseInt(t.getAttribute("else"), 10) || 0;
                this.rebuildShape_();
            },
            decompose: function (t) {
                var e = t.newBlock("controls_if_if");
                e.initSvg();
                for (var o = e.nextConnection, n = 1; n <= this.elseifCount_; n++) {
                    var i = t.newBlock("controls_if_elseif");
                    i.initSvg();
                    o.connect(i.previousConnection);
                    o = i.nextConnection;
                }
                return this.elseCount_ && ((t = t.newBlock("controls_if_else")).initSvg(), o.connect(t.previousConnection)), e
            },
            compose: function (t) {
                t = t.nextConnection.targetBlock();
                this.elseCount_ = this.elseifCount_ = 0;
                for (var e = [null], o = [null], n = null; t;) {
                    switch (t.type) {
                        case "controls_if_elseif":
                            this.elseifCount_++;
                            e.push(t.valueConnection_);
                            o.push(t.statementConnection_);
                            break;
                        case "controls_if_else":
                            this.elseCount_++;
                            n = t.statementConnection_;
                            break;
                        default:
                            throw TypeError("Unknown block type: " + t.type)
                    }
                    t = t.nextConnection && t.nextConnection.targetBlock()
                }
                this.updateShape_();
                this.reconnectChildBlocks_(e, o, n);
            },
            saveConnections: function (t) {
                t = t.nextConnection.targetBlock();
                for (var e = 1; t;) {
                    switch (t.type) {
                        case "controls_if_elseif":
                            var o = this.getInput("IF" + e),
                                n = this.getInput("DO" + e);
                            t.valueConnection_ = o && o.connection.targetConnection;
                            t.statementConnection_ = n && n.connection.targetConnection;
                            e++;
                            break;
                        case "controls_if_else":
                            n = this.getInput("ELSE");
                            t.statementConnection_ = n && n.connection.targetConnection;
                            break;
                        default:
                            throw TypeError("Unknown block type: " + t.type)
                    }
                    t = t.nextConnection && t.nextConnection.targetBlock()
                }
            },
            rebuildShape_: function () {
                var t = [null],
                    e = [null],
                    o = null;
                this.getInput("ELSE") && (o = this.getInput("ELSE").connection.targetConnection);
                for (var n = 1; this.getInput("IF" + n);) {
                    var i = this.getInput("IF" + n),
                        r = this.getInput("DO" + n);
                    t.push(i.connection.targetConnection);
                    e.push(r.connection.targetConnection);
                    n++;
                }
                this.updateShape_();
                this.reconnectChildBlocks_(t, e, o);
            },
            updateShape_: function () {
                this.getInput("ELSE") && this.removeInput("ELSE");
                for (var e = 1; this.getInput("IF" + e);) {
                    this.removeInput("IF" + e);
                    this.removeInput("Dummy");
                    this.removeInput("DO" + e);
                    e++;
                }
                for (e = 1; e <= this.elseifCount_; e++) {
                    this.appendValueInput("IF" + e).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
                    this.appendDummyInput("Dummy").appendField("라면");
                    this.appendStatementInput("DO" + e).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                }
                this.elseCount_ && this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)
            },
            reconnectChildBlocks_: function (e, o, n) {
                for (var i = 1; i <= this.elseifCount_; i++) {
                    Blockly.Mutator.reconnect(e[i], this, "IF" + i);
                    Blockly.Mutator.reconnect(o[i], this, "DO" + i);
                }
                Blockly.Mutator.reconnect(n, this, "ELSE")
            }
        };

        Blockly.Extensions.registerMutator("my_mutator",
            Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN, null, ["controls_if_elseif", "controls_if_else"]);

        Blockly.Constants.Logic.LOGIC_COMPARE_ONCHANGE_MIXIN = {
            onchange: function (e) {
                this.prevBlocks_ || (this.prevBlocks_ = [null, null]);
                var o = this.getInputTargetBlock("A");
                var n = this.getInputTargetBlock("B");
                // o && n && !this.workspace.connectionChecker.doTypeChecks(o.outputConnection, n.outputConnection) && (Blockly.Events.setGroup(e.group), (e = this.prevBlocks_[0]) !== o && (o.unplug(), !e || e.isDisposed() || e.isShadow() || this.getInput("A").connection.connect(e.outputConnection)), (o = this.prevBlocks_[1]) !== n && (n.unplug(), !o || o.isDisposed() || o.isShadow() || this.getInput("B").connection.connect(o.outputConnection)), this.bumpNeighbours(), Blockly.Events.setGroup(!1)); 
                this.prevBlocks_[0] = this.getInputTargetBlock("A");
                this.prevBlocks_[1] = this.getInputTargetBlock("B");
            }
        };

        if (initialXml) {
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
        }


        function workspaceChanged(event) {
        }
        
        this.primaryWorkspace.trashcan.flyout = null;

        this.primaryWorkspace.addChangeListener(workspaceChanged);

    }

    get workspace() {
        return this.primaryWorkspace;
    }

    setXml(xml) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), this.primaryWorkspace);
    }

    render() {
        const { children } = this.props;

        return <React.Fragment>
            <div ref={this.blocklyDiv} id="blocklyDiv" />
            <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={this.toolbox}>
                {children}
            </xml>
        </React.Fragment>;
    }
}

export default BlocklyComponent;
