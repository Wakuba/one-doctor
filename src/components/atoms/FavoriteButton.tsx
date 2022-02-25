import clsx from 'clsx'
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useAuthProvider } from '../../lib/customHooks/useAuthProvider'
import { db } from '../../lib/firebase/firebase.config'
import { OdUserContext } from '../../lib/types'
import { ModalBackdrop, ModalMainArea } from './Modal'

interface FavoriteButtonPropsType {
  layoutStyle: string
  department: any
}

const FavoriteButton: React.VFC<FavoriteButtonPropsType> = ({
  layoutStyle,
  department,
}) => {
  const auth = useAuthProvider()

  const [isFavorite, setIsFavorite] = useState<boolean | null>(null)
  const [favoDeparts, setFavoDeparts] = useState<string[] | null>(null)
  const [openModal, setOpenModal] = useState<boolean | null>(null)

  useEffect(() => {
    if (auth.odUser !== null)
      getDoc(doc(db, 'odUsers', auth.odUser.uid, 'favoDeparts'))
        .then((snapshot) => {
          setFavoDeparts(snapshot.data() as string[])
          setIsFavorite(true)
        })
        .catch((e) => console.log('favoDeparts is none', e))
    else setIsFavorite(false)
  }, [favoDeparts])

  const onFavorite = (auth: OdUserContext) => {
    console.log(department)
    console.log(auth.odUser)
    if (auth.odUser !== null) {
      const uid = auth.odUser.uid
      console.log('not null')
      setOpenModal(false)
      if (isFavorite === false) {
        console.log(' not isFavorite')
        updateDoc(doc(db, 'odUsers', uid), {
          favoDeparts: arrayUnion(department),
        })
        setIsFavorite(true)
        console.log(isFavorite)
      }
      if (isFavorite === true) {
        console.log('isFavorite')
        updateDoc(doc(db, 'odUsers', uid), {
          favoDeparts: arrayRemove(department),
        })
        setIsFavorite(false)
        console.log(isFavorite)
      }
    } else {
      console.log('open modal for not-signup user', auth.odUser)
      setOpenModal(true)
    }
  }

  return (
    <>
      <button
        onClick={() => onFavorite(auth)}
        className={clsx(
          layoutStyle,
          ' h-5 w-32 rounded shadow-md text-xs flex items-center justify-center',
          'active:transfom active:translate-y-[2px] active:border-none',
          isFavorite ? 'bg-purple text-white' : 'bg-white text-black'
        )}
      >
        ★お気に入り
      </button>
      {openModal && (
        <>
          <ModalMainArea
            closeModal={() => setOpenModal(false)}
            modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
            modalContainerStyle='w-full space-y-4'
          >
            <p>アカウントを作成することでお気に入り機能を使うことができます</p>
          </ModalMainArea>
          <ModalBackdrop closeModal={() => setOpenModal(false)} />
        </>
      )}
    </>
  )
}

export default FavoriteButton
