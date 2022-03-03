import * as Blockly from 'blockly/core';

var rgbBlock = {
    "type": "rgb_block",
    "message0": "LED 색상 R: %1  G: %2  B: %3",
    "args0": [{
            "type": "field_number",
            "name": "red",
            "value": 0,
            "min": 0,
            "max": 255,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "green",
            "value": 0,
            "min": 0,
            "max": 255,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "blue",
            "value": 0,
            "min": 0,
            "max": 255,
            "precision": 1
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['rgb_block'] = function(block) {
    var red = block.getFieldValue('red');
    var green = block.getFieldValue('green');
    var blue = block.getFieldValue('blue');
    var code =
        `console.log("LED_COLOR,R${red}-G${green}-B${blue}");\n` +
        `date = Date.now();
        do {
          currentDate = Date.now();
        } while (currentDate - date < 1000);\n`;
    return code;
};

Blockly.Blocks['rgb_block'] = {
    init: function() {
        this.jsonInit(rgbBlock);
        this.setColour("#AE76F5");
        this.toLocaleString('ko');
    },
};