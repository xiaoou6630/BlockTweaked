import * as Blockly from 'blockly'
import { _b } from '../locales'

// ============ 实心帽子积木（无内槽，只从下方连接）============

Blockly.Blocks['hat_start'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🚀 启动时', '🚀 When Started'))
    this.setNextStatement(true)
    this.setColour('#FF5722')
    this.setTooltip('程序启动时执行的代码，将积木接在下方')
  },
}

Blockly.Blocks['hat_eventLoop'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔁 循环监听事件', '🔁 Event Loop'))
    this.setNextStatement(true)
    this.setColour('#E67E22')
    this.setTooltip('无限循环拉取事件，将事件处理块接在下方')
  },
}

// ============ 快捷帽子积木（无内槽，仅下方连接）============

Blockly.Blocks['hat_rednet'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📡 收到红网消息时', '📡 On Rednet Message'))
    this.setNextStatement(true)
    this.setColour('#FF5722')
    this.setTooltip('当收到红网消息时执行（快捷方式）')
  },
}

Blockly.Blocks['hat_key'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('⌨️ 按键按下时', '⌨️ On Key Press'))
    this.setNextStatement(true)
    this.setColour('#FF5722')
    this.setTooltip('当按下按键时执行（快捷方式）')
  },
}

Blockly.Blocks['hat_timer'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('⏰ 定时器触发时', '⏰ On Timer'))
    this.setNextStatement(true)
    this.setColour('#FF5722')
    this.setTooltip('当定时器触发时执行（快捷方式）')
  },
}

Blockly.Blocks['hat_char'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🔤 字符输入时', '🔤 On Char Input'))
    this.setNextStatement(true)
    this.setColour('#FF5722')
    this.setTooltip('当用户输入字符时执行（快捷方式）')
  },
}

Blockly.Blocks['hat_touch'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('👆 屏幕触摸时', '👆 On Touch'))
    this.setNextStatement(true)
    this.setColour('#FF5722')
    this.setTooltip('当触摸屏幕时执行（快捷方式）')
  },
}

// ============ 事件内联处理器 ============

Blockly.Blocks['event_when'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('📩 当事件为', '📩 When Event Is'))
      .appendField(new Blockly.FieldDropdown([
        [_b('定时器', 'Timer'), 'timer'],
        [_b('红网消息', 'Rednet Msg'), 'rednet_message'],
        [_b('按键', 'Key Press'), 'key'],
        [_b('按键松开', 'Key Up'), 'key_up'],
        [_b('字符输入', 'Char Input'), 'char'],
        [_b('鼠标点击', 'Mouse Click'), 'mouse_click'],
        [_b('鼠标拖拽', 'Mouse Drag'), 'mouse_drag'],
        [_b('鼠标滚轮', 'Mouse Scroll'), 'mouse_scroll'],
        [_b('鼠标松开', 'Mouse Up'), 'mouse_up'],
        [_b('触摸', 'Touch'), 'monitor_touch'],
        [_b('触摸松开', 'Touch Up'), 'monitor_touch_up'],
        [_b('调制解调器', 'Modem Msg'), 'modem_message'],
        [_b('外设', 'Peripheral'), 'peripheral'],
        [_b('外设断开', 'Peripheral Detach'), 'peripheral_detach'],
        [_b('磁盘', 'Disk'), 'disk'],
        [_b('磁盘弹出', 'Disk Eject'), 'disk_eject'],
        [_b('HTTP成功', 'HTTP Success'), 'http_success'],
        [_b('HTTP失败', 'HTTP Failure'), 'http_failure'],
        [_b('警报', 'Alarm'), 'alarm'],
        [_b('终止', 'Terminate'), 'terminate'],
      ]), 'EVENT')
    this.appendStatementInput('DO')
      .appendField(_b('执行', 'Do'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E67E22')
    this.setTooltip('当事件类型匹配时执行内部代码')
  },
}

// ============ 事件数据积木 ============

Blockly.Blocks['event_senderID'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 发送者ID', '📩 Sender ID'))
    this.setOutput(true, 'Number')
    this.setColour('#FF9800')
  },
}
Blockly.Blocks['event_message'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 消息内容', '📩 Message'))
    this.setOutput(true, null)
    this.setColour('#FF9800')
  },
}
Blockly.Blocks['event_keyCode'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 按键码', '📩 Key Code'))
    this.setOutput(true, 'Number')
    this.setColour('#FF9800')
  },
}
Blockly.Blocks['event_char'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 输入字符', '📩 Input Char'))
    this.setOutput(true, 'String')
    this.setColour('#FF9800')
  },
}
Blockly.Blocks['event_timerID'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 定时器ID', '📩 Timer ID'))
    this.setOutput(true, 'Number')
    this.setColour('#FF9800')
  },
}
Blockly.Blocks['event_touchX'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 触摸X', '📩 Touch X'))
    this.setOutput(true, 'Number')
    this.setColour('#FF9800')
  },
}
Blockly.Blocks['event_touchY'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 触摸Y', '📩 Touch Y'))
    this.setOutput(true, 'Number')
    this.setColour('#FF9800')
  },
}
Blockly.Blocks['event_mouseX'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 鼠标X', '📩 Mouse X'))
    this.setOutput(true, 'Number')
    this.setColour('#FF9800')
  },
}
Blockly.Blocks['event_mouseY'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 鼠标Y', '📩 Mouse Y'))
    this.setOutput(true, 'Number')
    this.setColour('#FF9800')
  },
}
Blockly.Blocks['event_mouseButton'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('📩 鼠标按键', '📩 Mouse Button'))
    this.setOutput(true, 'Number')
    this.setColour('#FF9800')
  },
}

export const eventBlocks = Object.keys(Blockly.Blocks).filter(k =>
  k.startsWith('hat_') || k.startsWith('event_')
)
