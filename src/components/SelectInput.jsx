import PropTypes from 'prop-types'

const SelectInput = ({ nameOfInput, name, options,show }) => {
    // console.log(options)
  return (
    <div className="w-[100%] mb-4">
      <div className='mb-2'> <div className="font-bold font-poppings">{ name } { show && <sup className='text-red-500'>*</sup>}</div></div>
          <select className='border-gray-400 px-3 rounded border-[1px] outline-none w-full h-9 font-normal' placeholder={ nameOfInput }>
              { options?.map((props, index) => (
                  <option key={index} value={props.name}>{props?.name }</option>
              ))}
      </select>
    </div>
  )
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  nameOfInput: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  show: PropTypes.bool
}
export default SelectInput