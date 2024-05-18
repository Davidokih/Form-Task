import PropTypes from 'prop-types'

const Input = ({nameOfInput,name,show,email}) => {
  return (
    <div className="w-[100%] mb-4">
      <div className='mb-2'> <div className="font-bold font-poppings">{ name } { show && <sup className='text-red-500'>*</sup>}</div>
      {email && <div className='text-sm text-gray-400 font-medium'>The purchase reciept would be sent to this address</div>}</div>
      <input className='border-gray-400 px-3 rounded border-[1px] outline-none w-full h-9 font-normal' placeholder={ nameOfInput }/>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  nameOfInput: PropTypes.string.isRequired,
  show: PropTypes.bool,
  email: PropTypes.bool
}
export default Input