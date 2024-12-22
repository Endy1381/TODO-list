import { useState, useRef, useEffect } from 'react';
import './App.css';
import Logo from './assets/logo.png';
import log from 'eslint-plugin-react/lib/util/log.js';

function App() {

    const storedTodo = JSON.parse(localStorage.getItem('todos')) || [
        {
            id: 1,
            name: "initial",
        }
    ];
    const [todos, setTodos] = useState(storedTodo);

    const input = useRef(null);
    const lastTodo = todos.at(-1);
    console.log(lastTodo);

    function handleClick(e) {
        e.preventDefault();
        let newTodo = {
            id: lastTodo ? lastTodo.id + 1 : 1,
            name: input.current.value,
            completed: false
        };
        setTodos([...todos, newTodo]);
        input.current.value = '';
    }

    function handleDelete(e, id) {
        e.preventDefault();
        setTodos(todos.filter(todos => todos.id !== id));
    }

    function handleReset() {
        let restedTodo = [
            {
                id: 1,
                name: "initial",
                completed: false
            }
        ];
        setTodos(restedTodo);
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <>
            {/*  input  */}
            <main
                className=" px-10 py-1 pt-5 rounded-3xl bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-10">
                <h1 className="text-3xl  mb-8 text-center">
                    insert your TODO here
                </h1>
                <section className="flex justify-center items-center">
                    <input type="text" ref={input} className=" px-5 py-3 bg-gray-200"/>
                    <button className=" mx-1 text-white px-5 py-3 bg-blue-900" onClick={handleClick}>+</button>
                    <button className=" text-white px-5 py-3  bg-indigo-800" onClick={handleReset}>Reset</button>
                </section>
                <section className="flex items-center">
                    <ul>
                        {todos.map(todo => {
                            return (
                                <div className="flex items-center justify-between text-2xl " key={todo.id}>

                                        <li className=" pr-5 ml-2 py-3 mr-40">{todo.name}</li> :

                                    <button className="ml-5 text-white px-5 py-3 bg-pink-500" onClick={(e) => handleDelete(e, todo.id)}>-</button>
                                </div>
                            );
                        })}
                    </ul>
                </section>
            </main>
            <footer className="fixed bottom-0 right-0 px-6 mt-96">
                <img src={Logo} alt="" className="w-10"/>
            </footer>
        </>
    );
}

export default App;
