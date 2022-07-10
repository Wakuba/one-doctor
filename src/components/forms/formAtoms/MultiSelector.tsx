/* eslint-disable @typescript-eslint/ban-types */
import { VFC } from 'react'
import { Control, Controller, FieldValues, FormState } from 'react-hook-form'
import Select from 'react-select'

interface MultiSelectorPropsType {
  children?: string
  placeholder?: string
  defaultValue?: { value: string; label: string }[]
  subTitle?: string
  // register: UseFormRegister<FieldValues>
  formState?: FormState<FieldValues>
  options: string[]
  name: string
  style?: { wrapperStyle?: string; selectorStyle?: string }
  control?: Control<FieldValues, object>
  isRequired?: boolean
}

const customStyles = {
  control: (provided: any) => {
    const result = {
      ...provided,
      // height: '40px', // 2.5rem相当
      // overflow: 'scroll',
      border: '1px solid #707070',
      borderRadius: '4px',
      // boxShadow: 'none',
      // outline:'none',
      // '&:active': { outline: 'none', borderColor: '#93c5fd'},
      // '&:focus': { outline: 'none', borderColor: '#93c5fd'},
    }
    return result
  },
  container: (provided: any) => {
    return {
      ...provided,
      // overflow: 'scroll',
      // height: '40px',
      // '&:focus': { outline: 'none !important', border: '1px dotted #93c5fd' },
    }
  },
}

const MultiSelector: VFC<MultiSelectorPropsType> = ({
  children,
  placeholder,
  subTitle,
  formState,
  options,
  name,
  style,
  control,
  isRequired = true,
}) => {
  const optionsObj: { value: string; label: string }[] = options.map(
    (option: string) => ({ value: option, label: option })
  )
  // console.log(options)
  return (
    <div className={`${style?.wrapperStyle}`}>
      <label htmlFor={name} className='block text-sm'>
        {children}
        {children && '(検索可能, 複数選択可能)'}
        {isRequired ||
          (children && (
            <>
              <span className='text-[#FF0000]'>*</span>
              <div className='text-sm'>{subTitle}</div>
            </>
          ))}
      </label>
      <Controller
        control={control}
        name={name}
        rules={isRequired ? { required: '選択されていません' } : undefined}
        render={({ field: { onChange, value, ref } }) => {
          return (
            <Select
              ref={ref}
              id={name}
              instanceId={name}
              value={options?.find((c) => c === value)}
              // value={options}
              // defaultValue={defaultValue}
              onChange={(val: any) => {
                console.log(val)
                return onChange([...val.map((v: any) => v.value)])
              }}
              styles={customStyles}
              options={optionsObj as any}
              placeholder={placeholder ?? '▼選択してください'}
              isSearchable
              isMulti
              isClearable
              closeMenuOnScroll
              closeMenuOnSelect={false}
            />
          )
        }}
      />
      {formState?.errors?.name ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {`${children}が${formState.errors[name]?.message}`}
        </div>
      ) : (
        <div className='invisible block mt-2 text-xs '>message</div>
      )}
    </div>
  )
}

export default MultiSelector
