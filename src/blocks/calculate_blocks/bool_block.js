import * as Blockly from 'blockly/core';

var boolBlock = {
    "type": "boolean_block",
    "message0": "%1",
    "args0": [{
        "type": "field_dropdown",
        "name": "BOOL",
        "options": [
            [
                "참",
                "true"
            ],
            [
                "거짓",
                "false"
            ]
        ]
    }],
    "output": 'Boolean',
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['boolean_block'] = function(block) {
    var value = block.getFieldValue('BOOL');
    var code = value;
    return [code, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks['boolean_block'] = {
    init: function() {
        this.jsonInit(boolBlock);
        this.setColour("#7AB964");
        this.toLocaleString('ko');
    },
};