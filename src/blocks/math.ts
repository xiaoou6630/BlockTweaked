import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['math_number'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldNumber(0), 'NUM')
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
  },
}

Blockly.Blocks['math_arithmetic'] = {
  init: function() {
    this.appendValueInput('A')
      .setCheck('Number')
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [_b('加', 'Add'), '+'],
        [_b('减', 'Subtract'), '-'],
        [_b('乘', 'Multiply'), '*'],
        [_b('除', 'Divide'), '/'],
        [_b('幂', 'Power'), '^'],
        ['%', '%'],
      ]), 'OP')
    this.appendValueInput('B')
      .setCheck('Number')
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
    this.setTooltip('数学运算')
  },
}

Blockly.Blocks['math_random'] = {
  init: function() {
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(_b('随机数 最小', 'Random Min'))
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(_b('最大', 'Max'))
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
    this.setTooltip('生成随机数')
  },
}

Blockly.Blocks['math_mod'] = {
  init: function() {
    this.appendValueInput('A')
      .setCheck('Number')
      .appendField(_b('取模', 'Modulo'))
    this.appendValueInput('B')
      .setCheck('Number')
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
    this.setTooltip('取模运算')
  },
}

Blockly.Blocks['math_floor'] = {
  init: function() {
    this.appendValueInput('NUM')
      .setCheck('Number')
      .appendField(_b('向下取整', 'Floor'))
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
    this.setTooltip('向下取整')
  },
}

Blockly.Blocks['math_ceil'] = {
  init: function() {
    this.appendValueInput('NUM')
      .setCheck('Number')
      .appendField(_b('向上取整', 'Ceil'))
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
    this.setTooltip('向上取整')
  },
}

Blockly.Blocks['math_abs'] = {
  init: function() {
    this.appendValueInput('NUM')
      .setCheck('Number')
      .appendField(_b('绝对值', 'Abs'))
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
    this.setTooltip('取绝对值')
  },
}

Blockly.Blocks['math_sqrt'] = {
  init: function() {
    this.appendValueInput('NUM')
      .setCheck('Number')
      .appendField(_b('平方根', 'Sqrt'))
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
    this.setTooltip('取平方根')
  },
}

Blockly.Blocks['math_min'] = {
  init: function() {
    this.appendValueInput('A')
      .setCheck('Number')
      .appendField(_b('最小值', 'Min'))
    this.appendValueInput('B')
      .setCheck('Number')
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
    this.setTooltip('取最小值')
  },
}

Blockly.Blocks['math_max'] = {
  init: function() {
    this.appendValueInput('A')
      .setCheck('Number')
      .appendField(_b('最大值', 'Max'))
    this.appendValueInput('B')
      .setCheck('Number')
    this.setOutput(true, 'Number')
    this.setColour('#6BCB77')
    this.setTooltip('取最大值')
  },
}

export const mathBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('math_'))
