import { reactive } from 'vue'

export type Lang = 'zh' | 'en'

export const i18n = reactive({
  lang: (localStorage.getItem('bt_lang') || 'zh') as Lang,
})

export function setLang(lang: Lang) {
  i18n.lang = lang
  localStorage.setItem('bt_lang', lang)
}

// 顶栏 & UI 文本
const messages: Record<Lang, Record<string, string>> = {
  zh: {
    file: '文件',
    newProject: '新建项目',
    exportLua: '导出 Lua 文件',
    exportProject: '导出项目 (.btpc)',
    importProject: '导入项目 (.btpc)',
    settings: '设置',
    language: '语言切换',
    help: '帮助手册',
    envCheck: '环境检测',
    about: '关于',
    projectName: '项目名称',
    untitled: '未命名项目',
    unsaved: '有未保存的修改',
    confirmNew: '确定要新建项目吗？当前积木将被清空。',
    cantExport: '无法导出项目',
    importFailed: '导入失败：文件格式不正确',
    envTitle: '浏览器环境检测',
    envDesc: '检测本设备是否支持 BlockTweaked 的全部功能',
    envSupport: '支持',
    envPartial: '部分支持',
    envNot: '不支持',
    ok: '确定',
    helpTitle: '帮助手册',
    helpIntro: '是 CC:Tweaked 1.20.1 的图形化积木编程编辑器。',
    helpBasic: '基本用法',
    helpBasicDesc: '左侧工具箱拖出积木 → 拼接组合 → 右侧自动生成 Lua 代码',
    helpEvent: '事件系统',
    helpEventDesc: '帽子积木放在最上方作为程序入口，红色积木是事件处理块',
    helpSave: '保存/导出',
    helpSaveDesc: '导出项目 (.btpc) 可保存全部积木状态\n导出 Lua (.lua) 可上传到 CC:Tweaked 电脑运行',
    helpVersion: 'CC:Tweaked 版本',
    helpVersionDesc: '兼容 Minecraft 1.20.1 / CC:Tweaked 1.109+',
    aboutDesc: '专为 CC:Tweaked 1.20.1 设计的图形化积木编程编辑器',
    aboutStack: '基于 Blockly · Vue 3 · CodeMirror 6 构建',
    aboutFile: '项目文件后缀: .btpc (BlockTweaked ProjeCt)',
    langDev: '语言切换功能开发中',
    envStorage: '本地存储',
    envIndexedDB: '索引数据库(IndexedDB)',
    envFileAPI: '文件读写 API',
    envClipboard: '剪贴板 API',
    envWorker: 'Web Worker',
    envHTTP: 'HTTP 请求 (fetch/XHR)',
    envWebSocket: 'WebSocket',
    envScreen: '屏幕分辨率',
    envTouch: '触摸支持',
    envSW: 'Service Worker (离线支持)',
    envDOMParser: 'XML 解析 (DOMParser)',
  },
  en: {
    file: 'File',
    newProject: 'New Project',
    exportLua: 'Export Lua File',
    exportProject: 'Export Project (.btpc)',
    importProject: 'Import Project (.btpc)',
    settings: 'Settings',
    language: 'Language',
    help: 'Help Manual',
    envCheck: 'Environment Check',
    about: 'About',
    projectName: 'Project Name',
    untitled: 'Untitled',
    unsaved: 'Unsaved changes',
    confirmNew: 'Create new project? All blocks will be cleared.',
    cantExport: 'Cannot export project',
    importFailed: 'Import failed: invalid file format',
    envTitle: 'Browser Environment Check',
    envDesc: 'Check if this device supports all BlockTweaked features',
    envSupport: 'Supported',
    envPartial: 'Partial',
    envNot: 'Not Supported',
    ok: 'OK',
    helpTitle: 'Help Manual',
    helpIntro: 'is a graphical block programming editor for CC:Tweaked 1.20.1.',
    helpBasic: 'Basic Usage',
    helpBasicDesc: 'Drag blocks from the toolbox → snap together → Lua code auto-generated on the right',
    helpEvent: 'Event System',
    helpEventDesc: 'Place hat blocks at the top as program entry points. Red blocks handle events.',
    helpSave: 'Save / Export',
    helpSaveDesc: 'Export Project (.btpc) saves all block state\nExport Lua (.lua) for uploading to CC:Tweaked computers',
    helpVersion: 'CC:Tweaked Version',
    helpVersionDesc: 'Compatible with Minecraft 1.20.1 / CC:Tweaked 1.109+',
    aboutDesc: 'Graphical block programming editor for CC:Tweaked 1.20.1',
    aboutStack: 'Built with Blockly · Vue 3 · CodeMirror 6',
    aboutFile: 'Project file extension: .btpc (BlockTweaked ProjeCt)',
    langDev: 'Language switching in development',
    envStorage: 'Local Storage',
    envIndexedDB: 'IndexedDB',
    envFileAPI: 'File API',
    envClipboard: 'Clipboard API',
    envWorker: 'Web Worker',
    envHTTP: 'HTTP (fetch/XHR)',
    envWebSocket: 'WebSocket',
    envScreen: 'Screen Resolution',
    envTouch: 'Touch Support',
    envSW: 'Service Worker (Offline)',
    envDOMParser: 'XML Parsing (DOMParser)',
  },
}

