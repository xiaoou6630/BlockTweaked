<template>
  <div class="topbar">
    <div class="topbar-left">
      <span class="logo">🧩 BlockTweaked</span>

      <div class="topbar-btn" @click="toggleMenu('file', $event)">
        {{ t('file') }} ▾
        <div class="dropdown" v-if="showFile" @click.stop>
          <div class="dropdown-item" @click="handleNew">📄 {{ t('newProject') }}</div>
          <div class="dropdown-item" @click="handleExportLua">📜 {{ t('exportLua') }}</div>
          <div class="dropdown-sep"></div>
          <div class="dropdown-item" @click="handleExportProject">📦 {{ t('exportProject') }}</div>
          <div class="dropdown-item" @click="triggerImport">📥 {{ t('importProject') }}</div>
        </div>
      </div>

      <div class="topbar-btn" @click="toggleMenu('settings', $event)">
        {{ t('settings') }} ▾
        <div class="dropdown" v-if="showSettings" @click.stop>
          <div class="dropdown-item" @click="handleLang" style="display:flex;justify-content:space-between;align-items:center;">
            <span>🌐 {{ t('language') }}</span>
            <span style="color:#999;font-size:11px;">{{ langLabel }}</span>
          </div>
          <div class="dropdown-item" @click="handleHelp">📖 {{ t('help') }}</div>
          <div class="dropdown-item" @click="handleEnv">🔧 {{ t('envCheck') }}</div>
          <div class="dropdown-sep"></div>
          <div class="dropdown-item" @click="handleAbout">ℹ️ {{ t('about') }}</div>
        </div>
      </div>
    </div>

    <div class="topbar-right">
      <label class="project-label">{{ t('projectName') }}</label>
      <input
        class="project-input"
        v-model="projectName"
        maxlength="15"
        :placeholder="t('untitled')"
        spellcheck="false"
        @input="onProjectChange"
      />
      <span class="char-count">{{ projectName.length }}/15</span>
      <span class="dirty-dot" v-if="dirty" :title="t('unsaved')">●</span>
    </div>

    <input ref="fileInput" type="file" accept=".btpc" style="display:none" @change="handleImport" />

    <!-- 环境检测弹窗 -->
    <Teleport to="body">
      <div class="modal-overlay" v-if="showEnv" @click="showEnv = false">
        <div class="modal" @click.stop>
          <h3>🔧 {{ t('envTitle') }}</h3>
          <p style="font-size:12px;color:#999;margin-bottom:12px;">{{ t('envDesc') }}</p>
          <div class="env-grid">
            <div v-for="item in envChecks" :key="item.name" class="env-item">
              <span>{{ item.icon }} {{ item.name }}</span>
              <span :class="item.ok ? 'ok' : item.warn ? 'warn' : 'err'">
                {{ item.ok ? '✓ ' + t('envSupport') : item.warn ? '△ ' + t('envPartial') : '✗ ' + t('envNot') }}
              </span>
            </div>
          </div>
          <button class="modal-btn" @click="showEnv = false">{{ t('ok') }}</button>
        </div>
      </div>

      <!-- 帮助手册弹窗 -->
      <div class="modal-overlay" v-if="showHelp" @click="showHelp = false">
        <div class="modal" style="max-width:520px;" @click.stop>
          <h3>📖 {{ t('helpTitle') }}</h3>
          <div class="help-content">
            <p><b>BlockTweaked</b> {{ t('helpIntro') }}</p>
            <p class="help-section"><b>🎯 {{ t('helpBasic') }}</b></p>
            <p>{{ t('helpBasicDesc') }}</p>
            <p class="help-section"><b>⚡ {{ t('helpEvent') }}</b></p>
            <p>{{ t('helpEventDesc') }}</p>
            <p class="help-section"><b>💾 {{ t('helpSave') }}</b></p>
            <p style="white-space:pre-line;">{{ t('helpSaveDesc') }}</p>
            <p class="help-section"><b>📡 {{ t('helpVersion') }}</b></p>
            <p>{{ t('helpVersionDesc') }}</p>
          </div>
          <button class="modal-btn" @click="showHelp = false">{{ t('ok') }}</button>
        </div>
      </div>

      <!-- 关于弹窗 -->
      <div class="modal-overlay" v-if="showAbout" @click="showAbout = false">
        <div class="modal" @click.stop>
          <h3>🧩 BlockTweaked</h3>
          <p class="about-ver">版本 1.0.0</p>
          <p class="about-desc">{{ t('aboutDesc') }}</p>
          <p class="about-desc">{{ t('aboutStack') }}</p>
          <p class="about-desc" style="margin-top:6px;color:#999;">{{ t('aboutFile') }}</p>
          <p class="about-copy">© 2026 BlockTweaked</p>
          <button class="modal-btn" @click="showAbout = false">{{ t('ok') }}</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { t, i18n, setLang } from '../locales'

