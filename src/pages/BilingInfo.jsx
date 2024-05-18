import Input from '../components/Input'
import SelectInput from '../components/SelectInput'

const BilingInfo = () => {
    const options = [
    {id: 1, name:'NIN'},
    {id: 2, name:'PassPort'}
  ]
  return (
    <>
      <form>
        <Input name='Name on Card' show={true} nameOfInput='Opara Linus Ahmed'/>
        <SelectInput name='State' show={true} nameOfInput='Enter Your Name' options={options } />
        <div className='flex mt-5'>
         <Input name='Local Government' show={true} nameOfInput='44960  44960  44960  44960' />
          <div className='w-[150px] ml-4'><Input name='Expiry date' show={true} nameOfInput='04 / 23' /></div>
          <div className='w-[80px] ml-4'><Input name='CVV' show={true} nameOfInput='923' /></div>
        </div>
      </form>
    </>
  )
}

export default BilingInfo