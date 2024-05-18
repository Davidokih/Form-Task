import { useState } from 'react'
import PersonalInfo from './pages/PersonalInfo'
import BilingInfo from './pages/BilingInfo'
import CompletePayment from './pages/CompletePayment'
import Completed from './pages/Completed'

const ChangePage = (currentIndex) => {
  switch (currentIndex) {
    case 0:
      return <PersonalInfo />
      
    case 1:
      return <BilingInfo />
    case 2:
      return <CompletePayment />
    default:
      break;
  }
}
function App() {

  const [ currentIndex, setCurrentIndex ] = useState(0)
  const nextPage = () => {
    setCurrentIndex(()=> currentIndex + 1)
  }
  return (
    <>
      <div className="flex items-center flex-col justify-center h-dvh bg-[url('./assets/background.svg')] bg-no-repeat bg-cover">
        {currentIndex === 3 ? <div><Completed /></div> : <div>
          <div className='w-[450px] border-b-[1px] max-[380px]:w-full max-[460px]:w-[350px] border-b-black pb-4'>
            <div className='font-bold text-xl'>Complete your Purchase</div>
            <div className='mt-5 flex justify-between items-center font-semibold text-md'>
              <div className={`cursor-pointer ${currentIndex === 0 ? 'relative before:w-[100px] before:h-2 before:bg-amber-500 text-amber-500 before:absolute before:top-9 before:rounded-md':null}`}>Personal Info</div>
              <div className={`cursor-pointer ${currentIndex === 1 ? 'relative before:w-full before:h-2 before:bg-amber-500 text-amber-500 before:absolute before:top-9 before:rounded-md':null}`}>Biling Info</div>
              <div className={`cursor-pointer ${currentIndex === 2 ? 'relative before:w-full before:h-2 before:bg-amber-500 text-amber-500 before:absolute before:top-9 before:rounded-md':null}`}>Confirm Payment</div>
            </div>
        </div>
          <div className='mt-10'>
            {ChangePage(currentIndex)}
          </div>
          <div className='flex items-center mt-10'>
            <button className='bg-amber-500 py-2 px-16 rounded-md text-white text-sm font-medium' onClick={ nextPage }>{ currentIndex === 2 ? 'Pay' : 'Next' }</button>
            <div className='text-sm font-medium ml-10 cursor-pointer'>Cancel Payment</div>
          </div>
        </div>}
      </div>
    </>
  )
}

export default App
