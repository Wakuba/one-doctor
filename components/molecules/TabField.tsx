
type TabFieldProps = {
    key: number;
    children?: React.ReactNode;
    label?: string;
  }
  
const TabField: React.FC<TabFieldProps> = props => {
    return (
      <>
        {props.children}
      </>
    )
}
  
export default TabField
