import { addDoc, collection } from '@firebase/firestore'
// import imageCompression from 'browser-image-compression'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../firebase/firebase.config'

const imageUploader = async (certificationImage: File) => {
  const metadata = {
    contentType: '',
    customMetadata: {
      certificationImageId: '',
    },
  }

  console.log('after metadata defenition')
  // storageの画像にidをふるために、firestoreに登録してidを作る
  const res = await addDoc(collection(db, 'odAuthorizationImageFiles'), {
    certificationlmageName: certificationImage?.name,
  })

  metadata.customMetadata.certificationImageId = res.id

  console.log('after addDoc')
  const storageRef = ref(
    storage,
    `odUser/certificationImage/${certificationImage?.name}`
  )

  console.log('storageRef')
  // const image = await imageCompression(certificationImage as File, {
  //   maxSizeMB: 3,
  // })
  // console.log('image 5/15', image)
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
      console.log('image upload progress', prog)
    },
    (error) => alert(error)
  )
  return metadata.customMetadata.certificationImageId
}

export default imageUploader
