import { PropsWithChildren, useEffect } from 'react'
import SuccessToastrMessage from './Success'
import styles from './styles.module.scss'

export type ToastrProps = {
  type: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  content?: string | JSX.Element
  className?: string
  time?: number
  width?: 'w-102' | 'w-80' | 'w-96'
  toggleToastr?: (newValue: boolean) => any
  onClick?: () => any
}


export const Toastr = ({
  type,
  top,
  bottom,
  left,
  right,
  children,
  className,
  width,
  toggleToastr,
  onClick,
  time,
  ...props
}: PropsWithChildren<ToastrProps>) => {
  const Colors = styles
  const getColor = (colorName: string): string => {
    const styles = Colors[colorName]
    if (styles) return styles
    return ''
  }

  useEffect(() => {
    if (toggleToastr) {
      const timer = setTimeout(
        () => {
          toggleToastr(false)
        },
        time ? time : 5000
      )
      return () => {
        clearTimeout(timer)
      }
    } else {
      return
    }
  }, [children])

  return (
    <div
      id="Toastr"
      className={'absolute rounded px-3 py-2 ' + (width ? width : 'w-102 ') + ' ' + className + ' ' + getColor(type)}
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
      style={{
        top: top ? top : undefined,
        bottom: bottom ? bottom : undefined,
        left: left ? left : undefined,
        right: right ? right : undefined,
        zIndex: 10000000
      }}
    >
      {children}
    </div>
  )
}

Toastr.Success = SuccessToastrMessage

export default Toastr
