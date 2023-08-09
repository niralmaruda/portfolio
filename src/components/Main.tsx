import React from 'react'
import Counter from './Counter'

function Main() {
  return (
    <React.Fragment>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 text-center'>
        <Counter />
        <Counter />
        <Counter />
      </div>
    </React.Fragment>
  )
}

export default Main