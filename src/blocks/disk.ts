import * as Blockly from 'blockly'
import { _b } from '../locales'

const DISK_SIDE_OPTIONS: [string, string][] = [
  [_b('左', 'Left'), 'left'],
  [_b('右', 'Right'), 'right'],
  [_b('前', 'Front'), 'front'],
  [_b('后', 'Back'), 'back'],
  [_b('上', 'Top'), 'top'],
  [_b('下', 'Bottom'), 'bottom'],
]

Blockly.Blocks['disk_isPresent'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 磁盘存在', '💾 Is Present'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setOutput(true, 'Boolean')
    this.setColour('#3498DB')
    this.setTooltip('检查指定方向是否有磁盘')
  },
}

Blockly.Blocks['disk_getLabel'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 获取磁盘标签', '💾 Get Label'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setOutput(true, 'String')
    this.setColour('#3498DB')
    this.setTooltip('获取指定方向磁盘的标签')
  },
}

Blockly.Blocks['disk_setLabel'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 设置磁盘标签', '💾 Set Label'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.appendValueInput('LABEL')
      .setCheck('String')
      .appendField(_b('标签', 'Label'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#3498DB')
    this.setTooltip('设置指定方向磁盘的标签')
  },
}

Blockly.Blocks['disk_hasData'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 磁盘有数据', '💾 Has Data'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setOutput(true, 'Boolean')
    this.setColour('#3498DB')
    this.setTooltip('检查指定方向磁盘是否有数据')
  },
}

Blockly.Blocks['disk_getMountPath'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 获取挂载路径', '💾 Mount Path'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setOutput(true, 'String')
    this.setColour('#3498DB')
    this.setTooltip('获取指定方向磁盘的挂载路径')
  },
}

Blockly.Blocks['disk_hasAudio'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 磁盘有音频', '💾 Has Audio'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setOutput(true, 'Boolean')
    this.setColour('#3498DB')
    this.setTooltip('检查指定方向磁盘是否有音频')
  },
}

Blockly.Blocks['disk_getAudioTitle'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 获取音频标题', '💾 Audio Title'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setOutput(true, 'String')
    this.setColour('#3498DB')
    this.setTooltip('获取指定方向磁盘的音频标题')
  },
}

Blockly.Blocks['disk_playAudio'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 播放音频', '💾 Play Audio'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#3498DB')
    this.setTooltip('播放指定方向磁盘的音频')
  },
}

Blockly.Blocks['disk_stopAudio'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 停止音频', '💾 Stop Audio'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#3498DB')
    this.setTooltip('停止指定方向磁盘的音频播放')
  },
}

Blockly.Blocks['disk_eject'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 弹出磁盘', '💾 Eject'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#3498DB')
    this.setTooltip('弹出指定方向的磁盘')
  },
}

Blockly.Blocks['disk_getID'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('💾 获取磁盘ID', '💾 Get ID'))
      .appendField(new Blockly.FieldDropdown(DISK_SIDE_OPTIONS), 'SIDE')
    this.setOutput(true, 'String')
    this.setColour('#3498DB')
    this.setTooltip('获取指定方向磁盘的ID')
  },
}

export const diskBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('disk_'))
