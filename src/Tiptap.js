import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'

const Tiptap = ({ content }) => {
  const [text, setText] = useState('Hello world!')

  function handleChange() {
    console.log('Hello world!')
  }

  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    autofocus: true,
    onUpdate({ editor }) {
      setText(editor.getText())
      const currText = editor.getText().split('')
      console.log(currText)
    },
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
