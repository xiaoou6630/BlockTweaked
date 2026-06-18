import { initCCExpand } from './ccexpand'
import { getExtensionCategories } from './extensionManager'

/**
 * 初始化所有内置扩展
 */
export function initExtensions() {
  initCCExpand()
}

export { getExtensionCategories }
