import * as Blockly from 'blockly/core';

var infiniteLoopBlock = {
    "type": "infinite_loop",
    "message0": "계속 반복하기 %1 %2",
    "args0": [{
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "INFINITE"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "무한 루프 블럭",
};

Blockly.JavaScript['infinite_loop'] = function(block) {
    var statement = block.getInputTargetBlock('INFINITE');
    var blockCode = Blockly.JavaScript.blockToCode(statement);
    var code =
        `while(true){
      ${blockCode}}\n`;
    return code;
};

Blockly.Blocks['infinite_loop'] = {
    init: function() {
        this.jsonInit(infiniteLoopBlock);
        this.setColour("#A43033");
        this.toLocaleString('ko');
    },
};