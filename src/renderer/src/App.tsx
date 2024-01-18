import { useState, useCallback } from "react"
import Editor from "./components/Editor"
import Preview from "./components/Preview"

function App(): JSX.Element {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="container">
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview />
    </div>
  )
}

export default App
