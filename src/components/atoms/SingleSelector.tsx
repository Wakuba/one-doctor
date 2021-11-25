import { useEffect, VFC } from 'react'
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'
import Select from 'react-select'

interface SingleSelectorPropsType {
  children?: string
  register: UseFormRegister<FieldValues>
  errors: any
  options: string[]
  name: string
  style?: { wholeStyle: string; selectorStyle: string }
  placeholder: string
  control: Control<FieldValues, object>
  isSearchable: any
}

const customStyles = {
  control: (provided) => {
    const result = {
      ...provided,
      height: '40px',
      border: '1px solid #707070',
      borderRadius: '4px',
      // boxShadow: 'none',
      // outline:'none',
      // '&:active': { outline: 'none', borderColor: '#93c5fd'},
      // '&:focus': { outline: 'none', borderColor: '#93c5fd'},
    }
    return result
  },
  container: (provided) => {
    return {
      ...provided,
      height: '40px',
      // '&:focus': { outline: 'none !important', border: '1px dotted #93c5fd' },
    }
  },
}

const SingleSelector: VFC<SingleSelectorPropsType> = ({
  children,
  errors,
  options,
  name,
  style,
  control,
  isSearchable,
}) => {
  const optionsTmp: { value: string; label: string }[] = options.map(
    (option: string) => ({ value: option, label: option })
  )

  return (
    <div className={`${style?.wholeStyle}`}>
      <label className='block text-sm'>{children}</label>
      <Controller
        control={control}
        name={name}
        rules={{ required: '選択されていません' }}
        render={({ field: { onChange } }) => {
          // console.log('onChange', onChange)
          // console.log('ref', ref)
          // console.log('value', value)
          return (
            <Select
              styles={customStyles}
              onChange={(val) => onChange(val?.value)}
              options={optionsTmp}
              placeholder='▼選択してください'
              isSearchable={isSearchable}
            />
          )
        }}
      />
      {errors[name] ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {`${children}が${errors[name].message}`}
        </div>
      ) : (
        <div className='invisible block'>message</div>
      )}
    </div>
  )
}

export default SingleSelector
