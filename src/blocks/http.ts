import * as Blockly from 'blockly'
import { _b } from '../locales'

const HTTP_METHOD_OPTIONS: [string, string][] = [
  ['GET', 'GET'],
  ['POST', 'POST'],
  ['PUT', 'PUT'],
  ['DELETE', 'DELETE'],
]

Blockly.Blocks['http_request'] = {
  init: function() {
    this.appendValueInput('URL')
      .setCheck('String')
      .appendField(_b('🌐 HTTP请求', '🌐 HTTP Request'))
    this.appendDummyInput()
      .appendField(_b('方法', 'Method'))
      .appendField(new Blockly.FieldDropdown(HTTP_METHOD_OPTIONS), 'METHOD')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#4ECDC4')
    this.setTooltip('发送HTTP请求')
  },
}

Blockly.Blocks['http_checkURL'] = {
  init: function() {
    this.appendValueInput('URL')
      .setCheck('String')
      .appendField(_b('🌐 检查URL', '🌐 Check URL'))
    this.setOutput(true, 'Boolean')
    this.setColour('#4ECDC4')
    this.setTooltip('检查URL是否可访问')
  },
}

Blockly.Blocks['http_get'] = {
  init: function() {
    this.appendValueInput('URL')
      .setCheck('String')
      .appendField(_b('🌐 GET请求', '🌐 HTTP GET'))
    this.setOutput(true, 'String')
    this.setColour('#4ECDC4')
    this.setTooltip('发送GET请求并返回响应')
  },
}

Blockly.Blocks['http_post'] = {
  init: function() {
    this.appendValueInput('URL')
      .setCheck('String')
      .appendField(_b('🌐 POST请求', '🌐 HTTP POST'))
    this.appendValueInput('BODY')
      .setCheck('String')
      .appendField(_b('数据', 'Data'))
    this.setOutput(true, 'String')
    this.setColour('#4ECDC4')
    this.setTooltip('发送POST请求并返回响应')
  },
}

Blockly.Blocks['http_websocket'] = {
  init: function() {
    this.appendValueInput('URL')
      .setCheck('String')
      .appendField(_b('🌐 建立WebSocket', '🌐 WebSocket'))
    this.setOutput(true, null)
    this.setColour('#4ECDC4')
    this.setTooltip('同步建立WebSocket连接')
  },
}

Blockly.Blocks['http_websocketAsync'] = {
  init: function() {
    this.appendValueInput('URL')
      .setCheck('String')
      .appendField(_b('🌐 异步WebSocket', '🌐 WS Async'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#4ECDC4')
    this.setTooltip('异步建立WebSocket连接')
  },
}

Blockly.Blocks['http_checkURLAsync'] = {
  init: function() {
    this.appendValueInput('URL')
      .setCheck('String')
      .appendField(_b('🌐 异步检查URL', '🌐 Check URL Async'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#4ECDC4')
    this.setTooltip('异步检查URL是否允许')
  },
}

export const httpBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('http_'))
