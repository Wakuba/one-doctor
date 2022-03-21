import MyNoteForm from '../components/forms/MyNoteForm'
import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'

const MyNote = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <MyNoteForm style='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] bg-prime-blue-muted' />
      </div>
      <Footer />
    </>
  )
}

export default MyNote
