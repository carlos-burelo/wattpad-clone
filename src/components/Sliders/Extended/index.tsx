import _ from './Extended.module.scss'
import React, { useEffect, useMemo, useRef } from 'react'

export interface ScrollSnapAction {
  goTo: (index: number) => void
}
export interface ScrollSnapProps {
  title?: string
  style?: React.CSSProperties
  onChange?: (current: number) => void
  actionRef?: React.MutableRefObject<ScrollSnapAction | undefined>
}

export default function Extended({ title, children }: Props) {
  return (
    <div className={_.container}>
      {title && <h1 className={_.title}>{title}</h1>}
      <div className={_.slider}>{children}</div>
    </div>
  )
}

interface Props {
  title?: string
  children: React.ReactNode
}
