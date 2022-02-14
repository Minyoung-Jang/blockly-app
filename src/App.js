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
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import './App.css';
import * as Blockly from 'blockly/core';

import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';

import BlocklyJS from 'blockly/javascript';
import BlocklyDart from 'blockly/dart';
import DartEval from 'blockly/dart_compressed';

import './blocks/customblocks';
import './generator/generator';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }

  generateCode = () => {
    var code = BlocklyDart.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    console.log(code);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.generateCode}> 바꾸기 </button>
        <BlocklyComponent
          readOnly={false} trashcan={true} media={'media/'}
          ref={this.simpleWorkspace}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
              </xml>
            `}>
          <Block type="controls_repeat_ext" />
          <Block type="test_react_date_field" />
          <Block type="controls_ifelse" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="text_print">
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="logic_boolean" />
          <Block type="logic_null" disabled="false" />
          <Block type="logic_ternary" />
          <Block type="text_charAt">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block>
        </BlocklyComponent>

      </div>
    );
  }
}

export default App;
