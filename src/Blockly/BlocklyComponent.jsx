import React from 'react';
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/ko';
import BlocklyJS from 'blockly/javascript';
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
        Blockly.ContextMenuRegistry.registry.unregister('workspaceDelete');
        Blockly.ContextMenuRegistry.registry.unregister('undoWorkspace');
        Blockly.ContextMenuRegistry.registry.unregister('redoWorkspace');
        this.primaryWorkspace = Blockly.inject(
            this.blocklyDiv.current,
            {
                toolbox: this.toolbox.current,
                theme: {
                    'blockStyles': {
                        "loop_blocks": {
                            "colourPrimary": "#A43033",
                            "colourSecondary": "#FEAFB1",
                        },
                        "logic_blocks": {
                            "colourPrimary": "#A43033",
                            "colourSecondary": "#FEAFB1",
                        },
                        "text_blocks": {
                            "colourPrimary": "#7AB964",
                            "colourSecondary": "#BEDAB4",
                        },
                        "math_blocks": {
                            "colourPrimary": "#7AB964",
                            "colourSecondary": "#BEDAB4",
                        },
                        "variable_blocks": {
                            "colourPrimary": "#E99F38",
                            "colourSecondary": "#EFC78F",
                        },
                    },
                    'componentStyles': {
                        'workspaceBackgroundColour': '#F7F7FB',
                        'toolboxBackgroundColour': '#4C536D',
                        'flyoutBackgroundColour': '#4C536D99'
                    },
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
