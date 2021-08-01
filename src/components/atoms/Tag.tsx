import clsx from 'clsx'

interface TagProps {
  children: React.ReactNode
  layoutStyle?: string
}

const Tag = ({ children, layoutStyle }: TagProps) => (
  <div
    className={clsx(
      layoutStyle,
      'bg-white h-5 w-32 rounded shadow-md text-xs flex items-center justify-center'
    )}
  >
    {' '}
    {children}{' '}
  </div>
)

export default Tag
