import * as Blockly from 'blockly/core';


var breakBlock = {
    "type": "break_loop",
    "message0": "계속 반복하기 %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "루프 나오기",
  };
  
  Blockly.JavaScript['break_loop'] = function (block) {
    var code =
      `break;\n`;
    return code;
  };
  
  Blockly.Blocks['break_loop'] = {
    init: function () {
      this.jsonInit(breakBlock);
      this.setColour("#6137D6");
      this.toLocaleString('ko');
    },
  };