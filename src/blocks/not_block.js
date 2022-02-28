import * as Blockly from 'blockly/core';

var notBlock = {
    "type": "not_block",
    "message0": "%1 아니다",
    "args0": [{
        "type": "input_value",
        "name": "BOOL",
        "check": "Boolean"
    }],
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['not_block'] = function(block) {
    var code =
        `break;\n`;
    return code;
};

Blockly.Blocks['not_block'] = {
    init: function() {
        this.jsonInit(notBlock);
        this.setColour("#7AB964");
        this.setOutput(true, 'Boolean');
        this.toLocaleString('ko');
    },
};