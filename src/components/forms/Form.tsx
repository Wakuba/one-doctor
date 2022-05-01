import { createElement } from 'react'
import {
  Control,
  FieldValues,
  FormState,
  useForm,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormReset,
  UseFormResetField,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
// import useFormPersist from '../../lib/customHooks/useFormPersist'

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
    reset,
    resetField,
    formState,
  } = useForm()
  // const names: string[] = []
  // if (process.browser) {
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
  // console.log('どうですか', watch())
  // const persist = useFormPersist('form_' + formName, watch, setValue, reset)
  // }

  // useEffect(() => {
  //   if (formState?.isSubmitSuccessful) {
  //     persist.clear()
  //   }
  // }, [formState, reset])

  return (
    <form name={formName} onSubmit={handleSubmit(onSubmit)} className={style}>
      {Array.isArray(children)
        ? children.map((child, key) => {
            if (Array.isArray(child)) {
              return child.map((gChild, key) => {
                return createElement(gChild.type, {
                  ...{
                    ...gChild.props,
                    register,
                    formState,
                    setError,
                    getValues,
                    control,
                    watch,
                    setValue,
                    clearErrors,
                    reset,
                    resetField,
                    key: key,
                  },
                })
              })
            } else {
              return createElement(child.type, {
                ...{
                  ...child.props,
                  register,
                  formState,
                  setError,
                  getValues,
                  control,
                  watch,
                  setValue,
                  reset,
                  resetField,
                  clearErrors,
                  key: key,
                },
              })
            }
          })
        : createElement(children.type, {
            ...{
              ...children.props,
              register,
              formState,
              setError,
              getValues,
              watch,
              setValue,
              control,
              clearErrors,
              reset,
              resetField,
            },
          })}
    </form>
  )
}

export default Form

const Nest = ({
  key,
  children,
  register,
  formState,
  setError,
  watch,
  setValue,
  getValues,
  control,
  clearErrors,
  reset,
  resetField,
  style,
}: {
  children: any
  register?: UseFormRegister<FieldValues>
  // eslint-disable-next-line @typescript-eslint/ban-types
  control?: Control<FieldValues, object>
  formState?: FormState<FieldValues>
  setError?: UseFormSetError<FieldValues>
  watch?: UseFormWatch<FieldValues>
  setValue?: UseFormSetValue<FieldValues>
  getValues?: UseFormGetValues<FieldValues>
  clearErrors?: UseFormClearErrors<FieldValues>
  reset?: UseFormReset<FieldValues>
  resetField?: UseFormResetField<FieldValues>
  style?: string
  key?: number
}) => {
  return (
    <div key={key} className={style}>
      {Array.isArray(children)
        ? children.map((child, key) => {
            return createElement(child.type, {
              ...{
                ...child.props,
                register,
                formState,
                setError,
                getValues,
                watch,
                setValue,
                control,
                clearErrors,
                reset,
                resetField,
                key: key,
              },
            })
          })
        : createElement(children.type, {
            ...{
              ...children.props,
              register,
              formState,
              setError,
              watch,
              setValue,
              getValues,
              control,
              clearErrors,
              reset,
              resetField,
            },
          })}
    </div>
  )
}

Form.Nest = Nest
