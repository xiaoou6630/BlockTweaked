import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['write'] = {
  init: function() {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(_b('📝 写入', '📝 Write'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#5DADE2')
    this.setTooltip('向终端写入文本')
  },
}

Blockly.Blocks['print'] = {
  init: function() {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(_b('📝 打印', '📝 Print'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#5DADE2')
    this.setTooltip('打印文本并换行')
  },
}

Blockly.Blocks['read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('📝 读取', '📝 Read'))
    this.setOutput(true, 'String')
    this.setColour('#5DADE2')
    this.setTooltip('读取用户输入')
  },
}

export const globalBlocks = Object.keys(Blockly.Blocks).filter(k => k === 'write' || k === 'print' || k === 'read')
