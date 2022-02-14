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

var testReactField = {
  "type": "test_react_field",
  "message0": "커스텀 필드 %1 %2",
  "args0": [
    {
      "type": "field_react_component",
      "name": "Name",
      "text": "Name"
    },
    {
      "type": "field_react_component",
      "name": "FIELD",
      "text": "HELLO"
    },
  ],
  
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.JavaScript['test_react_field'] = function (block) {
  // var text_name = block.getFieldValue('Name');
  var text_name = block.args0;
  console.log(block);
  var code = 'alert("' + text_name +'");\n';
  return code;
};

Blockly.Blocks['test_react_field'] = {
  init: function() {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
    this.toLocaleString('ko');
  }
};

var reactDateField = {
  "type": "test_react_date_field",
  "message0": "date field %1",
  "args0": [
    {
      "type": "field_react_date",
      "name": "DATE",
      "date": "01/01/2020"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_date_field'] = function (block) {

  // TODO: Assemble Python into code variable.
  var code = 'console.log(' + block.args0[0]["date"] +');\n';
  return code;
};

Blockly.Blocks['test_react_date_field'] = {
  init: function() {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  }
};
