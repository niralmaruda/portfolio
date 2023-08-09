import React, { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);

    const Increment = () => {setCount(count + 1);}
    const Decrement = () => {
        if(count > 0) setCount(count - 1);
    }
    return (
        <>
            <section className='bg-gray-900 border-red-500 m-3 rounded-lg'>
                <div className='text-white text-3xl p-3 font-bold bg-gray-950 rounded-lg'>Counter</div>
                <hr></hr>
                <div className=''>
                    <h1 className='text-teal-500 text-2xl font-semibold p-5'>{count}</h1> 
                </div>
                <div className='grid grid-cols-2 gap-3 pb-5 px-5'>
                    <button className='bg-cyan-500 rounded-md hover:cursor-pointer hover:bg-cyan-400 p-2 font-medium' onClick={Increment}>Increment</button>
                    <button className={`${count > 0 ? "bg-cyan-500 hover:bg-cyan-400 p-2" : "text-white bg-red-700 hover:bg-red-600"} font-medium rounded-md hover:cursor-pointer `} onClick={Decrement}>Decrement</button>
                </div>
            </section>
        </>
    )
}

export default Counter