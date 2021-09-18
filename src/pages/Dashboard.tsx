import { useAuth } from '../lib/context'
import { useRequiredAuth } from '../lib/customHooks'

const DashBoardPage: React.FC = () => {
  const auth = useRequiredAuth()
  console.log('displayName', auth)
  if (!auth.odUser) return <div>Hello World</div>
  return (
    <div className='min-h-screen flex bg-gray-200'>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='text-center mt-24'>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            {`Welcome ${auth.odUser.displayName}!`}
          </h2>
          <p className='mt-2 text-center text-md text-gray-600'>
            {`You are logged in with ${auth.odUser.email}`}
          </p>
        </div>
      </div>
      <button
        onClick={() => auth.logOut()}
        className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
      >
        Sign out
      </button>
    </div>
  )
}
export default DashBoardPage
