import { useEffect } from 'react'
import {
  FieldValues,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'

const useFormPersist = (
  name: string,
  watch: UseFormWatch<FieldValues>,
  setValue: UseFormSetValue<FieldValues>,
  reset: UseFormReset<FieldValues>
) => {
  const getStorage: () => Storage = () => window.sessionStorage
  let values: any = {}

  useEffect(() => {
    const str = getStorage().getItem(name)
    if (str) {
      values = JSON.parse(str)
      Object.keys(values).forEach((key) => {
        setValue(key, values[key])
      })
    } else {
      values = watch()
    }
  }, [name])

  useEffect(() => {
    values = watch()
    getStorage().setItem(name, JSON.stringify(values))
  })

  return {
    clear: () => {
      const data = { ...watch() }
      const dataKeys = Object.keys(data)
      const resetData = dataKeys.reduce(
        (acc, cur) => ((acc[cur] = ''), acc),
        {}
      )
      getStorage().removeItem(name)
      reset({ ...resetData })
    },
  }
}

export default useFormPersist
