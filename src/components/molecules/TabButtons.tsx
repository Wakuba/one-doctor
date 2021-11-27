import clsx from 'clsx'
import { SetStateAction } from 'react'

type TabButtonsProps = {
  buttons: string[]
  changeTab: (value: SetStateAction<string>) => void
  activeTab: string
}

export default function TabButtons({
  buttons,
  changeTab,
  activeTab,
}: TabButtonsProps) {
  return (
    <div className='space-x-2'>
      {buttons.map((button, idx) => (
        <button
          key={idx}
          className={clsx(
            button === activeTab ? 'bg-prime-blue-rich' : 'bg-prime-blue-pale',
            'h-10 text-white cursor-pointer focus:outline-none rounded-t shadow-lg',
            'sm:w-2/12 sm:text-xs',
            'md:w-24 md:text-md',
            'ov-lg:w-32 ov-lg:text-md'
          )}
          onClick={() => changeTab(button)}
        >
          {button}
        </button>
      ))}
    </div>
  )
}
