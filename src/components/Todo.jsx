import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { LuTrash } from 'react-icons/lu'
import { TiTick } from 'react-icons/ti'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')
  const [filter, setFilter] = useState('all')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), task: todo, completed: false }])
    console.log(todos)
  }

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex justify-center bg-stone-50 h-screen">
      <div className="mt-25">
        <h1 className="text-3xl text-center font-bold text-blue-600 ">
          {' '}
          Todo App
        </h1>

        <form className="flex mt-5" onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            className="outline-1 outline-gray-300 rounded-l-md shadow-sm py-3 px-2 w-100 placeholder:text-gray-300 bg-white focus:outline-2 focus:outline-blue-600"
            placeholder="Add a new task..."
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-4 text-white bg-blue-600 rounded-r-md cursor-pointer hover:bg-blue-700"
          >
            <FaPlus />
          </button>
        </form>
        {filteredTodos.map((todo, index) => (
          <div
            key={index}
            className="flex justify-between group bg-white rounded-md py-4 mt-5 p-4 shadow-sm hover:shadow-md transition duration-150 ease-in-out "
          >
            {todo.completed ? (
              <>
                <div className="flex">
                  <span
                    onClick={() => toggleCompleted(todo.id)}
                    className="bg-blue-600 text-white rounded-full w-5 h-5 mt-0.5 mr-2 cursor-pointer"
                  >
                    <TiTick className="mt-0.5 ml-0.5" />
                  </span>
                  <span className="line-through text-gray-400">
                    {' '}
                    {todo.task}
                  </span>
                </div>

                <div
                  onClick={() => deleteTodo(todo.id)}
                  className="mt-1 text-gray-400 invisible group-hover:visible cursor-pointer"
                >
                  <LuTrash className="hover:text-red-600" />
                </div>
              </>
            ) : (
              <>
                <div className="flex">
                  <span
                    onClick={() => toggleCompleted(todo.id)}
                    className="bg-white border border-gray-300 rounded-full w-5 h-5 mt-0.5 mr-2 cursor-pointer"
                  ></span>
                  <span> {todo.task}</span>
                </div>

                <div
                  onClick={() => deleteTodo(todo.id)}
                  className="mt-1 text-gray-400 invisible group-hover:visible cursor-pointer"
                >
                  <LuTrash className="hover:text-red-600" />
                </div>
              </>
            )}
          </div>
        ))}

        <div className="flex justify-between text-gray-500 text-sm mt-9">
          <div className="flex">
            <span className="mr-1">
              {todos.filter((todo) => !todo.completed).length}
            </span>
            <span>item(s) left</span>
          </div>

          <div className="flex">
            <span
              className={`mr-1 px-3 py-2 rounded-sm cursor-pointer ${
                filter === 'all' ? 'bg-blue-200 text-blue-600' : ''
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </span>
            <span
              className={`mr-1 px-3 py-2 rounded-sm cursor-pointer ${
                filter === 'active' ? 'bg-blue-200 text-blue-600' : ''
              }`}
              onClick={() => setFilter('active')}
            >
              Active
            </span>
            <span
              className={`mr-1 px-3 py-2 rounded-sm cursor-pointer ${
                filter === 'completed' ? 'bg-blue-200 text-blue-600' : ''
              }`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
