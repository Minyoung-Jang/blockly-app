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
    console.log(this.simpleWorkspace);
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
      <div className="App" style={{ display: 'flex' }}>
        <div id="box">
        </div>
        <div id="box1">
          <div id="column">
            <div id="subtitle">PROJECT NAME</div>
            <div id="title">인공지능 홈</div>
          </div>
          <button id="codeButton" onClick={this.generateCode}> START </button>
        </div>
        <BlocklyComponent
          readOnly={false} trashcan={true} media={'media/'}
          ref={this.simpleWorkspace}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          renderer={'zelos'}
          initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
              </xml>
            `}>
          <Category name="시작" colour="#5AA8DF">
            <Block type="start_block" />
          </Category>
          <Category name="흐름" colour="#A43033">
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
            <Block type="controls_if" />
          </Category>
          <Category name="자료" colour="#E99F38" custom="VARIABLE"></Category>
          <Category name="연산" colour="#7AB964">
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
            <Block type="compare_block">
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
            <Block type="and_or_block" >
            <Value name="A">
                <Block type="boolean_block">
                  <Field name="BOOL">TRUE</Field>
                </Block>
              </Value>
              <Value name="B">
                <Block type="boolean_block">
                  <Field name="BOOL">TRUE</Field>
                </Block>
              </Value>
            </Block>
            <Block type="not_block">
              <Value name="BOOL">
                <Block type="boolean_block">
                  <Field name="BOOL">TRUE</Field>
                </Block>
              </Value>
            </Block>
          </Category>
          <Category name="스마트홈" colour="#AE76F5"></Category>
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
