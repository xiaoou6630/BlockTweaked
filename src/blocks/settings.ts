import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['settings_define'] = {
  init: function() {
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(_b('⚙️ 定义设置', '⚙️ Define'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#607D8B')
    this.setTooltip('定义一个新的设置项')
  },
}

Blockly.Blocks['settings_set'] = {
  init: function() {
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(_b('⚙️ 设置值', '⚙️ Set'))
    this.appendValueInput('VALUE')
      .setCheck(null)
      .appendField(_b('=', '='))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#607D8B')
    this.setTooltip('设置指定设置项的值')
  },
}

Blockly.Blocks['settings_get'] = {
  init: function() {
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(_b('⚙️ 获取设置', '⚙️ Get'))
    this.appendValueInput('DEFAULT')
      .setCheck(null)
      .appendField(_b('默认值', 'Default'))
    this.setOutput(true, null)
    this.setColour('#607D8B')
    this.setTooltip('获取指定设置项的值，可设置默认值')
  },
}

Blockly.Blocks['settings_unset'] = {
  init: function() {
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(_b('⚙️ 取消设置', '⚙️ Unset'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#607D8B')
    this.setTooltip('取消设置指定设置项')
  },
}

Blockly.Blocks['settings_clear'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('⚙️ 清空所有设置', '⚙️ Clear All'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#607D8B')
    this.setTooltip('清空所有设置')
  },
}

Blockly.Blocks['settings_getNames'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('⚙️ 获取设置名称列表', '⚙️ Get Names'))
    this.setOutput(true, 'Array')
    this.setColour('#607D8B')
    this.setTooltip('获取所有设置项的名称列表')
  },
}

Blockly.Blocks['settings_load'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('⚙️ 加载设置文件', '⚙️ Load'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#607D8B')
    this.setTooltip('从文件加载设置')
  },
}

Blockly.Blocks['settings_save'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('⚙️ 保存设置文件', '⚙️ Save'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#607D8B')
    this.setTooltip('保存设置到文件')
  },
}

Blockly.Blocks['settings_undefine'] = {
  init: function() {
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(_b('⚙️ 取消定义设置', '⚙️ Undefine'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#607D8B')
    this.setTooltip('取消定义设置项')
  },
}

Blockly.Blocks['settings_getDetails'] = {
  init: function() {
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(_b('⚙️ 获取设置详情', '⚙️ Get Details'))
    this.setOutput(true, null)
    this.setColour('#607D8B')
    this.setTooltip('获取设置项的详细信息（值、默认值、描述）')
  },
}

export const settingsBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('settings_'))
