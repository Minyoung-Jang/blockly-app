import * as Blockly from 'blockly/core';

import '../fields/BlocklyReactField';
import '../fields/DateField';

let isAble = false;

var startBlock = {
  "type": "start_block",
  "message0": "▶ 시작",
  "nextStatement": true,
};

Blockly.JavaScript['start_block'] = function (block) {
  var code = '//Start\n';
  return code;
};

Blockly.Blocks['start_block'] = {
  init: function () {
    this.jsonInit(startBlock);
    this.setColour("#DB6464");
    this.toLocaleString('ko');
    this.disabled = isAble;
  },
  onchange: function (event) {
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
  "args0": [
    {
      "type": "field_number",
      "name": "duration",
      "value": 3,
    },
  ],
  "nextStatement": null,
  "previousStatement": null,
};

Blockly.JavaScript['wait_block'] = function (block) {
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
  init: function () {
    this.jsonInit(waitBlock);
    this.setColour("#6137D6");
    this.toLocaleString('ko');
  },
  onchange: function (event) {
    if(event.element === "click"){
      console.log(event);
    }
  }
};