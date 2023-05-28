import { useEffect } from 'react'
import fetchUser from './lib/fetchUser'
import FormInput from './components/FormInput'

function App() {

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className='text-xl bg-gray-300 py-5'>
      <FormInput />
    </div>
  )
}

export default App
