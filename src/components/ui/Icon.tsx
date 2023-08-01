import { cn } from '~/utils/cn'
import type { IconType } from '~/types/icon'

interface IconProps {
  className?: string
  icon: IconType
}

export const Icon = (props: IconProps) => {
  const { className, icon: Icon } = props

  return (
    <Icon className={cn('fill-gray-400 text-gray-400 ', {}, className)} />
  )
}

