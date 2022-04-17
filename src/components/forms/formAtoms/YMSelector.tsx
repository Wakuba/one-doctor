import clsx from 'clsx'
import { FC } from 'react'
import { Control, FieldValues } from 'react-hook-form'
import { month, years } from '../../../../public/staticData'
import SingleSelector from './SingleSelector'

// eslint-disable-next-line @typescript-eslint/ban-types
const YMSelector: FC<{ control?: Control<FieldValues, object> }> = ({
  control,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-row ov-md:w-5/12 justify-between',
        'sm:w-full'
      )}
    >
      <SingleSelector
        name='year'
        options={years}
        // errors={errors}
        control={control}
        isSearchable
        style={{ wrapperStyle: 'w-5/12' }}
        placeholder='年度'
      >
        実習した年度
      </SingleSelector>
      <SingleSelector
        name='month'
        options={month}
        // errors={errors}
        control={control}
        isSearchable
        style={{ wrapperStyle: 'w-5/12' }}
        placeholder='月'
      >
        実習した月
      </SingleSelector>
    </div>
  )
}

export default YMSelector
