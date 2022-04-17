import clsx from 'clsx'

type TabButtonsProps = {
  buttons: { tabIdx: number; title: string }[]
  changeTab: (value: number) => void
  activeTab: number
  style: string
}

export default function TabButtons({
  buttons,
  changeTab,
  activeTab,
  style,
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
            'sm:px-2 sm:text-xs',
            'ov-md:px-3 ov-md:text-sm',
            style
          )}
          onClick={() => changeTab(button.tabIdx)}
        >
          {button.title}
        </button>
      ))}
    </div>
  )
}
