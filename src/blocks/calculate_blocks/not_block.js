import * as Blockly from 'blockly/core';

var notBlock = {
    "type": "not_block",
    "message0": "%1 아니다",
    "args0": [{
        "type": "input_value",
        "name": "BOOL",
    }],
    "output": "Boolean",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['not_block'] = function(block) {
    var value_bool = block.getInputTargetBlock('BOOL');
    var boolean = Blockly.JavaScript.blockToCode(value_bool);
    var code =
        `!${boolean[0]}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['not_block'] = {
    init: function() {
        this.jsonInit(notBlock);
        this.setColour("#7AB964");
        this.toLocaleString('ko');
    },
};