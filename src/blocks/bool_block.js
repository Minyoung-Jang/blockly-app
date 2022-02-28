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
                "TRUE"
            ],
            [
                "거짓",
                "FALSE"
            ]
        ]
    }],
    "inputsInline": false,
    "output": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['boolean_block'] = function(block) {
    var code =
        `break;\n`;
    return code;
};

Blockly.Blocks['boolean_block'] = {
    init: function() {
        this.jsonInit(boolBlock);
        this.setColour("#7AB964");
        this.setOutput(true, 'Boolean');
        this.toLocaleString('ko');
    },
};