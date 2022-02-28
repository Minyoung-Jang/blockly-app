import * as Blockly from 'blockly/core';

var breakBlock = {
    "type": "break_loop",
    "message0": "반복 중단하기",
    "previousStatement": null,
    "tooltip": "루프 나오기",
};

Blockly.JavaScript['break_loop'] = function(block) {
    var code =
        `break;\n`;
    return code;
};

Blockly.Blocks['break_loop'] = {
    init: function() {
        this.jsonInit(breakBlock);
        this.setColour("#A43033");
        this.toLocaleString('ko');
    },
};