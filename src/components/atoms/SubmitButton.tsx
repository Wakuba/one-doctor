import clsx from 'clsx'

const SubmitButton = () => (
  <div className='flex justify-center pb-10'>
    <button
      type='submit'
      className={clsx(
        'rounded text-white h-11 w-48 bg-prime-blue-rich border-b-4 border-[#5493AA]',
        'active:transfom active:translate-y-[2px] active:border-none'
      )}
    >
      送信する
    </button>
  </div>
)
export default SubmitButton
