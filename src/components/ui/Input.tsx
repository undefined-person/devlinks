import {
  type ChangeEvent,
  type HTMLAttributes,
} from 'react'
import clsx from 'clsx'

import type { IconType } from '~/types/icon'
import { Icon } from './Icon'

type HTMLInputProps = Omit<HTMLAttributes<HTMLInputElement>, 'className' | 'onChange'>

interface InputProps extends HTMLInputProps {
  icon: IconType
  placeholder: string
  className?: string
  value: string
  onChange: (value: string) => void
  type: 'text' | 'password' | 'email'
  error?: string
}

const inputStyles = `rounded-lg border border-gray-300 py-3 pr-4 pl-11 placeholder-black-500 placeholder-opacity-50 
text-black-500 active:border-primary focus:outline-none focus:border-primary 
focus:shadow-[0px_0px_32px_0px_rgba(99,_60,_255,_0.25)] active:shadow-[0px_0px_32px_0px_rgba(99,_60,_255,_0.25)] 
caret-primary w-full`

const errorStyles = 'border-red-500 text-red-500'

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    icon,
    onChange,
    placeholder,
    type,
    error,
    ...otherProps
  } = props

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="relative flex items-center">
      <Icon icon={icon} className="absolute w-4 h-4 left-3" />
      <input
        className={clsx(inputStyles, { [errorStyles]: error }, className)}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        type={type}
        {...otherProps}

      />
      {error && <span className="absolute text-xs text-right text-red-500 right-3">{error}</span>}
    </div>
  )
}
