import * as Blockly from 'blockly'
import { _b } from '../locales'

const DIRECTION_OPTIONS = [
  { text: _b('前方', 'Front'), value: 'front' },
  { text: _b('后方', 'Back'), value: 'back' },
  { text: _b('左方', 'Left'), value: 'left' },
  { text: _b('右方', 'Right'), value: 'right' },
  { text: _b('上方', 'Up'), value: 'up' },
  { text: _b('下方', 'Down'), value: 'down' },
]

const BOOLEAN_OPTIONS = [
  { text: _b('开', 'On'), value: 'true' },
  { text: _b('关', 'Off'), value: 'false' },
]

const SLOT_OPTIONS = Array.from({ length: 16 }, (_, i) => ({
  text: String(i + 1),
  value: String(i + 1),
}))

const COLOR_OPTIONS = [
  { text: _b('白色', 'White'), value: 'white' },
  { text: _b('橙色', 'Orange'), value: 'orange' },
  { text: _b('品红', 'Magenta'), value: 'magenta' },
  { text: _b('浅蓝', 'Light Blue'), value: 'lightBlue' },
  { text: _b('黄色', 'Yellow'), value: 'yellow' },
  { text: _b('亮绿', 'Lime'), value: 'lime' },
  { text: _b('粉色', 'Pink'), value: 'pink' },
  { text: _b('灰色', 'Gray'), value: 'gray' },
  { text: _b('亮灰', 'Light Gray'), value: 'lightGray' },
  { text: _b('青色', 'Cyan'), value: 'cyan' },
  { text: _b('紫色', 'Purple'), value: 'purple' },
  { text: _b('蓝色', 'Blue'), value: 'blue' },
  { text: _b('棕色', 'Brown'), value: 'brown' },
  { text: _b('绿色', 'Green'), value: 'green' },
  { text: _b('红色', 'Red'), value: 'red' },
  { text: _b('黑色', 'Black'), value: 'black' },
]

const FS_MODE_OPTIONS = [
  { text: _b('读取', 'Read'), value: 'r' },
  { text: _b('写入', 'Write'), value: 'w' },
  { text: _b('追加', 'Append'), value: 'a' },
]

const PERIPHERAL_DIRECTION_OPTIONS = [
  { text: _b('左', 'Left'), value: 'left' },
  { text: _b('右', 'Right'), value: 'right' },
  { text: _b('前', 'Front'), value: 'front' },
  { text: _b('后', 'Back'), value: 'back' },
  { text: _b('上', 'Top'), value: 'top' },
  { text: _b('下', 'Bottom'), value: 'bottom' },
]

const LOGIC_OPTIONS = [
  { text: _b('且', 'And'), value: 'and' },
  { text: _b('或', 'Or'), value: 'or' },
]

// === Movement blocks ===
Blockly.Blocks['turtle_forward'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 前进', '🐢 Forward'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向前移动一格')
  },
}
Blockly.Blocks['turtle_back'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 后退', '🐢 Back'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向后移动一格')
  },
}
Blockly.Blocks['turtle_turnLeft'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 左转', '🐢 Turn Left'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向左转90度')
  },
}
Blockly.Blocks['turtle_turnRight'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 右转', '🐢 Turn Right'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向右转90度')
  },
}
Blockly.Blocks['turtle_up'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 上升', '🐢 Up'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向上移动一格')
  },
}
Blockly.Blocks['turtle_down'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 下降', '🐢 Down'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向下移动一格')
  },
}

// === Basic action blocks ===
Blockly.Blocks['turtle_dig'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 挖掘', '🐢 Dig'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS.map(o => [o.text, o.value])), 'SIDE')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('挖掘指定方向的方块')
  },
}
Blockly.Blocks['turtle_place'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('🐢 在', '🐢 To'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS.map(o => [o.text, o.value])), 'SIDE')
      .appendField(_b('放置', 'Place'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('在指定方向放置方块')
  },
}
Blockly.Blocks['turtle_detect'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 检测', '🐢 Detect'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS.map(o => [o.text, o.value])), 'SIDE')
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('检测指定方向是否有方块')
  },
}
Blockly.Blocks['turtle_select'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 选择槽位', '🐢 Select Slot'))
      .appendField(new Blockly.FieldDropdown(SLOT_OPTIONS.map(o => [o.text, o.value])), 'SLOT')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('选择物品槽位')
  },
}
Blockly.Blocks['turtle_getItemCount'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('🐢 槽位', '🐢 Slot'))
      .appendField(new Blockly.FieldDropdown(SLOT_OPTIONS.map(o => [o.text, o.value])), 'SLOT')
      .appendField(_b('物品数量', 'Item Count'))
    this.setOutput(true, 'Number'); this.setColour('#FF9A76')
    this.setTooltip('获取指定槽位的物品数量')
  },
}
Blockly.Blocks['turtle_getItemDetail'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('🐢 槽位', '🐢 Slot'))
      .appendField(new Blockly.FieldDropdown(SLOT_OPTIONS.map(o => [o.text, o.value])), 'SLOT')
      .appendField(_b('物品详情', 'Item Detail'))
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('获取指定槽位的物品详情')
  },
}
Blockly.Blocks['turtle_compare'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 比较', '🐢 Compare'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS.map(o => [o.text, o.value])), 'SIDE')
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('比较当前槽位与指定方向的物品')
  },
}
Blockly.Blocks['turtle_drop'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 丢弃', '🐢 Drop'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS.map(o => [o.text, o.value])), 'SIDE')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向指定方向丢弃物品')
  },
}
Blockly.Blocks['turtle_suck'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 吸取', '🐢 Suck'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS.map(o => [o.text, o.value])), 'SIDE')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('从指定方向吸取物品')
  },
}
Blockly.Blocks['turtle_attack'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 攻击', '🐢 Attack'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS.map(o => [o.text, o.value])), 'SIDE')
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('攻击指定方向')
  },
}

