import { createElement } from 'react'
import type { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  variant: 'headingM' | 'headingS' | 'bodyM' | 'bodyS'
  className?: string
}

const styleMap = {
  headingM: {
    tag: 'h2',
    fontSize: 'text-3xl',
    fontWeight: 'font-bold',
    lineHeight: 'leading-tight',
  },
  headingS: {
    tag: 'h3',
    fontSize: 'text-lg',
    fontWeight: 'font-semibold',
    lineHeight: 'leading-6',
  },
  bodyM: {
    tag: 'p',
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    lineHeight: 'leading-6',
  },
  bodyS: {
    tag: 'p',
    fontSize: 'text-sm',
    fontWeight: 'font-normal',
    lineHeight: 'leading-5',
  },
}

export const Typography = (props: TypographyProps) => {
  const { children, variant, className = '' } = props
  const { tag, ...styles } = styleMap[variant]

  const classes = `${Object.values(styles).join(' ')} ${className}`

  return createElement(tag, { className: classes }, children)
}
