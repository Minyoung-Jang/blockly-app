import React from 'react';
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/ko';
import 'blockly/blocks';

Blockly.setLocale(locale);

class BlocklyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.blocklyDiv = React.createRef();
        this.toolbox = React.createRef();
    }

    componentDidMount() {
        const { initialXml, children, ...rest } = this.props;
        
        this.primaryWorkspace = Blockly.inject(
            this.blocklyDiv.current,
            {
                toolbox: this.toolbox.current,
                theme: {
                    'blockStyles': {
                        "loop_blocks": {
                            "colourPrimary": "#6137D6",
                            "colourSecondary": "#AD7BE9",
                            "colourTertiary": "#CDB6E9"
                        },
                        "logic_blocks": {
                            "colourPrimary": "#6137D6",
                            "colourSecondary": "#AD7BE9",
                            "colourTertiary": "#CDB6E9"
                        },
                        "text_blocks": {
                            "colourPrimary": "#9B012F",
                            "colourSecondary": "#FF6498",
                            "colourTertiary": "#FFC5D6"
                        },
                        "variable_blocks": {
                            "colourPrimary": "#9B012F",
                            "colourSecondary": "#FF6498",
                            "colourTertiary": "#FFC5D6"
                        },
                        "logic_operation": {
                            "colourPrimary": "#9B012F",
                            "colourSecondary": "#FF6498",
                            "colourTertiary": "#FFC5D6"
                        },

                    },
                    'componentStyles': {
                        'workspaceBackgroundColour': '#F2F2F2',
                        'toolboxBackgroundColour': '#4C536D',
                        'flyoutBackgroundColour' : '#4C536D99'
                    },
                    'categoryStyles' : {
                        "start": {
                            "colour": "#DB6464"
                         }
                    }
                },

                ...rest
            },
        );

        if (initialXml) {
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
        }
    }

    get workspace() {
        return this.primaryWorkspace;
    }

    setXml(xml) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), this.primaryWorkspace);
    }

    render() {
        const { children } = this.props;

        return <React.Fragment>
            <div ref={this.blocklyDiv} id="blocklyDiv" />
            <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={this.toolbox}>
                {children}
            </xml>
        </React.Fragment>;
    }
}

export default BlocklyComponent;
