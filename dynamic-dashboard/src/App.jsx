import { useState } from 'react'
import DynamicDashboard from './components/DynamicDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <DynamicDashboard />

      </div>
    </>
  )
}

export default App
