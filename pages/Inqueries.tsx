import { div } from '@fower/react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { useContext } from 'react'
import ScreenWidthContext from '../contexts/ScreenWidthContext'

const Inqueries = () => {
  const isPageSmall = useContext(ScreenWidthContext)
  return(
    <div>
      <Header />
      <div className='flex-col justify-center content-center bg-prime-blue-muted w-full'>
        <main className='w-full'>
          <form action=''>
              <div>
                  <div className='bg-prime-blue-rich'>お問い合わせ</div>
                  <p>以下のフォームに必要事項をご記入のうえ、「送信する」をクリックしてください</p>
              </div>

            <div>
              <label>
                <p>お名前(必須)</p>
                <input className='w-full border-2 rounded' type='text' name='name'></input>
              </label>
            </div>

            <div>
              <label>
                <p>メールアドレス(必須)</p>
                <input className='w-full border-2 rounded' type='mail-adress' name='name'></input>
              </label>
            </div>

            <div >
              <label>
                <p>お問い合わせ内容(必須)</p>
                <textarea cols={40} rows={8} name='content' className='w-full border-2 rounded'></textarea>
              </label>
            </div>

            <div className='justify-center content-center'>
              <button className='rounded text-white h-11 w-48 bg-prime-blue-rich'>送信する</button>
            </div>

          </form >
        </main>
      </div>
      <Footer isPageSmall={isPageSmall} />
  </div>
)
}

export default Inqueries
