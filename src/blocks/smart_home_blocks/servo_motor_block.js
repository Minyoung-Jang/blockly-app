import * as Blockly from 'blockly/core';

var servoMotorBlock = {
    "type": "servo_motor_block",
    "message0": "서보모터를 %1 돌리기",
    "args0": [{
        "type": "field_dropdown",
        "name": "degree",
        "options": [
            [
                "0°",
                "0"
            ],
            [
                "180°",
                "180"
            ]
        ]
    }],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['servo_motor_block'] = function(block) {
    var degree = block.getFieldValue('degree');
    var code =
        `console.log("MOTOR,${degree}");\n` +
        `date = Date.now();
        do {
          currentDate = Date.now();
        } while (currentDate - date < 1000);\n`;
    return code;
};

Blockly.Blocks['servo_motor_block'] = {
    init: function() {
        this.jsonInit(servoMotorBlock);
        this.setColour("#AE76F5");
        this.toLocaleString('ko');
    },
};