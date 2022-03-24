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
import useFormPersist from 'react-hook-form-persist'

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

  useFormPersist('form', { watch, setValue })

  return (
    <form name={formName} onSubmit={handleSubmit(onSubmit)} className={style}>
      {Array.isArray(children)
        ? children.map((child) => {
            if (Array.isArray(child)) {
              console.log(child)
              return child.map((gChild) => {
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
                    key: gChild.props.name,
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
                  key: child.props.name,
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
}) => {
  return (
    <div className={style}>
      {Array.isArray(children)
        ? children.map((child) => {
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
                key: child.props.name,
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
