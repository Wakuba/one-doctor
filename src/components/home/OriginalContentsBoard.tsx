import DepartKanban from "./DepartKanban"

const OriginalContentsBoard = ({ depList }) => {
  return (
    <div className='bg-prime-blue-muted w-full'>
      <div className='text-[#B7B7B7] sm:text-2xl ov-md:text-4xl font-semibold mb-6'>
        筑波大学
      </div>
      {depList.map((dep: any, idx: number) => (
        <div key={idx + 1} className='flex justify-self-center self-center'>
          <DepartKanban pageUrl={dep.path}>
            {dep.depName.departmentNameInJapanese}
          </DepartKanban>
        </div>
      ))}
    </div>
  )
}

export default OriginalContentsBoard
