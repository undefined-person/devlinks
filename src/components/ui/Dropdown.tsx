import { useState } from 'react'
import clsx from 'clsx'

import type { IconType } from '~/types/icon'
import ChevronDown from 'icons/chevron-down.svg'
import { Icon } from './Icon'

export interface IDropdownItem {
  value: string
  label: string
  Icon: IconType
}

interface DropdownProps {
  options: IDropdownItem[]
  selectedItem: IDropdownItem
  onSelect: (item: IDropdownItem) => void
}

export const Dropdown = (props: DropdownProps) => {
  const [isSelectOpen, setIsSelectOpen] = useState(true)
  const { onSelect, selectedItem, options } = props

  const handleSelectToggle = () => {
    setIsSelectOpen((prevState) => !prevState)
  }

  return (
    <div className="relative">
      <button
        className="flex items-center w-full gap-3 px-4 py-3 border border-gray-300 rounded-lg"
        type="button"
        onClick={handleSelectToggle}
      >
        <Icon icon={selectedItem.Icon} />
        <span>{selectedItem.label}</span>
        <ChevronDown className={clsx('ml-auto transition-transform', { 'rotate-180': isSelectOpen })} />
      </button>
      {isSelectOpen && (
        <ul
          className="absolute top-16 left-0 w-full bg-white rounded-lg border border-gray-300 px-3 shadow-[0_0_32px_0px_rgba(0,_0,_0,_0.10)]"
          role="listbox"
        >
          {options.map((item) => (
            <li
              className={`w-full flex items-center gap-3 py-4 hover:bg-gray-100 border-b
              border-gray-300 last:border-transparent `}
              aria-selected={item.value === selectedItem.value}
              role="option"
              key={item.value}
              onClick={() => {
                onSelect(item)
                handleSelectToggle()
              }}
            >
              <Icon
                icon={item.Icon}
                className={clsx('', { 'fill-primary': item.value === selectedItem.value })}
              />
              <span className={clsx('', { 'text-primary': item.value === selectedItem.value })}>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
