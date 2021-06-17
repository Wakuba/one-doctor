interface TagProps {
  children: React.ReactNode;
  layoutStyle?: string;
}

const Tag: React.FC<TagProps> = ({ children, layoutStyle }) => (
  <div className={`bg-white h-5 w-32 rounded shadow-md text-xs flex items-center justify-center ${layoutStyle}`}> {children} </div>
)


export default Tag
