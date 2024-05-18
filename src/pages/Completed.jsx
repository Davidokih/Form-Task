import { FaCheck } from "react-icons/fa";
const Completed = () => {
  return (
    <>
        <div className="rounded-md bg-white font-medium text-sm mw-[350px] flex justify-center items-center shadow">
              <div className="text-indigo-950 mt-7 flex flex-col items-center mb-7 w-[75%]">
                  <div className="flex justify-center text-xl rounded-full items-center shadow w-10 h-10 mb-5 text-green-400"><FaCheck /></div>
                  <div>
                      <h1 className="text-2xl font-bold mb-4">Purchase Completed</h1>
                  <div className="text-sm font-medium">Please check email for other concerning this transaction</div>
                  <div className="mt-8 text-orange-400 font-semibold underline">Return Home</div>
                  </div>
              </div>          
        </div>
    </>
  )
}

export default Completed