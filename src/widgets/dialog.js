import Blockly from 'blockly/core';
import 'blockly/blocks';

class CustomDialog {};

/** Override Blockly.alert() with custom implementation. */
Blockly.alert = function(message, callback) {
    console.log('Alert: ' + message);
    CustomDialog.show('Alert', message, {
        onCancel: callback
    });
};

/** Override Blockly.confirm() with custom implementation. */
Blockly.confirm = function(message, callback) {
    console.log('Confirm: ' + message);
    // CustomDialog.show('Confirm', message, {
    //     showOkay: true,
    //     onOkay: function() {
    //         callback(true);
    //     },
    //     showCancel: true,
    //     onCancel: function() {
    //         callback(false);
    //     }
    // });
    callback(true);
};

/** Override Blockly.prompt() with custom implementation. */
Blockly.prompt = function(message, defaultValue, callback) {
    console.log('Prompt: ' + message);
    if (message === "새 변수 이름:") {
        CustomDialog.show('변수 만들기', message, {
            showInput: true,
            showOkay: true,
            showDefault: false,
            onOkay: function() {
                callback(CustomDialog.inputField.value);
            },
            showCancel: true,
            onCancel: function() {
                callback(null);
            }
        });
    } else {
        CustomDialog.show(message, message, {
            showInput: true,
            showOkay: true,
            showDefault: true,
            onOkay: function() {
                callback(CustomDialog.inputField.value);
            },
            showCancel: true,
            onCancel: function() {
                callback(null);
            }
        });
    }
    CustomDialog.inputField.value = defaultValue;
};

/** Hides any currently visible dialog. */
CustomDialog.hide = function() {
    if (CustomDialog.backdropDiv_) {
        CustomDialog.backdropDiv_.style.display = 'none';
        CustomDialog.dialogDiv_.style.display = 'none';
    }
};

/**
 * Shows the dialog.
 * Allowed options:
 *  - showOkay: Whether to show the OK button.
 *  - showCancel: Whether to show the Cancel button.
 *  - showInput: Whether to show the text input field.
 *  - onOkay: Callback to handle the okay button.
 *  - onCancel: Callback to handle the cancel button and backdrop clicks.
 */
CustomDialog.show = function(title, message, options) {
    var backdropDiv = CustomDialog.backdropDiv_;
    var dialogDiv = CustomDialog.dialogDiv_;
    if (!dialogDiv) {
        // Generate HTML
        backdropDiv = document.createElement('div');
        backdropDiv.id = 'customDialogBackdrop';
        backdropDiv.style.cssText =
            'position: absolute;' +
            'top: 0; left: 0; right: 0; bottom: 0;' +
            'background-color: rgba(0, 0, 0, .7);' +
            'z-index: 100;';
        document.body.appendChild(backdropDiv);

        dialogDiv = document.createElement('div');
        dialogDiv.id = 'customDialog';
        dialogDiv.style.cssText =
            'display: flex;' +
            'flex-direction: column;' +
            'max-width: 361px;' +
            'justify-content: center;' +
            'border-radius: 10px;' +
            'align-items: center;' +
            'padding-top: 10px;' +
            // 'padding-bottom: 10px;' +
            'padding-right: 30px;' +
            'padding-left: 30px;' +
            'background-color: rgba(247, 247, 251, 1);' +
            'margin-right: auto;' +
            'margin-left: auto;' +
            'margin-top: 80px;';
        backdropDiv.appendChild(dialogDiv);

        dialogDiv.onclick = function(event) {
            event.stopPropagation();
        };

        CustomDialog.backdropDiv_ = backdropDiv;
        CustomDialog.dialogDiv_ = dialogDiv;
    }
    backdropDiv.style.display = 'block';
    dialogDiv.style.display = 'block';

    dialogDiv.innerHTML =
        '<div style="display : flex; flex-direction: column;">' +
        '<div class="customDialogTitle" style="' +
        'color: rgba(99, 125, 220, 1);' +
        'font-size: 14px;' +
        'letter-spacing: 0%;' +
        'padding: 14px;' +
        'text-align: center;' +
        'font-weight: bold;' +
        'border-bottom: 1px solid #D8D8D8;' +
        'font-family: Noto Sans KR, sans-serif;' +
        `">${title}</div>` +
        '<div class="customDialogMessage" style="' +
        'margin-top: 10px;' +
        'color: rgba(73, 73, 73, 1);' +
        'font-size: 10px;' +
        'font-weight: bold;' +
        'letter-spacing: 0%;' +
        'text-align: left;' +
        'margin-top: 16px;' +
        'font-family: Noto Sans KR, sans-serif;' +
        '">새 변수 이름 :</div>' +
        (options.showInput ? '<input id="customDialogInput" style="' +
            'height: 30px;' +
            'width: 100%;' +
            'margin-top: 10px;' +
            'border-radius: 5px;' +
            'border-color: rgba(211, 211, 211, 1);' +
            'border-width: 1px;' +
            'align-self: center;' +
            'border-style: solid;' +
            'background-color: rgba(255, 255, 255, 1);' +
            '">' : '') +
        // '<div class="customDialogButtons">' +
        (options.showOkay ? '<button id="okay" style="' +
            ' display: flex;' +
            'flex-direction: row;' +
            'justify-content: center;' +
            'margin-top: 20px;' +
            'border-radius: 17.5px;' +
            'align-self: center;' +
            'padding-top: 7px;' +
            'padding-bottom: 7px;' +
            'padding-right: 30px;' +
            'width: 106px;' +
            'padding-left: 30px;' +
            'background-color: rgba(99, 125, 220, 1);' +
            'color: rgba(255, 255, 255, 1);' +
            'font-size: 12px;' +
            'border: none;' +
            'letter-spacing: 0%;' +
            'font-family: Noto Sans KR, sans-serif;' +
            `">${options.showDefault ? '확인' : '생성하기'}</button>` : '') +
        (options.showCancel ? '<button id="cancel" style="' +
            'margin-top: 10px;' +
            'margin-bottom: 20px;' +
            'background-color: inherit;' +
            'color: rgba(166, 166, 166, 1);' +
            'font-size: 10px;' +
            'letter-spacing: 0%;' +
            'border: none;' +
            'text-align: center;' +
            'font-family: Noto Sans KR, sans-serif;' +
            '">취소</button>' : '') +
        '</div>';

    var onOkay = function(event) {
        CustomDialog.hide();
        options.onOkay && options.onOkay();
        event && event.stopPropagation();
    };
    var onCancel = function(event) {
        CustomDialog.hide();
        options.onCancel && options.onCancel();
        event && event.stopPropagation();
    };

    var dialogInput = document.getElementById('customDialogInput');
    CustomDialog.inputField = dialogInput;
    if (dialogInput) {
        dialogInput.focus();

        dialogInput.onkeyup = function(event) {
            if (event.keyCode === 13) {
                // Process as OK when user hits enter.
                onOkay();
                return false;
            } else if (event.keyCode === 27) {
                // Process as cancel when user hits esc.
                onCancel();
                return false;
            }
        };
    } else {
        var okay = document.getElementById('okay');
        okay && okay.focus();
    }

    if (options.showOkay) {
        document.getElementById('okay')
            .addEventListener('click', onOkay);
    }
    if (options.showCancel) {
        document.getElementById('cancel')
            .addEventListener('click', onCancel);
    }

    backdropDiv.onclick = onCancel;
};