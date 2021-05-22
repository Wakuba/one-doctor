interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => (
  <div className='bg-white h-5 w-32 rounded shadow-md text-xs flex items-center justify-center mr-2'> {children} </div>
)


export default Tag
