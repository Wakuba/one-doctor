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
    <div className='space-x-2'>
      {buttons.map((button) => (
        <button
          key={button.tabIdx}
          className={clsx(
            button.tabIdx === activeTab
              ? 'bg-prime-blue-rich'
              : 'bg-prime-blue-pale',
            'h-10 px-3 text-white cursor-pointer focus:outline-none rounded-t shadow-lg'
            // 'sm:w-2/12 sm:text-xs',
            // 'md:w-24 md:text-md',
            // 'ov-lg:w-32',
            // 'ov-lg:text-md'
          )}
          onClick={() => changeTab(button.tabIdx)}
        >
          {button.title}
        </button>
      ))}
    </div>
  )
}
