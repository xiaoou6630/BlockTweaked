import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['textutils_slowWrite'] = {
  init: function() {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(_b('📝 慢速写入', '📝 Slow Write'))
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(_b('速率', 'Rate'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#8E44AD')
    this.setTooltip('逐字符慢速写入文本')
  },
}

Blockly.Blocks['textutils_slowPrint'] = {
  init: function() {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(_b('📝 慢速打印', '📝 Slow Print'))
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(_b('速率', 'Rate'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#8E44AD')
    this.setTooltip('逐字符慢速打印文本并换行')
  },
}

Blockly.Blocks['textutils_formatTime'] = {
  init: function() {
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(_b('📝 格式化时间', '📝 Format Time'))
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[_b('12小时制', '12h'), 'false'], [_b('24小时制', '24h'), 'true']]), 'TWENTY_FOUR')
    this.setOutput(true, 'String')
    this.setColour('#8E44AD')
    this.setTooltip('格式化时间为字符串')
  },
}

Blockly.Blocks['textutils_serialize'] = {
  init: function() {
    this.appendValueInput('TABLE')
      .setCheck(null)
      .appendField(_b('📝 序列化', '📝 Serialize'))
    this.setOutput(true, 'String')
    this.setColour('#8E44AD')
    this.setTooltip('将表序列化为Lua字符串')
  },
}

Blockly.Blocks['textutils_unserialize'] = {
  init: function() {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(_b('📝 反序列化', '📝 Unserialize'))
    this.setOutput(true, null)
    this.setColour('#8E44AD')
    this.setTooltip('将Lua字符串反序列化为表')
  },
}

Blockly.Blocks['textutils_serializeJSON'] = {
  init: function() {
    this.appendValueInput('TABLE')
      .setCheck(null)
      .appendField(_b('📝 序列化JSON', '📝 JSON Serialize'))
    this.setOutput(true, 'String')
    this.setColour('#8E44AD')
    this.setTooltip('将表序列化为JSON字符串')
  },
}

Blockly.Blocks['textutils_unserializeJSON'] = {
  init: function() {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(_b('📝 反序列化JSON', '📝 JSON Parse'))
    this.setOutput(true, null)
    this.setColour('#8E44AD')
    this.setTooltip('将JSON字符串反序列化为表')
  },
}

Blockly.Blocks['textutils_urlEncode'] = {
  init: function() {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(_b('📝 URL编码', '📝 URL Encode'))
    this.setOutput(true, 'String')
    this.setColour('#8E44AD')
    this.setTooltip('对字符串进行URL编码')
  },
}

Blockly.Blocks['textutils_pagedPrint'] = {
  init: function() {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(_b('📝 分页打印', '📝 Paged Print'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#8E44AD')
    this.setTooltip('分页打印文本')
  },
}

Blockly.Blocks['textutils_tabulate'] = {
  init: function() {
    this.appendValueInput('TABLE')
      .setCheck('Array')
      .appendField(_b('📝 表格输出', '📝 Tabulate'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#8E44AD')
    this.setTooltip('以表格形式输出数据')
  },
}

export const textutilsBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('textutils_'))
