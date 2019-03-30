Blockly.Blocks['gui_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Click");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"], ["centre","centre"]]), "mouse_button");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_moveto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move cursor to");
    this.appendValueInput("x_pos")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y_pos")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("duration_secs")
        .setCheck("Number")
        .appendField("duration in secs");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_moverel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move cursor relative to postion");
    this.appendValueInput("x_change")
        .setCheck("Number")
        .appendField("x-change");
    this.appendValueInput("y_change")
        .setCheck("Number")
        .appendField("y-change");
    this.appendValueInput("duration_secs")
        .setCheck("Number")
        .appendField("duration in seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_dragto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Drag cursor to");
    this.appendValueInput("x_pos")
        .setCheck("Number")
        .appendField("x-position");
    this.appendValueInput("y_pos")
        .setCheck("Number")
        .appendField("y-position");
    this.appendValueInput("duration_secs")
        .setCheck("Number")
        .appendField("duration in seconds");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_dragrel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Drag cursor relative to position");
    this.appendValueInput("x_change")
        .setCheck("Number")
        .appendField("x-change");
    this.appendValueInput("y_change")
        .setCheck("Number")
        .appendField("y-change");
    this.appendValueInput("duration_secs")
        .setCheck("Number")
        .appendField("duration in seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_scroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("");
    this.appendValueInput("scroll_ammount")
        .setCheck("Number")
        .appendField("scroll ammount (+ve srolls up)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_mousedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mouse down");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"], ["centre","centre"]]), "mouse_button");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_mouseup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mouse up");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"], ["centre","centre"]]), "mouse_button");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};