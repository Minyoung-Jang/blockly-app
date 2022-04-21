import * as Blockly from "blockly/core";

var compareBlock = {
  message0: "%1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "A",
      text: "1",
    },
    {
      type: "field_dropdown",
      name: "COMPARE",
      options: [
        ["<", "<"],
        [">", ">"],
        [">=", ">="],
        ["<=", "<="],
        ["==", "==="],
      ],
    },
    {
      type: "input_value",
      name: "B",
      text: "1",
    },
  ],
  inputsInline: true,
  output: "Boolean",
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.JavaScript["compare_block"] = function (block) {
  var a = block.getFieldValue("A");
  var b = block.getFieldValue("B");
  var operator = block.getFieldValue("COMPARE");
  var code = `${a} ${operator} ${b}`;
  return [code, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks["compare_block"] = {
  init: function () {
    this.jsonInit(compareBlock);
    this.setColour("#7AB964");
    this.toLocaleString("ko");
  },
};

// {"motor" : 180}
// {"LED" : true}
// {"LED_COLOR" : {"R" : 100, "G" : 200, ""}}

// LCD,as;dlfja sldjfl;jas,sdff
