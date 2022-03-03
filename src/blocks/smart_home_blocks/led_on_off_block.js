import * as Blockly from 'blockly/core';

var ledOnOffBlock = {
    "type": "led_on_off_block",
    "message0": "LED %1",
    "args0": [{
        "type": "field_dropdown",
        "name": "onOff",
        "options": [
            [
                "켜기",
                "true"
            ],
            [
                "끄기",
                "false"
            ]
        ]
    }],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.JavaScript['led_on_off_block'] = function(block) {
    var onOff = block.getFieldValue('onOff');
    var code =
        `console.log("LED,${onOff}");\n` +
        `date = Date.now();
        do {
          currentDate = Date.now();
        } while (currentDate - date < 1000);\n`;
    return code;
};

Blockly.Blocks['led_on_off_block'] = {
    init: function() {
        this.jsonInit(ledOnOffBlock);
        this.setColour("#AE76F5");
        this.toLocaleString('ko');
    },
};