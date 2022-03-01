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
                    "&&"
                ],
                [
                    "또는",
                    "||"
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
    var a = block.getInputTargetBlock('A');
    var b = block.getInputTargetBlock('B');
    var a_value = Blockly.JavaScript.blockToCode(a);
    var b_value = Blockly.JavaScript.blockToCode(b);
    var operator = block.getFieldValue('COMPARE');

    console.log(`${a_value[0]} ${operator} ${b_value[0]}`);

    var code =
        `${a_value[0]} ${operator} ${b_value[0]}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};

Blockly.Blocks['and_or_block'] = {
    init: function() {
        this.jsonInit(andOrBlock);
        this.setColour("#7AB964");
        this.setOutput(true, 'Boolean');
        this.toLocaleString('ko');
    },
};