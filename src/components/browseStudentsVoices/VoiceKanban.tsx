import clsx from 'clsx'
import { VFC } from 'react'
import { VoiceDataType } from '../../lib/types'

interface VoiceKanbanPropsType {
  voiceData: VoiceDataType
  wrapperStyle?: string
}

const VoiceKanban: VFC<VoiceKanbanPropsType> = ({
  voiceData,
  wrapperStyle,
}) => {
  const {
    universityNameInJapanese,
    grade,
    departmentNameInJapanese,
    year,
    month,
    facility,
    atomosphere,
    coaching,
    clinicalCase,
    impression,
    messageToStudents,
    materials,
    prepare,
  } = voiceData
  return (
    <div
      className={clsx(
        'border-1 border-[#707070] rounded-xl p-4 h-[450px]',
        wrapperStyle
      )}
    >
      <div className='flex flex-row justify-between'>
        <p className='font-semibold text-lg'>
          {universityNameInJapanese}
          {'　'}
          {departmentNameInJapanese}
        </p>
        <div className='text-sm'>
          <p>見学年度: {year}年</p>
          <p>見学時期: {month}月</p>
          <p>学年: {grade}年</p>
        </div>
      </div>
      <div className='overflow-y-scroll overflow-hidden'>
        <div className='h-[338px]'>
          {facility?.goodPoint !== '' && (
            <div>
              <p className=''>
                <span className='text-prime-blue-rich'>●</span>設備について
              </p>
              <div>
                <p className='bg-[#EBEBEB]'>よかった点</p>
                <p>{facility?.goodPoint}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>改善すべき点</p>
                <p>{facility?.dissatisfiedPoint}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>総合評価</p>
                <p>{facility?.comprehensiveEvaluation}</p>
              </div>
            </div>
          )}
          {coaching?.goodPoint !== '' && (
            <div>
              <p className=''>
                <span className='text-prime-blue-rich'>●</span>
                指導体制・指導内容について
              </p>
              <div>
                <p className='bg-[#EBEBEB]'>よかった点</p>
                <p>{coaching?.goodPoint}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>改善すべき点</p>
                <p> {coaching?.dissatisfiedPoint}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>手技</p>
                <p>{coaching?.procedure}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>クルズス・講義</p>
                <p>{coaching?.teaching}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>課題・レポート・発表</p>
                <p>{coaching?.report}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>カンファレンス</p>
                <p>{coaching?.conference}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>総合評価</p>
                <p>{coaching?.comprehensiveEvaluation}</p>
              </div>
            </div>
          )}
          {clinicalCase?.goodPoint !== '' && (
            <div>
              <p className=''>
                <span className='text-prime-blue-rich'>●</span>症例について
              </p>
              <div>
                <p className='bg-[#EBEBEB]'>よかった点</p>
                <p>{clinicalCase?.goodPoint}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>改善すべき点</p>
                <p>{clinicalCase?.dissatisfiedPoint}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>疾患名</p>
                <p className=''>{clinicalCase?.desease}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>専門分野の偏り</p>
                <p>{clinicalCase?.specialityBias}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>総合評価</p>
                <p>{clinicalCase?.comprehensiveEvaluation}</p>
              </div>
            </div>
          )}
          {atomosphere?.goodPoint !== '' && (
            <div>
              <p className=''>
                <span className='text-prime-blue-rich'>●</span>雰囲気について
              </p>
              <div>
                <p className='bg-[#EBEBEB]'>よかった点</p>
                <p>{atomosphere?.goodPoint}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>改善すべき点</p>
                <p>{atomosphere?.dissatisfiedPoint}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>先生たちのノリ</p>
                <p>{atomosphere?.teachers}</p>
              </div>
              <div>
                <p className='bg-[#EBEBEB]'>総合評価</p>
                <p>{atomosphere?.comprehensiveEvaluation}</p>
              </div>
            </div>
          )}
          {impression && (
            <div>
              <p className=''>
                <span className='text-prime-blue-rich'>●</span>
                実習で学んだこと・印象に残ったこと
              </p>
              <p>{impression}</p>
            </div>
          )}
          {prepare && (
            <div>
              <p className=''>
                <span className='text-prime-blue-rich'>●</span>
                実習前に準備するべきこと
              </p>
              <p>{prepare}</p>
            </div>
          )}
          {materials && (
            <div>
              <p className=''>
                <span className='text-prime-blue-rich'>●</span>
                実習前・実習中に読んだ実習前に
              </p>
              <p>{materials}</p>
            </div>
          )}
          {messageToStudents && (
            <div>
              <p className=''>
                <span className='text-prime-blue-rich'>●</span>
                後輩へのメッセージ
              </p>
              <p>{messageToStudents}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VoiceKanban
