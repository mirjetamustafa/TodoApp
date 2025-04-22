import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { LuTrash } from 'react-icons/lu'
import { TiTick } from 'react-icons/ti'

const Todo = () => {
  const [todo, setTodo] = useState(false)
  return (
    <div className="flex justify-center bg-stone-50 h-screen">
      <div className="mt-25">
        <h1 className="text-3xl text-center font-bold text-blue-600 ">
          {' '}
          Todo App
        </h1>

        <form className="flex mt-5">
          <input
            type="text"
            className="outline-1 outline-gray-300 rounded-l-md shadow-sm py-3 px-2 w-100 placeholder:text-gray-300 bg-white focus:outline-2 focus:outline-blue-600"
            placeholder="Add a new task..."
          />
          <button className="px-4 py-4 text-white bg-blue-600 rounded-r-md cursor-pointer hover:bg-blue-700">
            <FaPlus />
          </button>
        </form>
        <div className="flex justify-between group bg-white rounded-md py-4 mt-5 p-4 shadow-sm hover:shadow-md transition duration-150 ease-in-out ">
          {todo ? (
            <>
              <div className="flex">
                <span className="bg-white border border-gray-300 rounded-full w-5 h-5 mt-0.5 mr-2 cursor-pointer"></span>
                <span>Hello</span>
              </div>

              <div className="mt-1 text-gray-400 invisible group-hover:visible cursor-pointer">
                <LuTrash className="hover:text-red-600" />
              </div>
            </>
          ) : (
            <>
              <div className="flex">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 mt-0.5 mr-2 cursor-pointer">
                  <TiTick className="ml-0.5 mt-0.5" />
                </span>
                <span className="line-through">Hello</span>
              </div>

              <div className="mt-1 text-gray-400 invisible group-hover:visible cursor-pointer">
                <LuTrash className="hover:text-red-600" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo
