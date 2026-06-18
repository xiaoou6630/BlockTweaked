import * as Blockly from 'blockly'
import { _b } from '../locales'

const DIRECTION_OPTIONS: [string, string][] = [
  [_b('前方', 'Front'), 'front'], [_b('后方', 'Back'), 'back'], [_b('左方', 'Left'), 'left'],
  [_b('右方', 'Right'), 'right'], [_b('上方', 'Up'), 'up'], [_b('下方', 'Down'), 'down'],
]
const BOOLEAN_OPTIONS: [string, string][] = [
  [_b('开', 'On'), 'true'], [_b('关', 'Off'), 'false'],
]

Blockly.Blocks['redstone_getInput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 获取红石输入', '🔴 Get Input'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'Number'); this.setColour('#FF6B6B')
    this.setTooltip('获取指定方向的红石输入信号强度')
  },
}
Blockly.Blocks['redstone_setOutput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 设置红石输出', '🔴 Set Output'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
      .appendField(new Blockly.FieldDropdown(BOOLEAN_OPTIONS), 'STATE')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF6B6B'); this.setTooltip('设置指定方向的红石输出状态')
  },
}
Blockly.Blocks['redstone_getOutput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 获取红石输出', '🔴 Get Output'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'Boolean'); this.setColour('#FF6B6B')
    this.setTooltip('获取指定方向的红石输出状态')
  },
}
Blockly.Blocks['redstone_setAnalogOutput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 设置模拟红石输出', '🔴 Set Analog Out'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
    this.appendValueInput('POWER').setCheck('Number').appendField(_b('强度', 'Power'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF6B6B'); this.setTooltip('设置指定方向的模拟红石输出强度(0-15)')
  },
}
Blockly.Blocks['redstone_getAnalogInput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 获取模拟红石输入', '🔴 Get Analog In'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'Number'); this.setColour('#FF6B6B')
    this.setTooltip('获取指定方向的模拟红石输入强度')
  },
}
Blockly.Blocks['redstone_getBundledInput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 获取束红石输入', '🔴 Get Bundled In'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'Number'); this.setColour('#FF6B6B')
    this.setTooltip('获取指定方向的束红石输入')
  },
}
Blockly.Blocks['redstone_setBundledOutput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 设置束红石输出', '🔴 Set Bundled Out'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
    this.appendValueInput('VALUE').setCheck('Number').appendField(_b('值', 'Value'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF6B6B'); this.setTooltip('设置指定方向的束红石输出')
  },
}
Blockly.Blocks['redstone_getBundledOutput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 获取束红石输出', '🔴 Get Bundled Out'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'Number'); this.setColour('#FF6B6B')
    this.setTooltip('获取指定方向的束红石输出')
  },
}
Blockly.Blocks['redstone_getSides'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 有效方向', '🔴 Get Sides'))
    this.setOutput(true, 'Array'); this.setColour('#FF6B6B')
    this.setTooltip('获取所有有效的红石连接方向')
  },
}
Blockly.Blocks['redstone_testBundledInput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 测试束输入', '🔴 Test Bundled In'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
    this.appendValueInput('MASK').setCheck('Number').appendField(_b('掩码', 'Mask'))
    this.setOutput(true, 'Boolean'); this.setColour('#FF6B6B')
    this.setTooltip('测试束线缆中指定颜色的输入')
  },
}
Blockly.Blocks['redstone_getAnalogOutput'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔴 获取模拟输出', '🔴 Get Analog Out'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'Number'); this.setColour('#FF6B6B')
    this.setTooltip('获取指定方向的模拟红石输出')
  },
}
export const redstoneBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('redstone_'))
