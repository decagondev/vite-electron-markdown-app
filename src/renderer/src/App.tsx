import { useState, useCallback } from "react"
import Editor from "./components/Editor"
import Preview from "./components/Preview"
import './app.css'
function App(): JSX.Element {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
