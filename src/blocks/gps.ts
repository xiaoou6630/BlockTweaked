import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['gps_locate'] = {
  init: function() {
    this.appendValueInput('TIMEOUT')
      .setCheck('Number')
      .appendField(_b('🛰️ GPS定位 超时', '🛰️ GPS Locate Timeout'))
    this.setOutput(true, 'Array')
    this.setColour('#16A085')
    this.setTooltip('使用GPS定位当前位置，返回{x, y, z}坐标')
  },
}

export const gpsBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('gps_'))
