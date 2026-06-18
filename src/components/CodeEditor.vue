<template>
  <div class="code-editor-container">
    <div class="editor-header">
      <div class="editor-title">生成的 Lua 代码</div>
      <div class="editor-actions">
        <button class="action-btn" @click="copyCode" title="复制代码">
          📋 复制
        </button>
        <button class="action-btn" @click="downloadCode" title="下载代码">
          ⬇️ 下载
        </button>
      </div>
    </div>
    <div ref="editorContainer" class="editor-content"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { EditorView, basicSetup } from 'codemirror'
import { oneDark } from '@codemirror/theme-one-dark'

const props = defineProps<{
  code: string
}>()

const editorContainer = ref<HTMLElement>()
let editorView: EditorView | null = null

onMounted(() => {
  if (!editorContainer.value) return

  editorView = new EditorView({
    doc: props.code,
    extensions: [
      basicSetup,
      oneDark,
      EditorView.editable.of(false),
      EditorView.theme({
        '&': {
          height: '100%',
          fontSize: '14px',
        },
        '.cm-content': {
          fontFamily: "'Fira Code', 'Consolas', monospace",
          padding: '16px',
        },
        '.cm-gutters': {
          background: '#1E1E2E',
          border: 'none',
        },
      }),
    ],
    parent: editorContainer.value,
  })
})

watch(
  () => props.code,
  (newCode) => {
    if (editorView && newCode !== editorView.state.doc.toString()) {
      editorView.dispatch({
        changes: { from: 0, to: editorView.state.doc.length, insert: newCode },
      })
    }
  }
)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    alert('代码已复制到剪贴板')
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const downloadCode = () => {
  const blob = new Blob([props.code], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'program.lua'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.code-editor-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #1E1E2E;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #181825;
  border-bottom: 1px solid #313244;
}

.editor-title {
  font-size: 14px;
  font-weight: 600;
  color: #CDD6F4;
  font-family: 'PingFang SC', 'Noto Sans SC', sans-serif;
}

.editor-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 6px 12px;
  background: #313244;
  border: none;
  border-radius: 8px;
  color: #CDD6F4;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'PingFang SC', 'Noto Sans SC', sans-serif;
}

.action-btn:hover {
  background: #45475A;
}

.action-btn:active {
  transform: scale(0.96);
}

.editor-content {
  flex: 1;
  overflow: hidden;
}
</style>
