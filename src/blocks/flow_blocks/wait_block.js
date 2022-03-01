import * as Blockly from 'blockly/core';

var waitBlock = {
    "type": "wait_block",
    "message0": "%1초 기다리기",
    "args0": [{
        "type": "field_number",
        "name": "duration",
        "value": 1,
    }, ],
    "nextStatement": null,
    "previousStatement": null,
};

Blockly.JavaScript['wait_block'] = function(block) {
    var second = block.getFieldValue("duration");

    var code =
        `date = Date.now();
  do {
    currentDate = Date.now();
  } while (currentDate - date < ${second}000);\n`;
    return code;
};

Blockly.Blocks['wait_block'] = {
    init: function() {
        this.jsonInit(waitBlock);
        this.setColour("#A43033");
        this.toLocaleString('ko');
    },
};