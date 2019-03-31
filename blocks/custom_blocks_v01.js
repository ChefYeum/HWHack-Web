Blockly.Blocks['gui_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouse click");
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
        .appendField("move cursor to");
    this.appendValueInput("x_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x postion");
    this.appendValueInput("y_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y position");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("over")
        .appendField(new Blockly.FieldNumber(0), "time_duration")
        .appendField("seconds");
    this.setInputsInline(false);
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
        .appendField("move cursor relative to position");
    this.appendValueInput("x_change")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x change");
    this.appendValueInput("y_change")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y change");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("over")
        .appendField(new Blockly.FieldNumber(0), "time_duration")
        .appendField("seconds");
    this.setInputsInline(false);
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
        .appendField("drag cursor to");
    this.appendValueInput("x_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x position");
    this.appendValueInput("y_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y position");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("over")
        .appendField(new Blockly.FieldNumber(0), "time_duration")
        .appendField("seconds");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_dragrel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("drag cursor relative to position");
    this.appendValueInput("x_change")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x change");
    this.appendValueInput("y_change")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y change");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("over")
        .appendField(new Blockly.FieldNumber(0), "time_duration")
        .appendField("seconds");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_scroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("");
    this.appendDummyInput()
        .appendField("scroll amount (+ve srolls up)")
        .appendField(new Blockly.FieldNumber(0), "scroll_amount");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
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