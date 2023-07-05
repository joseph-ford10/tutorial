import React from 'react'
import { useState } from 'react'
import Tiptap from './Tiptap'

const TestComponent = () => {
  const [text, setText] = useState('')
  const [html, setHTML] = useState('')

  function handleTextChange(event) {
    setText(event.target.value)
    setHTML(event.target.innerHTML)
    if (event.key === 'Enter') {
      setText((text) => text + '01')
    }
    console.log(html)
  }

  function handleSubmit() {
    const myArray = html.toString().split('\n')
    console.log(myArray)
  }

  // function handleKeyDown(e) {
  //   if (e.key === 'Enter') {
  //     setText((text) => text + '01')
  //   }
  // }

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default TestComponent
