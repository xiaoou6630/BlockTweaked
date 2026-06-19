import * as Blockly from 'blockly'
import { luaGenerator, Order } from 'blockly/lua'

export { luaGenerator, Order }

export function initGenerators() {
  if (!luaGenerator) return

  // Turtle
  luaGenerator.forBlock['turtle_forward'] = () => 'turtle.forward()\n'
  luaGenerator.forBlock['turtle_back'] = () => 'turtle.back()\n'
  luaGenerator.forBlock['turtle_turnLeft'] = () => 'turtle.turnLeft()\n'
  luaGenerator.forBlock['turtle_turnRight'] = () => 'turtle.turnRight()\n'
  luaGenerator.forBlock['turtle_up'] = () => 'turtle.up()\n'
  luaGenerator.forBlock['turtle_down'] = () => 'turtle.down()\n'

  luaGenerator.forBlock['turtle_dig'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return `turtle.dig("${side}")\n`
  }

  luaGenerator.forBlock['turtle_place'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return `turtle.place("${side}")\n`
  }

  luaGenerator.forBlock['turtle_detect'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`turtle.detect("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['turtle_select'] = (block: Blockly.Block) => {
    const slot = block.getFieldValue('SLOT')
    return `turtle.select(${slot})\n`
  }

  luaGenerator.forBlock['turtle_getItemCount'] = (block: Blockly.Block) => {
    const slot = block.getFieldValue('SLOT')
    return [`turtle.getItemCount(${slot})`, Order.HIGH]
  }

  luaGenerator.forBlock['turtle_getItemDetail'] = (block: Blockly.Block) => {
    const slot = block.getFieldValue('SLOT')
    return [`turtle.getItemDetail(${slot})`, Order.HIGH]
  }

  luaGenerator.forBlock['turtle_compare'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`turtle.compare("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['turtle_drop'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    const count = luaGenerator.valueToCode(block, 'COUNT', Order.NONE)
    return count ? `turtle.drop("${side}", ${count})\n` : `turtle.drop("${side}")\n`
  }

  luaGenerator.forBlock['turtle_suck'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    const count = luaGenerator.valueToCode(block, 'COUNT', Order.NONE)
    return count ? `turtle.suck("${side}", ${count})\n` : `turtle.suck("${side}")\n`
  }

  luaGenerator.forBlock['turtle_attack'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return `turtle.attack("${side}")\n`
  }

  luaGenerator.forBlock['turtle_compareTo'] = (block: Blockly.Block) => {
    const slot = block.getFieldValue('SLOT')
    return [`turtle.compareTo(${slot})`, Order.HIGH]
  }

  luaGenerator.forBlock['turtle_transferTo'] = (block: Blockly.Block) => {
    const slot = block.getFieldValue('SLOT')
    const count = luaGenerator.valueToCode(block, 'COUNT', Order.NONE) || '1'
    return `turtle.transferTo(${slot}, ${count})\n`
  }

  luaGenerator.forBlock['turtle_equip'] = () => 'turtle.equip()\n'

  luaGenerator.forBlock['turtle_inspect'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`turtle.inspect("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['turtle_inspectDetail'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`turtle.inspectDetail("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['turtle_digUp'] = () => 'turtle.digUp()\n'
  luaGenerator.forBlock['turtle_digDown'] = () => 'turtle.digDown()\n'
  luaGenerator.forBlock['turtle_attackUp'] = () => 'turtle.attackUp()\n'
  luaGenerator.forBlock['turtle_attackDown'] = () => 'turtle.attackDown()\n'
  luaGenerator.forBlock['turtle_placeUp'] = () => 'turtle.placeUp()\n'
  luaGenerator.forBlock['turtle_placeDown'] = () => 'turtle.placeDown()\n'
  luaGenerator.forBlock['turtle_detectUp'] = () => ['turtle.detectUp()', Order.HIGH]
  luaGenerator.forBlock['turtle_detectDown'] = () => ['turtle.detectDown()', Order.HIGH]
  luaGenerator.forBlock['turtle_compareUp'] = () => ['turtle.compareUp()', Order.HIGH]
  luaGenerator.forBlock['turtle_compareDown'] = () => ['turtle.compareDown()', Order.HIGH]
  luaGenerator.forBlock['turtle_inspectUp'] = () => ['turtle.inspectUp()', Order.HIGH]
  luaGenerator.forBlock['turtle_inspectDown'] = () => ['turtle.inspectDown()', Order.HIGH]
  luaGenerator.forBlock['turtle_dropUp'] = (block: Blockly.Block) => {
    const count = luaGenerator.valueToCode(block, 'COUNT', Order.NONE)
    return count ? `turtle.dropUp(${count})\n` : 'turtle.dropUp()\n'
  }
  luaGenerator.forBlock['turtle_dropDown'] = (block: Blockly.Block) => {
    const count = luaGenerator.valueToCode(block, 'COUNT', Order.NONE)
    return count ? `turtle.dropDown(${count})\n` : 'turtle.dropDown()\n'
  }
  luaGenerator.forBlock['turtle_suckUp'] = (block: Blockly.Block) => {
    const count = luaGenerator.valueToCode(block, 'COUNT', Order.NONE)
    return count ? `turtle.suckUp(${count})\n` : 'turtle.suckUp()\n'
  }
  luaGenerator.forBlock['turtle_suckDown'] = (block: Blockly.Block) => {
    const count = luaGenerator.valueToCode(block, 'COUNT', Order.NONE)
    return count ? `turtle.suckDown(${count})\n` : 'turtle.suckDown()\n'
  }
  luaGenerator.forBlock['turtle_getFuelLevel'] = () => ['turtle.getFuelLevel()', Order.HIGH]
  luaGenerator.forBlock['turtle_getFuelLimit'] = () => ['turtle.getFuelLimit()', Order.HIGH]

  luaGenerator.forBlock['turtle_refuel'] = (block: Blockly.Block) => {
    const count = luaGenerator.valueToCode(block, 'COUNT', Order.NONE) || '1'
    return [`turtle.refuel(${count})`, Order.HIGH]
  }

  luaGenerator.forBlock['turtle_getSelectedSlot'] = () => ['turtle.getSelectedSlot()', Order.HIGH]

  luaGenerator.forBlock['turtle_getItemSpace'] = (block: Blockly.Block) => {
    const slot = block.getFieldValue('SLOT')
    return [`turtle.getItemSpace(${slot})`, Order.HIGH]
  }

  luaGenerator.forBlock['turtle_craft'] = (block: Blockly.Block) => {
    const limit = luaGenerator.valueToCode(block, 'LIMIT', Order.NONE) || '64'
    return [`turtle.craft(${limit})`, Order.HIGH]
  }
  luaGenerator.forBlock['turtle_equipLeft'] = () => 'turtle.equipLeft()\n'
  luaGenerator.forBlock['turtle_equipRight'] = () => 'turtle.equipRight()\n'

  // Redstone
  luaGenerator.forBlock['redstone_getInput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`redstone.getInput("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['redstone_setOutput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    const state = block.getFieldValue('STATE')
    return `redstone.setOutput("${side}", ${state})\n`
  }

  luaGenerator.forBlock['redstone_getOutput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`redstone.getOutput("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['redstone_setAnalogOutput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    const power = luaGenerator.valueToCode(block, 'POWER', Order.NONE) || '0'
    return `redstone.setAnalogOutput("${side}", ${power})\n`
  }

  luaGenerator.forBlock['redstone_getAnalogInput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`redstone.getAnalogInput("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['redstone_getBundledInput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`redstone.getBundledInput("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['redstone_setBundledOutput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    const value = luaGenerator.valueToCode(block, 'VALUE', Order.NONE) || '0'
    return `redstone.setBundledOutput("${side}", ${value})\n`
  }

  luaGenerator.forBlock['redstone_getBundledOutput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`redstone.getBundledOutput("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['redstone_getSides'] = () => ['redstone.getSides()', Order.HIGH]

  luaGenerator.forBlock['redstone_testBundledInput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    const mask = luaGenerator.valueToCode(block, 'MASK', Order.NONE) || '0'
    return [`redstone.testBundledInput("${side}", ${mask})`, Order.HIGH]
  }

  luaGenerator.forBlock['redstone_getAnalogOutput'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`redstone.getAnalogOutput("${side}")`, Order.HIGH]
  }

  // FS
  luaGenerator.forBlock['fs_list'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.list(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_exists'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.exists(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_isDir'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.isDir(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_isReadOnly'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.isReadOnly(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_makeDir'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return `fs.makeDir(${path})\n`
  }

  luaGenerator.forBlock['fs_delete'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return `fs.delete(${path})\n`
  }

  luaGenerator.forBlock['fs_move'] = (block: Blockly.Block) => {
    const from = luaGenerator.valueToCode(block, 'FROM', Order.NONE) || '""'
    const to = luaGenerator.valueToCode(block, 'TO', Order.NONE) || '""'
    return `fs.move(${from}, ${to})\n`
  }

  luaGenerator.forBlock['fs_copy'] = (block: Blockly.Block) => {
    const from = luaGenerator.valueToCode(block, 'FROM', Order.NONE) || '""'
    const to = luaGenerator.valueToCode(block, 'TO', Order.NONE) || '""'
    return `fs.copy(${from}, ${to})\n`
  }

  luaGenerator.forBlock['fs_getSize'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.getSize(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_getDrive'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.getDrive(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_getFreeSpace'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.getFreeSpace(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_read'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    const code = `local file = fs.open(${path}, "r")\nlocal content = file.readAll()\nfile.close()\ncontent`
    return [code, Order.HIGH]
  }

  luaGenerator.forBlock['fs_write'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    const content = luaGenerator.valueToCode(block, 'CONTENT', Order.NONE) || '""'
    return `local file = fs.open(${path}, "w")\nfile.write(${content})\nfile.close()\n`
  }

  luaGenerator.forBlock['fs_append'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    const content = luaGenerator.valueToCode(block, 'CONTENT', Order.NONE) || '""'
    return `local file = fs.open(${path}, "a")\nfile.write(${content})\nfile.close()\n`
  }

  luaGenerator.forBlock['fs_getName'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.getName(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_getDir'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.getDir(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_combine'] = (block: Blockly.Block) => {
    const path1 = luaGenerator.valueToCode(block, 'PATH1', Order.NONE) || '""'
    const path2 = luaGenerator.valueToCode(block, 'PATH2', Order.NONE) || '""'
    return [`fs.combine(${path1}, ${path2})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_find'] = (block: Blockly.Block) => {
    const wildcard = luaGenerator.valueToCode(block, 'WILDCARD', Order.NONE) || '"*"'
    return [`fs.find(${wildcard})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_complete'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    const location = luaGenerator.valueToCode(block, 'LOCATION', Order.NONE) || '""'
    return [`fs.complete(${path}, ${location})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_isDriveRoot'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.isDriveRoot(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_getCapacity'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.getCapacity(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['fs_attributes'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`fs.attributes(${path})`, Order.HIGH]
  }

  // HTTP
  luaGenerator.forBlock['http_request'] = (block: Blockly.Block) => {
    const url = luaGenerator.valueToCode(block, 'URL', Order.NONE) || '""'
    const method = block.getFieldValue('METHOD')
    return `http.request(${url}, nil, nil, "${method}")\n`
  }

  luaGenerator.forBlock['http_checkURL'] = (block: Blockly.Block) => {
    const url = luaGenerator.valueToCode(block, 'URL', Order.NONE) || '""'
    return [`http.checkURL(${url})`, Order.HIGH]
  }

  luaGenerator.forBlock['http_get'] = (block: Blockly.Block) => {
    const url = luaGenerator.valueToCode(block, 'URL', Order.NONE) || '""'
    const code = `local response = http.get(${url})\nlocal body = response.readAll()\nresponse.close()\nbody`
    return [code, Order.HIGH]
  }

  luaGenerator.forBlock['http_post'] = (block: Blockly.Block) => {
    const url = luaGenerator.valueToCode(block, 'URL', Order.NONE) || '""'
    const body = luaGenerator.valueToCode(block, 'BODY', Order.NONE) || '""'
    const code = `local response = http.post(${url}, ${body})\nlocal result = response.readAll()\nresponse.close()\nresult`
    return [code, Order.HIGH]
  }

  luaGenerator.forBlock['http_websocket'] = (block: Blockly.Block) => {
    const url = luaGenerator.valueToCode(block, 'URL', Order.NONE) || '""'
    return [`http.websocket(${url})`, Order.HIGH]
  }

  luaGenerator.forBlock['http_websocketAsync'] = (block: Blockly.Block) => {
    const url = luaGenerator.valueToCode(block, 'URL', Order.NONE) || '""'
    return `http.websocketAsync(${url})\n`
  }

  luaGenerator.forBlock['http_checkURLAsync'] = (block: Blockly.Block) => {
    const url = luaGenerator.valueToCode(block, 'URL', Order.NONE) || '""'
    return `http.checkURLAsync(${url})\n`
  }

  // Peripheral
  luaGenerator.forBlock['peripheral_wrap'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`peripheral.wrap("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['peripheral_isPresent'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`peripheral.isPresent("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['peripheral_getType'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`peripheral.getType("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['peripheral_getMethods'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`peripheral.getMethods("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['peripheral_call'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    const method = luaGenerator.valueToCode(block, 'METHOD', Order.NONE) || '""'
    return `peripheral.call("${side}", ${method})\n`
  }

  luaGenerator.forBlock['peripheral_find'] = (block: Blockly.Block) => {
    const type = luaGenerator.valueToCode(block, 'TYPE', Order.NONE) || '""'
    return [`peripheral.find(${type})`, Order.HIGH]
  }

  luaGenerator.forBlock['peripheral_hasType'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    const type = luaGenerator.valueToCode(block, 'TYPE', Order.NONE) || '""'
    return [`peripheral.hasType("${side}", ${type})`, Order.HIGH]
  }

  luaGenerator.forBlock['peripheral_getName'] = (block: Blockly.Block) => {
    const peripheral = luaGenerator.valueToCode(block, 'PERIPHERAL', Order.NONE) || 'nil'
    return [`peripheral.getName(${peripheral})`, Order.HIGH]
  }

  luaGenerator.forBlock['peripheral_wrapByName'] = (block: Blockly.Block) => {
    const name = luaGenerator.valueToCode(block, 'NAME', Order.NONE) || '""'
    return [`peripheral.wrap(${name})`, Order.HIGH]
  }

  // OS
  luaGenerator.forBlock['term_write'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    return `term.write(${text})\n`
  }

  luaGenerator.forBlock['term_clear'] = () => 'term.clear()\n'
  luaGenerator.forBlock['term_clearLine'] = () => 'term.clearLine()\n'

  luaGenerator.forBlock['term_setCursorPos'] = (block: Blockly.Block) => {
    const x = luaGenerator.valueToCode(block, 'X', Order.NONE) || '1'
    const y = luaGenerator.valueToCode(block, 'Y', Order.NONE) || '1'
    return `term.setCursorPos(${x}, ${y})\n`
  }

  luaGenerator.forBlock['term_getCursorPos'] = () => ['{term.getCursorPos()}', Order.HIGH]
  luaGenerator.forBlock['term_getSize'] = () => ['{term.getSize()}', Order.HIGH]

  luaGenerator.forBlock['term_scroll'] = (block: Blockly.Block) => {
    const lines = luaGenerator.valueToCode(block, 'LINES', Order.NONE) || '1'
    return `term.scroll(${lines})\n`
  }

  luaGenerator.forBlock['term_setTextColor'] = (block: Blockly.Block) => {
    const color = block.getFieldValue('COLOR')
    return `term.setTextColor(colors.${color})\n`
  }

  luaGenerator.forBlock['term_setBackgroundColor'] = (block: Blockly.Block) => {
    const color = block.getFieldValue('COLOR')
    return `term.setBackgroundColor(colors.${color})\n`
  }

  luaGenerator.forBlock['term_isColor'] = () => ['term.isColor()', Order.HIGH]
  luaGenerator.forBlock['term_read'] = (block: Blockly.Block) => {
    const replace = luaGenerator.valueToCode(block, 'REPLACE', Order.NONE)
    const history = luaGenerator.valueToCode(block, 'HISTORY', Order.NONE)
    const args = []
    if (replace) args.push(replace)
    if (history) args.push(history)
    return args.length > 0 ? [`term.read(${args.join(', ')})`, Order.HIGH] : ['term.read()', Order.HIGH]
  }

  luaGenerator.forBlock['os_getComputerID'] = () => ['os.getComputerID()', Order.HIGH]
  luaGenerator.forBlock['os_getComputerLabel'] = () => ['os.getComputerLabel()', Order.HIGH]

  luaGenerator.forBlock['os_setComputerLabel'] = (block: Blockly.Block) => {
    const label = luaGenerator.valueToCode(block, 'LABEL', Order.NONE) || '""'
    return `os.setComputerLabel(${label})\n`
  }

  luaGenerator.forBlock['os_queueEvent'] = (block: Blockly.Block) => {
    const event = luaGenerator.valueToCode(block, 'EVENT', Order.NONE) || '""'
    return `os.queueEvent(${event})\n`
  }

  luaGenerator.forBlock['os_pullEvent'] = (block: Blockly.Block) => {
    const filter = luaGenerator.valueToCode(block, 'FILTER', Order.NONE) || 'nil'
    return [`{os.pullEvent(${filter})}`, Order.HIGH]
  }

  luaGenerator.forBlock['os_sleep'] = (block: Blockly.Block) => {
    const time = luaGenerator.valueToCode(block, 'TIME', Order.NONE) || '1'
    return `os.sleep(${time})\n`
  }

  luaGenerator.forBlock['os_time'] = () => ['os.time()', Order.HIGH]
  luaGenerator.forBlock['os_clock'] = () => ['os.clock()', Order.HIGH]
  luaGenerator.forBlock['os_shutdown'] = () => 'os.shutdown()\n'
  luaGenerator.forBlock['os_reboot'] = () => 'os.reboot()\n'

  luaGenerator.forBlock['term_redirect'] = (block: Blockly.Block) => {
    const target = luaGenerator.valueToCode(block, 'TARGET', Order.NONE) || 'nil'
    return `term.redirect(${target})\n`
  }

  luaGenerator.forBlock['term_current'] = () => ['term.current()', Order.HIGH]

  luaGenerator.forBlock['term_native'] = () => ['term.native()', Order.HIGH]

  luaGenerator.forBlock['term_setCursorBlink'] = (block: Blockly.Block) => {
    const blink = luaGenerator.valueToCode(block, 'BLINK', Order.NONE) || 'true'
    return `term.setCursorBlink(${blink})\n`
  }

  luaGenerator.forBlock['term_getCursorBlink'] = () => ['term.getCursorBlink()', Order.HIGH]

  luaGenerator.forBlock['os_startTimer'] = (block: Blockly.Block) => {
    const time = luaGenerator.valueToCode(block, 'TIME', Order.NONE) || '1'
    return `os.startTimer(${time})\n`
  }

  luaGenerator.forBlock['os_cancelTimer'] = (block: Blockly.Block) => {
    const id = luaGenerator.valueToCode(block, 'ID', Order.NONE) || '0'
    return `os.cancelTimer(${id})\n`
  }

  luaGenerator.forBlock['os_setAlarm'] = (block: Blockly.Block) => {
    const time = luaGenerator.valueToCode(block, 'TIME', Order.NONE) || '0'
    return `os.setAlarm(${time})\n`
  }

  luaGenerator.forBlock['os_cancelAlarm'] = (block: Blockly.Block) => {
    const id = luaGenerator.valueToCode(block, 'ID', Order.NONE) || '0'
    return `os.cancelAlarm(${id})\n`
  }

  luaGenerator.forBlock['os_version'] = () => ['os.version()', Order.HIGH]
  luaGenerator.forBlock['os_day'] = () => ['os.day()', Order.HIGH]

  luaGenerator.forBlock['os_epoch'] = (block: Blockly.Block) => {
    const locale = block.getFieldValue('LOCALE')
    return [`os.epoch("${locale}")`, Order.HIGH]
  }
  luaGenerator.forBlock['os_date'] = (block: Blockly.Block) => {
    const format = luaGenerator.valueToCode(block, 'FORMAT', Order.NONE) || '"*t"'
    return [`os.date(${format})`, Order.HIGH]
  }
  luaGenerator.forBlock['os_pullEventRaw'] = (block: Blockly.Block) => {
    const filter = luaGenerator.valueToCode(block, 'FILTER', Order.NONE) || 'nil'
    return [`{os.pullEventRaw(${filter})}`, Order.HIGH]
  }

  luaGenerator.forBlock['term_blit'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    const textColor = luaGenerator.valueToCode(block, 'TEXT_COLOR', Order.NONE) || '""'
    const bgColor = luaGenerator.valueToCode(block, 'BG_COLOR', Order.NONE) || '""'
    return `term.blit(${text}, ${textColor}, ${bgColor})\n`
  }

  luaGenerator.forBlock['term_getTextColor'] = () => ['term.getTextColor()', Order.HIGH]
  luaGenerator.forBlock['term_getBackgroundColor'] = () => ['term.getBackgroundColor()', Order.HIGH]

  luaGenerator.forBlock['term_setPaletteColour'] = (block: Blockly.Block) => {
    const color = block.getFieldValue('COLOR')
    const r = luaGenerator.valueToCode(block, 'R', Order.NONE) || '0'
    const g = luaGenerator.valueToCode(block, 'G', Order.NONE) || '0'
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || '0'
    return `term.setPaletteColour(colors.${color}, ${r}, ${g}, ${b})\n`
  }
  luaGenerator.forBlock['term_getPaletteColour'] = (block: Blockly.Block) => {
    const color = block.getFieldValue('COLOR')
    return [`{term.getPaletteColour(colors.${color})}`, Order.HIGH]
  }

  // Math
  luaGenerator.forBlock['math_number'] = (block: Blockly.Block) => {
    const num = block.getFieldValue('NUM')
    return [String(num), Order.ATOMIC]
  }

  luaGenerator.forBlock['math_arithmetic'] = (block: Blockly.Block) => {
    const a = luaGenerator.valueToCode(block, 'A', Order.NONE) || '0'
    const op = block.getFieldValue('OP')
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || '0'
    let order = Order.ADDITIVE
    if (op === '*' || op === '/') order = Order.MULTIPLICATIVE
    if (op === '^') order = Order.HIGH
    return [`${a} ${op} ${b}`, order]
  }

  luaGenerator.forBlock['math_random'] = (block: Blockly.Block) => {
    const min = luaGenerator.valueToCode(block, 'MIN', Order.NONE) || '1'
    const max = luaGenerator.valueToCode(block, 'MAX', Order.NONE) || '10'
    return [`math.random(${min}, ${max})`, Order.HIGH]
  }

  luaGenerator.forBlock['math_mod'] = (block: Blockly.Block) => {
    const a = luaGenerator.valueToCode(block, 'A', Order.NONE) || '0'
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || '1'
    return [`${a} % ${b}`, Order.MULTIPLICATIVE]
  }

  luaGenerator.forBlock['math_floor'] = (block: Blockly.Block) => {
    const num = luaGenerator.valueToCode(block, 'NUM', Order.NONE) || '0'
    return [`math.floor(${num})`, Order.HIGH]
  }

  luaGenerator.forBlock['math_ceil'] = (block: Blockly.Block) => {
    const num = luaGenerator.valueToCode(block, 'NUM', Order.NONE) || '0'
    return [`math.ceil(${num})`, Order.HIGH]
  }

  luaGenerator.forBlock['math_abs'] = (block: Blockly.Block) => {
    const num = luaGenerator.valueToCode(block, 'NUM', Order.NONE) || '0'
    return [`math.abs(${num})`, Order.HIGH]
  }

  luaGenerator.forBlock['math_sqrt'] = (block: Blockly.Block) => {
    const num = luaGenerator.valueToCode(block, 'NUM', Order.NONE) || '0'
    return [`math.sqrt(${num})`, Order.HIGH]
  }

  luaGenerator.forBlock['math_min'] = (block: Blockly.Block) => {
    const a = luaGenerator.valueToCode(block, 'A', Order.NONE) || '0'
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || '0'
    return [`math.min(${a}, ${b})`, Order.HIGH]
  }

  luaGenerator.forBlock['math_max'] = (block: Blockly.Block) => {
    const a = luaGenerator.valueToCode(block, 'A', Order.NONE) || '0'
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || '0'
    return [`math.max(${a}, ${b})`, Order.HIGH]
  }

  // Controls
  luaGenerator.forBlock['controls_if'] = (block: Blockly.Block) => {
    let code = ''
    const condition = luaGenerator.valueToCode(block, 'IF0', Order.NONE) || 'false'
    const branch = luaGenerator.statementToCode(block, 'DO0')
    code += `if ${condition} then\n${branch}`

    let n = 1
    while (block.getInput(`IF${n}`)) {
      const cond = luaGenerator.valueToCode(block, `IF${n}`, Order.NONE) || 'false'
      const br = luaGenerator.statementToCode(block, `DO${n}`)
      code += `elseif ${cond} then\n${br}`
      n++
    }

    if (block.getInput('ELSE')) {
      const elseBranch = luaGenerator.statementToCode(block, 'ELSE')
      code += `else\n${elseBranch}`
    }

    code += 'end\n'
    return code
  }

  luaGenerator.forBlock['controls_repeat_ext'] = (block: Blockly.Block) => {
    const times = luaGenerator.valueToCode(block, 'TIMES', Order.NONE) || '10'
    const body = luaGenerator.statementToCode(block, 'DO')
    return `for _ = 1, ${times} do\n${body}end\n`
  }

  luaGenerator.forBlock['controls_whileUntil'] = (block: Blockly.Block) => {
    const condition = luaGenerator.valueToCode(block, 'BOOL', Order.NONE) || 'false'
    const mode = block.getFieldValue('MODE')
    const body = luaGenerator.statementToCode(block, 'DO')
    const op = mode === 'WHILE' ? '' : 'not '
    return `while ${op}(${condition}) do\n${body}end\n`
  }

  luaGenerator.forBlock['controls_for'] = (block: Blockly.Block) => {
    const variable = block.getFieldValue('VAR') || 'i'
    const from = luaGenerator.valueToCode(block, 'FROM', Order.NONE) || '1'
    const to = luaGenerator.valueToCode(block, 'TO', Order.NONE) || '10'
    const by = luaGenerator.valueToCode(block, 'BY', Order.NONE) || '1'
    const body = luaGenerator.statementToCode(block, 'DO')
    return `for ${variable} = ${from}, ${to}, ${by} do\n${body}end\n`
  }

  luaGenerator.forBlock['controls_flow_statements'] = (block: Blockly.Block) => {
    const flow = block.getFieldValue('FLOW')
    return flow === 'BREAK' ? 'break\n' : '-- continue not supported in Lua\n'
  }

  // Logic
  luaGenerator.forBlock['logic_boolean'] = (block: Blockly.Block) => {
    const value = block.getFieldValue('BOOL')
    return [value, Order.ATOMIC]
  }

  luaGenerator.forBlock['logic_negate'] = (block: Blockly.Block) => {
    const value = luaGenerator.valueToCode(block, 'BOOL', Order.UNARY) || 'false'
    return [`not ${value}`, Order.UNARY]
  }

  luaGenerator.forBlock['logic_compare'] = (block: Blockly.Block) => {
    const a = luaGenerator.valueToCode(block, 'A', Order.NONE) || '0'
    const op = block.getFieldValue('OP')
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || '0'
    return [`${a} ${op} ${b}`, Order.RELATIONAL]
  }

  luaGenerator.forBlock['logic_operation'] = (block: Blockly.Block) => {
    const a = luaGenerator.valueToCode(block, 'A', Order.NONE) || 'false'
    const op = block.getFieldValue('OP')
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || 'false'
    return [`${a} ${op} ${b}`, Order.AND]
  }

  luaGenerator.forBlock['logic_null'] = () => ['nil', Order.ATOMIC]

  // Text
  luaGenerator.forBlock['text'] = (block: Blockly.Block) => {
    const text = block.getFieldValue('TEXT')
    return [`"${text}"`, Order.ATOMIC]
  }

  luaGenerator.forBlock['text_join'] = (block: Blockly.Block) => {
    const a = luaGenerator.valueToCode(block, 'A', Order.NONE) || '""'
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || '""'
    return [`${a} .. ${b}`, Order.CONCATENATION]
  }

  luaGenerator.forBlock['text_length'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    return [`#${text}`, Order.UNARY]
  }

  luaGenerator.forBlock['text_isEmpty'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    return [`${text} == ""`, Order.RELATIONAL]
  }

  luaGenerator.forBlock['text_substring'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    const from = luaGenerator.valueToCode(block, 'FROM', Order.NONE) || '1'
    const to = luaGenerator.valueToCode(block, 'TO', Order.NONE) || '-1'
    return [`string.sub(${text}, ${from}, ${to})`, Order.HIGH]
  }

  // Variables
  luaGenerator.forBlock['variables_get'] = (block: Blockly.Block) => {
    const variable = block.getFieldValue('VAR') || 'item'
    return [variable, Order.ATOMIC]
  }

  luaGenerator.forBlock['variables_set'] = (block: Blockly.Block) => {
    const variable = block.getFieldValue('VAR') || 'item'
    const value = luaGenerator.valueToCode(block, 'VALUE', Order.NONE) || 'nil'
    return `${variable} = ${value}\n`
  }

  luaGenerator.forBlock['procedures_defnoreturn'] = (block: Blockly.Block) => {
    const name = block.getFieldValue('NAME')
    const body = luaGenerator.statementToCode(block, 'STACK')
    return `function ${name}()\n${body}end\n`
  }

  luaGenerator.forBlock['procedures_callnoreturn'] = (block: Blockly.Block) => {
    const name = block.getFieldValue('NAME')
    return `${name}()\n`
  }

  // Rednet
  luaGenerator.forBlock['rednet_open'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return `rednet.open("${side}")\n`
  }

  luaGenerator.forBlock['rednet_close'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return `rednet.close("${side}")\n`
  }

  luaGenerator.forBlock['rednet_isOpen'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`rednet.isOpen("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['rednet_send'] = (block: Blockly.Block) => {
    const recipient = luaGenerator.valueToCode(block, 'RECIPIENT', Order.NONE) || '0'
    const message = luaGenerator.valueToCode(block, 'MESSAGE', Order.NONE) || '""'
    const protocol = luaGenerator.valueToCode(block, 'PROTOCOL', Order.NONE)
    return protocol ? `rednet.send(${recipient}, ${message}, ${protocol})\n` : `rednet.send(${recipient}, ${message})\n`
  }

  luaGenerator.forBlock['rednet_broadcast'] = (block: Blockly.Block) => {
    const message = luaGenerator.valueToCode(block, 'MESSAGE', Order.NONE) || '""'
    const protocol = luaGenerator.valueToCode(block, 'PROTOCOL', Order.NONE)
    return protocol ? `rednet.broadcast(${message}, ${protocol})\n` : `rednet.broadcast(${message})\n`
  }

  luaGenerator.forBlock['rednet_receive'] = (block: Blockly.Block) => {
    const protocol = luaGenerator.valueToCode(block, 'PROTOCOL', Order.NONE)
    const timeout = luaGenerator.valueToCode(block, 'TIMEOUT', Order.NONE)
    const args = []
    if (protocol) args.push(protocol)
    if (timeout) args.push(timeout)
    return [`{rednet.receive(${args.join(', ') || 'nil'})}`, Order.HIGH]
  }

  luaGenerator.forBlock['rednet_host'] = (block: Blockly.Block) => {
    const protocol = luaGenerator.valueToCode(block, 'PROTOCOL', Order.NONE) || '""'
    const hostname = luaGenerator.valueToCode(block, 'HOSTNAME', Order.NONE) || '""'
    return `rednet.host(${protocol}, ${hostname})\n`
  }

  luaGenerator.forBlock['rednet_unhost'] = (block: Blockly.Block) => {
    const protocol = luaGenerator.valueToCode(block, 'PROTOCOL', Order.NONE) || '""'
    return `rednet.unhost(${protocol})\n`
  }

  luaGenerator.forBlock['rednet_lookup'] = (block: Blockly.Block) => {
    const protocol = luaGenerator.valueToCode(block, 'PROTOCOL', Order.NONE) || '""'
    const hostname = luaGenerator.valueToCode(block, 'HOSTNAME', Order.NONE) || '""'
    return [`{rednet.lookup(${protocol}, ${hostname})}`, Order.HIGH]
  }

  // GPS
  luaGenerator.forBlock['gps_locate'] = (block: Blockly.Block) => {
    const timeout = luaGenerator.valueToCode(block, 'TIMEOUT', Order.NONE) || 'nil'
    return [`{gps.locate(${timeout})}`, Order.HIGH]
  }

  // Colors
  luaGenerator.forBlock['colors_combine'] = (block: Blockly.Block) => {
    const color1 = luaGenerator.valueToCode(block, 'COLOR1', Order.NONE) || '0'
    const color2 = luaGenerator.valueToCode(block, 'COLOR2', Order.NONE) || '0'
    return [`colors.combine(${color1}, ${color2})`, Order.HIGH]
  }

  luaGenerator.forBlock['colors_subtract'] = (block: Blockly.Block) => {
    const colors = luaGenerator.valueToCode(block, 'COLORS', Order.NONE) || '0'
    const subtract = luaGenerator.valueToCode(block, 'SUBTRACT', Order.NONE) || '0'
    return [`colors.subtract(${colors}, ${subtract})`, Order.HIGH]
  }

  luaGenerator.forBlock['colors_test'] = (block: Blockly.Block) => {
    const colors = luaGenerator.valueToCode(block, 'COLORS', Order.NONE) || '0'
    const color = luaGenerator.valueToCode(block, 'COLOR', Order.NONE) || '0'
    return [`colors.test(${colors}, ${color})`, Order.HIGH]
  }

  luaGenerator.forBlock['colors_packRGB'] = (block: Blockly.Block) => {
    const r = luaGenerator.valueToCode(block, 'R', Order.NONE) || '0'
    const g = luaGenerator.valueToCode(block, 'G', Order.NONE) || '0'
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || '0'
    return [`colors.packRGB(${r}, ${g}, ${b})`, Order.HIGH]
  }

  luaGenerator.forBlock['colors_unpackRGB'] = (block: Blockly.Block) => {
    const rgb = luaGenerator.valueToCode(block, 'RGB', Order.NONE) || '0'
    return [`{colors.unpackRGB(${rgb})}`, Order.HIGH]
  }

  luaGenerator.forBlock['colors_rgb8'] = (block: Blockly.Block) => {
    const r = luaGenerator.valueToCode(block, 'R', Order.NONE) || '0'
    const g = luaGenerator.valueToCode(block, 'G', Order.NONE) || '0'
    const b = luaGenerator.valueToCode(block, 'B', Order.NONE) || '0'
    return [`colors.rgb8(${r}, ${g}, ${b})`, Order.HIGH]
  }

  luaGenerator.forBlock['colors_toBlit'] = (block: Blockly.Block) => {
    const color = luaGenerator.valueToCode(block, 'COLOR', Order.NONE) || '0'
    return [`colors.toBlit(${color})`, Order.HIGH]
  }

  luaGenerator.forBlock['colors_fromBlit'] = (block: Blockly.Block) => {
    const char = luaGenerator.valueToCode(block, 'CHAR', Order.NONE) || '""'
    return [`colors.fromBlit(${char})`, Order.HIGH]
  }

  luaGenerator.forBlock['colors_constant'] = (block: Blockly.Block) => {
    const color = block.getFieldValue('COLOR')
    return [color, Order.ATOMIC]
  }

  // Disk
  luaGenerator.forBlock['disk_isPresent'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`disk.isPresent("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['disk_getLabel'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`disk.getLabel("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['disk_setLabel'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    const label = luaGenerator.valueToCode(block, 'LABEL', Order.NONE) || '""'
    return `disk.setLabel("${side}", ${label})\n`
  }

  luaGenerator.forBlock['disk_hasData'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`disk.hasData("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['disk_getMountPath'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`disk.getMountPath("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['disk_hasAudio'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`disk.hasAudio("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['disk_getAudioTitle'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`disk.getAudioTitle("${side}")`, Order.HIGH]
  }

  luaGenerator.forBlock['disk_playAudio'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return `disk.playAudio("${side}")\n`
  }

  luaGenerator.forBlock['disk_stopAudio'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return `disk.stopAudio("${side}")\n`
  }

  luaGenerator.forBlock['disk_eject'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return `disk.eject("${side}")\n`
  }

  luaGenerator.forBlock['disk_getID'] = (block: Blockly.Block) => {
    const side = block.getFieldValue('SIDE')
    return [`disk.getID("${side}")`, Order.HIGH]
  }

  // TextUtils
  luaGenerator.forBlock['textutils_slowWrite'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    const rate = luaGenerator.valueToCode(block, 'RATE', Order.NONE) || '0.05'
    return `textutils.slowWrite(${text}, ${rate})\n`
  }

  luaGenerator.forBlock['textutils_slowPrint'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    const rate = luaGenerator.valueToCode(block, 'RATE', Order.NONE) || '0.05'
    return `textutils.slowPrint(${text}, ${rate})\n`
  }

  luaGenerator.forBlock['textutils_formatTime'] = (block: Blockly.Block) => {
    const time = luaGenerator.valueToCode(block, 'TIME', Order.NONE) || '0'
    const twentyFour = block.getFieldValue('TWENTY_FOUR')
    return [`textutils.formatTime(${time}, ${twentyFour})`, Order.HIGH]
  }

  luaGenerator.forBlock['textutils_serialize'] = (block: Blockly.Block) => {
    const table = luaGenerator.valueToCode(block, 'TABLE', Order.NONE) || '{}'
    return [`textutils.serialize(${table})`, Order.HIGH]
  }

  luaGenerator.forBlock['textutils_unserialize'] = (block: Blockly.Block) => {
    const str = luaGenerator.valueToCode(block, 'STRING', Order.NONE) || '""'
    return [`textutils.unserialize(${str})`, Order.HIGH]
  }

  luaGenerator.forBlock['textutils_serializeJSON'] = (block: Blockly.Block) => {
    const table = luaGenerator.valueToCode(block, 'TABLE', Order.NONE) || '{}'
    return [`textutils.serializeJSON(${table})`, Order.HIGH]
  }

  luaGenerator.forBlock['textutils_unserializeJSON'] = (block: Blockly.Block) => {
    const str = luaGenerator.valueToCode(block, 'STRING', Order.NONE) || '""'
    return [`textutils.unserializeJSON(${str})`, Order.HIGH]
  }

  luaGenerator.forBlock['textutils_urlEncode'] = (block: Blockly.Block) => {
    const str = luaGenerator.valueToCode(block, 'STRING', Order.NONE) || '""'
    return [`textutils.urlEncode(${str})`, Order.HIGH]
  }

  luaGenerator.forBlock['textutils_pagedPrint'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    return `textutils.pagedPrint(${text})\n`
  }

  luaGenerator.forBlock['textutils_tabulate'] = (block: Blockly.Block) => {
    const table = luaGenerator.valueToCode(block, 'TABLE', Order.NONE) || '{}'
    return `textutils.tabulate(${table})\n`
  }

  luaGenerator.forBlock['textutils_pagedTabulate'] = (block: Blockly.Block) => {
    const table = luaGenerator.valueToCode(block, 'TABLE', Order.NONE) || '{}'
    return `textutils.pagedTabulate(${table})\n`
  }

  // Parallel
  luaGenerator.forBlock['parallel_waitForAny'] = (block: Blockly.Block) => {
    const functions = luaGenerator.statementToCode(block, 'FUNCTIONS')
    return `parallel.waitForAny(${functions})\n`
  }

  luaGenerator.forBlock['parallel_waitForAll'] = (block: Blockly.Block) => {
    const functions = luaGenerator.statementToCode(block, 'FUNCTIONS')
    return `parallel.waitForAll(${functions})\n`
  }

  // PaintUtils
  luaGenerator.forBlock['paintutils_drawPixel'] = (block: Blockly.Block) => {
    const x = luaGenerator.valueToCode(block, 'X', Order.NONE) || '0'
    const y = luaGenerator.valueToCode(block, 'Y', Order.NONE) || '0'
    const color = luaGenerator.valueToCode(block, 'COLOR', Order.NONE) || '0'
    return `paintutils.drawPixel(${x}, ${y}, ${color})\n`
  }

  luaGenerator.forBlock['paintutils_drawLine'] = (block: Blockly.Block) => {
    const x1 = luaGenerator.valueToCode(block, 'X1', Order.NONE) || '0'
    const y1 = luaGenerator.valueToCode(block, 'Y1', Order.NONE) || '0'
    const x2 = luaGenerator.valueToCode(block, 'X2', Order.NONE) || '0'
    const y2 = luaGenerator.valueToCode(block, 'Y2', Order.NONE) || '0'
    const color = luaGenerator.valueToCode(block, 'COLOR', Order.NONE) || '0'
    return `paintutils.drawLine(${x1}, ${y1}, ${x2}, ${y2}, ${color})\n`
  }

  luaGenerator.forBlock['paintutils_drawBox'] = (block: Blockly.Block) => {
    const x1 = luaGenerator.valueToCode(block, 'X1', Order.NONE) || '0'
    const y1 = luaGenerator.valueToCode(block, 'Y1', Order.NONE) || '0'
    const x2 = luaGenerator.valueToCode(block, 'X2', Order.NONE) || '0'
    const y2 = luaGenerator.valueToCode(block, 'Y2', Order.NONE) || '0'
    const color = luaGenerator.valueToCode(block, 'COLOR', Order.NONE) || '0'
    return `paintutils.drawBox(${x1}, ${y1}, ${x2}, ${y2}, ${color})\n`
  }

  luaGenerator.forBlock['paintutils_drawFilledBox'] = (block: Blockly.Block) => {
    const x1 = luaGenerator.valueToCode(block, 'X1', Order.NONE) || '0'
    const y1 = luaGenerator.valueToCode(block, 'Y1', Order.NONE) || '0'
    const x2 = luaGenerator.valueToCode(block, 'X2', Order.NONE) || '0'
    const y2 = luaGenerator.valueToCode(block, 'Y2', Order.NONE) || '0'
    const color = luaGenerator.valueToCode(block, 'COLOR', Order.NONE) || '0'
    return `paintutils.drawFilledBox(${x1}, ${y1}, ${x2}, ${y2}, ${color})\n`
  }

  luaGenerator.forBlock['paintutils_loadImage'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return [`paintutils.loadImage(${path})`, Order.HIGH]
  }

  luaGenerator.forBlock['paintutils_drawImage'] = (block: Blockly.Block) => {
    const image = luaGenerator.valueToCode(block, 'IMAGE', Order.NONE) || 'nil'
    const x = luaGenerator.valueToCode(block, 'X', Order.NONE) || '0'
    const y = luaGenerator.valueToCode(block, 'Y', Order.NONE) || '0'
    return `paintutils.drawImage(${image}, ${x}, ${y})\n`
  }

  // Vector
  luaGenerator.forBlock['vector_new'] = (block: Blockly.Block) => {
    const x = luaGenerator.valueToCode(block, 'X', Order.NONE) || '0'
    const y = luaGenerator.valueToCode(block, 'Y', Order.NONE) || '0'
    const z = luaGenerator.valueToCode(block, 'Z', Order.NONE) || '0'
    return [`vector.new(${x}, ${y}, ${z})`, Order.HIGH]
  }

  luaGenerator.forBlock['vector_add'] = (block: Blockly.Block) => {
    const v1 = luaGenerator.valueToCode(block, 'V1', Order.NONE) || 'vector.new(0,0,0)'
    const v2 = luaGenerator.valueToCode(block, 'V2', Order.NONE) || 'vector.new(0,0,0)'
    return [`(${v1}):add(${v2})`, Order.HIGH]
  }

  luaGenerator.forBlock['vector_sub'] = (block: Blockly.Block) => {
    const v1 = luaGenerator.valueToCode(block, 'V1', Order.NONE) || 'vector.new(0,0,0)'
    const v2 = luaGenerator.valueToCode(block, 'V2', Order.NONE) || 'vector.new(0,0,0)'
    return [`(${v1}):sub(${v2})`, Order.HIGH]
  }

  luaGenerator.forBlock['vector_mul'] = (block: Blockly.Block) => {
    const v1 = luaGenerator.valueToCode(block, 'V1', Order.NONE) || 'vector.new(0,0,0)'
    const factor = luaGenerator.valueToCode(block, 'FACTOR', Order.NONE) || '1'
    return [`(${v1}):mul(${factor})`, Order.HIGH]
  }

  luaGenerator.forBlock['vector_div'] = (block: Blockly.Block) => {
    const v1 = luaGenerator.valueToCode(block, 'V1', Order.NONE) || 'vector.new(0,0,0)'
    const factor = luaGenerator.valueToCode(block, 'FACTOR', Order.NONE) || '1'
    return [`(${v1}):div(${factor})`, Order.HIGH]
  }

  luaGenerator.forBlock['vector_dot'] = (block: Blockly.Block) => {
    const v1 = luaGenerator.valueToCode(block, 'V1', Order.NONE) || 'vector.new(0,0,0)'
    const v2 = luaGenerator.valueToCode(block, 'V2', Order.NONE) || 'vector.new(0,0,0)'
    return [`(${v1}):dot(${v2})`, Order.HIGH]
  }

  luaGenerator.forBlock['vector_cross'] = (block: Blockly.Block) => {
    const v1 = luaGenerator.valueToCode(block, 'V1', Order.NONE) || 'vector.new(0,0,0)'
    const v2 = luaGenerator.valueToCode(block, 'V2', Order.NONE) || 'vector.new(0,0,0)'
    return [`(${v1}):cross(${v2})`, Order.HIGH]
  }

  luaGenerator.forBlock['vector_length'] = (block: Blockly.Block) => {
    const v = luaGenerator.valueToCode(block, 'V', Order.NONE) || 'vector.new(0,0,0)'
    return [`(${v}):length()`, Order.HIGH]
  }

  luaGenerator.forBlock['vector_normalize'] = (block: Blockly.Block) => {
    const v = luaGenerator.valueToCode(block, 'V', Order.NONE) || 'vector.new(0,0,0)'
    return [`(${v}):normalize()`, Order.HIGH]
  }

  luaGenerator.forBlock['vector_tostring'] = (block: Blockly.Block) => {
    const v = luaGenerator.valueToCode(block, 'V', Order.NONE) || 'vector.new(0,0,0)'
    return [`(${v}):tostring()`, Order.HIGH]
  }

  // Keys
  luaGenerator.forBlock['keys_getName'] = (block: Blockly.Block) => {
    const key = luaGenerator.valueToCode(block, 'KEY', Order.NONE) || '0'
    return [`keys.getName(${key})`, Order.HIGH]
  }

  luaGenerator.forBlock['keys_getCode'] = (block: Blockly.Block) => {
    const name = luaGenerator.valueToCode(block, 'NAME', Order.NONE) || '""'
    return [`keys.getCode(${name})`, Order.HIGH]
  }

  // Settings
  luaGenerator.forBlock['settings_define'] = (block: Blockly.Block) => {
    const name = luaGenerator.valueToCode(block, 'NAME', Order.NONE) || '""'
    return `settings.define(${name})\n`
  }

  luaGenerator.forBlock['settings_set'] = (block: Blockly.Block) => {
    const name = luaGenerator.valueToCode(block, 'NAME', Order.NONE) || '""'
    const value = luaGenerator.valueToCode(block, 'VALUE', Order.NONE) || 'nil'
    return `settings.set(${name}, ${value})\n`
  }

  luaGenerator.forBlock['settings_get'] = (block: Blockly.Block) => {
    const name = luaGenerator.valueToCode(block, 'NAME', Order.NONE) || '""'
    const def = luaGenerator.valueToCode(block, 'DEFAULT', Order.NONE)
    return def ? [`settings.get(${name}, ${def})`, Order.HIGH] : [`settings.get(${name})`, Order.HIGH]
  }

  luaGenerator.forBlock['settings_unset'] = (block: Blockly.Block) => {
    const name = luaGenerator.valueToCode(block, 'NAME', Order.NONE) || '""'
    return `settings.unset(${name})\n`
  }

  luaGenerator.forBlock['settings_clear'] = () => 'settings.clear()\n'

  luaGenerator.forBlock['settings_getNames'] = () => ['{settings.getNames()}', Order.HIGH]

  luaGenerator.forBlock['settings_load'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return `settings.load(${path})\n`
  }

  luaGenerator.forBlock['settings_save'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return `settings.save(${path})\n`
  }

  luaGenerator.forBlock['settings_undefine'] = (block: Blockly.Block) => {
    const name = luaGenerator.valueToCode(block, 'NAME', Order.NONE) || '""'
    return `settings.undefine(${name})\n`
  }

  luaGenerator.forBlock['settings_getDetails'] = (block: Blockly.Block) => {
    const name = luaGenerator.valueToCode(block, 'NAME', Order.NONE) || '""'
    return [`settings.getDetails(${name})`, Order.HIGH]
  }

  // ===== Hat 积木（实心帽子，无内槽）=====

  luaGenerator.forBlock['hat_start'] = () => ''

  luaGenerator.forBlock['hat_eventLoop'] = () => `while true do\n  local e = {os.pullEvent()}\n`

  luaGenerator.forBlock['hat_rednet'] = () => `while true do\n  local _, senderID, message = os.pullEvent("rednet_message")\n`

  luaGenerator.forBlock['hat_key'] = () => `while true do\n  local _, keyCode = os.pullEvent("key")\n`

  luaGenerator.forBlock['hat_timer'] = () => `while true do\n  local _, timerID = os.pullEvent("timer")\n`

  luaGenerator.forBlock['hat_char'] = () => `while true do\n  local _, char = os.pullEvent("char")\n`

  luaGenerator.forBlock['hat_touch'] = () => `while true do\n  local _, touchX, touchY = os.pullEvent("monitor_touch")\n`

  // ===== 事件内联积木 =====
  // 事件参数绑定表：每个事件类型自动创建对应的局部变量
  const EVENT_VARS: Record<string, string> = {
    'rednet_message':    'local senderID, message = e[2], e[3]',
    'key':               'local keyCode = e[2]',
    'key_up':            'local keyCode = e[2]',
    'char':              'local char = e[2]',
    'timer':             'local timerID = e[2]',
    'mouse_click':       'local button, x, y = e[2], e[3], e[4]',
    'mouse_drag':        'local button, x, y = e[2], e[3], e[4]',
    'mouse_scroll':      'local direction, x, y = e[2], e[3], e[4]',
    'mouse_up':          'local button, x, y = e[2], e[3], e[4]',
    'monitor_touch':     'local touchX, touchY = e[2], e[3]',
    'monitor_touch_up':  'local touchX, touchY = e[2], e[3]',
    'modem_message':     'local senderID, message, distance = e[2], e[3], e[4]',
    'peripheral':        'local side = e[2]',
    'peripheral_detach': 'local side = e[2]',
    'disk':              'local side = e[2]',
    'disk_eject':        'local side = e[2]',
    'http_success':      'local url, response = e[2], e[3]',
    'http_failure':      'local url, error = e[2], e[3]',
    'alarm':             'local alarmID = e[2]',
    'terminate':         '',
  }

  luaGenerator.forBlock['event_when'] = (block: Blockly.Block) => {
    const eventType = block.getFieldValue('EVENT')
    const body = luaGenerator.statementToCode(block, 'DO')
    const vars = EVENT_VARS[eventType] || ''
    if (vars) {
      return `  if e[1] == "${eventType}" then\n    ${vars}\n${body}  end\n`
    }
    return `  if e[1] == "${eventType}" then\n${body}  end\n`
  }

  // ===== 事件数据获取积木 =====
  luaGenerator.forBlock['event_senderID'] = () => ['senderID', Order.ATOMIC]
  luaGenerator.forBlock['event_message'] = () => ['message', Order.ATOMIC]
  luaGenerator.forBlock['event_keyCode'] = () => ['keyCode', Order.ATOMIC]
  luaGenerator.forBlock['event_char'] = () => ['char', Order.ATOMIC]
  luaGenerator.forBlock['event_timerID'] = () => ['timerID', Order.ATOMIC]
  luaGenerator.forBlock['event_touchX'] = () => ['touchX', Order.ATOMIC]
  luaGenerator.forBlock['event_touchY'] = () => ['touchY', Order.ATOMIC]
  luaGenerator.forBlock['event_mouseX'] = () => ['x', Order.ATOMIC]
  luaGenerator.forBlock['event_mouseY'] = () => ['y', Order.ATOMIC]
  luaGenerator.forBlock['event_mouseButton'] = () => ['button', Order.ATOMIC]

  // 全局函数
  luaGenerator.forBlock['write'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    return `write(${text})\n`
  }
  luaGenerator.forBlock['print'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    return `print(${text})\n`
  }
  luaGenerator.forBlock['read'] = () => ['read()', Order.HIGH]

  luaGenerator.forBlock['printError'] = (block: Blockly.Block) => {
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    return `printError(${text})\n`
  }

  // IO
  luaGenerator.forBlock['io_open'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    const mode = block.getFieldValue('MODE')
    return [`io.open(${path}, "${mode}")`, Order.HIGH]
  }
  luaGenerator.forBlock['io_close'] = (block: Blockly.Block) => {
    const handle = luaGenerator.valueToCode(block, 'HANDLE', Order.NONE) || 'nil'
    return `(${handle}):close()\n`
  }
  luaGenerator.forBlock['io_readAll'] = (block: Blockly.Block) => {
    const handle = luaGenerator.valueToCode(block, 'HANDLE', Order.NONE) || 'nil'
    return [`(${handle}):readAll()`, Order.HIGH]
  }
  luaGenerator.forBlock['io_readLine'] = (block: Blockly.Block) => {
    const handle = luaGenerator.valueToCode(block, 'HANDLE', Order.NONE) || 'nil'
    return [`(${handle}):readLine()`, Order.HIGH]
  }
  luaGenerator.forBlock['io_writeLine'] = (block: Blockly.Block) => {
    const handle = luaGenerator.valueToCode(block, 'HANDLE', Order.NONE) || 'nil'
    const text = luaGenerator.valueToCode(block, 'TEXT', Order.NONE) || '""'
    return `(${handle}):writeLine(${text})\n`
  }
  luaGenerator.forBlock['io_flush'] = (block: Blockly.Block) => {
    const handle = luaGenerator.valueToCode(block, 'HANDLE', Order.NONE) || 'nil'
    return `(${handle}):flush()\n`
  }
  luaGenerator.forBlock['io_seek'] = (block: Blockly.Block) => {
    const handle = luaGenerator.valueToCode(block, 'HANDLE', Order.NONE) || 'nil'
    const whence = block.getFieldValue('WHENCE')
    const offset = luaGenerator.valueToCode(block, 'OFFSET', Order.NONE) || '0'
    return `(${handle}):seek("${whence}", ${offset})\n`
  }
  luaGenerator.forBlock['io_lines'] = (block: Blockly.Block) => {
    const handle = luaGenerator.valueToCode(block, 'HANDLE', Order.NONE) || 'nil'
    return [`(${handle}):lines()`, Order.HIGH]
  }
  luaGenerator.forBlock['io_type'] = (block: Blockly.Block) => {
    const obj = luaGenerator.valueToCode(block, 'OBJ', Order.NONE) || 'nil'
    return [`io.type(${obj})`, Order.HIGH]
  }

  // Help
  luaGenerator.forBlock['help_path'] = () => ['help.path()', Order.HIGH]
  luaGenerator.forBlock['help_setPath'] = (block: Blockly.Block) => {
    const path = luaGenerator.valueToCode(block, 'PATH', Order.NONE) || '""'
    return `help.setPath(${path})\n`
  }
  luaGenerator.forBlock['help_lookup'] = (block: Blockly.Block) => {
    const topic = luaGenerator.valueToCode(block, 'TOPIC', Order.NONE) || '""'
    return [`help.lookup(${topic})`, Order.HIGH]
  }
  luaGenerator.forBlock['help_topics'] = () => ['{help.topics()}', Order.HIGH]
  luaGenerator.forBlock['help_completeTopic'] = (block: Blockly.Block) => {
    const prefix = luaGenerator.valueToCode(block, 'PREFIX', Order.NONE) || '""'
    return [`help.completeTopic(${prefix})`, Order.HIGH]
  }

  // Window
  luaGenerator.forBlock['window_create'] = (block: Blockly.Block) => {
    const parent = luaGenerator.valueToCode(block, 'PARENT', Order.NONE) || 'term.current()'
    const x = luaGenerator.valueToCode(block, 'X', Order.NONE) || '1'
    const y = luaGenerator.valueToCode(block, 'Y', Order.NONE) || '1'
    const w = luaGenerator.valueToCode(block, 'W', Order.NONE) || '10'
    const h = luaGenerator.valueToCode(block, 'H', Order.NONE) || '5'
    return [`window.create(${parent}, ${x}, ${y}, ${w}, ${h})`, Order.HIGH]
  }
  luaGenerator.forBlock['window_setVisible'] = (block: Blockly.Block) => {
    const win = luaGenerator.valueToCode(block, 'WINDOW', Order.NONE) || 'nil'
    const visible = luaGenerator.valueToCode(block, 'VISIBLE', Order.NONE) || 'true'
    return `(${win}):setVisible(${visible})\n`
  }
  luaGenerator.forBlock['window_isVisible'] = (block: Blockly.Block) => {
    const win = luaGenerator.valueToCode(block, 'WINDOW', Order.NONE) || 'nil'
    return [`(${win}):isVisible()`, Order.HIGH]
  }
  luaGenerator.forBlock['window_redraw'] = (block: Blockly.Block) => {
    const win = luaGenerator.valueToCode(block, 'WINDOW', Order.NONE) || 'nil'
    return `(${win}):redraw()\n`
  }
  luaGenerator.forBlock['window_reposition'] = (block: Blockly.Block) => {
    const win = luaGenerator.valueToCode(block, 'WINDOW', Order.NONE) || 'nil'
    const x = luaGenerator.valueToCode(block, 'X', Order.NONE) || '1'
    const y = luaGenerator.valueToCode(block, 'Y', Order.NONE) || '1'
    const w = luaGenerator.valueToCode(block, 'W', Order.NONE) || '10'
    const h = luaGenerator.valueToCode(block, 'H', Order.NONE) || '5'
    return `(${win}):reposition(${x}, ${y}, ${w}, ${h})\n`
  }
  luaGenerator.forBlock['window_getPosition'] = (block: Blockly.Block) => {
    const win = luaGenerator.valueToCode(block, 'WINDOW', Order.NONE) || 'nil'
    return [`{(${win}):getPosition()}`, Order.HIGH]
  }
}

// ===== 自定义 Workspace 代码生成 =====
export function generateCode(workspace: Blockly.Workspace): string {
  const topBlocks = workspace.getTopBlocks(false)
  const loopHats = ['hat_eventLoop', 'hat_rednet', 'hat_key', 'hat_timer', 'hat_char', 'hat_touch']

  let result = ''
  for (const block of topBlocks) {
    const code = luaGenerator.blockToCode(block) as string
    result += code
    if (loopHats.includes(block.type)) {
      result += 'end\n'
    }
  }

  return result
}
