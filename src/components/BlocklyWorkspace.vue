<template>
  <div ref="blocklyDiv" class="blockly-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as Blockly from 'blockly'
import { luaGenerator } from '../generators/lua'
import '../blocks'
import { initGenerators, generateCode } from '../generators/lua'
import { kittenTheme } from '../theme'
import { i18n, _b } from '../locales'
// Blockly 语言包
import * as zhHans from 'blockly/msg/zh-hans'
import * as en from 'blockly/msg/en'

const emit = defineEmits<{
  (e: 'code-change', code: string): void
}>()

const blocklyDiv = ref<HTMLElement>()
let workspace: Blockly.WorkspaceSvg

interface ShadowDef { shadow: { type: string; fields?: Record<string, string | number> } }
function S(str: string): ShadowDef { return { shadow: { type: 'text', fields: { TEXT: str } } } }
function N(num: number): ShadowDef { return { shadow: { type: 'math_number', fields: { NUM: num } } } }
function B(val: string): ShadowDef { return { shadow: { type: 'logic_boolean', fields: { BOOL: val } } } }
function block(type: string, inputs?: Record<string, ShadowDef>): any {
  if (!inputs) return { kind: 'block', type }
  return { kind: 'block', type, inputs }
}

function buildToolbox() {
  return {
    kind: 'categoryToolbox',
    contents: [
      { kind: 'category', name: _b('⚡ 事件系统', '⚡ Events'), colour: '#FF5722', contents: [
        { kind: 'block', type: 'hat_start' },
        { kind: 'block', type: 'hat_eventLoop' },
        { kind: 'block', type: 'hat_rednet' },
        { kind: 'block', type: 'hat_key' },
        { kind: 'block', type: 'hat_timer' },
        { kind: 'block', type: 'hat_char' },
        { kind: 'block', type: 'hat_touch' },
        { kind: 'block', type: 'event_when' },
      ]},
      { kind: 'category', name: _b('📩 事件数据', '📩 Event Data'), colour: '#FF9800', contents: [
        { kind: 'block', type: 'event_senderID' }, { kind: 'block', type: 'event_message' },
        { kind: 'block', type: 'event_keyCode' }, { kind: 'block', type: 'event_char' },
        { kind: 'block', type: 'event_timerID' },
        { kind: 'block', type: 'event_touchX' }, { kind: 'block', type: 'event_touchY' },
        { kind: 'block', type: 'event_mouseX' }, { kind: 'block', type: 'event_mouseY' },
        { kind: 'block', type: 'event_mouseButton' },
      ]},
      { kind: 'category', name: _b('📝 基础输入输出', '📝 Basic I/O'), colour: '#5DADE2', contents: [
        block('write', { TEXT: S('Hello World') }),
        block('print', { TEXT: S('Hello World') }),
        { kind: 'block', type: 'read' },
      ]},
      { kind: 'category', name: _b('🐢 机器人', '🐢 Turtle'), colour: '#FF9A76', contents: [
        { kind: 'block', type: 'turtle_forward' }, { kind: 'block', type: 'turtle_back' },
        { kind: 'block', type: 'turtle_turnLeft' }, { kind: 'block', type: 'turtle_turnRight' },
        { kind: 'block', type: 'turtle_up' }, { kind: 'block', type: 'turtle_down' },
        { kind: 'block', type: 'turtle_dig' }, { kind: 'block', type: 'turtle_place' },
        { kind: 'block', type: 'turtle_digUp' }, { kind: 'block', type: 'turtle_digDown' },
        { kind: 'block', type: 'turtle_attack' }, { kind: 'block', type: 'turtle_attackUp' }, { kind: 'block', type: 'turtle_attackDown' },
        { kind: 'block', type: 'turtle_placeUp' }, { kind: 'block', type: 'turtle_placeDown' },
        { kind: 'block', type: 'turtle_detect' }, { kind: 'block', type: 'turtle_detectUp' }, { kind: 'block', type: 'turtle_detectDown' },
        { kind: 'block', type: 'turtle_compare' }, { kind: 'block', type: 'turtle_compareUp' }, { kind: 'block', type: 'turtle_compareDown' },
        { kind: 'block', type: 'turtle_inspect' }, { kind: 'block', type: 'turtle_inspectUp' }, { kind: 'block', type: 'turtle_inspectDown' },
        { kind: 'block', type: 'turtle_drop' }, { kind: 'block', type: 'turtle_suck' },
        { kind: 'block', type: 'turtle_dropUp' }, { kind: 'block', type: 'turtle_dropDown' },
        { kind: 'block', type: 'turtle_suckUp' }, { kind: 'block', type: 'turtle_suckDown' },
        { kind: 'block', type: 'turtle_select' }, { kind: 'block', type: 'turtle_getSelectedSlot' },
        { kind: 'block', type: 'turtle_getItemCount' }, { kind: 'block', type: 'turtle_getItemDetail' },
        { kind: 'block', type: 'turtle_getItemSpace' },
        { kind: 'block', type: 'turtle_compareTo' }, block('turtle_transferTo', { COUNT: N(1) }),
        { kind: 'block', type: 'turtle_equip' },
        { kind: 'block', type: 'turtle_getFuelLevel' }, { kind: 'block', type: 'turtle_getFuelLimit' },
        block('turtle_refuel', { COUNT: N(64) }),
      ]},
      { kind: 'category', name: _b('🔴 红石控制', '🔴 Redstone'), colour: '#FF6B6B', contents: [
        { kind: 'block', type: 'redstone_getInput' }, { kind: 'block', type: 'redstone_setOutput' },
        { kind: 'block', type: 'redstone_getOutput' },
        block('redstone_setAnalogOutput', { POWER: N(15) }),
        { kind: 'block', type: 'redstone_getAnalogInput' }, { kind: 'block', type: 'redstone_getAnalogOutput' },
        { kind: 'block', type: 'redstone_getBundledInput' }, block('redstone_setBundledOutput', { VALUE: N(0) }),
        { kind: 'block', type: 'redstone_getBundledOutput' },
        block('redstone_testBundledInput', { MASK: N(0) }),
        { kind: 'block', type: 'redstone_getSides' },
      ]},
      { kind: 'category', name: _b('📁 文件系统', '📁 File System'), colour: '#FFD93D', contents: [
        block('fs_list', { PATH: S('') }), block('fs_exists', { PATH: S('') }),
        block('fs_isDir', { PATH: S('') }), block('fs_isReadOnly', { PATH: S('') }),
        block('fs_makeDir', { PATH: S('') }), block('fs_delete', { PATH: S('') }),
        block('fs_move', { FROM: S(''), TO: S('') }), block('fs_copy', { FROM: S(''), TO: S('') }),
        block('fs_getSize', { PATH: S('') }), block('fs_getDrive', { PATH: S('') }),
        block('fs_getFreeSpace', { PATH: S('') }), block('fs_getCapacity', { PATH: S('') }),
        block('fs_attributes', { PATH: S('') }),
        block('fs_read', { PATH: S('') }), block('fs_write', { PATH: S(''), CONTENT: S('') }),
        block('fs_append', { PATH: S(''), CONTENT: S('') }),
        block('fs_getName', { PATH: S('') }), block('fs_getDir', { PATH: S('') }),
        block('fs_combine', { PATH1: S(''), PATH2: S('') }),
        block('fs_find', { WILDCARD: S('*') }),
        block('fs_complete', { PATH: S(''), LOCATION: S('.') }),
        block('fs_isDriveRoot', { PATH: S('') }),
      ]},
      { kind: 'category', name: _b('🌐 网络通信', '🌐 Network'), colour: '#4ECDC4', contents: [
        block('http_request', { URL: S('http://') }), block('http_checkURL', { URL: S('http://') }),
        block('http_get', { URL: S('http://') }), block('http_post', { URL: S('http://'), BODY: S('') }),
        block('http_websocket', { URL: S('ws://') }),
        block('http_websocketAsync', { URL: S('ws://') }),
        block('http_checkURLAsync', { URL: S('http://') }),
      ]},
      { kind: 'category', name: _b('🔌 外设扩展', '🔌 Peripherals'), colour: '#9B59B6', contents: [
        { kind: 'block', type: 'peripheral_wrap' }, block('peripheral_wrapByName', { NAME: S('') }),
        { kind: 'block', type: 'peripheral_isPresent' }, { kind: 'block', type: 'peripheral_getType' },
        { kind: 'block', type: 'peripheral_getMethods' },
        block('peripheral_call', { METHOD: S('') }), block('peripheral_find', { TYPE: S('') }),
        block('peripheral_hasType', { TYPE: S('') }), block('peripheral_getName', { PERIPHERAL: S('peripheral.wrap("")') }),
      ]},
      { kind: 'category', name: _b('📺 终端显示', '📺 Terminal'), colour: '#4D96FF', contents: [
        block('term_write', { TEXT: S('Hello World') }),
        { kind: 'block', type: 'term_clear' }, { kind: 'block', type: 'term_clearLine' },
        block('term_setCursorPos', { X: N(1), Y: N(1) }),
        { kind: 'block', type: 'term_getCursorPos' }, { kind: 'block', type: 'term_getSize' },
        block('term_scroll', { LINES: N(1) }),
        { kind: 'block', type: 'term_setTextColor' }, { kind: 'block', type: 'term_setBackgroundColor' },
        { kind: 'block', type: 'term_getTextColor' }, { kind: 'block', type: 'term_getBackgroundColor' },
        block('term_blit', { TEXT: S(''), TEXT_COLOR: S(''), BG_COLOR: S('') }),
        { kind: 'block', type: 'term_isColor' }, { kind: 'block', type: 'term_read' },
        block('term_redirect', { TARGET: S('term.native()') }),
        { kind: 'block', type: 'term_current' }, { kind: 'block', type: 'term_native' },
        block('term_setCursorBlink', { BLINK: B('true') }), { kind: 'block', type: 'term_getCursorBlink' },
      ]},
      { kind: 'category', name: _b('💻 系统控制', '💻 System'), colour: '#4D96FF', contents: [
        { kind: 'block', type: 'os_getComputerID' }, { kind: 'block', type: 'os_getComputerLabel' },
        block('os_setComputerLabel', { LABEL: S('MyComputer') }),
        block('os_queueEvent', { EVENT: S('timer') }), block('os_pullEvent', { FILTER: S('') }),
        block('os_sleep', { TIME: N(1) }),
        { kind: 'block', type: 'os_time' }, { kind: 'block', type: 'os_clock' },
        { kind: 'block', type: 'os_version' }, { kind: 'block', type: 'os_day' },
        block('os_startTimer', { TIME: N(1) }), block('os_cancelTimer', { ID: N(0) }),
        block('os_setAlarm', { TIME: N(12) }), block('os_cancelAlarm', { ID: N(0) }),
        { kind: 'block', type: 'os_shutdown' }, { kind: 'block', type: 'os_reboot' },
        { kind: 'block', type: 'os_getFuelLevel' }, block('os_setFuelLevel', { LEVEL: N(0) }),
      ]},
      { kind: 'category', name: _b('🎯 控制结构', '🎯 Controls'), colour: '#FFD93D', contents: [
        { kind: 'block', type: 'controls_if' },
        block('controls_repeat_ext', { TIMES: N(10) }),
        { kind: 'block', type: 'controls_whileUntil' },
        block('controls_for', { FROM: N(1), TO: N(10), BY: N(1) }),
        { kind: 'block', type: 'controls_flow_statements' },
      ]},
      { kind: 'category', name: _b('🔢 数学运算', '🔢 Math'), colour: '#6BCB77', contents: [
        { kind: 'block', type: 'math_number' },
        block('math_arithmetic', { A: N(1), B: N(1) }),
        block('math_random', { MIN: N(1), MAX: N(10) }),
        block('math_mod', { A: N(10), B: N(3) }),
        block('math_floor', { NUM: N(3) }), block('math_ceil', { NUM: N(3) }),
        block('math_abs', { NUM: N(-5) }), block('math_sqrt', { NUM: N(16) }),
        block('math_min', { A: N(0), B: N(0) }), block('math_max', { A: N(0), B: N(0) }),
      ]},
      { kind: 'category', name: _b('🔤 逻辑运算', '🔤 Logic'), colour: '#6BCB77', contents: [
        { kind: 'block', type: 'logic_boolean' },
        block('logic_negate', { BOOL: B('false') }),
        block('logic_compare', { A: N(0), B: N(0) }),
        block('logic_operation', { A: B('true'), B: B('false') }),
        { kind: 'block', type: 'logic_null' },
      ]},
      { kind: 'category', name: _b('📝 文本', '📝 Text'), colour: '#5DADE2', contents: [
        { kind: 'block', type: 'text' },
        block('text_join', { A: S('Hello'), B: S(' World') }),
        block('text_length', { TEXT: S('') }), block('text_isEmpty', { TEXT: S('') }),
        block('text_substring', { TEXT: S(''), FROM: N(1), TO: N(1) }),
        { kind: 'sep' },
        block('textutils_slowWrite', { TEXT: S('Hello'), RATE: N(0.05) }),
        block('textutils_slowPrint', { TEXT: S('Hello'), RATE: N(0.05) }),
        block('textutils_formatTime', { TIME: N(0) }),
        block('textutils_pagedPrint', { TEXT: S('') }), block('textutils_tabulate', { TABLE: S('{}') }),
        block('textutils_urlEncode', { STRING: S('') }),
        { kind: 'sep' },
        block('textutils_serialize', { TABLE: S('{}') }), block('textutils_unserialize', { STRING: S('{}') }),
        block('textutils_serializeJSON', { TABLE: S('{}') }), block('textutils_unserializeJSON', { STRING: S('{}') }),
      ]},
      { kind: 'category', name: _b('📦 变量与函数', '📦 Variables'), colour: '#4D96FF', contents: [
        { kind: 'block', type: 'variables_get' }, block('variables_set', { VALUE: N(0) }),
        { kind: 'block', type: 'procedures_defnoreturn' }, { kind: 'block', type: 'procedures_callnoreturn' },
      ]},
      { kind: 'category', name: _b('📡 红网通信', '📡 Rednet'), colour: '#E67E22', contents: [
        { kind: 'block', type: 'rednet_open' }, { kind: 'block', type: 'rednet_close' },
        { kind: 'block', type: 'rednet_isOpen' },
        block('rednet_send', { RECIPIENT: N(0), MESSAGE: S('') }),
        block('rednet_broadcast', { MESSAGE: S('') }),
        block('rednet_receive', { TIMEOUT: N(5) }),
        block('rednet_host', { PROTOCOL: S('my_protocol'), HOSTNAME: S('my_host') }),
        block('rednet_unhost', { PROTOCOL: S('my_protocol') }),
        block('rednet_lookup', { PROTOCOL: S('my_protocol'), HOSTNAME: S('my_host') }),
      ]},
      { kind: 'category', name: _b('🛰️ GPS定位', '🛰️ GPS'), colour: '#16A085', contents: [
        block('gps_locate', { TIMEOUT: N(5) }),
      ]},
      { kind: 'category', name: _b('🎨 颜色控制', '🎨 Colors'), colour: '#F39C12', contents: [
        { kind: 'block', type: 'colors_constant' },
        block('colors_combine', { COLOR1: N(0), COLOR2: N(0) }),
        block('colors_subtract', { COLORS: N(0), SUBTRACT: N(0) }),
        block('colors_test', { COLORS: N(0), COLOR: N(0) }),
        block('colors_packRGB', { R: N(0), G: N(0), B: N(0) }),
        block('colors_unpackRGB', { RGB: N(0) }),
        block('colors_rgb8', { R: N(128), G: N(128), B: N(128) }),
        block('colors_toBlit', { COLOR: N(0) }), block('colors_fromBlit', { CHAR: S('0') }),
      ]},
      { kind: 'category', name: _b('💾 磁盘管理', '💾 Disk'), colour: '#3498DB', contents: [
        { kind: 'block', type: 'disk_isPresent' }, { kind: 'block', type: 'disk_getLabel' },
        block('disk_setLabel', { LABEL: S('MyDisk') }),
        { kind: 'block', type: 'disk_hasData' }, { kind: 'block', type: 'disk_getMountPath' },
        { kind: 'block', type: 'disk_hasAudio' }, { kind: 'block', type: 'disk_getAudioTitle' },
        { kind: 'block', type: 'disk_playAudio' }, { kind: 'block', type: 'disk_stopAudio' },
        { kind: 'block', type: 'disk_eject' }, { kind: 'block', type: 'disk_getID' },
      ]},
      { kind: 'category', name: _b('⏳ 并行执行', '⏳ Parallel'), colour: '#1ABC9C', contents: [
        { kind: 'block', type: 'parallel_waitForAny' }, { kind: 'block', type: 'parallel_waitForAll' },
      ]},
      { kind: 'category', name: _b('🖌️ 绘画工具', '🖌️ Paint'), colour: '#E91E63', contents: [
        block('paintutils_drawPixel', { X: N(1), Y: N(1), COLOR: N(0) }),
        block('paintutils_drawLine', { X1: N(1), Y1: N(1), X2: N(10), Y2: N(10), COLOR: N(0) }),
        block('paintutils_drawBox', { X1: N(1), Y1: N(1), X2: N(10), Y2: N(10), COLOR: N(0) }),
        block('paintutils_drawFilledBox', { X1: N(1), Y1: N(1), X2: N(10), Y2: N(10), COLOR: N(0) }),
        block('paintutils_loadImage', { PATH: S('') }),
        block('paintutils_drawImage', { IMAGE: S('paintutils.loadImage("")'), X: N(1), Y: N(1) }),
      ]},
      { kind: 'category', name: _b('➡️ 向量运算', '➡️ Vector'), colour: '#00BCD4', contents: [
        block('vector_new', { X: N(0), Y: N(0), Z: N(0) }),
        block('vector_add', { V1: N(0), V2: N(0) }), block('vector_sub', { V1: N(0), V2: N(0) }),
        block('vector_mul', { V1: N(0), FACTOR: N(1) }), block('vector_div', { V1: N(0), FACTOR: N(1) }),
        block('vector_dot', { V1: N(0), V2: N(0) }), block('vector_cross', { V1: N(0), V2: N(0) }),
        block('vector_length', { V: N(0) }), block('vector_normalize', { V: N(0) }),
        block('vector_tostring', { V: N(0) }),
      ]},
      { kind: 'category', name: _b('⌨️ 按键检测', '⌨️ Keys'), colour: '#FF5722', contents: [
        block('keys_getName', { KEY: N(0) }),
      ]},
      { kind: 'category', name: _b('📂 文件IO', '📂 File I/O'), colour: '#1ABC9C', contents: [
        block('io_open', { PATH: S('') }),
        block('io_close', { HANDLE: S('io.open("")') }),
        block('io_readAll', { HANDLE: S('io.open("")') }),
        block('io_readLine', { HANDLE: S('io.open("")') }),
        block('io_writeLine', { HANDLE: S('io.open("")'), TEXT: S('') }),
        block('io_flush', { HANDLE: S('io.open("")') }),
        block('io_seek', { HANDLE: S('io.open("")'), OFFSET: N(0) }),
        block('io_lines', { HANDLE: S('io.open("")') }),
        block('io_type', { OBJ: S('io.open("")') }),
      ]},
      { kind: 'category', name: _b('❓ 帮助系统', '❓ Help'), colour: '#2ECC71', contents: [
        { kind: 'block', type: 'help_path' },
        block('help_setPath', { PATH: S('') }),
        block('help_lookup', { TOPIC: S('') }),
        { kind: 'block', type: 'help_topics' },
        block('help_completeTopic', { PREFIX: S('') }),
      ]},
      { kind: 'category', name: _b('🪟 窗口管理', '🪟 Window'), colour: '#8E44AD', contents: [
        block('window_create', { PARENT: S('term.current()'), X: N(1), Y: N(1), W: N(20), H: N(10) }),
        block('window_setVisible', { WINDOW: S('window.create(...)'), VISIBLE: B('true') }),
        block('window_isVisible', { WINDOW: S('window.create(...)') }),
        block('window_redraw', { WINDOW: S('window.create(...)') }),
        block('window_reposition', { WINDOW: S('window.create(...)'), X: N(1), Y: N(1), W: N(20), H: N(10) }),
        block('window_getPosition', { WINDOW: S('window.create(...)') }),
      ]},
      { kind: 'category', name: _b('⚙️ 设置管理', '⚙️ Settings'), colour: '#607D8B', contents: [
        block('settings_define', { NAME: S('my_setting') }),
        block('settings_set', { NAME: S('my_setting'), VALUE: N(0) }),
        block('settings_get', { NAME: S('my_setting') }), block('settings_unset', { NAME: S('my_setting') }),
        { kind: 'block', type: 'settings_clear' }, { kind: 'block', type: 'settings_getNames' },
        block('settings_load', { PATH: S('.settings') }), block('settings_save', { PATH: S('.settings') }),
      ]},
    ],
  };
}