export function t(key: string): string {
  return messages[i18n.lang]?.[key] || messages.zh[key] || key
}

// ===== 积木标签双语 =====
// _b('中文', 'English') → 根据当前语言返回对应文本
export function _b(zh: string, en: string): string {
  return i18n.lang === 'en' ? en : zh
}

// ===== 积木标签翻译表（zh → en）=====
// 用于语言切换时刷新已存在积木的字段
export const blockLabelMap: Record<string, string> = {
  // 事件
  '🚀 启动时': 'When Started',
  '🔁 循环监听事件': 'Event Loop',
  '📩 当事件为': 'When Event Is',
  '执行': 'Do',
  '📡 收到红网消息时': 'On Rednet Message',
  '⌨️ 按键按下时': 'On Key Press',
  '⏰ 定时器触发时': 'On Timer',
  '🔤 字符输入时': 'On Char Input',
  '👆 屏幕触摸时': 'On Touch',
  '📩 发送者ID': 'Sender ID',
  '📩 消息内容': 'Message',
  '📩 按键码': 'Key Code',
  '📩 输入字符': 'Input Char',
  '📩 定时器ID': 'Timer ID',
  '📩 触摸X': 'Touch X',
  '📩 触摸Y': 'Touch Y',
  '📩 鼠标X': 'Mouse X',
  '📩 鼠标Y': 'Mouse Y',
  '📩 鼠标按键': 'Mouse Button',

  // Turtle
  '🐢 前进': 'Forward',
  '🐢 后退': 'Back',
  '🐢 左转': 'Turn Left',
  '🐢 右转': 'Turn Right',
  '🐢 上升': 'Up',
  '🐢 下降': 'Down',
  '🐢 挖掘': 'Dig',
  '🐢 在': 'To',
  '放置': 'Place',
  '🐢 检测': 'Detect',
  '🐢 选择槽位': 'Select Slot',
  '槽位': 'Slot',
  '物品数量': 'Item Count',
  '物品详情': 'Item Detail',
  '🐢 比较': 'Compare',
  '🐢 丢弃': 'Drop',
  '🐢 吸取': 'Suck',
  '🐢 攻击': 'Attack',
  '数量': 'Count',
  '🐢 挖掘上方': 'Dig Up',
  '🐢 挖掘下方': 'Dig Down',
  '🐢 攻击上方': 'Attack Up',
  '🐢 攻击下方': 'Attack Down',
  '🐢 放置上方': 'Place Up',
  '🐢 放置下方': 'Place Down',
  '🐢 检测上方': 'Detect Up',
  '🐢 检测下方': 'Detect Down',
  '🐢 比较上方': 'Compare Up',
  '🐢 比较下方': 'Compare Down',
  '🐢 检查上方': 'Inspect Up',
  '🐢 检查下方': 'Inspect Down',
  '🐢 丢弃上方': 'Drop Up',
  '🐢 丢弃下方': 'Drop Down',
  '🐢 吸取上方': 'Suck Up',
  '🐢 吸取下方': 'Suck Down',
  '🐢 当前槽位': 'Current Slot',
  '🐢 燃料等级': 'Fuel Level',
  '🐢 燃料上限': 'Fuel Limit',
  '🐢 检查': 'Inspect',
  '🐢 检查详情': 'Inspect Detail',
  '🐢 比较到槽位': 'Compare To Slot',
  '🐢 转移到槽位': 'Transfer To',
  '🐢 装备': 'Equip',
  '🐢 槽位': 'Slot',
  '物品': 'Item',
  '🐢 补充燃料': 'Refuel',
  '槽位空间': 'Item Space',

  // Term
  '📺 打印': 'Write',
  '📺 清屏': 'Clear',
  '📺 清除当前行': 'Clear Line',
  '📺 设置光标 X': 'Set Cursor X',
  '📺 获取光标位置': 'Get Cursor',
  '📺 获取终端大小': 'Get Size',
  '📺 滚动': 'Scroll',
  '行': 'Lines',
  '📺 文字颜色': 'Text Color',
  '📺 背景颜色': 'Bg Color',
  '📺 支持颜色': 'Is Color',
  '📺 读取输入': 'Read',
  '📺 重定向到': 'Redirect To',
  '📺 当前终端': 'Current Term',
  '📺 原生终端': 'Native Term',
  '📺 光标闪烁': 'Cursor Blink',
  '📺 获取光标闪烁': 'Get Cursor Blink',
  '📺 彩色打印': 'Blit',
  '📺 文字颜色值': 'Text Color Value',
  '📺 背景颜色值': 'Bg Color Value',

  // FS
  '📁 列出目录': 'List',
  '📁 文件存在': 'Exists',
  '📁 是目录': 'Is Dir',
  '📁 只读': 'Is Read Only',
  '📁 创建目录': 'Make Dir',
  '📁 删除': 'Delete',
  '📁 移动': 'Move',
  '到': 'To',
  '📁 复制': 'Copy',
  '📁 文件大小': 'Get Size',
  '📁 所在驱动器': 'Get Drive',
  '📁 剩余空间': 'Free Space',
  '📁 磁盘容量': 'Capacity',
  '📁 文件属性': 'Attributes',
  '📁 读取文件': 'Read File',
  '📁 写入文件': 'Write File',
  '📁 追加文件': 'Append File',
  '内容': 'Content',
  '📁 文件名': 'Get Name',
  '📁 目录名': 'Get Dir',
  '📁 合并路径': 'Combine',
  '和': 'And',
  '📁 搜索文件': 'Find',
  '📁 补全路径': 'Complete',
  '位置': 'Location',
  '📁 是挂载点': 'Is Drive Root',

  // Redstone
  '🔴 获取红石输入': 'Get Input',
  '🔴 设置红石输出': 'Set Output',
  '🔴 获取红石输出': 'Get Output',
  '🔴 设置模拟红石输出': 'Set Analog Out',
  '强度': 'Power',
  '🔴 获取模拟红石输入': 'Get Analog In',
  '🔴 获取束红石输入': 'Get Bundled In',
  '🔴 设置束红石输出': 'Set Bundled Out',
  '值': 'Value',
  '🔴 获取束红石输出': 'Get Bundled Out',
  '🔴 有效方向': 'Get Sides',
  '🔴 测试束输入': 'Test Bundled In',
  '🔴 获取模拟输出': 'Get Analog Out',

  // HTTP
  '🌐 HTTP请求': 'HTTP Request',
  '🌐 检查URL': 'Check URL',
  '🌐 GET请求': 'HTTP GET',
  '🌐 POST请求': 'HTTP POST',
  '🌐 建立WebSocket': 'WebSocket',
  '🌐 异步WebSocket': 'WS Async',
  '🌐 异步检查URL': 'Check URL Async',

  // OS
  '💻 电脑ID': 'Computer ID',
  '💻 电脑标签': 'Computer Label',
  '💻 设置标签': 'Set Label',
  '💻 队列事件': 'Queue Event',
  '💻 拉取事件': 'Pull Event',
  '💻 等待': 'Sleep',
  '秒': 's',
  '💻 游戏时间': 'Game Time',
  '💻 运行时间': 'Clock',
  '💻 关机': 'Shutdown',
  '💻 重启': 'Reboot',
  '💻 燃料等级': 'Fuel Level',
  '💻 设置燃料': 'Set Fuel',
  '💻 启动定时器': 'Start Timer',
  '💻 取消定时器': 'Cancel Timer',
  '💻 设置闹钟': 'Set Alarm',
  '💻 取消闹钟': 'Cancel Alarm',
  '💻 系统版本': 'OS Version',
  '💻 游戏天数': 'Game Day',

  // Peripheral
  '🔌 连接外设': 'Wrap',
  '🔌 外设存在': 'Is Present',
  '🔌 外设类型': 'Get Type',
  '🔌 外设方法': 'Get Methods',
  '🔌 调用外设': 'Call',
  '方法': 'Method',
  '🔌 查找外设': 'Find',
  '🔌 外设是类型': 'Has Type',
  '类型': 'Type',
  '🔌 外设名称': 'Get Name',

  // 全局I/O
  '📝 写入': 'Write',
  '📝 打印': 'Print',
  '📝 读取': 'Read',

  // 磁盘
  '💾 磁盘存在': 'Is Present',
  '💾 获取磁盘标签': 'Get Label',
  '💾 设置磁盘标签': 'Set Label',
  '标签': 'Label',
  '💾 磁盘有数据': 'Has Data',
  '💾 获取挂载路径': 'Mount Path',
  '💾 磁盘有音频': 'Has Audio',
  '💾 获取音频标题': 'Audio Title',
  '💾 播放音频': 'Play Audio',
  '💾 停止音频': 'Stop Audio',
  '💾 弹出磁盘': 'Eject',
  '💾 获取磁盘ID': 'Get ID',

  // 文本工具
  '📝 慢速写入': 'Slow Write',
  '速率': 'Rate',
  '📝 慢速打印': 'Slow Print',
  '📝 格式化时间': 'Format Time',
  '📝 序列化': 'Serialize',
  '📝 反序列化': 'Unserialize',
  '📝 序列化JSON': 'JSON Serialize',
  '📝 反序列化JSON': 'JSON Parse',
  '📝 URL编码': 'URL Encode',
  '📝 分页打印': 'Paged Print',
  '📝 表格输出': 'Tabulate',

  // 网络
  '📡 打开红网': 'Open',
  '📡 关闭红网': 'Close',
  '📡 红网已打开': 'Is Open',
  '📡 发送红网消息到': 'Send To',
  '消息': 'Message',
  '📡 广播红网消息': 'Broadcast',
  '📡 接收红网消息 超时': 'Receive Timeout',
  '📡 注册主机 协议': 'Host Protocol',
  '主机名': 'Hostname',
  '📡 取消注册主机 协议': 'Unhost Protocol',
  '📡 查找主机 协议': 'Lookup Protocol',

  // GPS
  '🛰️ GPS定位 超时': 'GPS Locate Timeout',

  // 颜色
  '🎨 组合颜色': 'Combine',
  '🎨 减去颜色': 'Subtract',
  '🎨 测试颜色': 'Test',
  '包含': 'Contains',
  '🎨 打包RGB R': 'Pack RGB R',
  '🎨 解包RGB': 'Unpack RGB',
  '🎨 RGB8 R': 'RGB8 R',
  '🎨 颜色转Blit': 'Color to Blit',
  '🎨 Blit转颜色': 'Blit to Color',

  // 绘画
  '🖌️ 画点 X': 'Draw Pixel X',
  '颜色': 'Color',
  '🖌️ 画线 X1': 'Draw Line X1',
  '🖌️ 画框 X1': 'Draw Box X1',
  '🖌️ 画填充框 X1': 'Fill Box X1',
  '🖌️ 加载图像': 'Load Image',
  '🖌️ 绘制图像': 'Draw Image',

  // 向量
  '➡️ 向量 X': 'Vector X',
  '➡️ 向量加': 'Vector Add',
  '➡️ 向量减': 'Vector Sub',
  '➡️ 向量乘': 'Vector Mul',
  '➡️ 向量除': 'Vector Div',
  '➡️ 点积': 'Dot',
  '➡️ 叉积': 'Cross',
  '➡️ 向量长度': 'Length',
  '➡️ 归一化向量': 'Normalize',
  '➡️ 向量转字符串': 'ToString',

  // 按键
  '⌨️ 按键名称': 'Key Name',

  // IO
  '📂 打开文件': 'Open File',
  '📂 关闭文件': 'Close File',
  '📂 读取全部': 'Read All',
  '📂 读取一行': 'Read Line',
  '📂 写入行': 'Write Line',
  '📂 刷新缓冲': 'Flush',
  '📂 定位文件': 'Seek',
  '📂 遍历行': 'Lines',
  '📂 文件类型': 'IO Type',

  // Help
  '❓ 帮助路径': 'Help Path',
  '❓ 设置帮助路径': 'Set Help Path',
  '❓ 查询帮助': 'Lookup Help',
  '❓ 帮助主题': 'Help Topics',
  '❓ 补全主题': 'Complete Topic',

  // Window
  '🪟 创建窗口': 'Create Window',
  '🪟 设置可见': 'Set Visible',
  '🪟 是否可见': 'Is Visible',
  '🪟 重绘窗口': 'Redraw',
  '🪟 移动窗口': 'Reposition',
  '🪟 窗口位置': 'Get Position',

  // Settings
  '⚙️ 定义设置': 'Define Setting',
  '⚙️ 设置值': 'Set Value',
  '⚙️ 获取设置': 'Get Setting',
  '⚙️ 取消设置': 'Unset',
  '⚙️ 清空所有设置': 'Clear All',
  '⚙️ 获取设置名称列表': 'Get Names',
  '⚙️ 加载设置文件': 'Load',
  '⚙️ 保存设置文件': 'Save',

  // Controls
  '如果': 'If',
  '否则如果': 'Else If',
  '否则': 'Else',
  '重复': 'Repeat',
  '次': 'Times',
  '当': 'While',
  '直到': 'Until',
  '计数': 'Count',
  '从': 'From',
  '步长': 'By',
  '中断/跳过': 'Break/Skip',
}

// ===== 刷新画布上已存在的积木标签 =====
export function refreshBlockLabels(workspace: any) {
  if (!workspace) return
  const blocks = workspace.getAllBlocks(false)
  for (const block of blocks) {
    const inputs = block.inputList || []
    for (const input of inputs) {
      for (const row of input.fieldRow || []) {
        if (row && typeof row.getValue === 'function') {
          const val = row.getValue()
          if (typeof val === 'string' && blockLabelMap[val]) {
            row.setValue(blockLabelMap[val])
          }
        }
      }
    }
  }
}
