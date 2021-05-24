import { useState } from 'react'

const Backdrop = ({onCancel}) => <div className='w-full h-screen fixed top-0 left-0 bg-yellow-300 z-20' onClick={onCancel}/>

const Modal = ({ onCancel }) => {
    const cancelHandler = () => { onCancel() }
    return (
        <div className='w-wscreen/2 h-wscreen2/5 bg-prime-blue-muted shadow-lg fixed top-4 left-4 flex flex-col items-center z-50'>
            <p>Are you sure?</p>
            <button className='w-20 h-10' onClick={cancelHandler}>Cancel</button>
        </div>
    )
}

const ModalTrigger = () => {
    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false)
    const openHandler = () => { setModalIsOpen(true) }
    const closeModalHandler = () => { setModalIsOpen(false) }
    return (
        <div className='w-wscreen/2 h-wscreen2/5 flex flex-col bg-red-50'>
            <h2>This is Modal</h2>
            <div className='w-full bg-green-400 h-32 flex justify-center items-center'>
                <button className='bg-purple-400 h-10 w-18' onClick={openHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler}/>}
            { modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }
        </div>
    )
}

export default ModalTrigger