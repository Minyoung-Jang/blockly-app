import * as Blockly from 'blockly/core';

var lcdSetPosBlock = {
    "type": "lcd_set_pos_block",
    "message0": "LCD 글자 위치 정하기  %1 번째 줄,  %2 번째 칸",
    "args0": [{
            "type": "field_number",
            "name": "line",
            "value": 0,
            "min": 0,
            "max": 1,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "box",
            "value": 0,
            "min": 0,
            "max": 15,
            "precision": 1
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['lcd_set_pos_block'] = function(block) {
    var line = block.getFieldValue('line');
    var box = block.getFieldValue('box');
    var code =
        `console.log("LCD_SET_POSITION,${box}-${line}");\n` +
        `date = Date.now();
        do {
          currentDate = Date.now();
        } while (currentDate - date < 1000);\n`;
    return code;
};

Blockly.Blocks['lcd_set_pos_block'] = {
    init: function() {
        this.jsonInit(lcdSetPosBlock);
        this.setColour("#AE76F5");
        this.toLocaleString('ko');
    },
};