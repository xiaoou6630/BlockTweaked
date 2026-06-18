import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['keys_getName'] = {
  init: function() {
    this.appendValueInput('KEY')
      .setCheck('Number')
      .appendField(_b('⌨️ 按键名称', '⌨️ Key Name'))
    this.setOutput(true, 'String')
    this.setColour('#FF5722')
    this.setTooltip('获取按键代码对应的名称')
  },
}

export const keysBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('keys_'))
