import * as Blockly from "blockly/core";

var compareBlock = {
  message0: "%1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "A",
      text: "1",
      output: "NUMBER",
    },
    {
      type: "field_dropdown",
      name: "COMPARE",
      options: [
        ["=", "EQ"],
        ["\u2260", "NEQ"],
        ["\u200f<", "LT"],
        ["\u200f\u2264", "LTE"],
        ["\u200f>", "GT"],
        ["\u200f\u2265", "GTE"],
      ],
    },
    {
      type: "input_value",
      name: "B",
      text: "1",
      output: "NUMBER",
    },
  ],
  inputsInline: true,
  output: "Boolean",
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.JavaScript["compare_block"] = function (block) {
  var a = block.getInputTargetBlock("A");
  var b = block.getInputTargetBlock("B");
  // var myvar = Blockly.JavaScript.variableDB_.getName(
  //   block.getFieldValue("A"),
  //   Blockly.VARIABLE_CATEGORY_NAME
  // );
  // console.log("var : " + myvar);
  console.log(a);
  console.log("B : " + b);
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
