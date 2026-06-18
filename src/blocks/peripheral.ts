import * as Blockly from 'blockly'
import { _b } from '../locales'

const PERIPHERAL_DIRECTION_OPTIONS: [string, string][] = [
  [_b('左', 'Left'), 'left'], [_b('右', 'Right'), 'right'], [_b('前', 'Front'), 'front'],
  [_b('后', 'Back'), 'back'], [_b('上', 'Top'), 'top'], [_b('下', 'Bottom'), 'bottom'],
]

Blockly.Blocks['peripheral_wrap'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔌 连接外设', '🔌 Wrap'))
      .appendField(new Blockly.FieldDropdown(PERIPHERAL_DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'String'); this.setColour('#9B59B6'); this.setTooltip('连接指定方向的外设')
  },
}
Blockly.Blocks['peripheral_isPresent'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔌 外设存在', '🔌 Is Present'))
      .appendField(new Blockly.FieldDropdown(PERIPHERAL_DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'Boolean'); this.setColour('#9B59B6'); this.setTooltip('检查指定方向是否有外设')
  },
}
Blockly.Blocks['peripheral_getType'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔌 外设类型', '🔌 Get Type'))
      .appendField(new Blockly.FieldDropdown(PERIPHERAL_DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'String'); this.setColour('#9B59B6'); this.setTooltip('获取指定方向外设的类型')
  },
}
Blockly.Blocks['peripheral_getMethods'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔌 外设方法', '🔌 Get Methods'))
      .appendField(new Blockly.FieldDropdown(PERIPHERAL_DIRECTION_OPTIONS), 'SIDE')
    this.setOutput(true, 'Array'); this.setColour('#9B59B6'); this.setTooltip('获取指定方向外设的所有方法')
  },
}
Blockly.Blocks['peripheral_call'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔌 调用外设', '🔌 Call'))
      .appendField(new Blockly.FieldDropdown(PERIPHERAL_DIRECTION_OPTIONS), 'SIDE')
    this.appendValueInput('METHOD').setCheck('String').appendField(_b('方法', 'Method'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#9B59B6'); this.setTooltip('调用指定方向外设的方法')
  },
}
Blockly.Blocks['peripheral_find'] = {
  init: function() {
    this.appendValueInput('TYPE').setCheck('String').appendField(_b('🔌 查找外设', '🔌 Find'))
    this.setOutput(true, 'Array'); this.setColour('#9B59B6'); this.setTooltip('查找指定类型的所有外设')
  },
}
Blockly.Blocks['peripheral_hasType'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔌 外设是类型', '🔌 Has Type'))
      .appendField(new Blockly.FieldDropdown(PERIPHERAL_DIRECTION_OPTIONS), 'SIDE')
    this.appendValueInput('TYPE').setCheck('String').appendField(_b('类型', 'Type'))
    this.setOutput(true, 'Boolean'); this.setColour('#9B59B6'); this.setTooltip('检查指定方向的外设是否为指定类型')
  },
}
Blockly.Blocks['peripheral_getName'] = {
  init: function() {
    this.appendValueInput('PERIPHERAL').setCheck(null).appendField(_b('🔌 外设名称', '🔌 Get Name'))
    this.setOutput(true, 'String'); this.setColour('#9B59B6'); this.setTooltip('获取外设的名称')
  },
}
Blockly.Blocks['peripheral_wrapByName'] = {
  init: function() {
    this.appendValueInput('NAME').setCheck('String').appendField(_b('🔌 连接外设', '🔌 Wrap By Name'))
    this.setOutput(true, null); this.setColour('#9B59B6'); this.setTooltip('通过名称连接外设')
  },
}
export const peripheralBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('peripheral_'))
