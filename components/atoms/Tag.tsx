interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => (
  <div className='bg-white h-32 w-5 justify-center justify-items-center rounded shadow-md text-xs'> {children} </div>
)


export default Tag
