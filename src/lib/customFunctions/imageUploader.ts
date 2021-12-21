import { addDoc, collection } from '@firebase/firestore'
import imageCompression from 'browser-image-compression'
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
  await addDoc(collection(db, 'odAuthorizationImageFiles'), {
    certificationlmageName: certificationImage?.name,
  }).then((res) => {
    metadata.customMetadata.certificationImageId = res.id
  })

  const storageRef = ref(
    storage,
    `odUser/certificationImage/${certificationImage?.name}`
  )

  await imageCompression(certificationImage, { maxSizeMB: 3 }).then((image) => {
    metadata.contentType = image.type
    const uploadTask = uploadBytesResumable(storageRef, image, metadata)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes)
        console.log('image upload progress', prog)
      },
      (error) => alert(error)
    )
  })
  return metadata.customMetadata.certificationImageId
}

export default imageUploader
