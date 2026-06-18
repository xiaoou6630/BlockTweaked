import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['vector_new'] = {
  init: function() {
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(_b('➡️ 向量 X', '➡️ Vector X'))
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(_b('Y', 'Y'))
    this.appendValueInput('Z')
      .setCheck('Number')
      .appendField(_b('Z', 'Z'))
    this.setOutput(true, 'Vector')
    this.setColour('#00BCD4')
    this.setTooltip('创建一个三维向量')
  },
}

Blockly.Blocks['vector_add'] = {
  init: function() {
    this.appendValueInput('V1')
      .setCheck('Vector')
      .appendField(_b('➡️ 向量加', '➡️ Vector Add'))
    this.appendValueInput('V2')
      .setCheck('Vector')
      .appendField(_b('+', '+'))
    this.setOutput(true, 'Vector')
    this.setColour('#00BCD4')
    this.setTooltip('两个向量相加')
  },
}

Blockly.Blocks['vector_sub'] = {
  init: function() {
    this.appendValueInput('V1')
      .setCheck('Vector')
      .appendField(_b('➡️ 向量减', '➡️ Vector Sub'))
    this.appendValueInput('V2')
      .setCheck('Vector')
      .appendField(_b('-', '-'))
    this.setOutput(true, 'Vector')
    this.setColour('#00BCD4')
    this.setTooltip('两个向量相减')
  },
}

Blockly.Blocks['vector_mul'] = {
  init: function() {
    this.appendValueInput('V1')
      .setCheck('Vector')
      .appendField(_b('➡️ 向量乘', '➡️ Vector Mul'))
    this.appendValueInput('FACTOR')
      .setCheck('Number')
      .appendField(_b('*', '*'))
    this.setOutput(true, 'Vector')
    this.setColour('#00BCD4')
    this.setTooltip('向量乘以标量')
  },
}

Blockly.Blocks['vector_div'] = {
  init: function() {
    this.appendValueInput('V1')
      .setCheck('Vector')
      .appendField(_b('➡️ 向量除', '➡️ Vector Div'))
    this.appendValueInput('FACTOR')
      .setCheck('Number')
      .appendField(_b('/', '/'))
    this.setOutput(true, 'Vector')
    this.setColour('#00BCD4')
    this.setTooltip('向量除以标量')
  },
}

Blockly.Blocks['vector_dot'] = {
  init: function() {
    this.appendValueInput('V1')
      .setCheck('Vector')
      .appendField(_b('➡️ 点积', '➡️ Dot'))
    this.appendValueInput('V2')
      .setCheck('Vector')
      .appendField(_b('·', '·'))
    this.setOutput(true, 'Number')
    this.setColour('#00BCD4')
    this.setTooltip('两个向量的点积')
  },
}

Blockly.Blocks['vector_cross'] = {
  init: function() {
    this.appendValueInput('V1')
      .setCheck('Vector')
      .appendField(_b('➡️ 叉积', '➡️ Cross'))
    this.appendValueInput('V2')
      .setCheck('Vector')
      .appendField(_b('×', '×'))
    this.setOutput(true, 'Vector')
    this.setColour('#00BCD4')
    this.setTooltip('两个向量的叉积')
  },
}

Blockly.Blocks['vector_length'] = {
  init: function() {
    this.appendValueInput('V')
      .setCheck('Vector')
      .appendField(_b('➡️ 向量长度', '➡️ Length'))
    this.setOutput(true, 'Number')
    this.setColour('#00BCD4')
    this.setTooltip('计算向量的长度')
  },
}

Blockly.Blocks['vector_normalize'] = {
  init: function() {
    this.appendValueInput('V')
      .setCheck('Vector')
      .appendField(_b('➡️ 归一化向量', '➡️ Normalize'))
    this.setOutput(true, 'Vector')
    this.setColour('#00BCD4')
    this.setTooltip('将向量归一化为单位向量')
  },
}

Blockly.Blocks['vector_tostring'] = {
  init: function() {
    this.appendValueInput('V')
      .setCheck('Vector')
      .appendField(_b('➡️ 向量转字符串', '➡️ ToString'))
    this.setOutput(true, 'String')
    this.setColour('#00BCD4')
    this.setTooltip('将向量转换为字符串表示')
  },
}

export const vectorBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('vector_'))
