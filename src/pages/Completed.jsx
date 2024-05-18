import { FaCheck } from "react-icons/fa";
const Completed = () => {
  return (
    <>
        <div className="rounded-md bg-white font-medium text-sm mw-[350px] flex justify-center items-center shadow">
              <div className="text-indigo-950 mt-7 mb-7 w-[75%]">
                  <div><FaCheck /></div>
                  <h1 className="text-2xl font-bold mb-4">Purchase Completed</h1>
                  <div className="text-sm font-medium">Please check email for other concerning this transaction</div>
                  <div className="mt-8 text-orange-400 font-semibold underline">Return Home</div>
              </div>          
        </div>
    </>
  )
}

export default Completed