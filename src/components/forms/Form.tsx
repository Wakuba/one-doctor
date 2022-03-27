import { createElement } from 'react'
import {
  Control,
  FieldValues,
  useForm,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import useFormPersist from '../../lib/customHooks/useFormPersist'

interface FormPropsType {
  formName: string
  children: any
  onSubmit: (data: any) => void
  style?: string
}

const Form = ({ formName, children, onSubmit, style }: FormPropsType) => {
  const {
    handleSubmit,
    register,
    control,
    setError,
    getValues,
    clearErrors,
    watch,
    setValue,
    formState: { errors },
  } = useForm()
  // const names: string[] = []
  if (process.browser) {
    // const form = document.getElementsByTagName('form')[0]
    // const childCount = form.childElementCount
    // console.log('childCount', childCount)
    // for (let i = 0; i < childCount - 1; i++) {
    //   const label = form.getElementsByTagName('label')[i]
    //   // console.log(label)
    //   if (label?.htmlFor) {
    //     // console.log(label.htmlFor)
    //     names.push(label.htmlFor)
    //   }
    //   console.log(names)
    // }
    useFormPersist('form', { watch, setValue })
  }

  return (
    <form name={formName} onSubmit={handleSubmit(onSubmit)} className={style}>
      {Array.isArray(children)
        ? children.map((child, key) => {
            if (Array.isArray(child)) {
              console.log(child)
              return child.map((gChild, key) => {
                console.log('oi', gChild)
                return createElement(gChild.type, {
                  ...{
                    ...gChild.props,
                    register,
                    errors,
                    setError,
                    getValues,
                    control,
                    watch,
                    setValue,
                    clearErrors,
                    key,
                  },
                })
              })
            } else {
              return createElement(child.type, {
                ...{
                  ...child.props,
                  register,
                  errors,
                  setError,
                  getValues,
                  control,
                  watch,
                  setValue,
                  clearErrors,
                  key,
                },
              })
            }
          })
        : createElement(children.type, {
            ...{
              ...children.props,
              register,
              errors,
              setError,
              getValues,
              watch,
              setValue,
              control,
              clearErrors,
            },
          })}
    </form>
  )
}

export default Form

const Nest = ({
  children,
  register,
  errors,
  setError,
  watch,
  setValue,
  getValues,
  control,
  clearErrors,
  style,
}: {
  children: any
  register?: UseFormRegister<FieldValues>
  // eslint-disable-next-line @typescript-eslint/ban-types
  control?: Control<FieldValues, object>
  errors?: any
  setError?: UseFormSetError<FieldValues>
  watch?: UseFormWatch<FieldValues>
  setValue?: UseFormSetValue<FieldValues>
  getValues?: UseFormGetValues<FieldValues>
  clearErrors?: UseFormClearErrors<FieldValues>
  style?: string
  key: number
}) => {
  return (
    <div className={style}>
      {Array.isArray(children)
        ? children.map((child, key) => {
            return createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                setError,
                getValues,
                watch,
                setValue,
                control,
                clearErrors,
                key,
              },
            })
          })
        : createElement(children.type, {
            ...{
              ...children.props,
              register,
              errors,
              setError,
              watch,
              setValue,
              getValues,
              control,
              clearErrors,
            },
          })}
    </div>
  )
}

Form.Nest = Nest
