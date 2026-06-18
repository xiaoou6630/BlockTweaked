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

const STORAGE_KEY = 'bt_extensions'

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