const emit = defineEmits<{
  (e: 'project-change', name: string): void
}>()

const projectName = ref('未命名项目')
const showFile = ref(false)
const showSettings = ref(false)
const showEnv = ref(false)
const showHelp = ref(false)
const showAbout = ref(false)
const dirty = ref(false)
const fileInput = ref<HTMLInputElement>()

const langLabel = computed(() => i18n.lang === 'zh' ? '中文' : 'English')

// 环境检测
interface EnvItem { icon: string; name: string; ok: boolean; warn: boolean }
const envChecks = ref<EnvItem[]>([])

function detectEnv() {
  const w = screen.width; const h = screen.height

  envChecks.value = [
    { icon:'💾', name:t('envStorage'), ok:testLocalStorage(), warn:false },
    { icon:'🗄️', name:t('envIndexedDB'), ok:!!indexedDB, warn:!indexedDB },
    { icon:'📁', name:t('envFileAPI'), ok:!!(window.File && FileReader && Blob), warn:false },
    { icon:'📋', name:t('envClipboard'), ok:!!navigator.clipboard, warn:!navigator.clipboard },
    { icon:'⚙️', name:t('envWorker'), ok:!!Worker, warn:!Worker },
    { icon:'🌐', name:t('envHTTP'), ok:!!(fetch || XMLHttpRequest), warn:false },
    { icon:'🔌', name:t('envWebSocket'), ok:!!WebSocket, warn:!WebSocket },
    { icon:'🖥️', name:`${t('envScreen')} (${w}x${h})`, ok:w>=1024&&h>=600, warn:w<1024||h<600 },
    { icon:'👆', name:t('envTouch'), ok:!!(('ontouchstart' in document.documentElement) || (navigator.maxTouchPoints>0)), warn:false },
    { icon:'📡', name:t('envSW'), ok:!!('serviceWorker' in navigator), warn:false },
    { icon:'📝', name:t('envDOMParser'), ok:!!DOMParser, warn:false },
  ]
  showEnv.value = true
}

function testLocalStorage(): boolean {
  try { localStorage.setItem('_bt','1'); localStorage.removeItem('_bt'); return true }
  catch { return false }
}

// 菜单
function toggleMenu(menu: string, e: MouseEvent) {
  e.stopPropagation()
  if (menu === 'file') { showFile.value = !showFile.value; showSettings.value = false }
  else { showSettings.value = !showSettings.value; showFile.value = false }
}
document.addEventListener('click', () => { showFile.value = false; showSettings.value = false })

function onProjectChange() { dirty.value = true; emit('project-change', projectName.value) }

const w = () => (window as any).__blocktweaked_workspace

function handleNew() { showFile.value = false
  if (!confirm(t('confirmNew'))) return
  w()?.clear(); dirty.value = false; projectName.value = '未命名项目'
}
function handleExportLua() { showFile.value = false
  downloadFile(`${projectName.value}.lua`, w()?.getCode?.() || '')
}
function handleExportProject() { showFile.value = false
  const ws = w()
  if (!ws?.getXML) return alert(t('cantExport'))
  const serializer = new XMLSerializer()
  downloadFile(`${projectName.value}.btpc`, JSON.stringify({
    name: projectName.value, version: '1.0.0',
    updated: new Date().toISOString(),
    xml: serializer.serializeToString(ws.getXML()),
  }, null, 2))
  dirty.value = false
}
function triggerImport() { showFile.value = false; fileInput.value?.click() }
function handleImport(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]; if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    try {
      const p = JSON.parse(reader.result as string)
      if (!p.xml || !p.version) throw Error()
      w()?.loadXML?.(p.xml)
      projectName.value = p.name || '导入项目'; dirty.value = false
    } catch { alert(t('importFailed')) }
  }
  reader.readAsText(file); (e.target as HTMLInputElement).value = ''
}

