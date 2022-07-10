/* eslint-disable @typescript-eslint/ban-types */
import { VFC } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import Select from 'react-select'

interface SingleSelectorPropsType {
  children?: string
  placeholder?: string
  formState?: any
  options: string[]
  name: string
  style?: { wrapperStyle?: string; selectorStyle?: string }
  control?: Control<FieldValues, object>
  isSearchable: any
}

const customStyles = {
  control: (provided: any) => {
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
  container: (provided: any) => {
    return {
      ...provided,
      height: '40px',
      // '&:focus': { outline: 'none !important', border: '1px dotted #93c5fd' },
    }
  },
}

const SingleSelector: VFC<SingleSelectorPropsType> = ({
  children,
  placeholder,
  formState,
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
    <div className={`${style?.wrapperStyle}`}>
      <label className='block text-sm'>
        {children}
        {children && <span className='text-[#FF0000]'>*</span>}
      </label>
      <Controller
        control={control}
        name={name}
        rules={{ required: '選択されていません' }}
        render={({ field: { onChange } }) => {
          return (
            <Select
              id={name}
              instanceId={name}
              styles={customStyles}
              onChange={(val) => onChange(val?.value)}
              options={optionsTmp}
              placeholder={placeholder ?? '▼選択してください'}
              isSearchable={isSearchable}
            />
          )
        }}
      />
      {formState?.errors[name] ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {/* {`${children}が${errors[name].message}`} */}
        </div>
      ) : (
        <div className='invisible block mt-2 text-xs'>message</div>
      )}
    </div>
  )
}

export default SingleSelector
