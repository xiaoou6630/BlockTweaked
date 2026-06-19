# BlockTweaked 🧊

> A visual block programming editor for Minecraft **CC: Tweaked** (1.20.x).\
> Drag, drop, and generate **Lua 5.1** code for in-game computers and turtles — no more typing on a tiny Minecraft screen!

***

## ✨ Features

- 🧩 **Visual Block Editor** — Powered by Google Blockly with kitten-style rounded blocks
- ⌨️ **Live Lua Code Generation** — Real-time Lua 5.1 output with CodeMirror syntax highlighting
- 🐢 **Full CC: Tweaked API Coverage** — Turtle, Rednet, Redstone, FS, HTTP, Peripheral, GPS, and more
- 🌐 **Bilingual (中文/English)** — One-click language switch, all blocks and UI localised
- 🎨 **Kitten-Style Theme** — Soft pastel colours, rounded corners, friendly typography
- 📦 **One-Click Export** — Export projects as standalone `.lua` files
- 💾 **Project Management** — Name your project (≤15 chars), save/load workspace
- 🖥️ **Dual-Column Layout** — Blocks on the left, code on the right (Mixly-style)

***

## 🚀 Quick Start

### Option 1: Use the hosted version

> Hosted on Hat Cloud with domestic CDN acceleration (China-friendly).\
> **[→ Try BlockTweaked Online](https://blocktweaked.hatcloud.cc)**

### Option 2: Run locally

```bash
# 1. Clone the repository
git clone https://github.com/xiaoou6630/BlockTweaked.git
cd BlockTweaked

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
#    → http://localhost:5173
```

### Option 3: Build for production

```bash
npm run build
# Output: dist/ — deploy to any static server
```

***

## 📖 Usage

1. **Drag blocks** from the left toolbox into the workspace
2. **Snap blocks together** — event blocks go on top as hat blocks
3. **Fill in values** using built-in dropdowns and input fields
4. **Watch code generate** live in the right-side code panel
5. **Click Export** to download a `.lua` file ready for CC: Tweaked

### Block Categories

| Category       | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| ⚡ Events       | Event listeners (startup, key press, modem, redstone, etc.) |
| 🐢 Turtle      | Movement, digging, placing, farming, attacking              |
| 🔴 Redstone    | Set outputs, get inputs, bundled cables                     |
| 📡 Rednet      | Send/receive modem messages                                 |
| 🔌 Peripheral  | Wrap and interact with peripherals                          |
| 📺 OS/Term     | Print, clear, computer ID, sleep                            |
| 📂 File System | Open/read/write/close files                                 |
| 🌐 HTTP        | GET/POST requests                                           |
| 🎨 Colors      | Colour/ dye APIs                                            |
| 📐 GPS         | Locate and triangulate                                      |
| 🧵 Parallel    | Run parallel tasks                                          |
| 🖌 Paintutils  | Drawing utilities                                           |
| ➗ Math         | Arithmetic, random, trigonometry                            |
| 📝 Text        | String operations, textutils                                |
| 🔑 Keys        | Key code constants                                          |
| ⚙️ Settings    | Global settings API                                         |
| 🪟 Window      | Terminal window management                                  |

***

## 🛠️ Tech Stack

| Technology                                              | Purpose                                  |
| ------------------------------------------------------- | ---------------------------------------- |
| [Vue 3](https://vuejs.org/) (Composition API)           | UI framework                             |
| [TypeScript](https://www.typescriptlang.org/)           | Type safety                              |
| [Google Blockly](https://developers.google.com/blockly) | Visual block editor engine               |
| [CodeMirror 6](https://codemirror.net/)                 | Lua code editor with syntax highlighting |
| [Vite](https://vitejs.dev/)                             | Build tool & dev server                  |
| [Pinia](https://pinia.vuejs.org/)                       | State management                         |

***

## 🧊 CC: Tweaked API Coverage

BlockTweaked provides blocks for the following CC: Tweaked APIs (Minecraft 1.20.x):

| API               | Status  |
| ----------------- | ------- |
| `turtle`          | ✅ Full  |
| `redstone`        | ✅ Full  |
| `rednet`          | ✅ Full  |
| `peripheral`      | ✅ Full  |
| `os`              | ✅ Core  |
| `term` / `window` | ✅ Full  |
| `fs`              | ✅ Full  |
| `http`            | ✅ Full  |
| `colors`          | ✅ Full  |
| `gps`             | ✅ Full  |
| `paintutils`      | ✅ Full  |
| `textutils`       | ✅ Full  |
| `keys`            | ✅ Full  |
| `settings`        | ✅ Full  |
| `parallel`        | ✅ Full  |
| `io`              | ✅ Core  |
| `disk`            | ✅ Core  |
| `help`            | ✅ Basic |
| Global functions  | ✅ Core  |

> Based on [CC: Tweaked v1.20.x source](https://github.com/cc-tweaked/CC-Tweaked/tree/mc-1.20.x).

***

## 🌍 Internationalisation

Switch between 中文 and English from the Settings menu. Block labels, tooltips, toolbox categories, and UI text all update instantly.

***

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing`)
5. Open a Pull Request

***

## 📄 License

[MIT](LICENSE) © 2026 xiaoou6630

***

<div align="center">
  Made with ❤️ for the CC: Tweaked community
</div>
