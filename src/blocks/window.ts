import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['window_create'] = {
  init: function() {
    this.appendValueInput('PARENT')
      .setCheck(null)
      .appendField(_b('🪟 创建窗口', '🪟 Create Window'))
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(_b('X', 'X'))
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(_b('Y', 'Y'))
    this.appendValueInput('W')
      .setCheck('Number')
      .appendField(_b('宽', 'Width'))
    this.appendValueInput('H')
      .setCheck('Number')
      .appendField(_b('高', 'Height'))
    this.setOutput(true, null)
    this.setColour('#8E44AD')
    this.setTooltip('创建一个终端子窗口')
  },
}

Blockly.Blocks['window_setVisible'] = {
  init: function() {
    this.appendValueInput('WINDOW')
      .setCheck(null)
      .appendField(_b('🪟 设置可见', '🪟 Set Visible'))
    this.appendValueInput('VISIBLE')
      .setCheck('Boolean')
      .appendField(_b('可见', 'Visible'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#8E44AD')
    this.setTooltip('设置窗口是否可见')
  },
}

Blockly.Blocks['window_isVisible'] = {
  init: function() {
    this.appendValueInput('WINDOW')
      .setCheck(null)
      .appendField(_b('🪟 是否可见', '🪟 Is Visible'))
    this.setOutput(true, 'Boolean')
    this.setColour('#8E44AD')
    this.setTooltip('检查窗口是否可见')
  },
}

Blockly.Blocks['window_redraw'] = {
  init: function() {
    this.appendValueInput('WINDOW')
      .setCheck(null)
      .appendField(_b('🪟 重绘窗口', '🪟 Redraw'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#8E44AD')
    this.setTooltip('重绘窗口')
  },
}

Blockly.Blocks['window_reposition'] = {
  init: function() {
    this.appendValueInput('WINDOW')
      .setCheck(null)
      .appendField(_b('🪟 移动窗口', '🪟 Reposition'))
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(_b('X', 'X'))
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(_b('Y', 'Y'))
    this.appendValueInput('W')
      .setCheck('Number')
      .appendField(_b('宽', 'Width'))
    this.appendValueInput('H')
      .setCheck('Number')
      .appendField(_b('高', 'Height'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#8E44AD')
    this.setTooltip('移动和调整窗口大小')
  },
}

Blockly.Blocks['window_getPosition'] = {
  init: function() {
    this.appendValueInput('WINDOW')
      .setCheck(null)
      .appendField(_b('🪟 窗口位置', '🪟 Get Position'))
    this.setOutput(true, 'Array')
    this.setColour('#8E44AD')
    this.setTooltip('获取窗口位置和大小')
  },
}

export const windowBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('window_'))