onMounted(() => {
  if (!blocklyDiv.value) return
  initGenerators()

  // 应用当前语言的 Blockly 文本（右键菜单等）
  Blockly.setLocale((i18n.lang === 'zh' ? zhHans : en) as unknown as {[key: string]: string})

  workspace = Blockly.inject(blocklyDiv.value, {
    toolbox: buildToolbox(), theme: kittenTheme,
    grid: { spacing: 20, length: 3, colour: '#E0E0E0', snap: true },
    zoom: { controls: true, wheel: true, startScale: 0.9, maxScale: 2, minScale: 0.3, scaleSpeed: 1.2 },
    trashcan: true,
    move: { scrollbars: true, drag: true, wheel: true },
    sounds: false, renderer: 'zelos',
    media: '/media/',
  })

  workspace.addChangeListener(() => {
    emit('code-change', generateCode(workspace))
  })

  // 把 workspace 实例暴露给顶栏使用
  ;(window as any).__blocktweaked_workspace = {
    clear() { workspace.clear() },
    getXML() { return Blockly.Xml.workspaceToDom(workspace) },
    loadXML(xml: string) {
      workspace.clear()
      const dom = Blockly.utils.xml.textToDom(xml)
      Blockly.Xml.domToWorkspace(dom, workspace)
    },
    getCode() { return generateCode(workspace) },
    isDirty() { return workspace.getAllBlocks(false).length > 0 }
  }

  // 语言切换：保存XML到localStorage，重载页面后恢复
  watch(() => i18n.lang, () => {
    // 保存当前工作区
    const xml = Blockly.Xml.workspaceToDom(workspace)
    const xmlStr = Blockly.Xml.domToText(xml)
    localStorage.setItem('bt_workspace', xmlStr)
    // 重载页面，模块重新执行即可生效 _b() 新语言
    window.location.reload()
  })

  // 页面加载后恢复之前保存的工作区
  const saved = localStorage.getItem('bt_workspace')
  if (saved) {
    try {
      const xml = Blockly.utils.xml.textToDom(saved)
      Blockly.Xml.domToWorkspace(xml, workspace)
    } catch {}
    localStorage.removeItem('bt_workspace')
  }
})

onBeforeUnmount(() => { workspace?.dispose() })
</script>

<style scoped>
.blockly-container { width: 100%; height: 100%; }
</style>
