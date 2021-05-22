import { SetStateAction } from 'react'

type TabButtonsProps = { 
	buttons: string[];
  changeTab: (value: SetStateAction<string>) => void;
  activeTab: string;
}

const TabButtons: React.FC<TabButtonsProps> = ({buttons, changeTab, activeTab }) => {
  return (
    <div className='space-x-2' >
      {buttons.map((button, idx) =>
           <button key={idx} className={`h-10 w-2/11 text-white cursor-pointer text-xs focus:outline-none rounded-t ${ button === activeTab ? 'bg-prime-blue-rich' : 'bg-prime-blue-pale'}`}  onClick={() => changeTab(button)} >{button}</button>
      )}
    </div>
  )
}
export default TabButtons