// === Item transfer blocks ===
Blockly.Blocks['turtle_compareTo'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 比较到槽位', '🐢 Compare To Slot'))
      .appendField(new Blockly.FieldDropdown(SLOT_OPTIONS.map(o => [o.text, o.value])), 'SLOT')
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('比较当前槽位与指定槽位的物品')
  },
}
Blockly.Blocks['turtle_transferTo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('🐢 转移到槽位', '🐢 Transfer To'))
      .appendField(new Blockly.FieldDropdown(SLOT_OPTIONS.map(o => [o.text, o.value])), 'SLOT')
    this.appendValueInput('COUNT').setCheck('Number').appendField(_b('数量', 'Count'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('将物品转移到指定槽位')
  },
}
Blockly.Blocks['turtle_equip'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 装备', '🐢 Equip'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('装备当前槽位的工具')
  },
}
Blockly.Blocks['turtle_inspect'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 检查', '🐢 Inspect'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS.map(o => [o.text, o.value])), 'SIDE')
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('检查指定方向的方块')
  },
}
Blockly.Blocks['turtle_inspectDetail'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 检查详情', '🐢 Inspect Detail'))
      .appendField(new Blockly.FieldDropdown(DIRECTION_OPTIONS.map(o => [o.text, o.value])), 'SIDE')
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('检查指定方向方块的详细信息')
  },
}

// === Up/Down variants ===
Blockly.Blocks['turtle_digUp'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 挖掘上方', '🐢 Dig Up'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向上挖掘方块')
  },
}
Blockly.Blocks['turtle_digDown'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 挖掘下方', '🐢 Dig Down'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向下挖掘方块')
  },
}
Blockly.Blocks['turtle_attackUp'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 攻击上方', '🐢 Attack Up'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('攻击上方实体')
  },
}
Blockly.Blocks['turtle_attackDown'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 攻击下方', '🐢 Attack Down'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('攻击下方实体')
  },
}
Blockly.Blocks['turtle_placeUp'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 放置上方', '🐢 Place Up'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向上放置方块')
  },
}
Blockly.Blocks['turtle_placeDown'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 放置下方', '🐢 Place Down'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向下放置方块')
  },
}
Blockly.Blocks['turtle_detectUp'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 检测上方', '🐢 Detect Up'))
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('检测上方是否有方块')
  },
}
Blockly.Blocks['turtle_detectDown'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 检测下方', '🐢 Detect Down'))
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('检测下方是否有方块')
  },
}
Blockly.Blocks['turtle_compareUp'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 比较上方', '🐢 Compare Up'))
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('比较上方方块')
  },
}
Blockly.Blocks['turtle_compareDown'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 比较下方', '🐢 Compare Down'))
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('比较下方方块')
  },
}
Blockly.Blocks['turtle_inspectUp'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 检查上方', '🐢 Inspect Up'))
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('检查上方方块')
  },
}
Blockly.Blocks['turtle_inspectDown'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 检查下方', '🐢 Inspect Down'))
    this.setOutput(true, 'Boolean'); this.setColour('#FF9A76')
    this.setTooltip('检查下方方块')
  },
}
Blockly.Blocks['turtle_dropUp'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 丢弃上方', '🐢 Drop Up'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向上丢弃物品')
  },
}
Blockly.Blocks['turtle_dropDown'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 丢弃下方', '🐢 Drop Down'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('向下丢弃物品')
  },
}
Blockly.Blocks['turtle_suckUp'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 吸取上方', '🐢 Suck Up'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('从上方吸取物品')
  },
}
Blockly.Blocks['turtle_suckDown'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 吸取下方', '🐢 Suck Down'))
    this.setPreviousStatement(true); this.setNextStatement(true)
    this.setColour('#FF9A76'); this.setTooltip('从下方吸取物品')
  },
}

// === Fuel/Item management ===
Blockly.Blocks['turtle_getFuelLevel'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 燃料等级', '🐢 Fuel Level'))
    this.setOutput(true, 'Number'); this.setColour('#FF9A76')
    this.setTooltip('获取当前燃料等级')
  },
}
Blockly.Blocks['turtle_getFuelLimit'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 燃料上限', '🐢 Fuel Limit'))
    this.setOutput(true, 'Number'); this.setColour('#FF9A76')
    this.setTooltip('获取燃料上限')
  },
}
Blockly.Blocks['turtle_refuel'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 补充燃料', '🐢 Refuel'))
    this.appendValueInput('COUNT').setCheck('Number').appendField(_b('数量', 'Count'))
    this.setOutput(true, 'Number'); this.setColour('#FF9A76')
    this.setTooltip('补充燃料')
  },
}
Blockly.Blocks['turtle_getSelectedSlot'] = {
  init: function() {
    this.appendDummyInput().appendField(_b('🐢 当前槽位', '🐢 Current Slot'))
    this.setOutput(true, 'Number'); this.setColour('#FF9A76')
    this.setTooltip('获取当前选中的槽位')
  },
}
Blockly.Blocks['turtle_getItemSpace'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(_b('🐢 槽位', '🐢 Slot'))
      .appendField(new Blockly.FieldDropdown(SLOT_OPTIONS.map(o => [o.text, o.value])), 'SLOT')
      .appendField(_b('剩余空间', 'Free Space'))
    this.setOutput(true, 'Number'); this.setColour('#FF9A76')
    this.setTooltip('获取指定槽位剩余空间')
  },
}

export const turtleBlocks = Object.keys(Blockly.Blocks).filter(k => k.startsWith('turtle_'))
