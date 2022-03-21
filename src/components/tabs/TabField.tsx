import { ReactNode } from 'react'

type TabFieldProps = {
  key: number
  children?: ReactNode
  title?: string
}

export default function TabField(props: TabFieldProps) {
  return <>{props.children}</>
}
