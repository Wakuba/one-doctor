import { ReactNode, VFC } from 'react'

type TabFieldProps = {
  key: number
  children?: ReactNode
  title?: string
}

const TabField: VFC<TabFieldProps> = (props) => {
  return <>{props.children}</>
}

export default TabField
