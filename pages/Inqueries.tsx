import { Box } from '@fower/react'
import { useMediaQuery } from '../lib/customHook'
import { WIDTH_THRESHOLD } from '../lib/variables'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'

const Inqueries = () => {
  let isPageSmall = useMediaQuery(`(max-width: ${WIDTH_THRESHOLD}px`)
  return(
    <div>
      <Header />
      <Box column toCenter css={{ backgroundColor: 'mainBlueMuted', w: '100%' }}>
        <Box as='main' pt-10 pt-11--sm w='100%' toCenterX >
          <Box as='form' action='' w--sm='80%' w='88%'>
              <Box mb='6vw'>
                  <Box as='div' mainBlueRich fontSemibold css={{ coreFontSizeLG: 'true' }}>お問い合わせ</Box>
                  <p>以下のフォームに必要事項をご記入のうえ、「送信する」をクリックしてください</p>
              </Box>

            <Box mb='6vw'>
              <label>
                <p>お名前(必須)</p>
                <Box as='input' type='text' name='name' h='15vw' maxH='60px' w='100%' border='1px' rounded='4px'></Box>
              </label>
            </Box>

            <Box mb='6vw'>
              <label>
                <p>メールアドレス(必須)</p>
                <Box as='input' type='mail-adress' name='name' h='15vw' maxH='60px' w='100%' border='1px' rounded='4px'></Box>
              </label>
            </Box>

            <Box mb='6vw'>
              <label>
                <p>お問い合わせ内容(必須)</p>
                <Box as='textarea' cols='40' rows='8' name='content' h='42vw' maxH='270px' w='100%' border='1px' rounded='4px'></Box>
              </label>
            </Box>

            <Box toCenter py='30px'>
              <Box as='button' rounded='4px' bgMainBlueRich white h='45px' w='200px'>送信する</Box>
            </Box>

          </Box>
        </Box>
      </Box>
      <Footer isPageSmall={isPageSmall} />
  </div>
)
}

export default Inqueries
