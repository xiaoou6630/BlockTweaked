import * as Blockly from 'blockly'
import { _b } from '../locales'

const IO_MODE_OPTIONS: [string, string][] = [
  [_b('只读', 'Read Only'), 'r'], [_b('写入', 'Write'), 'w'], [_b('追加', 'Append'), 'a'],
  [_b('读写', 'Read+Write'), 'r+'], [_b('读写追加', 'Read+Write+'), 'w+'],
]
const IO_WHENCE_OPTIONS: [string, string][] = [
  [_b('开头', 'Start'), 'set'], [_b('当前', 'Current'), 'cur'], [_b('末尾', 'End'), 'end'],
]

Blockly.Blocks['io_open'] = {
  init: function() {
    this.appendValueInput('PATH').setCheck('String').appendField(_b('📂 打开文件', '📂 Open File'))
    this.appendDummyInput().appendField(_b('模式', 'Mode')).appendField(new Blockly.FieldDropdown(IO_MODE_OPTIONS), 'MODE')
    this.setOutput(true, null); this.setColour('#1ABC9C'); this.setTooltip('以指定模式打开文件')
  },
}
Blockly.Blocks['io_close'] = {
  init: function() {
    this.appendValueInput('HANDLE').setCheck(null).appendField(_b('📂 关闭文件', '📂 Close File'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#1ABC9C'); this.setTooltip('关闭文件句柄')
  },
}
Blockly.Blocks['io_readAll'] = {
  init: function() {
    this.appendValueInput('HANDLE').setCheck(null).appendField(_b('📂 读取全部', '📂 Read All'))
    this.setOutput(true, 'String'); this.setColour('#1ABC9C'); this.setTooltip('读取文件全部内容')
  },
}
Blockly.Blocks['io_readLine'] = {
  init: function() {
    this.appendValueInput('HANDLE').setCheck(null).appendField(_b('📂 读取一行', '📂 Read Line'))
    this.setOutput(true, 'String'); this.setColour('#1ABC9C'); this.setTooltip('读取文件的一行')
  },
}
Blockly.Blocks['io_writeLine'] = {
  init: function() {
    this.appendValueInput('HANDLE').setCheck(null).appendField(_b('📂 写入行', '📂 Write Line'))
    this.appendValueInput('TEXT').setCheck('String').appendField(_b('文本', 'Text'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#1ABC9C'); this.setTooltip('向文件写入一行并换行')
  },
}
Blockly.Blocks['io_flush'] = {
  init: function() {
    this.appendValueInput('HANDLE').setCheck(null).appendField(_b('📂 刷新缓冲', '📂 Flush'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#1ABC9C'); this.setTooltip('刷新文件缓冲区')
  },
}
Blockly.Blocks['io_seek'] = {
  init: function() {
    this.appendValueInput('HANDLE').setCheck(null).appendField(_b('📂 定位文件', '📂 Seek'))
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(IO_WHENCE_OPTIONS), 'WHENCE')
    this.appendValueInput('OFFSET').setCheck('Number').appendField(_b('偏移', 'Offset'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#1ABC9C'); this.setTooltip('设置文件读取位置')
  },
}
Blockly.Blocks['io_lines'] = {
  init: function() {
    this.appendValueInput('HANDLE').setCheck(null).appendField(_b('📂 遍历行', '📂 Lines'))
    this.setOutput(true, null); this.setColour('#1ABC9C'); this.setTooltip('获取文件行迭代器')
  },
}
Blockly.Blocks['io_type'] = {
  init: function() {
    this.appendValueInput('OBJ').setCheck(null).appendField(_b('📂 文件类型', '📂 IO Type'))
    this.setOutput(true, 'String'); this.setColour('#1ABC9C'); this.setTooltip('获取文件句柄类型')
  },
}
export const ioBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('io_'))
