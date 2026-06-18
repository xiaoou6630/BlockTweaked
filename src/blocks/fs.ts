import * as Blockly from 'blockly'
import { _b } from '../locales'

const FS_MODE_OPTIONS: [string, string][] = [
  [_b('读取', 'Read'), 'r'],
  [_b('写入', 'Write'), 'w'],
  [_b('追加', 'Append'), 'a'],
]

Blockly.Blocks['fs_list'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 列出目录', '📁 List'))
    this.setOutput(true, 'Array')
    this.setColour('#FFD93D')
    this.setTooltip('列出指定目录下的文件和子目录')
  },
}

Blockly.Blocks['fs_exists'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 文件存在', '📁 Exists'))
    this.setOutput(true, 'Boolean')
    this.setColour('#FFD93D')
    this.setTooltip('检查文件或目录是否存在')
  },
}

Blockly.Blocks['fs_isDir'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 是目录', '📁 Is Dir'))
    this.setOutput(true, 'Boolean')
    this.setColour('#FFD93D')
    this.setTooltip('检查路径是否为目录')
  },
}

Blockly.Blocks['fs_isReadOnly'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 只读', '📁 Is Read Only'))
    this.setOutput(true, 'Boolean')
    this.setColour('#FFD93D')
    this.setTooltip('检查文件是否为只读')
  },
}

Blockly.Blocks['fs_makeDir'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 创建目录', '📁 Make Dir'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('创建目录')
  },
}

Blockly.Blocks['fs_delete'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 删除', '📁 Delete'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('删除文件或目录')
  },
}

Blockly.Blocks['fs_move'] = {
  init: function() {
    this.appendValueInput('FROM')
      .setCheck('String')
      .appendField(_b('📁 移动', '📁 Move'))
    this.appendValueInput('TO')
      .setCheck('String')
      .appendField(_b('到', 'To'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('移动文件或目录')
  },
}

Blockly.Blocks['fs_copy'] = {
  init: function() {
    this.appendValueInput('FROM')
      .setCheck('String')
      .appendField(_b('📁 复制', '📁 Copy'))
    this.appendValueInput('TO')
      .setCheck('String')
      .appendField(_b('到', 'To'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('复制文件或目录')
  },
}

Blockly.Blocks['fs_getSize'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 文件大小', '📁 Get Size'))
    this.setOutput(true, 'Number')
    this.setColour('#FFD93D')
    this.setTooltip('获取文件大小')
  },
}

Blockly.Blocks['fs_getDrive'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 所在驱动器', '📁 Get Drive'))
    this.setOutput(true, 'String')
    this.setColour('#FFD93D')
    this.setTooltip('获取路径所在的驱动器名称')
  },
}

Blockly.Blocks['fs_getFreeSpace'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 剩余空间', '📁 Free Space'))
    this.setOutput(true, 'Number')
    this.setColour('#FFD93D')
    this.setTooltip('获取驱动器的剩余空间')
  },
}

Blockly.Blocks['fs_read'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 读取文件', '📁 Read File'))
    this.setOutput(true, 'String')
    this.setColour('#FFD93D')
    this.setTooltip('读取文件内容')
  },
}

Blockly.Blocks['fs_write'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 写入文件', '📁 Write File'))
    this.appendValueInput('CONTENT')
      .setCheck('String')
      .appendField(_b('内容', 'Content'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('写入文件内容')
  },
}

Blockly.Blocks['fs_append'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 追加文件', '📁 Append File'))
    this.appendValueInput('CONTENT')
      .setCheck('String')
      .appendField(_b('内容', 'Content'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#FFD93D')
    this.setTooltip('追加内容到文件')
  },
}

Blockly.Blocks['fs_getName'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 文件名', '📁 Get Name'))
    this.setOutput(true, 'String')
    this.setColour('#FFD93D')
    this.setTooltip('获取路径的文件名部分')
  },
}

Blockly.Blocks['fs_getDir'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 目录名', '📁 Get Dir'))
    this.setOutput(true, 'String')
    this.setColour('#FFD93D')
    this.setTooltip('获取路径的目录部分')
  },
}

Blockly.Blocks['fs_combine'] = {
  init: function() {
    this.appendValueInput('PATH1')
      .setCheck('String')
      .appendField(_b('📁 合并路径', '📁 Combine'))
    this.appendValueInput('PATH2')
      .setCheck('String')
      .appendField(_b('和', 'And'))
    this.setOutput(true, 'String')
    this.setColour('#FFD93D')
    this.setTooltip('合并两个路径')
  },
}

Blockly.Blocks['fs_find'] = {
  init: function() {
    this.appendValueInput('WILDCARD')
      .setCheck('String')
      .appendField(_b('📁 搜索文件', '📁 Find'))
    this.setOutput(true, 'Array')
    this.setColour('#FFD93D')
    this.setTooltip('使用通配符搜索文件')
  },
}

Blockly.Blocks['fs_complete'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 补全路径', '📁 Complete'))
    this.appendValueInput('LOCATION')
      .setCheck('String')
      .appendField(_b('位置', 'Location'))
    this.setOutput(true, 'Array')
    this.setColour('#FFD93D')
    this.setTooltip('补全文件路径')
  },
}

Blockly.Blocks['fs_isDriveRoot'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 是挂载点', '📁 Is Drive Root'))
    this.setOutput(true, 'Boolean')
    this.setColour('#FFD93D')
    this.setTooltip('检查路径是否是挂载点')
  },
}

Blockly.Blocks['fs_getCapacity'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 磁盘容量', '📁 Capacity'))
    this.setOutput(true, 'Number')
    this.setColour('#FFD93D')
    this.setTooltip('获取驱动器总容量')
  },
}

Blockly.Blocks['fs_attributes'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('📁 文件属性', '📁 Attributes'))
    this.setOutput(true, null)
    this.setColour('#FFD93D')
    this.setTooltip('获取文件/目录属性(size, isDir, isReadOnly, created, modified)')
  },
}

export const fsBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('fs_'))
