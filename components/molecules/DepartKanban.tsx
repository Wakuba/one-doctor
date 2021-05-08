import Link from 'next/link'

// type DepartKanbanProps = {
//   key: number;
//   children: React.ReactNode;
//   departPage: string;
//   layoutStyles?: {
//     departKanban?: string;
//     imageBox?: string;
//     departName?: string;
//   }
// }
// React.FC<DepartKanbanProps>
const DepartKanban  = props => {
  const { children, departPage, layoutStyles } = props
  return (
    // <Link href={departPage}>
      <div
        bg='#fff'
        css={{
            border: '0.5px solid #707070',
            borderRadius: '3px',
            boxShadow: '0px 0px 15px #00000065',
            display: 'grid',
            gridTemplate: ` '.. ........ .. .......    ..' 15% 
                            '.. imageBox .. departName ..' clamp(27px, 8.4vw, 52px) 
                            '.. ........ .. .......    ..' 15% / 
                            13.5% clamp(27px, 8.4vw, 52px) auto auto auto `,
            height: '12.3vw',
            maxHeight: '75px',
            maxWidth: '300px',
            minHeight: '39px',
            width: '50vw',

            '.imageBox' : {
                gridArea: 'imageBox'
            },
            '.departName' : {
                gridArea: 'departName'
            }
        }}
        >
        <img className='imageBox' />
        <div className='departName'>{children}</div>
      </div>
    // </Link>
  )
}

export default DepartKanban
