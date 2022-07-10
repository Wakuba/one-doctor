import { addDoc, collection } from '@firebase/firestore'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../firebase/firebase.config'

const imageUploader = async (certificationImage: File) => {
  const metadata = {
    contentType: '',
    customMetadata: {
      certificationImageId: '',
    },
  }

  // storageの画像にidをふるために、firestoreに登録してidを作る
  const res = await addDoc(collection(db, 'odAuthorizationImageFiles'), {
    certificationlmageName: certificationImage?.name,
  })

  metadata.customMetadata.certificationImageId = res.id

  const storageRef = ref(
    storage,
    `odUser/certificationImage/${certificationImage?.name}`
  )

  metadata.contentType = certificationImage.type
  const uploadTask = uploadBytesResumable(
    storageRef,
    certificationImage,
    metadata
  )
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes)
    },
    (error) => alert(error)
  )
  return metadata.customMetadata.certificationImageId
}

export default imageUploader
