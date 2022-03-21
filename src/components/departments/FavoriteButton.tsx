import clsx from 'clsx'
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useRequiredPermission } from '../../lib/customHooks/useRequiredPermission'
import { db } from '../../lib/firebase/firebase.config'
import { odUserContextType } from '../../lib/types'

interface FavoriteButtonPropsType {
  layoutStyle: string
  department: any
}

const FavoriteButton: React.VFC<FavoriteButtonPropsType> = ({
  layoutStyle,
  department,
}) => {
  const {
    auth,
    NotEmailVerifiedAlert,
    AccountNotExistAlert,
    permissionChecker,
  } = useRequiredPermission()

  const [isFavorite, setIsFavorite] = useState<boolean | null>(null)
  const [favoDeparts, setFavoDeparts] = useState<string[] | null>(null)

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

  const onFavorite = (auth: odUserContextType) => {
    const isPermitted = permissionChecker()
    if (isPermitted && auth.odUser) {
      const uid = auth.odUser.uid
      if (isFavorite === false) {
        updateDoc(doc(db, 'odUsers', uid), {
          favoDeparts: arrayUnion(department),
        })
        setIsFavorite(true)
      }
      if (isFavorite === true) {
        console.log('isFavorite')
        updateDoc(doc(db, 'odUsers', uid), {
          favoDeparts: arrayRemove(department),
        })
        setIsFavorite(false)
      }
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
      <NotEmailVerifiedAlert />
      <AccountNotExistAlert />
    </>
  )
}

export default FavoriteButton
