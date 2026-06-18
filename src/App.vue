<template>
  <div class="app-root">
    <AppTopbar />
    <div class="app-container">
      <div class="workspace-panel">
        <BlocklyWorkspace ref="blocklyRef" @code-change="handleCodeChange" />
      </div>
      <div class="editor-panel">
        <CodeEditor :code="luaCode" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppTopbar from './components/AppTopbar.vue'
import BlocklyWorkspace from './components/BlocklyWorkspace.vue'
import CodeEditor from './components/CodeEditor.vue'
import { onMounted, onBeforeUnmount } from 'vue'

const blocklyRef = ref<InstanceType<typeof BlocklyWorkspace>>()
const luaCode = ref('-- 在此处拼接积木，代码将自动生成')

const handleCodeChange = (code: string) => {
  luaCode.value = code || '-- 在此处拼接积木，代码将自动生成'
}

// 离开页面时提示
function beforeUnload(e: BeforeUnloadEvent) {
  const w = (window as any).__blocktweaked_workspace
  if (w?.isDirty?.()) {
    e.preventDefault()
    e.returnValue = ''
  }
}

onMounted(() => { window.addEventListener('beforeunload', beforeUnload) })
onBeforeUnmount(() => { window.removeEventListener('beforeunload', beforeUnload) })
</script>

<style scoped>
.app-root {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.app-container {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.workspace-panel {
  flex: 1;
  min-width: 0;
  background: #F0F2F5;
}

.editor-panel {
  width: 40%;
  min-width: 300px;
  max-width: 800px;
  background: #1E1E2E;
}
</style>
