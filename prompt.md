完整项目提示词：CC电脑积木编辑器（CC:Tweaked 1.20.1 · 源码驱动 · 编程猫风格 · 帽子云优化）

***

## 一、项目概述

请帮我开发一个**纯Web端图形化积木编程编辑器**，专门为 **Minecraft CC: Tweaked 模组（1.20.1 高版本）** 服务：

| 特性       | 说明                                                         |
| :------- | :--------------------------------------------------------- |
| **核心功能** | 左侧拖拽积木，右侧实时生成 **Lua 5.1** 代码，代码可直接在游戏内电脑运行                 |
| **积木来源** | AI自行克隆CC:Tweaked 1.20.1源码仓库，通过分析Lua ROM和Java注解提取API，自动生成积木 |
| **视觉风格** | 编程猫（Kitten）风格——明亮多彩、圆角积木、友好字体                              |
| **布局模式** | Mixly经典双栏——左积木工作区 + 右代码编辑器                                 |
| **部署平台** | **帽子云**（国内CDN加速、自动化部署、HTTPS、自定义域名、数据统计）                    |
| **目标版本** | **CC: Tweaked 1.20.1**（对应Minecraft 1.20.1，模组版本约 1.109.0+）  |

### 1.1 ⚠️ 特别强调一：嵌套与连接结构（关键设计约束）

积木编辑器最重要的交互特性是**积木的嵌套与连接能力**。请特别注意以下设计原则：

| 积木类型            | 连接点                    | 说明                   | 示例                                         |
| :-------------- | :--------------------- | :------------------- | :----------------------------------------- |
| **语句块**（执行类）    | 上方凸起 + 下方凹槽            | 可上下串联，形成代码执行序列       | `turtle.forward()` 上方可接上一个积木，下方可接下一个积木     |
| **值块**（表达式类）    | 左侧凸起                   | 可嵌入到其他积木的参数槽中        | `turtle.getItemCount(1)` 中的 `1` 可以是数学表达式积木 |
| **控制结构块**（如if）  | 上方凸起 + 下方凹槽 + **内部凹槽** | 外部可串联，**内部可嵌入子积木序列** | `if` 积木内部可以塞入一串积木，下方还可以再接其他积木              |
| **循环结构块**（如for） | 上方凸起 + 下方凹槽 + **内部凹槽** | 外部可串联，**内部可嵌入子积木序列** | `for` 积木内部可以塞入一串积木，下方还可以再接其他积木             |

### 1.2 ⚠️ 特别强调二：自定义下拉选择框（UI核心约束）

**对于有固定选项的参数（如方向、布尔值、槽位、通信端口等），必须使用自定义下拉选择框，不允许使用Blockly原生的下拉组件。**

**原因**：

1. Blockly原生下拉样式与编程猫风格不匹配
2. 原生下拉无法满足视觉定制需求（圆角、字体、颜色、动画等）
3. 需要统一的设计语言，提升整体品质感

**哪些参数需要下拉选择框**：

| 参数类型        | 示例                                | 选项列表                                                                                                                                                 |
| :---------- | :-------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| 方向          | `turtle.place(side)`              | `front`, `back`, `left`, `right`, `up`, `down`                                                                                                       |
| 布尔值         | `redstone.setOutput(side, state)` | `开(true)`, `关(false)`                                                                                                                                |
| 槽位          | `turtle.select(slot)`             | `1` \~ `16`                                                                                                                                          |
| 比较运算符       | `math.compare(a, op, b)`          | `=`, `≠`, `>`, `≥`, `<`, `≤`                                                                                                                         |
| 逻辑运算符       | `logic.operation(a, op, b)`       | `且(and)`, `或(or)`                                                                                                                                    |
| 外设方向        | `peripheral.wrap(side)`           | `left`, `right`, `front`, `back`, `top`, `bottom`                                                                                                    |
| 文件模式        | `fs.open(path, mode)`             | `读(r)`, `写(w)`, `追加(a)`                                                                                                                              |
| HTTP方法      | `http.request(url, method)`       | `GET`, `POST`, `PUT`, `DELETE`                                                                                                                       |
| 颜色（CC）      | `term.setTextColor(color)`        | `white`, `orange`, `magenta`, `lightBlue`, `yellow`, `lime`, `pink`, `gray`, `lightGray`, `cyan`, `purple`, `blue`, `brown`, `green`, `red`, `black` |
| 音符（speaker） | `speaker.playNote(note)`          | `F#0` \~ `G#9` 范围内的音符                                                                                                                                |

