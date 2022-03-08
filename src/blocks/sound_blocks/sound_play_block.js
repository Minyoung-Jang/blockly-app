import * as Blockly from 'blockly/core';

var soundPlayBlock = {
    "type": "sound_play_block",
    "message0": "%1 재생하기",
    "args0": [{
        "type": "field_input",
        "name": "SOUND",
        "text": "abc",
        "output": "String",
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['sound_play_block'] = function(block) {
    var text = block.getFieldValue('SOUND');

    var code =
        `console.log("SOUND,${text}");\n`;
    return code;
};

Blockly.Blocks['sound_play_block'] = {
    init: function() {
        this.jsonInit(soundPlayBlock);
        this.setColour("#F998E3");
        this.toLocaleString('ko');
    },
};