import * as Blockly from "blockly/core";

var soundPlayBlock = {
  type: "sound_play_block",
  message0: "%1 재생하기",
  args0: [
    {
      type: "field_input",
      name: "SOUND",
      text: "안녕하세요",
      output: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.JavaScript["sound_play_block"] = function (block) {
  var text = block.getFieldValue("SOUND");

  var code =
    `console.log("SOUND,${text}");\n` +
    `date = Date.now();
      do {
        currentDate = Date.now();
      } while (currentDate - date < ${text.length}*150);\n`;
  return code;
};

Blockly.Blocks["sound_play_block"] = {
  init: function () {
    this.jsonInit(soundPlayBlock);
    this.setColour("#F998E3");
    this.toLocaleString("ko");
  },
};
