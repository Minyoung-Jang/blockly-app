import * as Blockly from 'blockly/core';

var lcdMessageBlock = {
    "type": "lcd_message_block",
    "message0": "LCD에 %1 출력하기",
    "args0": [{
        "type": "field_input",
        "name": "message",
        "text": "HELLO"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['lcd_message_block'] = function(block) {
    var message = block.getFieldValue('message');
    var code =
        `console.log("LCD_MSG,${message}");\n` +
        `date = Date.now();
        do {
          currentDate = Date.now();
        } while (currentDate - date < 1000);\n`;
    return code;
};

Blockly.Blocks['lcd_message_block'] = {
    init: function() {
        this.jsonInit(lcdMessageBlock);
        this.setColour("#AE76F5");
        this.toLocaleString('ko');
    },
};