***

## 二、技术选型

| 层级    | 推荐技术                   | 说明                     |
| :---- | :--------------------- | :--------------------- |
| 积木引擎  | **Blockly**（Google开源）  | 原生支持Lua代码生成            |
| 前端框架  | **Vue 3** + TypeScript | 推荐Vue 3 + Vite         |
| 代码编辑器 | **CodeMirror 6**       | 支持Lua语法高亮、自动补全         |
| 代码生成  | Blockly内置 **Lua生成器**   | 需为每个积木编写Lua生成逻辑        |
| 状态管理  | **Pinia**（Vue 3）       | 管理积木状态、代码内容、历史记录       |
| 部署平台  | **帽子云**                | 国内加速、自动化部署、HTTPS、自定义域名 |
| 版本管理  | Git + GitHub           | 源码托管，与帽子云联动            |

***

## 三、布局（Mixly双栏经典布局）

```
+------------------+----------------------------------------------+
|   左侧工具箱      |      右侧代码编辑器                           |
|  (积木分类菜单)   |   (实时生成的Lua代码，语法高亮)               |
|  ┌────────────┐  |  -- 由积木自动生成的Lua代码                   |
|  │ 🐢机器人    │  |  local function myFunction()                  |
|  │ 🔴红石控制   │  |      turtle.forward()                        |
|  │ 📁文件系统   │  |      if turtle.detect() then                 |
|  │ 🌐网络通信   │  |          turtle.dig()                        |
|  │ 🔌外设扩展   │  |          print("挖到了！")                   |
|  │ 📦数据操作   │  |      else                                    |
|  │ 🎯控制结构   │  |          turtle.turnLeft()                   |
|  │ 📦变量/函数  │  |      end                                     |
|  └────────────┘  |      redstone.setOutput("back", true)        |
|                  |  end                                         |
|  [积木拖拽拼接区] |                                              |
|                  |  代码区右上角按钮：📋复制 | ⬇️下载.lua        |
|  积木在此拼接    |                                              |
+------------------+----------------------------------------------+
|   底部工具栏：🗑️清空 | ↩️撤销 | ↪️重做 | 💾保存项目 | 📂加载项目  |
+----------------------------------------------------------+
```

***

## 四、自定义下拉选择框（核心UI组件）

### 4.1 设计要求

**不能用Blockly原生下拉**，必须自己实现，样式符合编程猫风格：

| 设计规范     | 要求                                                                            |
| :------- | :---------------------------------------------------------------------------- |
| **触发样式** | 圆角胶囊（`border-radius: 20px`），背景色与积木主色协调，白色文字                                   |
| **下拉列表** | 圆角（`border-radius: 12px`），白色背景，带阴影（`box-shadow: 0 4px 16px rgba(0,0,0,0.15)`） |
| **选项悬停** | 背景色变为积木主色的浅色版（`opacity: 0.15`）                                                |
| **选项选中** | 背景色为积木主色，文字白色                                                                 |
| **字体**   | 与积木字体一致（`PingFang SC`，`14px`）                                                 |
| **动画**   | 下拉展开/收起有淡入淡出动画（`transition: opacity 0.2s, transform 0.2s`）                    |
| **位置**   | 下拉列表出现在触发元素正下方，与触发元素同宽                                                        |
| **交互**   | 点击选项后立即关闭下拉框，更新积木显示文本和存储值                                                     |

### 4.2 代码实现方案

**推荐方案：基于Blockly的** **`Field`** **类扩展自定义字段**

