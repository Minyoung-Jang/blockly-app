/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';
import BlocklyJS from 'blockly/javascript';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

var startBlock = {
  "type": "start_block",
  "message0": "▶ 시작",
  "nextStatement": true,
};

Blockly.JavaScript['start_block'] = function (block) {
  console.log(block);
  var code = '//Start\n';
  return code;
};

Blockly.Blocks['start_block'] = {
  init: function () {
    this.jsonInit(startBlock);
    this.setColour("#DB6464");
    this.toLocaleString('ko');
  }
};

var waitBlock = {
  "type": "wait_block",
  "message0": "%1초 기다리고 %2 실행 %3",
  "args0": [
    {
      "type": "field_number",
      "name": "duration",
      "value": 3,
    },
    {
      "type":"input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    },
  ],
  "nextStatement": null,
  "previousStatement": null,
};

Blockly.JavaScript['wait_block'] = function (block) {
  var second = block.getFieldValue("duration");
  var statement = block.getInputTargetBlock('NAME');
  var blockCode = Blockly.JavaScript.blockToCode(statement);
  var code = `setTimeout(function(){ ${blockCode} }, ${second}000);\n`;
  return code;
};

Blockly.Blocks['wait_block'] = {
  init: function () {
    this.jsonInit(waitBlock);
    this.setColour("#6137D6");
    this.toLocaleString('ko');
  }
};