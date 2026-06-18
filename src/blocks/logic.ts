import * as Blockly from 'blockly'
import { _b } from '../locales'

const COMPARE_OPTIONS: [string, string][] = [
  ['=', '=='],
  ['≠', '~='],
  ['>', '>'],
  ['≥', '>='],
  ['<', '<'],
  ['≤', '<='],
]

const LOGIC_OPTIONS: [string, string][] = [
  [_b('且', 'And'), 'and'],
  [_b('或', 'Or'), 'or'],
]

Blockly.Blocks['logic_boolean'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [_b('真', 'True'), 'true'],
        [_b('假', 'False'), 'false'],
      ]), 'BOOL')
    this.setOutput(true, 'Boolean')
    this.setColour('#6BCB77')
    this.setTooltip('布尔值')
  },
}

Blockly.Blocks['logic_negate'] = {
  init: function() {
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(_b('非', 'Not'))
    this.setOutput(true, 'Boolean')
    this.setColour('#6BCB77')
    this.setTooltip('逻辑非')
  },
}

Blockly.Blocks['logic_compare'] = {
  init: function() {
    this.appendValueInput('A')
      .setCheck(['Number', 'String'])
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(COMPARE_OPTIONS), 'OP')
    this.appendValueInput('B')
      .setCheck(['Number', 'String'])
    this.setOutput(true, 'Boolean')
    this.setColour('#6BCB77')
    this.setTooltip('比较运算')
  },
}

Blockly.Blocks['logic_operation'] = {
  init: function() {
    this.appendValueInput('A')
      .setCheck('Boolean')
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(LOGIC_OPTIONS), 'OP')
    this.appendValueInput('B')
      .setCheck('Boolean')
    this.setOutput(true, 'Boolean')
    this.setColour('#6BCB77')
    this.setTooltip('逻辑运算')
  },
}

Blockly.Blocks['logic_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('nil', 'Null'))
    this.setOutput(true, 'null')
    this.setColour('#6BCB77')
    this.setTooltip('空值')
  },
}

export const logicBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('logic_'))
