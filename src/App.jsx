import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <div className="h-screen w-full bg-linear-to-br from-amber-50 via-rose-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
            <div className="main-container w-full max-w-5xl"></div>
        </div>
      </>
  )
}

export default App
