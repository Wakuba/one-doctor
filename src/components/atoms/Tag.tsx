interface TagProps {
  children: React.ReactNode
  layoutStyle?: string
}

const Tag = ({ children, layoutStyle }: TagProps) => (
  <div
    className={`bg-white h-5 w-32 rounded shadow-md text-xs flex items-center justify-center ${layoutStyle}`}
  >
    {' '}
    {children}{' '}
  </div>
)

export default Tag
