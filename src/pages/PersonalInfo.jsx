import Input from '../components/Input'
import SelectInput from '../components/SelectInput'
const PersonalInfo = () => {
  const options = [
    {id: 1, name:'Lagos'}
  ]
  return (
    <>
      <form>
        <Input name='Name' nameOfInput='Opara Linus Ahmed'/>
        <Input name='Email Address' show={true} email={true} nameOfInput='OparaLinusAhmedgmail.com'/>
        <Input name='Address 1' nameOfInput='The address of the user goes here'/>
        <Input name='Address 2' nameOfInput='and here'/>
        <div className='flex mt-5'>
          <Input name='Local Government' nameOfInput='Surulere' />
          <div className='w-[200px] ml-4'><SelectInput name='State' nameOfInput='Enter Your Name' options={options } /></div>
        </div>
      </form>
    </>
  )
}

export default PersonalInfo