function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'application/octet-stream' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click()
  URL.revokeObjectURL(url)
}

function handleLang() {
  showSettings.value = false
  setLang(i18n.lang === 'zh' ? 'en' : 'zh')
}
function handleHelp() { showSettings.value = false; showHelp.value = true }
function handleEnv() { showSettings.value = false; detectEnv() }
function handleAbout() { showSettings.value = false; showAbout.value = true }
</script>

<style scoped>
.topbar {
  display: flex; align-items: center; justify-content: space-between;
  height: 44px; padding: 0 16px;
  background: #2D2D3F; color: #E0E0E0;
  font-size: 13px; user-select: none; flex-shrink: 0;
  position: relative; z-index: 100;
}
.topbar-left { display: flex; align-items: center; gap: 4px; }
.logo { font-weight: 800; font-size: 15px; color: #FFD93D; margin-right: 12px; letter-spacing: 0.5px; }
.topbar-btn { position: relative; padding: 6px 14px; border-radius: 6px; cursor: pointer; transition: background 0.15s; font-weight: 500; }
.topbar-btn:hover { background: rgba(255,255,255,0.1); }

.dropdown {
  position: absolute; top: 100%; left: 0; margin-top: 4px;
  background: #3A3A50; border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  min-width: 200px; padding: 6px 0; z-index: 200;
  animation: dropIn 0.12s ease-out;
}
@keyframes dropIn { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:translateY(0); } }

.dropdown-item { padding: 8px 16px; cursor: pointer; white-space: nowrap; transition: background 0.1s; font-size: 13px; }
.dropdown-item:hover { background: rgba(255,255,255,0.08); }
.dropdown-sep { height: 1px; background: rgba(255,255,255,0.1); margin: 4px 8px; }

.topbar-right { display: flex; align-items: center; gap: 8px; }
.project-label { font-weight: 500; color: #999; font-size: 12px; }
.project-input { background: #1E1E30; border: 1px solid #555; border-radius: 6px; padding: 4px 10px; color: #FFD93D; font-size: 13px; font-weight: 600; width: 140px; outline: none; transition: border-color 0.15s; }
.project-input:focus { border-color: #FFD93D; }
.project-input::placeholder { color: #666; font-weight: 400; }
.char-count { color: #666; font-size: 11px; min-width: 30px; }
.dirty-dot { color: #FF6B6B; font-size: 16px; margin-left: 2px; cursor: default; }

.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal { background: #2D2D3F; border-radius: 12px; padding: 24px 28px; max-width: 450px; width: 90%; color: #E0E0E0; box-shadow: 0 12px 40px rgba(0,0,0,0.4); max-height: 80vh; overflow-y: auto; }
.modal h3 { margin-bottom: 16px; font-size: 16px; color: #FFD93D; }
.env-grid { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.env-item { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; }
.env-item .ok { color: #4ECDC4; font-weight: 600; }
.env-item .warn { color: #F39C12; font-weight: 600; }
.env-item .err { color: #FF6B6B; font-weight: 600; }

.help-content { font-size: 13px; color: #CCC; line-height: 1.8; }
.help-content p { margin-bottom: 4px; }
.help-section { color: #FFD93D; margin-top: 10px !important; margin-bottom: 2px !important; }

.about-ver { color: #999; font-size: 12px; margin-bottom: 8px; }
.about-desc { font-size: 13px; color: #CCC; margin-bottom: 4px; }
.about-copy { font-size: 11px; color: #666; margin-top: 12px; }
.modal-btn { margin-top: 16px; padding: 8px 24px; background: #FFD93D; color: #1E1E30; border: none; border-radius: 6px; font-weight: 700; font-size: 13px; cursor: pointer; float: right; transition: background 0.15s; }
.modal-btn:hover { background: #FFC107; }
</style>
