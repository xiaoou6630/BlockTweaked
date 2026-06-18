import * as Blockly from 'blockly'

export interface KittenDropdownOption {
  text: string
  value: string
}

export class KittenDropdownField extends Blockly.FieldDropdown {
  private dropdownElement_: HTMLElement | null = null
  private isOpen_ = false
  private kittenOptions_: KittenDropdownOption[]

  constructor(options: KittenDropdownOption[], value: string, validator?: Blockly.FieldValidator) {
    // Convert to Blockly's expected format
    const blocklyOptions = options.map(opt => [opt.text, opt.value]) as [string, string][]
    super(blocklyOptions, validator)
    this.kittenOptions_ = options
    this.setValue(value)
  }

  protected override showEditor_(): void {
    if (this.isOpen_) {
      this.closeDropdown_()
      return
    }
    this.isOpen_ = true

    // Get the field's position
    const fieldElement = this.getClickTarget_()
    if (!fieldElement) return

    let left = 0
    let top = 0
    let width = 0

    if ('getBoundingClientRect' in fieldElement) {
      const rect = (fieldElement as SVGElement).getBoundingClientRect()
      left = rect.left
      top = rect.bottom + 4
      width = Math.max(rect.width, 80)
    }

    this.dropdownElement_ = document.createElement('div')
    this.dropdownElement_.className = 'kitten-dropdown-list'
    this.dropdownElement_.style.left = `${left}px`
    this.dropdownElement_.style.top = `${top}px`
    this.dropdownElement_.style.width = `${width}px`

    this.kittenOptions_.forEach(opt => {
      const item = document.createElement('div')
      item.className = 'kitten-dropdown-item'
      item.textContent = opt.text
      item.dataset.value = opt.value

      if (opt.value === this.getValue()) {
        item.classList.add('selected')
      }

      item.addEventListener('click', (e) => {
        e.stopPropagation()
        this.setValue(opt.value)
        this.closeDropdown_()
      })

      this.dropdownElement_!.appendChild(item)
    })

    document.body.appendChild(this.dropdownElement_)

    const closeHandler = (e: MouseEvent) => {
      if (this.dropdownElement_ && !this.dropdownElement_.contains(e.target as Node)) {
        this.closeDropdown_()
        document.removeEventListener('mousedown', closeHandler)
      }
    }
    setTimeout(() => document.addEventListener('mousedown', closeHandler), 0)
  }

  private closeDropdown_(): void {
    if (this.dropdownElement_) {
      this.dropdownElement_.remove()
      this.dropdownElement_ = null
    }
    this.isOpen_ = false
  }
}
