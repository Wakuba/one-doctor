import { useEffect, VFC } from 'react'
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'
import Select, { MultiValue } from 'react-select'

interface MultiSelectorPropsType {
  children?: string
  subTitle?: string
  register: UseFormRegister<FieldValues>
  errors: any
  options: string[]
  name: string
  style?: { wholeStyle: string; selectorStyle: string }
  placeholder: string
  control: Control<FieldValues, object>
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

const MultiSelector: VFC<MultiSelectorPropsType> = ({
  children,
  subTitle,
  errors,
  options,
  name,
  style,
  control,
}) => {
  const optionsTmp: { value: string; label: string }[] = options.map(
    (option: string) => ({ value: option, label: option })
  )
  return (
    <div className={`${style?.wholeStyle}`}>
      <label htmlFor={name} className='block text-sm'>
        {children}
        <p className='text-[#FF0000] inline text-[0.5px] align-top'>※</p>
        <div className='text-sm'>{subTitle}</div>
      </label>
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
              onChange={(val) => {
                onChange([...val.map((v) => v.value)])
              }}
              options={optionsTmp}
              placeholder='選択してください(検索可能)'
              isSearchable
              isMulti
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

export default MultiSelector
