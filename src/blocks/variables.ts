import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['variables_get'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('📦 变量', '📦 Variable'))
      .appendField(new Blockly.FieldVariable('item'), 'VAR')
    this.setOutput(true, null)
    this.setColour('#4D96FF')
    this.setTooltip('获取变量')
  },
}

Blockly.Blocks['variables_set'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('📦 设置变量', '📦 Set'))
      .appendField(new Blockly.FieldVariable('item'), 'VAR')
      .appendField(_b('为', 'To'))
    this.appendValueInput('VALUE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#4D96FF')
    this.setTooltip('设置变量')
  },
}

Blockly.Blocks['procedures_defnoreturn'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('📦 定义函数', '📦 Function'))
      .appendField(new Blockly.FieldTextInput('doSomething'), 'NAME')
    this.appendStatementInput('STACK')
      .appendField(_b('执行', 'Do'))
    this.setColour('#4D96FF')
    this.setTooltip('定义函数')
  },
}

Blockly.Blocks['procedures_callnoreturn'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('📦 调用函数', '📦 Call'))
      .appendField(new Blockly.FieldTextInput('doSomething'), 'NAME')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#4D96FF')
    this.setTooltip('调用函数')
  },
}

export const variableBlocks = Object.keys(Blockly.Blocks).filter(k => 
  k.startsWith('variables_') || k.startsWith('procedures_')
)
