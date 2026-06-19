import * as Blockly from 'blockly'
import { _b } from '../locales'

const MODEM_SIDE_OPTIONS: [string, string][] = [
  [_b('左', 'Left'), 'left'], [_b('右', 'Right'), 'right'], [_b('前', 'Front'), 'front'],
  [_b('后', 'Back'), 'back'], [_b('上', 'Top'), 'top'], [_b('下', 'Bottom'), 'bottom'],
]

Blockly.Blocks['rednet_open'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📡 打开红网', '📡 Open'))
      .appendField(new Blockly.FieldDropdown(MODEM_SIDE_OPTIONS), 'SIDE')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#E67E22'); this.setTooltip('打开指定方向的调制解调器以使用红网')
  },
}
Blockly.Blocks['rednet_close'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📡 关闭红网', '📡 Close'))
      .appendField(new Blockly.FieldDropdown(MODEM_SIDE_OPTIONS), 'SIDE')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#E67E22'); this.setTooltip('关闭指定方向的调制解调器')
  },
}
Blockly.Blocks['rednet_isOpen'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📡 红网已打开', '📡 Is Open'))
      .appendField(new Blockly.FieldDropdown(MODEM_SIDE_OPTIONS), 'SIDE')
    this.setOutput(true, 'Boolean'); this.setColour('#E67E22')
    this.setTooltip('检查指定方向的调制解调器是否已打开')
  },
}
Blockly.Blocks['rednet_send'] = {
  init: function() {
    this.appendValueInput('RECIPIENT').setCheck('Number').appendField(_b('📡 发送红网消息到', '📡 Send To'))
    this.appendValueInput('MESSAGE').setCheck(null).appendField(_b('消息', 'Message'))
    this.appendValueInput('PROTOCOL').setCheck('String').appendField(_b('协议', 'Protocol'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#E67E22'); this.setTooltip('向指定ID的计算机发送消息，可指定协议')
  },
}
Blockly.Blocks['rednet_broadcast'] = {
  init: function() {
    this.appendValueInput('MESSAGE').setCheck(null).appendField(_b('📡 广播红网消息', '📡 Broadcast'))
    this.appendValueInput('PROTOCOL').setCheck('String').appendField(_b('协议', 'Protocol'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#E67E22'); this.setTooltip('向所有使用红网的设备广播消息，可指定协议')
  },
}
Blockly.Blocks['rednet_receive'] = {
  init: function() {
    this.appendValueInput('PROTOCOL').setCheck('String').appendField(_b('📡 接收红网消息 协议', '📡 Receive Protocol'))
    this.appendValueInput('TIMEOUT').setCheck('Number').appendField(_b('超时', 'Timeout'))
    this.setOutput(true, 'Array'); this.setColour('#E67E22')
    this.setTooltip('等待接收红网消息，可指定协议过滤和超时')
  },
}
Blockly.Blocks['rednet_host'] = {
  init: function() {
    this.appendValueInput('PROTOCOL').setCheck('String').appendField(_b('📡 注册主机 协议', '📡 Host'))
    this.appendValueInput('HOSTNAME').setCheck('String').appendField(_b('主机名', 'Hostname'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#E67E22'); this.setTooltip('注册主机名称到指定协议')
  },
}
Blockly.Blocks['rednet_unhost'] = {
  init: function() {
    this.appendValueInput('PROTOCOL').setCheck('String').appendField(_b('📡 取消注册主机 协议', '📡 Unhost'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#E67E22'); this.setTooltip('取消注册指定协议的主机')
  },
}
Blockly.Blocks['rednet_lookup'] = {
  init: function() {
    this.appendValueInput('PROTOCOL').setCheck('String').appendField(_b('📡 查找主机 协议', '📡 Lookup'))
    this.appendValueInput('HOSTNAME').setCheck('String').appendField(_b('主机名', 'Hostname'))
    this.setOutput(true, 'Array'); this.setColour('#E67E22')
    this.setTooltip('查找指定协议和主机名的计算机ID列表')
  },
}
export const rednetBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('rednet_'))
