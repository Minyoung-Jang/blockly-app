import * as Blockly from 'blockly/core';

var soundPlayBlock = {
    "type": "sound_play_block",
    "message0": "%1 재생하기",
    "args0": [{
        "type": "input_value",
        "name": "SOUND",
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['sound_play_block'] = function(block) {
    var message = block.getInputTargetBlock('SOUND');
    var text = message.getFieldValue('TEXT');

    var code =
        `console.log("SOUND,${text}");\n`;
    return code;
};

Blockly.Blocks['sound_play_block'] = {
    init: function() {
        this.jsonInit(soundPlayBlock);
        this.setColour("#667D8A");
        this.toLocaleString('ko');
    },
};