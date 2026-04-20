'use client'
import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

interface SheetContentOwnProps {
  side?: 'left' | 'right' | 'top' | 'bottom'
  onClose?: () => void
  className?: string
  children?: React.ReactNode
}

const SheetContext = React.createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({ open: false, onOpenChange: () => {} })

function Sheet({ open = false, onOpenChange, children }: SheetProps) {
  const handleChange = React.useCallback(
    (val: boolean) => {
      onOpenChange?.(val)
    },
    [onOpenChange]
  )

  return (
    <SheetContext.Provider value={{ open, onOpenChange: handleChange }}>
      {children}
    </SheetContext.Provider>
  )
}

function SheetTrigger({
  children,
  asChild: _asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { onOpenChange } = React.useContext(SheetContext)
  return (
    <button onClick={() => onOpenChange(true)} {...props}>
      {children}
    </button>
  )
}

function SheetClose({
  children,
  asChild: _asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { onOpenChange } = React.useContext(SheetContext)
  return (
    <button onClick={() => onOpenChange(false)} {...props}>
      {children}
    </button>
  )
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentOwnProps>(
  ({ side = 'left', className, children, onClose }, ref) => {
    const { open, onOpenChange } = React.useContext(SheetContext)

    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
      return () => { document.body.style.overflow = '' }
    }, [open])

    const handleClose = () => {
      onOpenChange(false)
      onClose?.()
    }

    const variants = {
      left: {
        initial: { x: '-100%' } as const,
        animate: { x: 0 } as const,
        exit: { x: '-100%' } as const,
      },
      right: {
        initial: { x: '100%' } as const,
        animate: { x: 0 } as const,
        exit: { x: '100%' } as const,
      },
      top: {
        initial: { y: '-100%' } as const,
        animate: { y: 0 } as const,
        exit: { y: '-100%' } as const,
      },
      bottom: {
        initial: { y: '100%' } as const,
        animate: { y: 0 } as const,
        exit: { y: '100%' } as const,
      },
    }

    const v = variants[side]

    return (
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />
            <motion.div
              ref={ref}
              className={cn(
                'fixed z-50 flex flex-col bg-[var(--card)] shadow-xl',
                side === 'left' && 'inset-y-0 left-0 h-full w-[280px]',
                side === 'right' && 'inset-y-0 right-0 h-full w-[280px]',
                side === 'top' && 'inset-x-0 top-0 w-full',
                side === 'bottom' && 'inset-x-0 bottom-0 w-full',
                className
              )}
              initial={v.initial}
              animate={v.animate}
              exit={v.exit}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }
)
SheetContent.displayName = 'SheetContent'

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn('text-lg font-semibold text-[var(--foreground)]', className)}
      {...props}
    />
  )
}

export { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle }
