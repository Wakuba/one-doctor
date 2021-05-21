type TabButtonsProps = { 
	buttons: string[];
  changeTab: any;
  activeTab: any;
}

const TabButtons: React.FC<TabButtonsProps> = ({buttons, changeTab, activeTab}) => {
  return (
    <div className='' >
      {buttons.map((button, idx) =>
           <button key={idx} className={`h-2.5 w-5 text-white cursor-pointer text-xs ${ button === activeTab ? 'bg-prime-blue-rich' : 'bg-prime-blue-pale'}`}  onClick={() => changeTab(button)} >{button}</button>
      )}
    </div>
  )
}
export default TabButtons
