import { useState } from 'react'
import './App.css'
import Logo from './assets/logo.png'

function App() {
  const [todo, setTodo] = useState(0)

  return (
    <>
      <header className="flex items-center justify-between px-6">
          <img src={Logo} alt="" className="w-24"/>
          <nav className="flex items-center list-none">
              <li className="text-2xl mx-2">Todo</li>
              <li className="text-2xl mx-2">About</li>
          </nav>
      </header>

    {/*  input  */}
        <section>

        </section>
    </>
  )
}

export default App