```javascript
// fields/KittenDropdownField.js
import * as Blockly from 'blockly';

export class KittenDropdownField extends Blockly.Field {
  constructor(options, value, opt_validator) {
    // options: [{ text: '显示文本', value: '存储值' }]
    super(value, opt_validator);
    this.options_ = options;
    this.displayText_ = this.getDisplayTextByValue(value);
    this.isOpen_ = false;
  }

  // 渲染为可点击的胶囊标签
  render_(element) {
    // 创建容器
    const wrapper = document.createElement('span');
    wrapper.className = 'kitten-dropdown-trigger';
    wrapper.textContent = this.displayText_;
    
    // 添加下拉箭头图标
    const arrow = document.createElement('span');
    arrow.className = 'kitten-dropdown-arrow';
    arrow.textContent = '▾';
    wrapper.appendChild(arrow);
    
    // 绑定点击事件
    wrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleDropdown_(wrapper);
    });
    
    element.appendChild(wrapper);
  }

  // 创建下拉列表
  createDropdown_(triggerElement) {
    const dropdown = document.createElement('div');
    dropdown.className = 'kitten-dropdown-list';
    
    // 计算位置（在触发元素正下方）
    const rect = triggerElement.getBoundingClientRect();
    dropdown.style.top = `${rect.bottom + 4}px`;
    dropdown.style.left = `${rect.left}px`;
    dropdown.style.width = `${rect.width}px`;
    
    // 生成选项
    this.options_.forEach(opt => {
      const item = document.createElement('div');
      item.className = 'kitten-dropdown-item';
      item.textContent = opt.text;
      item.dataset.value = opt.value;
      
      if (opt.value === this.value_) {
        item.classList.add('selected');
      }
      
      item.addEventListener('click', () => {
        this.setValue(opt.value);
        this.displayText_ = opt.text;
        this.closeDropdown_();
        this.forceRender();
      });
      
      dropdown.appendChild(item);
    });
    
    return dropdown;
  }
}
```

### 4.3 样式代码（编程猫风格）

```css
/* 触发按钮样式 */
.kitten-dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 12px 2px 14px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #FFFFFF;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s;
  font-family: 'PingFang SC', 'Noto Sans SC', sans-serif;
  height: 28px;
  line-height: 28px;
}

.kitten-dropdown-trigger:hover {
  background: rgba(255, 255, 255, 0.35);
}

.kitten-dropdown-trigger:active {
  transform: scale(0.96);
}

.kitten-dropdown-arrow {
  font-size: 10px;
  transition: transform 0.3s;
  opacity: 0.8;
}

.kitten-dropdown-arrow.open {
  transform: rotate(180deg);
}

/* 下拉列表 */
.kitten-dropdown-list {
  position: fixed;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
  padding: 6px 0;
  z-index: 10000;
  min-width: 60px;
  max-height: 200px;
  overflow-y: auto;
  animation: dropdownFadeIn 0.15s ease-out;
  transform-origin: top center;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: scaleY(0.92) translateY(-4px);
  }
  to {
    opacity: 1;
    transform: scaleY(1) translateY(0);
  }
}

/* 下拉选项 */
.kitten-dropdown-item {
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  color: #333333;
  cursor: pointer;
  transition: background 0.15s;
  font-family: 'PingFang SC', 'Noto Sans SC', sans-serif;
  white-space: nowrap;
}

.kitten-dropdown-item:hover {
  background: rgba(0, 0, 0, 0.06);
}

.kitten-dropdown-item.selected {
  color: #FF6B6B;
  font-weight: 700;
  background: rgba(255, 107, 107, 0.10);
}

.kitten-dropdown-item:first-child {
  border-radius: 12px 12px 0 0;
}

.kitten-dropdown-item:last-child {
  border-radius: 0 0 12px 12px;
}

/* 滚动条美化 */
.kitten-dropdown-list::-webkit-scrollbar {
  width: 4px;
}

.kitten-dropdown-list::-webkit-scrollbar-track {
  background: transparent;
}

.kitten-dropdown-list::-webkit-scrollbar-thumb {
  background: #DDDDDD;
  border-radius: 4px;
}

.kitten-dropdown-list::-webkit-scrollbar-thumb:hover {
  background: #BBBBBB;
}
```

### 4.4 在积木中使用自定义下拉

```javascript
// 在积木定义中使用自定义下拉
import { KittenDropdownField } from '../fields/KittenDropdownField.js';

Blockly.Blocks['turtle_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🐢 在')
        .appendField(new KittenDropdownField([
          { text: '前方', value: 'front' },
          { text: '后方', value: 'back' },
          { text: '左方', value: 'left' },
          { text: '右方', value: 'right' },
          { text: '上方', value: 'up' },
          { text: '下方', value: 'down' }
        ], 'front'), 'SIDE')
        .appendField('放置方块');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#FF9A76');
  }
};
```

