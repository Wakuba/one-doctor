
type TabFieldProps = {
    key: number;
    children?: React.ReactNode;
    label?: string;
  }
  
const TabField: React.FC<TabFieldProps> = props => {
  console.log(props.children)
    return (
      <>
        {props.children}
      </>
    )
}
  
export default TabField
