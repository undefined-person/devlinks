import { cn } from "~/utils/cn"
import { Icon } from "./Icon"

export interface TabItem {
  label: string
  icon: unknown
  onClick: () => void
}

interface TabsProps {
  items: TabItem[]
  selectedTab: TabItem
}

export const Tabs = (props: TabsProps) => {
  const { items, selectedTab } = props

  return (
    <div className="flex items-center gap-x-4">
      {items.map((item) => (
        <button
          key={item.label}
          className={cn(
            'flex items-center justify-center gap-2 py-3 px-7 rounded-lg min-w-min text-gray-400 group',
            item.label === selectedTab.label && 'bg-pink-100 text-primary'
          )}
          onClick={item.onClick}
        >
          <Icon icon={item.icon} className={cn(
            'w-5 h-5 group-hover:fill-primary transition-colors',
            item.label === selectedTab.label && 'fill-primary'
          )} />
          <p className="font-semibold transition-colors group-hover:text-primary">{item.label}</p>
        </button>
      ))}
    </div>
  )
}