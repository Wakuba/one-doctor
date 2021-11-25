import React, { useState, VFC } from 'react'
import Image from 'next/image'
import {
  UseFormRegister,
  FieldValues,
  Controller,
  Control,
  setError,
  Field,
} from 'react-hook-form'

interface ImageUploadPropsType {
  name: string
  children?: string
  subTitle?: string
  control: Control<FieldValues, object>
  register: UseFormRegister<FieldValues>
  errors: any
  setError: UseFormSetError<FieldValues>
  setCertificationImage: React.Dispatch<React.SetStateAction<File | null>>
}

const errorRenderer = (fileTypeError, noImageError) => {
  if (fileTypeError) {
    return <div className='text-[#FF0000] text-xs'>{fileTypeError.message}</div>
  } else if (noImageError) {
    return (
      <div className='block mt-2 text-xs text-[#FF0000]'>
        {noImageError.message}
      </div>
    )
  } else {
    return <div className='invisible block text-xs'>message</div>
  }
}

const ImageUpload: VFC<ImageUploadPropsType> = ({
  name,
  children,
  subTitle,
  register,
  control,
  setError,
  errors,
  setCertificationImage,
}) => {
  const [disposalUrl, setDisposalUrl] = useState('')

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ファイルがない場合
    if (event.target.files === null || event.target.files.length === 0) {
      return
    } else {
      const files = Object.values(event.target.files)
      setDisposalUrl(URL.createObjectURL(new Blob(files)))
      return files[0]
    }
  }

  const fileTypeChecker = (event) => {
    if (event.target.files === null || event.target.files.length === 0) {
      return
    }
    const files = Object.values(event.target.files)
    return files.filter((file) => {
      if (
        ![
          'image/gif',
          'image/jpeg',
          'image/png',
          'image/bmp',
          'image/svg+xml',
        ].includes(file.type)
      ) {
        console.log(file)
        setError('fileTypeError', {
          type: 'manual',
          message:
            ' ※jpeg, png, bmp, gif, svg以外のファイル形式は選択できません',
        })
      }
    })
  }
  return (
    <div className='pb-6'>
      <div className='block text-sm'>
        {children} <span className='text-[#FF0000]'>*</span>
      </div>
      <Controller
        control={control}
        rules={{ required: '選択されていません' }}
        name={name}
        render={({ field: { onChange, value, name, ref } }) => {
          // console.log('onChange', onChange)
          // console.log('value', value)
          // console.log('name', name)
          // console.log('ref', ref)
          console.log('errors', errors)
          return (
            <label className='block border-solid rounded bg-prime-blue-rich text-white border-b-4 border-[#5493AA] active:transfom active:translate-y-[2px] active:border-none w-1/2 min-w-[270px] h-[300px]'>
              <div className='pl-[8px] h-[40px] leading-[40px]'>
                <Image
                  src='/svg/upload.svg'
                  layout='fixed'
                  height='15'
                  width='15'
                  className='inline'
                />
                <span className='pl-[8px]'>ファイルを選択してください</span>
              </div>
              <input
                className='hidden'
                name={name}
                type='file'
                accept='image/*'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.preventDefault()
                  fileTypeChecker(e)
                  onChange(handleFile(e))
                }}
              />
              {disposalUrl ? (
                <div className='w-full h-full bg-gray-200'>
                  <div className='relative block w-full h-full'>
                    <Image
                      src={disposalUrl}
                      layout='fill'
                      className='bg-gray-200 object-contain'
                    />
                  </div>
                </div>
              ) : (
                <div className='w-full h-full bg-gray-200 p-8'>
                  <div className='relative block w-full h-full'>
                    <Image
                      src='/svg/camera.svg'
                      layout='fill'
                      className='bg-gray-200 object-contain'
                    />
                  </div>
                </div>
              )}
            </label>
          )
        }}
      />
      {errorRenderer(errors.fileTypeError, errors.name)}
    </div>
  )
}

export default ImageUpload
