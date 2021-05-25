import { useState } from 'react'

const Backdrop = ({onCancel}) => <div className='w-full h-screen fixed top-0 left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur z-20' onClick={onCancel}/>



const Modal = ({ onCancel, layoutStyles, children }) => {
    const cancelHandler = () => { onCancel() }
    return (
        <div onClick={cancelHandler} className={`ov-md:w-32 ov-md:h-32 sm:w-20 sm:h-20 rounded-full bg-prime-blue-rich shadow-lg fixed flex justify-center items-center z-50 text-white ov-md:text-lg sm:text-xs font-semibold ${layoutStyles}`}>
            { children }
        </div>
    )
}

const ContactButtonModal = () => {
    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false)
    const openModalHandler = () => { setModalIsOpen(true) }
    const closeModalHandler = () => { setModalIsOpen(false) }
    return (
        <>
            <div onClick={ openModalHandler } className='fixed right-4 bottom-4 bg-contact-button bg-contain bg-no-repeat ov-md:h-32 ov-md:w-32 sm:w-20 sm:h-20 flex justify-center items-center text-white z-50'>
                <div className='ov-md:text-2xl sm:text-sm '>contact</div>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler} layoutStyles='right-4 sm:bottom-32'>見学申し込み</Modal>}
            { modalIsOpen && <Modal onCancel={closeModalHandler} layoutStyles='right-4 sm:bottom-64'>見学申し込み</Modal>}
            { modalIsOpen && <Modal onCancel={closeModalHandler} layoutStyles='right-4 sm:bottom-96'>見学申し込み</Modal>}
            { modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }
        </>
    )
}

export default ContactButtonModal 