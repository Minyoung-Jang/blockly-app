import * as Blockly from 'blockly/core';

let isAble = false;

var startBlock = {
    "type": "start_block",
    "message0": "▶︎ 시작",
    "nextStatement": true,
};

Blockly.JavaScript['start_block'] = function() {
    var code = '//Start\n';
    return code;
};

Blockly.Blocks['start_block'] = {
    init: function() {
        this.jsonInit(startBlock);
        this.setColour("#5AA8DF");
        this.toLocaleString('ko');
        this.disabled = isAble;
    },
    onchange: function(event) {
        if (`${event.element}` === 'dragStop' && this.type === "start_block") {
            isAble = true;
        }
        if (`${event.element}` === 'dragStart' && this.type === "start_block") {
            isAble = false;
        }
    }
};