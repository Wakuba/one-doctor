import { FC, ReactNode } from 'react'

type TabFieldProps = {
    key: number;
    children?: ReactNode;
    label?: string;
  }
  
const TabField: FC<TabFieldProps> = props => {
    return (
      <>
        {props.children}
      </>
    )
}
  
export default TabField
