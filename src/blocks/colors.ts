import * as Blockly from 'blockly'
import { _b } from '../locales'

const COLOR_OPTIONS: [string, string][] = [
  [_b('白色', 'White'), 'colors.white'],
  [_b('橙色', 'Orange'), 'colors.orange'],
  [_b('品红', 'Magenta'), 'colors.magenta'],
  [_b('浅蓝', 'Light Blue'), 'colors.lightBlue'],
  [_b('黄色', 'Yellow'), 'colors.yellow'],
  [_b('黄绿', 'Lime'), 'colors.lime'],
  [_b('粉色', 'Pink'), 'colors.pink'],
  [_b('灰色', 'Gray'), 'colors.gray'],
  [_b('浅灰', 'Light Gray'), 'colors.lightGray'],
  [_b('青色', 'Cyan'), 'colors.cyan'],
  [_b('紫色', 'Purple'), 'colors.purple'],
  [_b('蓝色', 'Blue'), 'colors.blue'],
  [_b('棕色', 'Brown'), 'colors.brown'],
  [_b('绿色', 'Green'), 'colors.green'],
  [_b('红色', 'Red'), 'colors.red'],
  [_b('黑色', 'Black'), 'colors.black'],
]

Blockly.Blocks['colors_combine'] = {
  init: function() {
    this.appendValueInput('COLOR1')
      .setCheck('Number')
      .appendField(_b('🎨 组合颜色', '🎨 Combine'))
    this.appendValueInput('COLOR2')
      .setCheck('Number')
      .appendField(_b('+', '+'))
    this.setOutput(true, 'Number')
    this.setColour('#F39C12')
    this.setTooltip('组合多个颜色值')
  },
}

Blockly.Blocks['colors_subtract'] = {
  init: function() {
    this.appendValueInput('COLORS')
      .setCheck('Number')
      .appendField(_b('🎨 减去颜色', '🎨 Subtract'))
    this.appendValueInput('SUBTRACT')
      .setCheck('Number')
      .appendField(_b('-', '-'))
    this.setOutput(true, 'Number')
    this.setColour('#F39C12')
    this.setTooltip('从颜色组合中减去指定颜色')
  },
}

Blockly.Blocks['colors_test'] = {
  init: function() {
    this.appendValueInput('COLORS')
      .setCheck('Number')
      .appendField(_b('🎨 测试颜色', '🎨 Test'))
    this.appendValueInput('COLOR')
      .setCheck('Number')
      .appendField(_b('包含', 'Contains'))
    this.setOutput(true, 'Boolean')
    this.setColour('#F39C12')
    this.setTooltip('测试颜色组合是否包含指定颜色')
  },
}

Blockly.Blocks['colors_packRGB'] = {
  init: function() {
    this.appendValueInput('R')
      .setCheck('Number')
      .appendField(_b('🎨 打包RGB R', '🎨 Pack RGB R'))
    this.appendValueInput('G')
      .setCheck('Number')
      .appendField(_b('G', 'G'))
    this.appendValueInput('B')
      .setCheck('Number')
      .appendField(_b('B', 'B'))
    this.setOutput(true, 'Number')
    this.setColour('#F39C12')
    this.setTooltip('将RGB值(0-1)打包为单个颜色值')
  },
}

Blockly.Blocks['colors_unpackRGB'] = {
  init: function() {
    this.appendValueInput('RGB')
      .setCheck('Number')
      .appendField(_b('🎨 解包RGB', '🎨 Unpack RGB'))
    this.setOutput(true, 'Array')
    this.setColour('#F39C12')
    this.setTooltip('将颜色值解包为{r, g, b}数组')
  },
}

Blockly.Blocks['colors_rgb8'] = {
  init: function() {
    this.appendValueInput('R')
      .setCheck('Number')
      .appendField(_b('🎨 RGB8 R', '🎨 RGB8 R'))
    this.appendValueInput('G')
      .setCheck('Number')
      .appendField(_b('G', 'G'))
    this.appendValueInput('B')
      .setCheck('Number')
      .appendField(_b('B', 'B'))
    this.setOutput(true, 'Number')
    this.setColour('#F39C12')
    this.setTooltip('将RGB值(0-255)转换为颜色值(已弃用)')
  },
}

Blockly.Blocks['colors_toBlit'] = {
  init: function() {
    this.appendValueInput('COLOR')
      .setCheck('Number')
      .appendField(_b('🎨 颜色转Blit', '🎨 Color to Blit'))
    this.setOutput(true, 'String')
    this.setColour('#F39C12')
    this.setTooltip('将颜色值转换为Blit字符')
  },
}

Blockly.Blocks['colors_fromBlit'] = {
  init: function() {
    this.appendValueInput('CHAR')
      .setCheck('String')
      .appendField(_b('🎨 Blit转颜色', '🎨 Blit to Color'))
    this.setOutput(true, 'Number')
    this.setColour('#F39C12')
    this.setTooltip('将Blit字符转换为颜色值')
  },
}

Blockly.Blocks['colors_constant'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('🎨')
      .appendField(new Blockly.FieldDropdown(COLOR_OPTIONS), 'COLOR')
    this.setOutput(true, 'Number')
    this.setColour('#F39C12')
    this.setTooltip('颜色常量')
  },
}

export const colorsBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('colors_'))
