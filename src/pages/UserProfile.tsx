import clsx from 'clsx'
import { updateDoc } from 'firebase/firestore'
import { useState, VFC } from 'react'
import Input from '../components/forms/formAtoms/Input'
import InputDouble from '../components/forms/formAtoms/InputDouble'
import MultiSelector from '../components/forms/formAtoms/MultiSelector'
import SingleSelector from '../components/forms/formAtoms/SingleSelector'
import SubmitButton from '../components/forms/formAtoms/SubmitButton'
import Form from '../components/forms/Form'
import Footer from '../components/UIAtoms/Footer'
import Header from '../components/UIAtoms/Header'
import { useRequiredPermission } from '../lib/customHooks/useRequiredPermission'
import NameUpdateForm from '../components/forms/updateForms/NameUpdateForm'
import RubyUpdateForm from '../components/forms/updateForms/RubyUpdateForm'
import GenderUpdateForm from '../components/forms/updateForms/GenderUpdateForm'
import EmailUpdateForm from '../components/forms/updateForms/EmailUpdateForm'
import { user } from 'firebase-functions/v1/auth'
import WorkplaceWishForUpdateForm from '../components/forms/updateForms/WorkplaceWishForUpdataForm'
import DepartmentWishForUpdateForm from '../components/forms/updateForms/DepartmentWishForUpdateForm'
import GradeUpdateForm from '../components/forms/updateForms/GradeUpdateForm'
import UniversityUpdateForm from '../components/forms/updateForms/UniversityUpdateForm'

const UserProfile: React.VFC = () => {
  const { auth } = useRequiredPermission()
  const userData = auth.odUserData
  console.log('userdata', userData)
  let userDataArray
  if ('grade' in userData) {
    userDataArray = [
      { name: 'name', title: 'お名前', data: userData.name },
      { name: 'ruby', title: 'ふりがな', data: userData.ruby },
      { name: 'gender', title: '性別', data: userData.gender },
      {
        name: 'email',
        title: 'メールアドレス',
        data: userData.email,
      },
      {
        name: 'departmentWishFor',
        title: '希望診療科',
        data: userData.departmentWishFor?.reduce((cur, acc) => cur + ' ' + acc),
      },
      {
        name: 'workplaceWishFor',
        title: '希望就職地',
        data: userData.workplaceWishFor?.reduce((cur, acc) => cur + ' ' + acc),
      },
      {
        name: 'university',
        title: '大学',
        data: userData.university,
      },
    ]
  } else {
    userDataArray = [
      { name: 'name', title: 'お名前', data: userData.name },
      { name: 'ruby', title: 'ふりがな', data: userData.ruby },
      { name: 'gender', title: '性別', data: userData.gender },
      { name: 'email', title: 'メールアドレス', data: userData.email },
      { name: 'workplace', title: '現在のお勤め先', data: userData.workplace },
      {
        name: 'departmentWishFor',
        title: '希望診療科',
        data: userData.departmentWishFor?.reduce((cur, acc) => cur + ' ' + acc),
      },
      {
        name: 'workplaceWishFor',
        title: '希望就職地',
        data: userData.workplaceWishFor?.reduce((cur, acc) => cur + ' ' + acc),
      },
    ]
  }
  return (
    <>
      <Header />
      <div className='flex flex-col items-center ov-md:pt-20 bg-prime-blue-muted'>
        <main className='w-11/12 sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] '>
          <h1 className='text-2xl text-prime-blue-rich font-semibold mb-6'>
            ユーザー情報
          </h1>
          {'grade' in userData ? (
            <>
              <NameUpdateForm data={userData.name} />
              <RubyUpdateForm data={userData.ruby} />
              <GenderUpdateForm data={userData.gender} />
              <EmailUpdateForm data={userData.email} />
              <WorkplaceWishForUpdateForm data={userData.workplaceWishFor} />
              <DepartmentWishForUpdateForm data={userData.departmentWishFor} />
              <GradeUpdateForm data={userData.grade} />
              <UniversityUpdateForm data={userData.university} />
            </>
          ) : (
            <>
              <NameUpdateForm data={userData.name} />
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile

const ProfileLineForm: VFC<{ children: string; title: string; name: string }> =
  ({ children, title, name }) => {
    console.log(children, title)
    const onSubmit = (data) => {
      console.log('onsubmitだよ', data)
    }
    if (name === 'name') {
    } else if (name === 'ruby') {
    } else if (name === 'gender') {
    } else if (name === 'email') {
    } else if (name === 'workplace') {
      return (
        <Form
          style='flex flex-row h-[64px]'
          formName='workplaceEditor'
          onSubmit={onSubmit}
        >
          <Input
            name='workplace'
            type='text'
            placeholder={children}
            style={{ wholeStyle: 'block w-full', inputStyle: 'block w-full' }}
            subTitle='※正式名称をご入力ください'
          />
          {/* <CompletedButton /> */}
        </Form>
      )
    } else if (name === 'workplaceWishFor') {
    } else if (name === 'departmentWishFor') {
    } else if (name === 'university') {
      return (
        <Form
          formName='universityEditor'
          onSubmit={onSubmit}
          style='flex flex-row h-[64px]'
        >
          <SingleSelector
            {...{
              placeholder: children,
              name: 'university',
              isSearchable: true,
              options: [
                '順天堂大学',
                '筑波大学',
                '自治医科大学',
                '東京大学',
                '群馬大学',
                '杏林大学',
              ],
            }}
          />
          {/* <CompletedButton /> */}
        </Form>
      )
    } else {
      return <div>空っぽ</div>
    }
  }
