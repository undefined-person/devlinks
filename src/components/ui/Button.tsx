import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from '~/utils/cn'

type ButtonVariants = "primary" | "secondary"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  className?: string;
  disabled?: boolean
  children: ReactNode;
}

const variants: Record<ButtonVariants, string> = {
  primary: 'text-white bg-primary hover:bg-secondary hover:shadow-[0_0_32px_0_rgba(99,_60,_255,_0.25)]',
  secondary: 'border border-primary text-primary hover:bg-pink-100',
}

const buttonStyles = 'rounded-lg py-[11px] px-[27px] font-semibold leading-6 transition-colors'

const disabledStyles = 'cursor-not-allowed opacity-25 pointer-events-none'

export const Button = (props: ButtonProps) => {
  const {
    variant = "primary", 
    className,
    children,
    disabled,
    ...otherProps
  } = props
  return <button
    className={cn(buttonStyles, { [disabledStyles]: disabled }, [variants[variant]], className)}
    {...otherProps}
  >
    {children}
  </button>
}