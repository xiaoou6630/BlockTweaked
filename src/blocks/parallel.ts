import * as Blockly from 'blockly'
import { _b } from '../locales'

Blockly.Blocks['parallel_waitForAny'] = {
  init: function() {
    this.appendStatement('FUNCTIONS')
      .appendField(_b('⏳ 并行等待任一', '⏳ Wait For Any'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#1ABC9C')
    this.setTooltip('并行执行多个函数，任一完成即返回')
  },
}

Blockly.Blocks['parallel_waitForAll'] = {
  init: function() {
    this.appendStatement('FUNCTIONS')
      .appendField(_b('⏳ 并行等待全部', '⏳ Wait For All'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#1ABC9C')
    this.setTooltip('并行执行多个函数，全部完成才返回')
  },
}

export const parallelBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('parallel_'))
