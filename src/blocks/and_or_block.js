import * as Blockly from 'blockly/core';

var andOrBlock = {
    "message0": "%1 %2 %3",
    "args0": [{
            "type": "input_value",
            "name": "A",
            "check": "Boolean",
            "output": "Boolean",
        },
        {
            "type": "field_dropdown",
            "name": "COMPARE",
            "options": [
                [
                    "그리고",
                    "AND"
                ],
                [
                    "또는",
                    "OR"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "B",
            "check": "Boolean",
            "output": "Boolean",
        },
    ],
    "output": "Boolean",
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['and_or_block'] = function(block) {
    var code =
        `break;\n`;
    return code;
};

Blockly.Blocks['and_or_block'] = {
    init: function() {
        this.jsonInit(andOrBlock);
        this.setColour("#7AB964");
        this.setOutput(true, 'Boolean');
        this.toLocaleString('ko');
    },
};