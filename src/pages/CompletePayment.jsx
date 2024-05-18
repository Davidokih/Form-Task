
const CompletePayment = () => {
  return (
    <>
        <div className="rounded-md bg-white font-medium text-sm pb-5 shadow">
              <div className="bg-blue-600 text-white flex justify-between px-12 py-3 rounded-t-md">
                  <div>Item Name</div>
                  <div>₦ Price</div>
              </div>          
              <div className="text-indigo-950 mt-7">
                <div className="flex justify-between px-12 py-3">
                  <div className='mr-3'>Data science and usability</div>
                  <div>50,000.00</div>
                  </div>  
                  <div className="flex justify-between px-12 py-3">
                  <div>Shipping</div>
                  <div>0.00</div>
                  </div>  
                  <div className="flex justify-between h-[1px] mx-6 my-5 bg-black"></div>
                  <div className="flex justify-between px-4 py-3 mx-8 border-[1px] border-indigo-950">
                      <div>Total</div>
                      {/* <input /> */}
                  <div>50,000.00</div>
              </div>  
              </div>          
        </div>
    </>
  )
}

export default CompletePayment