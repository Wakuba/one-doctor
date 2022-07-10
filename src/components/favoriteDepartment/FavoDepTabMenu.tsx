import { getAuth } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../lib/firebase/firebase.config'
import TabMenu from '../tabs/TabMenu'
import FavoDepInfoTab from './FavoDepInfo'
import FavoDepTab from './FavoDepTab'
import { FavoDepDataType } from '../../lib/types'

const FavoTabMenu = () => {
  const [favoDepList, setFavoDepList] = useState<FavoDepDataType[]>([])
  useEffect(() => {
    const auth = getAuth()
    const curUser = auth.currentUser
    if (curUser) {
      const uid = curUser.uid
      const ref = doc(db, 'odUsers', uid)
      getDoc(ref).then((snap) => {
        const data = snap.data()
        const depList = data?.favoDeparts
        setFavoDepList(depList)
      })
    }
  }, [])

  // const { data } = useSWR(
  //   favoDepList
  //     ? `https://script.google.com/macros/s/AKfycbyxgL2QQoiLg3vSFnBzm0pPkZ2-S81l1UdvBVYMcZlAfVJ3k5y5zbzSSEOQOQR6_-av/execc?dep=小児外科&univ=筑波大学`
  //     : null
  // )

  return (
    <TabMenu style={{ tabButtonStyle: 'w-60 h-10' }}>
      <FavoDepTab {...{ title: '診療科の追加・削除', favoDepList }} />
      <FavoDepInfoTab {...{ title: '診療科からのお知らせ', favoDepList }} />
    </TabMenu>
  )
}

export default FavoTabMenu
