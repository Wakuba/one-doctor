import DepartKanban from '../molecules/DepartKanban'

const depList: string[] = ['循環器', '消化器内科', '脳神経内科', '腎臓内科', '血液内科',
  'アレルギーリウマチ', '皮膚科', '泌尿器科', '脳神経外科', '心臓血管外科',
  '呼吸器外科', '消化器外科', '移植外科', '緩和ケア', '放射線',
  '総合診断科', '感染症科', '救急', '整形外科', '耳鼻咽喉科・頭頸部外科',
  '麻酔科', '眼科', '形成外科', '公衆衛生', '外傷外科']

export default function DepartBoard() {
  return (
    <div className='
          w-full
          sm:overflow-x-auto sm:overflow-y-hidden
          md:overflow-x-auto md:overflow-y-hidden
          ov-lg:flex ov-lg:flex-col ov-lg:items-center
          '>
      <div className='
              flex flex-row flex-wrap
              sm:w-for-scroll sm:justify-items-stretch
              md:w-for-scroll md:justify-items-stretch
              ov-lg:justify-between ov-lg:w-11/12'>
        {depList.map((cur, idx) => <DepartKanban key={idx + 1} >{cur}</DepartKanban>)}
      </div >
    </div>
  )
}
