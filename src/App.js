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
    let evalCode;
    var codeList = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );

    for (var code of codeList.split("\n\n")) {
      if (code.split(" ")[0] === "var") {
        evalCode = code;
      }

      if (code.includes("//Start\n")) {
        evalCode = evalCode + code;
        try {
          eval(evalCode);
          console.log("END");
        } catch (err) {
          console.log("CODE_FAIL");
        }
      }
    }
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
          <button id="codeButton" onClick={this.generateCode}><span>&#x25BA; </span>START </button>
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
          <Category name="변수" colour="#E99F38" custom="VARIABLE" />
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
                  <Field name="B">TRUE</Field>
                </Block>
              </Value>
            </Block>
          </Category>
          <Category name="소리" colour="#F998E3">
            <Block type="sound_play_block">
              <Value name="SOUND">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
          </Category>
          <Category name="스마트홈" colour="#AE76F5">
            <Block type="servo_motor_block" />
            <Block type="rgb_block" />
            <Block type="led_on_off_block" />
            <Block type="lcd_clear_block" />
            <Block type="lcd_set_pos_block" />
            <Block type="lcd_message_block" />
          </Category>
        </BlocklyComponent> 
      </div>
    );
  }
}

export default App;
