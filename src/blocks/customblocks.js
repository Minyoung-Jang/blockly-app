import * as Blockly from 'blockly/core';
import BlocklyComponent from '../Blockly';

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
        this.setColour("#DB6464");
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
        `const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ${second}000);\n`;
    return code;
};

Blockly.Blocks['wait_block'] = {
    init: function() {
        this.jsonInit(waitBlock);
        this.setColour("#6137D6");
        this.toLocaleString('ko');
    },
};


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
      ${blockCode}
    }\n`;
    return code;
};

Blockly.Blocks['infinite_loop'] = {
    init: function() {
        this.jsonInit(infiniteLoopBlock);
        this.setColour("#6137D6");
        this.toLocaleString('ko');
    },
};


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
        this.setColour("#6137D6");
        this.toLocaleString('ko');
    },
};