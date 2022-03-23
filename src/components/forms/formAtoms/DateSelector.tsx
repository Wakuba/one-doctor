// import { Controller } from 'react-hook-form'
// import DatePicker, { CalendarContainer } from 'react-datepicker'
// import React from 'react'

// const DateSelector = ({ control, name }) => {
//   const MyContainer = ({ className, children }) => {
//     return (
//       <div style={{ padding: '16px', background: '#216ba5', color: '#fff' }}>
//         <CalendarContainer className={className}>
//           <div className='bg-[#F0F0F0]'>What is your favorite day?</div>
//           <div className='relative'>{children}</div>
//         </CalendarContainer>
//       </div>
//     )
//   }
//   return (
//     <>
//       <label>日付</label>
//       <div>
//         <Controller
//           control={control}
//           name={name}
//           rules={{ required: '選択されていません' }}
//           render={({ field: { onChange, value } }) => {
//             console.log('onChange', onChange)
//             console.log('value', value)
//             return (
//               <DatePicker
//                 selected={value}
//                 onChange={(val) => onChange(val)}
//                 calendarContainer={MyContainer}
//               />
//             )
//           }}
//         />
//       </div>
//     </>
//   )
// }

// export default DateSelector

export {}
