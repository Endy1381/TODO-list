import { useState, useRef, useEffect } from 'react'
import './App.css'
import Logo from './assets/logo.png'
import log from "eslint-plugin-react/lib/util/log.js";

function App() {
  const [todos, setTodos] = useState([
      {
          id: 1,
          name: "bruhh",
          completed: false
      }
  ])
    const input = useRef(null)
    const lastTodo = todos.at(-1)
    console.log(lastTodo)
    function handleClick(e) {
      e.preventDefault()
      let newTodo = {
          id: lastTodo['id'] + 1,
          name: input.current.value,
          completed: false
      }
      setTodos([...todos,newTodo])
    }

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
        <h1 className="text-3xl  mb-8 text-center">
            insert your TODO here
        </h1>
        <section className="flex justify-center items-center">
            <input type="text" ref={input} className="border px-5 py-3"/>
            <button className="mx-5 text-white px-5 py-3 bg-emerald-800" onClick={handleClick}>Add</button>
        </section>
        <section className="flex justify-center items-center">
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>{todo.name}, {todo.id}</li>
                    )
                })}
            </ul>
        </section>
    </>
  )
}

export default App
