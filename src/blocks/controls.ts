import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['controls_if'] = {
  init: function() {
    this.appendValueInput('IF0')
      .setCheck(['Boolean', 'Number'])
      .appendField(_b('🎯 如果', '🎯 If'))
    this.appendStatementInput('DO0')
      .appendField(_b('那么', 'Then'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('条件判断')
  },
}

Blockly.Blocks['controls_repeat_ext'] = {
  init: function() {
    this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField(_b('🔄 重复', '🔄 Repeat'))
      .appendField(_b('次', 'Times'))
    this.appendStatementInput('DO')
      .appendField(_b('执行', 'Do'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('重复执行指定次数')
  },
}

Blockly.Blocks['controls_whileUntil'] = {
  init: function() {
    this.appendValueInput('BOOL')
      .setCheck(['Boolean', 'Number'])
      .appendField(_b('🔄 当', '🔄 While'))
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [_b('为真时', 'While'), 'WHILE'],
        [_b('为假时', 'Until'), 'UNTIL'],
      ]), 'MODE')
    this.appendStatementInput('DO')
      .appendField(_b('执行', 'Do'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('循环执行')
  },
}

Blockly.Blocks['controls_for'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('🔄 循环', '🔄 For'))
      .appendField(new Blockly.FieldVariable('i'), 'VAR')
    this.appendValueInput('FROM')
      .setCheck('Number')
      .appendField(_b('从', 'From'))
    this.appendValueInput('TO')
      .setCheck('Number')
      .appendField(_b('到', 'To'))
    this.appendValueInput('BY')
      .setCheck('Number')
      .appendField(_b('步长', 'Step'))
    this.appendStatementInput('DO')
      .appendField(_b('执行', 'Do'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('循环计数')
  },
}

Blockly.Blocks['controls_flow_statements'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [_b('跳出循环', 'Break'), 'BREAK'],
        [_b('继续下次', 'Continue'), 'CONTINUE'],
      ]), 'FLOW')
    this.setPreviousStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('流程控制')
  },
}

export const controlBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('controls_'))
