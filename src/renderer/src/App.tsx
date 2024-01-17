import Editor from "./components/Editor"
import Preview from "./components/Preview"

function App(): JSX.Element {
  return (
    <div className="container">
      <Editor />
      <Preview />
    </div>
  )
}

export default App
