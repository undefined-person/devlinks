import { cn } from "~/utils/cn"
import { Icon } from "./Icon"

interface TabItem {
  label: string
  icon: string
  onClick: () => void
}

interface TabsProps {
  items: TabItem[]
  selectedTab: TabItem
}

export const Tabs = (props: TabsProps) => {
  const { items, selectedTab } = props
  return (
    <div className="flex w-full">
      {items.map((item) => (
        <button
          key={item.label}
          className={cn(
            'flex items-center justify-center gap-2 py-3 w-32 rounded-lg text-gray-400 group',
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