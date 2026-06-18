/**
 * BlockTweaked 扩展系统
 * 扩展 = 一组积木定义 + 工具箱分类
 * 用户点击 "+" 即可加载扩展到工具箱中
 */

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
}

// 持久化存储键名
const STORAGE_KEY = 'bt_extensions'

const loadedExtensions: Map<string, Extension> = new Map()

export function registerExtension(ext: Extension) {
  loadedExtensions.set(ext.id, ext)
}

export function getExtension(id: string): Extension | undefined {
  return loadedExtensions.get(id)
}

export function getAllExtensions(): Extension[] {
  return Array.from(loadedExtensions.values())
}

export function isExtensionLoaded(id: string): boolean {
  return loadedExtensions.has(id)
}

export function removeExtension(id: string) {
  loadedExtensions.delete(id)
}

export function getExtensionCategories(): ExtensionCategory[] {
  return Array.from(loadedExtensions.values()).map(ext => ext.category)
}

// 保存已启用的扩展 ID 到 localStorage
export function saveEnabledExtensions(ids: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

// 从 localStorage 读取已启用的扩展 ID
export function loadEnabledExtensions(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) return JSON.parse(data)
  } catch {}
  return []
}
