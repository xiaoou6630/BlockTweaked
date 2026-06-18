import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['paintutils_drawPixel'] = {
  init: function() {
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(_b('🖌️ 画点 X', '🖌️ Draw Pixel X'))
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(_b('Y', 'Y'))
    this.appendValueInput('COLOR')
      .setCheck('Number')
      .appendField(_b('颜色', 'Color'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E91E63')
    this.setTooltip('在指定位置画一个点')
  },
}

Blockly.Blocks['paintutils_drawLine'] = {
  init: function() {
    this.appendValueInput('X1')
      .setCheck('Number')
      .appendField(_b('🖌️ 画线 X1', '🖌️ Draw Line X1'))
    this.appendValueInput('Y1')
      .setCheck('Number')
      .appendField(_b('Y1', 'Y1'))
    this.appendValueInput('X2')
      .setCheck('Number')
      .appendField(_b('X2', 'X2'))
    this.appendValueInput('Y2')
      .setCheck('Number')
      .appendField(_b('Y2', 'Y2'))
    this.appendValueInput('COLOR')
      .setCheck('Number')
      .appendField(_b('颜色', 'Color'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E91E63')
    this.setTooltip('在两点之间画一条线')
  },
}

Blockly.Blocks['paintutils_drawBox'] = {
  init: function() {
    this.appendValueInput('X1')
      .setCheck('Number')
      .appendField(_b('🖌️ 画框 X1', '🖌️ Draw Box X1'))
    this.appendValueInput('Y1')
      .setCheck('Number')
      .appendField(_b('Y1', 'Y1'))
    this.appendValueInput('X2')
      .setCheck('Number')
      .appendField(_b('X2', 'X2'))
    this.appendValueInput('Y2')
      .setCheck('Number')
      .appendField(_b('Y2', 'Y2'))
    this.appendValueInput('COLOR')
      .setCheck('Number')
      .appendField(_b('颜色', 'Color'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E91E63')
    this.setTooltip('画一个空心矩形框')
  },
}

Blockly.Blocks['paintutils_drawFilledBox'] = {
  init: function() {
    this.appendValueInput('X1')
      .setCheck('Number')
      .appendField(_b('🖌️ 画填充框 X1', '🖌️ Fill Box X1'))
    this.appendValueInput('Y1')
      .setCheck('Number')
      .appendField(_b('Y1', 'Y1'))
    this.appendValueInput('X2')
      .setCheck('Number')
      .appendField(_b('X2', 'X2'))
    this.appendValueInput('Y2')
      .setCheck('Number')
      .appendField(_b('Y2', 'Y2'))
    this.appendValueInput('COLOR')
      .setCheck('Number')
      .appendField(_b('颜色', 'Color'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E91E63')
    this.setTooltip('画一个填充矩形')
  },
}

Blockly.Blocks['paintutils_loadImage'] = {
  init: function() {
    this.appendValueInput('PATH')
      .setCheck('String')
      .appendField(_b('🖌️ 加载图像', '🖌️ Load Image'))
    this.setOutput(true, null)
    this.setColour('#E91E63')
    this.setTooltip('从文件加载图像数据')
  },
}

Blockly.Blocks['paintutils_drawImage'] = {
  init: function() {
    this.appendValueInput('IMAGE')
      .setCheck(null)
      .appendField(_b('🖌️ 绘制图像', '🖌️ Draw Image'))
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(_b('X', 'X'))
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(_b('Y', 'Y'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E91E63')
    this.setTooltip('在指定位置绘制图像')
  },
}

export const paintutilsBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('paintutils_'))
