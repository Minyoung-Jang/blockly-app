import React from 'react';
import './App.css';

import BlocklyComponent, { Block, Value, Field, Shadow, Category } from './Blockly';

import BlocklyJS from 'blockly/javascript';
import './blocks/customblocks';
import './generator/generator';
import './widgets/dialog.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }

  generateCode = () => {
    var codeList = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );

    for (var code of codeList.split("\n\n")) {
      console.log(code);
      if (code.includes("//Start\n")) {
        eval(code);
      }
    }
    // var msg = new SpeechSynthesisUtterance();
    // msg.text = "안녕하세요";
    // window.speechSynthesis.speak(msg);
  }

  render() {
    return (
      <div className="App">
        <button id="codeButton" onClick={this.generateCode}> RUN </button>
        <BlocklyComponent
          readOnly={false} trashcan={true} media={'media/'}
          ref={this.simpleWorkspace}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          renderer={'zelos'}
          zoom=
          {{
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2,
            pinch: true
          }}
          initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
              </xml>
            `}>
          <Category name="시작" categorystyle="start">
            <Block type="start_block" />
          </Category>
          <Category name="흐름" colour="#6137D6">
            <Block type="wait_block" />
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="infinite_loop" />
            <Block type="break_loop" />
            <Block type="controls_if"></Block>
          </Category>
          <Category name="자료" colour="330" custom="VARIABLE"></Category>
          <Category name="연산" colour="400">
            <Block type="math_arithmetic">
              <Value name="A">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="B">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="logic_compare">
              <Value name="A">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="B">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="logic_operation" colour="400">
              <Value name="A">
                <Shadow type="logic_boolean">
                  <Field name="BOOL">참</Field>
                </Shadow>
              </Value>
              <Value name="B">
                <Shadow type="logic_boolean">
                  <Field name="BOOL">거짓</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_print">
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
          </Category>
          <Category name="스마트홈" colour="200"></Category>
          {/* <Block type="text_print">
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="variables_get" />
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="controls_ifelse" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="text_print">
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="logic_null" disabled="false" />
          <Block type="logic_ternary" />
          <Block type="text_charAt">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block> */}

        </BlocklyComponent>

      </div>
    );
  }
}

export default App;
