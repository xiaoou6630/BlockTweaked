import * as Blockly from 'blockly'
import { _b } from '../locales'
import { registerExtension } from './extensionManager'
import type { LuaGenerator } from 'blockly/lua'

// ─── GPU Blocks ───
Blockly.Blocks['gpu_fill'] = {
  init() {
    this.appendDummyInput().appendField(_b('🖥️ GPU 填充', '🖥️ GPU Fill'))
    this.appendValueInput('COLOR').setCheck('Number').appendField(_b('颜色', 'Color'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E67E22')
  }
}
Blockly.Blocks['gpu_draw_text'] = {
  init() {
    this.appendDummyInput().appendField(_b('🖥️ GPU 绘制文字', '🖥️ GPU Draw Text'))
    this.appendValueInput('X').setCheck('Number').appendField('X')
    this.appendValueInput('Y').setCheck('Number').appendField('Y')
    this.appendValueInput('TEXT').setCheck('String').appendField(_b('文本', 'Text'))
    this.appendValueInput('COLOR').setCheck('Number').appendField(_b('颜色', 'Color'))
    this.setInputsInline(true)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E67E22')
  }
}
Blockly.Blocks['gpu_sync'] = {
  init() {
    this.appendDummyInput().appendField(_b('🖥️ GPU 同步', '🖥️ GPU Sync'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E67E22')
  }
}
Blockly.Blocks['gpu_rectangle'] = {
  init() {
    this.appendDummyInput().appendField(_b('🖥️ GPU 矩形', '🖥️ GPU Rectangle'))
    this.appendValueInput('X').setCheck('Number').appendField('X')
    this.appendValueInput('Y').setCheck('Number').appendField('Y')
    this.appendValueInput('W').setCheck('Number').appendField('W')
    this.appendValueInput('H').setCheck('Number').appendField('H')
    this.appendValueInput('COLOR').setCheck('Number').appendField(_b('颜色', 'Color'))
    this.setInputsInline(true)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E67E22')
  }
}
Blockly.Blocks['gpu_clear_vram'] = {
  init() {
    this.appendDummyInput().appendField(_b('🖥️ 清空显存', '🖥️ Clear VRAM'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#E67E22')
  }
}

// ─── Array Drive Blocks ───
Blockly.Blocks['array_get_drives'] = {
  init() {
    this.appendDummyInput().appendField(_b('💾 获取硬盘列表', '💾 Get Drives'))
    this.setOutput(true, 'Array')
    this.setColour('#3498DB')
  }
}
Blockly.Blocks['array_get_arrays'] = {
  init() {
    this.appendDummyInput().appendField(_b('💾 获取阵列列表', '💾 Get Arrays'))
    this.setOutput(true, 'Array')
    this.setColour('#3498DB')
  }
}
Blockly.Blocks['array_create'] = {
  init() {
    this.appendDummyInput().appendField(_b('💾 创建阵列', '💾 Create Array'))
    this.appendValueInput('SLOTS').setCheck('Array').appendField(_b('插槽', 'Slots'))
    this.appendValueInput('LEVEL').setCheck('String').appendField(_b('级别', 'Level'))
    this.setOutput(true, 'String')
    this.setColour('#3498DB')
  }
}

// ─── FFmpeg API Blocks ───
Blockly.Blocks['ffmpeg_check'] = {
  init() {
    this.appendDummyInput().appendField(_b('🎬 FFmpeg 检测', '🎬 Check FFmpeg'))
    this.setOutput(true, 'Boolean')
    this.setColour('#9B59B6')
  }
}
Blockly.Blocks['ffmpeg_version'] = {
  init() {
    this.appendDummyInput().appendField(_b('🎬 FFmpeg 版本', '🎬 FFmpeg Version'))
    this.setOutput(true, 'Table')
    this.setColour('#9B59B6')
  }
}
Blockly.Blocks['ffmpeg_execute'] = {
  init() {
    this.appendDummyInput().appendField(_b('🎬 执行 FFmpeg', '🎬 Run FFmpeg'))
    this.appendValueInput('ARGS').setCheck('Array').appendField(_b('参数', 'Args'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#9B59B6')
  }
}

// ─── Monitor Blocks ───
Blockly.Blocks['monitor_set_text'] = {
  init() {
    this.appendDummyInput().appendField(_b('🖥️ 显示器文字', '🖥️ Monitor Text'))
    this.appendValueInput('LINE').setCheck('Number').appendField(_b('行', 'Line'))
    this.appendValueInput('TEXT').setCheck('String').appendField(_b('文本', 'Text'))
    this.setInputsInline(true)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#1ABC9C')
  }
}
Blockly.Blocks['monitor_clear'] = {
  init() {
    this.appendDummyInput().appendField(_b('🖥️ 清空显示器', '🖥️ Clear Monitor'))
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour('#1ABC9C')
  }
}

// ─── Lua Code Generators for Extension Blocks ───
export function registerCodeGenerators(gen: LuaGenerator) {
  if (!gen) return

  // GPU
  gen.forBlock['gpu_fill'] = (block: Blockly.Block) => {
    const color = gen.valueToCode(block, 'COLOR', 0) || '0x000000'
    return `peripheral.find("gpu"):fill(${color})\n`
  }
  gen.forBlock['gpu_draw_text'] = (block: Blockly.Block) => {
    const x = gen.valueToCode(block, 'X', 0) || '0'
    const y = gen.valueToCode(block, 'Y', 0) || '0'
    const text = gen.valueToCode(block, 'TEXT', 0) || '""'
    const color = gen.valueToCode(block, 'COLOR', 0) || '0xFFFFFFFF'
    return `peripheral.find("gpu"):drawText(${x}, ${y}, ${text}, ${color})\n`
  }
  gen.forBlock['gpu_sync'] = () => `peripheral.find("gpu"):sync()\n`
  gen.forBlock['gpu_rectangle'] = (block: Blockly.Block) => {
    const x = gen.valueToCode(block, 'X', 0) || '0'
    const y = gen.valueToCode(block, 'Y', 0) || '0'
    const w = gen.valueToCode(block, 'W', 0) || '10'
    const h = gen.valueToCode(block, 'H', 0) || '10'
    const color = gen.valueToCode(block, 'COLOR', 0) || '0x000000'
    return `peripheral.find("gpu"):filledRectangle(${x}, ${y}, ${w}, ${h}, ${color})\n`
  }
  gen.forBlock['gpu_clear_vram'] = () => `peripheral.find("gpu"):clearVRAM()\n`

  // Array Drive
  gen.forBlock['array_get_drives'] = () => ['peripheral.find("array_drive"):getDrives()', 0]
  gen.forBlock['array_get_arrays'] = () => ['peripheral.find("array_drive"):getArrays()', 0]
  gen.forBlock['array_create'] = (block: Blockly.Block) => {
    const slots = gen.valueToCode(block, 'SLOTS', 0) || '{}'
    const level = gen.valueToCode(block, 'LEVEL', 0) || '"raid0"'
    return `peripheral.find("array_drive"):createArray(${slots}, ${level})\n`
  }

  // FFmpeg
  gen.forBlock['ffmpeg_check'] = () => ['peripheral.find("ffmpeg_api"):isFFmpegInstalled()', 0]
  gen.forBlock['ffmpeg_version'] = () => ['peripheral.find("ffmpeg_api"):getFFmpegVersion()', 0]
  gen.forBlock['ffmpeg_execute'] = (block: Blockly.Block) => {
    const args = gen.valueToCode(block, 'ARGS', 0) || '{}'
    return `peripheral.find("ffmpeg_api"):execute(${args})\n`
  }

  // Monitor
  gen.forBlock['monitor_set_text'] = (block: Blockly.Block) => {
    const line = gen.valueToCode(block, 'LINE', 0) || '1'
    const text = gen.valueToCode(block, 'TEXT', 0) || '""'
    return `peripheral.find("monitor"):setText(${text})\n`
  }
  gen.forBlock['monitor_clear'] = () => `peripheral.find("monitor"):clear()\n`
}

// ─── Extension Registration ───
export function initCCExpand() {
  registerExtension({
    id: 'ccexpand',
    name: 'CCExpand 外设',
    nameEn: 'CCExpand Peripherals',
    icon: '🔌',
    description: 'GPU、阵列硬盘、FFmpeg 等高级外设积木',
    descriptionEn: 'GPU, Array Drive, FFmpeg, Monitor blocks',
    blocks: [],
    category: {
      name: _b('🔌 CCExpand 外设', '🔌 CCExpand Peripherals'),
      colour: '#E67E22',
      contents: [
        { kind: 'block', type: 'gpu_fill' },
        { kind: 'block', type: 'gpu_draw_text' },
        { kind: 'block', type: 'gpu_rectangle' },
        { kind: 'block', type: 'gpu_sync' },
        { kind: 'block', type: 'gpu_clear_vram' },
        { kind: 'sep' },
        { kind: 'block', type: 'array_get_drives' },
        { kind: 'block', type: 'array_get_arrays' },
        { kind: 'block', type: 'array_create' },
        { kind: 'sep' },
        { kind: 'block', type: 'ffmpeg_check' },
        { kind: 'block', type: 'ffmpeg_version' },
        { kind: 'block', type: 'ffmpeg_execute' },
        { kind: 'sep' },
        { kind: 'block', type: 'monitor_set_text' },
        { kind: 'block', type: 'monitor_clear' },
      ],
    },
  })
}
