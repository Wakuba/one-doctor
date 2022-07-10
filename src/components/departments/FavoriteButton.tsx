import clsx from 'clsx'
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import permissionChecker from '../../lib/customFunctions/permissionChecker'
// import { setTimeout } from 'timers/promises'
import { db } from '../../lib/firebase/firebase.config'
import { auth } from '../../lib/firebase/firebase.config'

interface FavoriteButtonPropsType {
  layoutStyle: string
  depName: { departmentNameInJapanese: string; departmentNameInEnglish: string }
}

interface FavoDataType {
  favoDepName: { nameInJap: string; nameInEng: string }
  favoDepUrl: string
}

const FavoriteButton: React.VFC<FavoriteButtonPropsType> = ({
  layoutStyle,
  depName,
}) => {
  const [popup, setPopup] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const curUser = auth.currentUser
  const curDepData = {
    curDepName: {
      nameInEng: depName?.departmentNameInEnglish,
      nameInJap: depName?.departmentNameInJapanese,
    },
    curDepUrl: '/Departments/' + router.query.id,
  }

  useEffect(() => {
    setTimeout(() => setPopup(false), 2000)
    // return () => clearTimeout(timer)
  }, [isFavorite])

  useEffect(() => {
    if (curUser) {
      const uid = curUser.uid
      const ref = doc(db, 'odUsers', uid)
      getDoc(ref).then((snap) => {
        const favoDeparts = snap.data()?.favoDeparts
        if (
          favoDeparts.some(
            (dep: FavoDataType) =>
              dep.favoDepName.nameInJap === curDepData.curDepName.nameInJap &&
              dep.favoDepName.nameInEng === curDepData.curDepName.nameInEng &&
              dep.favoDepUrl === curDepData.curDepUrl
          )
        ) {
          setIsFavorite(true)
          setPopup(true)
        } else {
          setIsFavorite(false)
          setPopup(false)
        }
      })
    } else {
      setIsFavorite(false)
      setPopup(false)
    }
  }, [])

  const onFavorite = () => {
    permissionChecker(dispatch).then((isApproved) => {
      if (isApproved) {
        if (curUser) {
          const uid = curUser.uid
          if (!isFavorite) {
            const ref = doc(db, 'odUsers', uid)
            updateDoc(ref, {
              favoDeparts: arrayUnion({
                favoDepName: { ...curDepData.curDepName },
                favoDepUrl: '/Departments/' + router.query.id,
              }),
            })
            setIsFavorite(true)
            setPopup(true)
          } else {
            const ref = doc(db, 'odUsers', uid)
            updateDoc(ref, {
              favoDeparts: arrayRemove({
                favoDepName: { ...curDepData.curDepName },
                favoDepUrl: '/Departments/' + router.query.id,
              }),
            })
            setIsFavorite(false)
            setPopup(false)
          }
        }
      }
    })
  }

  return (
    <>
      <button
        onClick={() => onFavorite()}
        className={clsx(
          layoutStyle,
          'relative h-5 w-32 rounded shadow-md text-xs flex items-center justify-center',
          'active:transfom active:translate-y-[2px] active:border-none',
          isFavorite ? 'bg-purple text-white' : 'bg-white text-black'
        )}
      >
        {popup && <RegisteredMessage />}
        ★お気に入り
      </button>
    </>
  )
}

export default FavoriteButton

const RegisteredMessage = () => {
  return (
    <div
      className={clsx(
        'absolute bottom-8 text-xs w-44 h-[28px] bg-prime-blue-pale flex items-center justify-center rounded-lg',
        'after:border-solid after:left-[70px] after:top-[28px] after:absolute after:border-[12px] after:border-t-prime-blue-pale after:border-l-transparent after:border-r-transparent after:border-b-transparent'
      )}
    >
      <p>お気に入りに追加されました</p>
    </div>
  )
}
