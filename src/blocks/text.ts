import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['text'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('"')
      .appendField(new Blockly.FieldTextInput(''), 'TEXT')
      .appendField('"')
    this.setOutput(true, 'String')
    this.setColour('#5DADE2')
    this.setTooltip('文本')
  },
}

Blockly.Blocks['text_join'] = {
  init: function() {
    this.appendValueInput('A')
      .setCheck('String')
      .appendField(_b('连接', 'Join'))
    this.appendValueInput('B')
      .setCheck('String')
      .appendField(_b('和', 'And'))
    this.setOutput(true, 'String')
    this.setColour('#5DADE2')
    this.setTooltip('连接两个文本')
  },
}

Blockly.Blocks['text_length'] = {
  init: function() {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(_b('长度', 'Length'))
    this.setOutput(true, 'Number')
    this.setColour('#5DADE2')
    this.setTooltip('文本长度')
  },
}

Blockly.Blocks['text_isEmpty'] = {
  init: function() {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(_b('为空', 'Is Empty'))
    this.setOutput(true, 'Boolean')
    this.setColour('#5DADE2')
    this.setTooltip('检查文本是否为空')
  },
}

Blockly.Blocks['text_substring'] = {
  init: function() {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(_b('截取', 'Substring'))
    this.appendValueInput('FROM')
      .setCheck('Number')
      .appendField(_b('从', 'From'))
    this.appendValueInput('TO')
      .setCheck('Number')
      .appendField(_b('到', 'To'))
    this.setOutput(true, 'String')
    this.setColour('#5DADE2')
    this.setTooltip('截取文本子串')
  },
}

export const textBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('text_'))
