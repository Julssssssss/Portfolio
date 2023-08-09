import React from 'react'

const sample = () => {
  return (
    <>
        <div>
            <h1>Hello</h1>
            <form action='/comment' method='post'>
                <input type='text' name='name' id='name'/>
                <input type='text' name='age' id='age'/>
                <button>submit</button>
            </form>

        </div>
    </>
  )
}

export default sample