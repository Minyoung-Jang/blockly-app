import * as Blockly from 'blockly/core';

var lcdClearBlock = {
    "type": "lcd_clear_block",
    "message0": "LCD 모두 지우기",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['lcd_clear_block'] = function(block) {
    var code =
        `console.log("LCD_CLEAR,");\n` +
        `date = Date.now();
        do {
          currentDate = Date.now();
        } while (currentDate - date < 1000);\n`;
    return code;
};

Blockly.Blocks['lcd_clear_block'] = {
    init: function() {
        this.jsonInit(lcdClearBlock);
        this.setColour("#AE76F5");
        this.toLocaleString('ko');
    },
};