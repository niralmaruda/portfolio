import React from 'react'
import Counter from './Counter'
import Calculator from './Calculator'

function Main() {
  return (
    <React.Fragment>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 text-center'>
        <Calculator />
        <Counter />
        <Counter />
      </div>
    </React.Fragment>
  )
}

export default Main