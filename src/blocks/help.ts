import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['help_path'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('❓ 帮助路径', '❓ Help Path'))
    this.setOutput(true, 'String')
    this.setColour('#2ECC71')
    this.setTooltip('获取帮助文件搜索路径')
  },
}

Blockly.Blocks['help_setPath'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('❓ 设置帮助路径', '❓ Set Help Path'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#2ECC71')
    this.setTooltip('设置帮助文件搜索路径')
  },
}

Blockly.Blocks['help_lookup'] = {
  init: function() {
    this.appendValueInput('TOPIC')
      .setCheck('String')
      .appendField(_b('❓ 查询帮助', '❓ Lookup Help'))
    this.setOutput(true, 'String')
    this.setColour('#2ECC71')
    this.setTooltip('查询指定主题的帮助文档')
  },
}

Blockly.Blocks['help_topics'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('❓ 帮助主题', '❓ Help Topics'))
    this.setOutput(true, 'Array')
    this.setColour('#2ECC71')
    this.setTooltip('列出所有帮助主题')
  },
}

Blockly.Blocks['help_completeTopic'] = {
  init: function() {
    this.appendValueInput('PREFIX')
      .setCheck('String')
      .appendField(_b('❓ 补全主题', '❓ Complete Topic'))
    this.setOutput(true, 'Array')
    this.setColour('#2ECC71')
    this.setTooltip('根据前缀补全帮助主题名')
  },
}

export const helpBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('help_'))
