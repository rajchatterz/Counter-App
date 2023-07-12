import React,{useState} from 'react'
// import { ReactDOM } from 'react'

const App = () => {
    const [count,setCount]=useState(0)

    const isincrement = ()=>{
        setCount(count+1)
    }
    const isdecrement = ()=>{
        setCount(count-1)
    }
  return (
    <div className='flex flex-col justify-center items-center text-center bg-purple-400 h-screen'>
        <div className='bg-red-400 w-96 h-96 flex flex-col justify-evenly  items-center'>
        <h2 className='text-white text-3xl font-black'>Counter App</h2>
        <p className='text-5xl text-white font-black'>{count}</p>
        <div className='flex gap-7'>
        <button className=' bg-white font-medium p-5 rounded-lg' onClick={isincrement}>Increment</button>
        <button className=' bg-white font-medium p-5 rounded-lg' onClick={isdecrement}>Decrement</button>
        </div>
        </div>
    </div>
  )
}

export default App