### 4.5 下拉选项配置（基于CC API整理）

| 积木                           | 参数名 | 选项（显示 → 值）                                                                                                                                                           |
| :--------------------------- | :-- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| turtle.place / turtle.detect | 方向  | 前方→front, 后方→back, 左方→left, 右方→right, 上方→up, 下方→down                                                                                                                 |
| turtle.select                | 槽位  | 1→1, 2→2, ... , 16→16                                                                                                                                                |
| redstone.setOutput           | 方向  | 前方→front, 后方→back, 左方→left, 右方→right, 上方→up, 下方→down                                                                                                                 |
| redstone.setOutput           | 状态  | 开→true, 关→false                                                                                                                                                      |
| fs.open                      | 模式  | 读取→r, 写入→w, 追加→a                                                                                                                                                     |
| http.request                 | 方法  | GET→GET, POST→POST, PUT→PUT, DELETE→DELETE                                                                                                                           |
| term.setTextColor            | 颜色  | 白色→white, 橙色→orange, 品红→magenta, 浅蓝→lightBlue, 黄色→yellow, 亮绿→lime, 粉色→pink, 灰色→gray, 亮灰→lightGray, 青色→cyan, 紫色→purple, 蓝色→blue, 棕色→brown, 绿色→green, 红色→red, 黑色→black |
| peripheral.wrap              | 方向  | 左→left, 右→right, 前→front, 后→back, 上→top, 下→bottom                                                                                                                    |
| 比较运算                         | 运算符 | =→==, ≠→!=, >→>, ≥→>=, <→<, ≤→<=                                                                                                                                     |
| 逻辑运算                         | 运算符 | 且→and, 或→or                                                                                                                                                          |

***

## 五、积木块定义规范

### 5.1 带下拉参数的积木（使用自定义下拉）

```javascript
import { KittenDropdownField } from '../fields/KittenDropdownField.js';

// turtle.place 带方向下拉
Blockly.Blocks['turtle_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🐢 在')
        .appendField(new KittenDropdownField([
          { text: '前方', value: 'front' },
          { text: '后方', value: 'back' },
          { text: '左方', value: 'left' },
          { text: '右方', value: 'right' },
          { text: '上方', value: 'up' },
          { text: '下方', value: 'down' }
        ], 'front'), 'SIDE')
        .appendField('放置方块');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#FF9A76');
    this.setTooltip('在指定方向放置方块');
  }
};
```

### 5.2 控制结构积木（if/elseif/else）

```javascript
Blockly.Blocks['controls_if'] = {
  init: function() {
    this.appendValueInput('IF0')
        .setCheck(['Boolean', 'Number'])
        .appendField('🎯 如果');
    this.appendStatementInput('DO0')
        .appendField('那么');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#FFD93D');
    this.setMutator(new Blockly.Mutator(['controls_if_elseif', 'controls_if_else']));
  }
};
```

### 5.3 无返回值积木

```javascript
Blockly.Blocks['turtle_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🐢 前进');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#FF9A76');
  }
};
```

### 5.4 有返回值积木（值块）

```javascript
Blockly.Blocks['turtle_getItemCount'] = {
  init: function() {
    this.appendValueInput('SLOT')
        .setCheck('Number')
        .appendField('🐢 获取槽位');
    this.appendDummyInput()
        .appendField('的物品数量');
    this.setOutput(true, 'Number');
    this.setColour('#FF9A76');
  }
};
```

### 5.5 变量积木

```javascript
Blockly.Blocks['variables_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('📦 设置变量')
        .appendField(new Blockly.FieldVariable(), 'VAR')
        .appendField('为');
    this.appendValueInput('VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#4D96FF');
  }
};
```

***

## 六、Lua代码生成器规范

### 6.1 带下拉参数的生成器

```javascript
// generators/lua/turtle.js
export const turtle_place = function(block) {
  const side = block.getFieldValue('SIDE');  // 从自定义下拉获取值
  return `turtle.place("${side}")\n`;
};
```

### 6.2 if语句生成器（正确处理嵌套和缩进）

```javascript
// generators/lua/controls_if.js
export const controls_if = function(block) {
  const branchCount = block.getBranchCount ? block.getBranchCount() : 0;
  let code = '';
  
  // if 分支
  const condition0 = Blockly.Lua.valueToCode(block, 'IF0', Order.ATOMIC) || 'false';
  const branch0 = Blockly.Lua.statementToCode(block, 'DO0');
  code += `if ${condition0} then\n${branch0}`;
  
  // elseif 分支
  for (let i = 1; i < branchCount; i++) {
    const condition = Blockly.Lua.valueToCode(block, `IF${i}`, Order.ATOMIC) || 'false';
    const branch = Blockly.Lua.statementToCode(block, `DO${i}`);
    code += `elseif ${condition} then\n${branch}`;
  }
  
  // else 分支
  if (block.getElseBranch) {
    const elseBranch = Blockly.Lua.statementToCode(block, 'ELSE');
    code += `else\n${elseBranch}`;
  }
  
  code += `end\n`;
  return code;
};
```

### 6.3 for循环生成器

```javascript
// generators/lua/controls_for.js
export const controls_for = function(block) {
  const start = Blockly.Lua.valueToCode(block, 'START', Order.ATOMIC) || '1';
  const end = Blockly.Lua.valueToCode(block, 'END', Order.ATOMIC) || '10';
  const step = block.getFieldValue('STEP_INPUT') || '1';
  const body = Blockly.Lua.statementToCode(block, 'DO');
  return `for i = ${start}, ${end}, ${step} do\n${body}end\n`;
};
```

### 6.4 主程序模板

```lua
-- 自动生成的主程序模板
local function main()
    {{USER_CODE}}
end

local ok, err = pcall(main)
if not ok then
    print("程序错误: " .. tostring(err))
end
```

***

## 七、视觉风格

### 7.1 配色系统

| 元素        | 颜色值       |
| :-------- | :-------- |
| 页面背景      | `#F0F2F5` |
| 左侧工具栏背景   | `#FFFFFF` |
| 右侧代码编辑器背景 | `#1E1E2E` |
| 代码文字颜色    | `#CDD6F4` |
| 积木分类色块    | 见分类表      |

### 7.2 Blockly主题定制

```javascript
const theme = Blockly.Theme.defineTheme('kitten-style', {
  base: Blockly.Themes.Classic,
  blockStyles: {
    turtle_blocks: { colourPrimary: '#FF9A76', colourSecondary: '#FFB79A' },
    redstone_blocks: { colourPrimary: '#FF6B6B', colourSecondary: '#FF9999' },
    fs_blocks: { colourPrimary: '#FFD93D', colourSecondary: '#FFE680' },
    http_blocks: { colourPrimary: '#4ECDC4', colourSecondary: '#7EDDD6' },
    peripheral_blocks: { colourPrimary: '#9B59B6', colourSecondary: '#BB8FCE' },
    os_blocks: { colourPrimary: '#4D96FF', colourSecondary: '#7EB6FF' },
    math_blocks: { colourPrimary: '#6BCB77', colourSecondary: '#96D99A' },
    speaker_blocks: { colourPrimary: '#FF8A5C', colourSecondary: '#FFB088' },
    control_blocks: { colourPrimary: '#FFD93D', colourSecondary: '#FFE680' },
    variable_blocks: { colourPrimary: '#4D96FF', colourSecondary: '#7EB6FF' }
  }
});
```

***

##

***

## 九、完整任务清单

1. **克隆源码**：克隆 `cc-tweaked`，切换到 `mc-1.20.x` 分支
2. **分析API**：分析 `rom/apis/` 和 `@LuaFunction` 注解，生成API清单
3. **初始化项目**：Vue 3 + Vite + TypeScript
4. **实现自定义下拉**：`KittenDropdownField` 类 + 对应CSS样式
5. **生成积木定义**：基于API清单，为每个函数生成积木（使用自定义下拉）
6. **编写Lua生成器**：每个积木对应的代码生成函数
7. **实现双栏布局**：左积木 + 右代码
8. **主题美化**：应用编程猫风格

**请AI Agent严格按照上述规范执行，特别注意：所有有固定选项的参数都必须使用自定义下拉选择框（KittenDropdownField），不得使用Blockly原生下拉。每完成一个里程碑请汇报进度。**
