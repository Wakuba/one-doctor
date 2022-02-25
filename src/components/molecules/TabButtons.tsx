import clsx from 'clsx'

type TabButtonsProps = {
  buttons: { tabIdx: number; title: string }[]
  changeTab: (value: number) => void
  activeTab: number
}

export default function TabButtons({
  buttons,
  changeTab,
  activeTab,
}: TabButtonsProps) {
  return (
    <div className='space-x-1'>
      {buttons.map((button) => (
        <button
          key={button.tabIdx}
          className={clsx(
            button.tabIdx === activeTab
              ? 'bg-prime-blue-rich'
              : 'bg-prime-blue-pale',
            ' text-white cursor-pointer focus:outline-none rounded-t shadow-lg',
            'sm:px-2 sm:text-xs sm:h-8 sm:w-16',
            'ov-md:px-3 ov-md:text-sm ov-md:h-10 ov-md:w-24 '
          )}
          onClick={() => changeTab(button.tabIdx)}
        >
          {button.title}
        </button>
      ))}
    </div>
  )
}
