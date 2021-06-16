import { SetStateAction } from 'react'

type TabButtonsProps = {
  buttons: string[];
  changeTab: (value: SetStateAction<string>) => void;
  activeTab: string;
}

export default function TabButtons({ buttons, changeTab, activeTab }: TabButtonsProps) {
  return (
    <div className='space-x-2' >
      {buttons.map((button, idx) =>
        <button key={idx} className={`
            h-10
            sm:w-2/12
            md:w-24
            ov-lg:w-32
            text-white
            cursor-pointer
            text-xs
            focus:outline-none
            rounded-t
            ${button === activeTab ? 'bg-prime-blue-rich' : 'bg-prime-blue-pale'}
          `} onClick={() => changeTab(button)} >
          {button}
        </button>
      )}
    </div>
  )
}
