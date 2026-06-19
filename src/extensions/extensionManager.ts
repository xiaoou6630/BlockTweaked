/**
 * BlockTweaked 扩展系统
 * 扩展 = 一组积木定义 + 工具箱分类
 * 用户点击 "+" 即可加载扩展到工具箱中
 */

import * as Blockly from 'blockly'

export interface ExtensionCategory {
  name: string
  colour: string
  contents: any[]
}

export interface BlockDefinition {
  type: string
  init: (this: any) => void
}

export interface Extension {
  id: string
  name: string
  nameEn: string
  icon: string
  description: string
  descriptionEn: string
  blocks: BlockDefinition[]
  category: ExtensionCategory
  official?: boolean
}

const STORAGE_KEY = 'bt_extensions'
const CUSTOM_EXT_KEY = 'bt_custom_extensions'

// 所有已注册的扩展（可供选择）
const registeredExtensions: Map<string, Extension> = new Map()

export function registerExtension(ext: Extension) {
  registeredExtensions.set(ext.id, ext)
}

export function getExtension(id: string): Extension | undefined {
  return registeredExtensions.get(id)
}

// 所有可供选择的扩展
export function getAvailableExtensions(): Extension[] {
  return Array.from(registeredExtensions.values())
}

// 用户已启用的扩展 ID
export function getEnabledIds(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) return JSON.parse(data)
  } catch {}
  return []
}

// 用户已启用的扩展分类（用于 toolbox）
export function getExtensionCategories(): ExtensionCategory[] {
  const enabledIds = getEnabledIds()
  return enabledIds
    .map(id => registeredExtensions.get(id))
    .filter((ext): ext is Extension => !!ext)
    .map(ext => ext.category)
}

// 保存用户选择
export function saveEnabledExtensions(ids: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

// 检查某个扩展是否已启用
export function isExtensionEnabled(id: string): boolean {
  return getEnabledIds().includes(id)
}

// ─── 自定义扩展导入 ───

export interface CustomExtFile {
  id: string
  name: string
  nameEn: string
  colour: string
  icon: string
  description: string
  descriptionEn: string
  blocks: any[]
  generators: Record<string, string>
}

/**
 * 解析并注册自定义扩展文件
 * 返回注册后的 Extension 对象，或抛出错误
 */
export function registerCustomExtension(data: CustomExtFile): Extension {
  if (!data.id || !data.blocks || !Array.isArray(data.blocks)) {
    throw new Error('Invalid extension format: missing id or blocks')
  }

  // 注册积木到 Blockly
  for (const blockDef of data.blocks) {
    if (blockDef.type) {
      Blockly.Blocks[blockDef.type] = {
        init() {
          this.jsonInit(blockDef)
        }
      }
    }
  }

  // 构建工具箱分类内容
  const contents = data.blocks
    .filter((b: any) => b.type)
    .map((b: any) => ({ kind: 'block', type: b.type }))

  const ext: Extension = {
    id: data.id,
    name: data.name || data.id,
    nameEn: data.nameEn || data.name || data.id,
    icon: data.icon || '🧩',
    description: data.description || '',
    descriptionEn: data.descriptionEn || data.description || '',
    blocks: [],
    category: {
      name: `${data.icon || '🧩'} ${data.name || data.id}`,
      colour: data.colour || '#FF6B6B',
      contents,
    },
    official: false,
  }

  // 如果已存在则先移除
  if (registeredExtensions.has(ext.id)) {
    registeredExtensions.delete(ext.id)
  }

  registerExtension(ext)

  // 保存到 localStorage 以便下次加载
  saveCustomExtension(data)

  return ext
}

/** 获取所有已保存的自定义扩展 */
export function getSavedCustomExtensions(): CustomExtFile[] {
  try {
    const data = localStorage.getItem(CUSTOM_EXT_KEY)
    if (data) return JSON.parse(data)
  } catch {}
  return []
}

/** 保存自定义扩展到 localStorage */
function saveCustomExtension(data: CustomExtFile) {
  const saved = getSavedCustomExtensions()
  const idx = saved.findIndex(e => e.id === data.id)
  if (idx >= 0) saved[idx] = data
  else saved.push(data)
  localStorage.setItem(CUSTOM_EXT_KEY, JSON.stringify(saved))
}

/** 删除自定义扩展 */
export function removeCustomExtension(id: string) {
  const saved = getSavedCustomExtensions()
  const filtered = saved.filter(e => e.id !== id)
  localStorage.setItem(CUSTOM_EXT_KEY, JSON.stringify(filtered))
  registeredExtensions.delete(id)
  // 从启用列表中也移除
  const enabled = getEnabledIds().filter(eid => eid !== id)
  saveEnabledExtensions(enabled)
}

/**
 * 从 localStorage 恢复自定义扩展（页面加载时调用）
 * 返回所有恢复的扩展的 generators 映射
 */
export function restoreCustomExtensions(): CustomExtFile[] {
  const saved = getSavedCustomExtensions()
  const restored: CustomExtFile[] = []
  for (const data of saved) {
    try {
      // 注册积木到 Blockly
      for (const blockDef of data.blocks) {
        if (blockDef.type) {
          Blockly.Blocks[blockDef.type] = {
            init() {
              this.jsonInit(blockDef)
            }
          }
        }
      }

      const contents = data.blocks
        .filter((b: any) => b.type)
        .map((b: any) => ({ kind: 'block', type: b.type }))

      const ext: Extension = {
        id: data.id,
        name: data.name || data.id,
        nameEn: data.nameEn || data.name || data.id,
        icon: data.icon || '🧩',
        description: data.description || '',
        descriptionEn: data.descriptionEn || data.description || '',
        blocks: [],
        category: {
          name: `${data.icon || '🧩'} ${data.name || data.id}`,
          colour: data.colour || '#FF6B6B',
          contents,
        },
        official: false,
      }

      registerExtension(ext)
      restored.push(data)
    } catch (err) {
      console.warn(`Failed to restore custom extension "${data.id}":`, err)
    }
  }
  return restored
}
