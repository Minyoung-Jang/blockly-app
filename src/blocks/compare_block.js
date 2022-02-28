import * as Blockly from 'blockly/core';

var compareBlock = {
    "message0": "%1 %2 %3",
    "args0": [{
            "type": "field_input",
            "name": "A",
            "text": "1",
            "output": "Number",
        },
        {
            "type": "field_dropdown",
            "name": "COMPARE",
            "options": [
                [
                    "<",
                    "<"
                ],
                [
                    ">",
                    ">"
                ],
                [
                    ">=",
                    ">="
                ],
                [
                    "<=",
                    "<="
                ]
            ]
        },
        {
            "type": "field_input",
            "name": "B",
            "text": "1",
            "output": "Number",
        }
    ],
    "inputsInline": false,
    "output": "Boolean",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['compare_block'] = function(block) {
    var code =
        `break;\n`;
    return code;
};

Blockly.Blocks['compare_block'] = {
    init: function() {
        this.jsonInit(compareBlock);
        this.setColour("#7AB964");
        this.setOutput(true, 'Boolean');
        this.toLocaleString('ko');
    },
};