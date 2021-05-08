
type TagProps = {
  children: React.ReactNode;
  layoutStyle?: string;
}

const Tag: React.FC<TagProps> = ({ children, layoutStyle }) => (
  <div bg='#fff' h='5vw' w='30vw' mb={21} flex alignItems='center' justifyContent='center' rounded='4px' shadowMD fontSize='clamp(11px, 2.0vw, 13px)'> {children} </div>
)

export default Tag
