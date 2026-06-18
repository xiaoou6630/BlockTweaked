import * as Blockly from 'blockly'
import { _b } from '../locales'

const COLOR_OPTIONS: [string, string][] = [
  [_b('白色', 'White'), 'white'], [_b('橙色', 'Orange'), 'orange'], [_b('品红', 'Magenta'), 'magenta'],
  [_b('浅蓝', 'Light Blue'), 'lightBlue'], [_b('黄色', 'Yellow'), 'yellow'], [_b('亮绿', 'Lime'), 'lime'],
  [_b('粉色', 'Pink'), 'pink'], [_b('灰色', 'Gray'), 'gray'], [_b('亮灰', 'Light Gray'), 'lightGray'],
  [_b('青色', 'Cyan'), 'cyan'], [_b('紫色', 'Purple'), 'purple'], [_b('蓝色', 'Blue'), 'blue'],
  [_b('棕色', 'Brown'), 'brown'], [_b('绿色', 'Green'), 'green'], [_b('红色', 'Red'), 'red'], [_b('黑色', 'Black'), 'black'],
]

Blockly.Blocks['term_write'] = {
  init: function() {
    this.appendValueInput('TEXT').setCheck('String').appendField(_b('📺 打印', '📺 Write'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('在终端打印文本')
  },
}
Blockly.Blocks['term_clear'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 清屏', '📺 Clear'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('清除终端屏幕')
  },
}
Blockly.Blocks['term_clearLine'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 清除当前行', '📺 Clear Line'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('清除终端当前行')
  },
}
Blockly.Blocks['term_setCursorPos'] = {
  init: function() {
    this.appendValueInput('X').setCheck('Number').appendField(_b('📺 设置光标 X', '📺 Set Cursor X'))
    this.appendValueInput('Y').setCheck('Number').appendField('Y')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('设置光标位置')
  },
}
Blockly.Blocks['term_getCursorPos'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 获取光标位置', '📺 Get Cursor'))
    this.setOutput(true, 'Array'); this.setColour('#4D96FF')
    this.setTooltip('获取光标位置(x, y)')
  },
}
Blockly.Blocks['term_getSize'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 获取终端大小', '📺 Get Size'))
    this.setOutput(true, 'Array'); this.setColour('#4D96FF')
    this.setTooltip('获取终端尺寸(width, height)')
  },
}
Blockly.Blocks['term_scroll'] = {
  init: function() {
    this.appendValueInput('LINES').setCheck('Number')
      .appendField(_b('📺 滚动', '📺 Scroll')).appendField(_b('行', 'Lines'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('滚动终端屏幕')
  },
}
Blockly.Blocks['term_setTextColor'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 文字颜色', '📺 Text Color'))
      .appendField(new Blockly.FieldDropdown(COLOR_OPTIONS), 'COLOR')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('设置文字颜色')
  },
}
Blockly.Blocks['term_setBackgroundColor'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 背景颜色', '📺 Bg Color'))
      .appendField(new Blockly.FieldDropdown(COLOR_OPTIONS), 'COLOR')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('设置背景颜色')
  },
}
Blockly.Blocks['term_isColor'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 支持颜色', '📺 Is Color'))
    this.setOutput(true, 'Boolean'); this.setColour('#4D96FF')
    this.setTooltip('检查终端是否支持颜色')
  },
}
Blockly.Blocks['term_read'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 读取输入', '📺 Read'))
    this.setOutput(true, 'String'); this.setColour('#4D96FF')
    this.setTooltip('读取用户输入')
  },
}
Blockly.Blocks['term_redirect'] = {
  init: function() {
    this.appendValueInput('TARGET').setCheck(null).appendField(_b('📺 重定向到', '📺 Redirect To'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('重定向终端输出到目标')
  },
}
Blockly.Blocks['term_current'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 当前终端', '📺 Current Term'))
    this.setOutput(true, null); this.setColour('#4D96FF')
    this.setTooltip('获取当前终端')
  },
}
Blockly.Blocks['term_native'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 原生终端', '📺 Native Term'))
    this.setOutput(true, null); this.setColour('#4D96FF')
    this.setTooltip('获取原生终端')
  },
}
Blockly.Blocks['term_setCursorBlink'] = {
  init: function() {
    this.appendValueInput('BLINK').setCheck('Boolean').appendField(_b('📺 光标闪烁', '📺 Cursor Blink'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('设置光标是否闪烁')
  },
}
Blockly.Blocks['term_getCursorBlink'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 获取光标闪烁', '📺 Get Cursor Blink'))
    this.setOutput(true, 'Boolean'); this.setColour('#4D96FF')
    this.setTooltip('获取光标闪烁状态')
  },
}
Blockly.Blocks['term_getTextColor'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 文字颜色值', '📺 Text Color Value'))
    this.setOutput(true, 'Number'); this.setColour('#4D96FF')
    this.setTooltip('获取当前文字颜色值')
  },
}
Blockly.Blocks['term_getBackgroundColor'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📺 背景颜色值', '📺 Bg Color Value'))
    this.setOutput(true, 'Number'); this.setColour('#4D96FF')
    this.setTooltip('获取当前背景颜色值')
  },
}
Blockly.Blocks['term_blit'] = {
  init: function() {
    this.appendValueInput('TEXT').setCheck('String').appendField(_b('📺 彩色打印', '📺 Blit'))
    this.appendValueInput('TEXT_COLOR').setCheck('String').appendField(_b('前景色', 'Foreground'))
    this.appendValueInput('BG_COLOR').setCheck('String').appendField(_b('背景色', 'Background'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('用指定前景色和背景色打印文本')
  },
}

// === OS blocks ===
Blockly.Blocks['os_getComputerID'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('💻 电脑ID', '💻 Computer ID'))
    this.setOutput(true, 'Number'); this.setColour('#4D96FF')
    this.setTooltip('获取电脑ID')
  },
}
Blockly.Blocks['os_getComputerLabel'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('💻 电脑标签', '💻 Computer Label'))
    this.setOutput(true, 'String'); this.setColour('#4D96FF')
    this.setTooltip('获取电脑标签')
  },
}
Blockly.Blocks['os_setComputerLabel'] = {
  init: function() {
    this.appendValueInput('LABEL').setCheck('String').appendField(_b('💻 设置标签', '💻 Set Label'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('设置电脑标签')
  },
}
Blockly.Blocks['os_queueEvent'] = {
  init: function() {
    this.appendValueInput('EVENT').setCheck('String').appendField(_b('💻 队列事件', '💻 Queue Event'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('将事件加入队列')
  },
}
Blockly.Blocks['os_pullEvent'] = {
  init: function() {
    this.appendValueInput('FILTER').setCheck('String').appendField(_b('💻 拉取事件', '💻 Pull Event'))
    this.setOutput(true, 'Array'); this.setColour('#4D96FF')
    this.setTooltip('拉取事件')
  },
}
Blockly.Blocks['os_sleep'] = {
  init: function() {
    this.appendValueInput('TIME').setCheck('Number')
      .appendField(_b('💻 等待', '💻 Sleep')).appendField(_b('秒', 's'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('等待指定秒数')
  },
}
Blockly.Blocks['os_time'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('💻 游戏时间', '💻 Game Time'))
    this.setOutput(true, 'Number'); this.setColour('#4D96FF'); this.setTooltip('获取游戏时间')
  },
}
Blockly.Blocks['os_clock'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('💻 运行时间', '💻 Clock'))
    this.setOutput(true, 'Number'); this.setColour('#4D96FF'); this.setTooltip('获取电脑运行时间')
  },
}
Blockly.Blocks['os_shutdown'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('💻 关机', '💻 Shutdown'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('关闭电脑')
  },
}
Blockly.Blocks['os_reboot'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('💻 重启', '💻 Reboot'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('重启电脑')
  },
}
Blockly.Blocks['os_getFuelLevel'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('💻 燃料等级', '💻 Fuel Level'))
    this.setOutput(true, 'Number'); this.setColour('#4D96FF'); this.setTooltip('获取燃料等级')
  },
}
Blockly.Blocks['os_setFuelLevel'] = {
  init: function() {
    this.appendValueInput('LEVEL').setCheck('Number').appendField(_b('💻 设置燃料', '💻 Set Fuel'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('设置燃料等级')
  },
}
Blockly.Blocks['os_startTimer'] = {
  init: function() {
    this.appendValueInput('TIME').setCheck('Number').appendField(_b('💻 启动定时器', '💻 Start Timer'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('启动一个定时器')
  },
}
Blockly.Blocks['os_cancelTimer'] = {
  init: function() {
    this.appendValueInput('ID').setCheck('Number').appendField(_b('💻 取消定时器', '💻 Cancel Timer'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('取消指定ID的定时器')
  },
}
Blockly.Blocks['os_setAlarm'] = {
  init: function() {
    this.appendValueInput('TIME').setCheck('Number').appendField(_b('💻 设置闹钟', '💻 Set Alarm'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('设置在游戏内时间触发的闹钟')
  },
}
Blockly.Blocks['os_cancelAlarm'] = {
  init: function() {
    this.appendValueInput('ID').setCheck('Number').appendField(_b('💻 取消闹钟', '💻 Cancel Alarm'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#4D96FF'); this.setTooltip('取消指定ID的闹钟')
  },
}
Blockly.Blocks['os_version'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('💻 系统版本', '💻 OS Version'))
    this.setOutput(true, 'String'); this.setColour('#4D96FF'); this.setTooltip('获取CraftOS版本')
  },
}
Blockly.Blocks['os_day'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('💻 游戏天数', '💻 Game Day'))
    this.setOutput(true, 'Number'); this.setColour('#4D96FF'); this.setTooltip('获取游戏天数')
  },
}

export const osBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('term_') || k.startsWith('os_'))
