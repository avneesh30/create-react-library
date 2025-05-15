import { ExampleComponent } from '{{name}}'
import '{{name}}/dist/index.css'

const App = () => {
  return (
    <div className="app">
      <h1>{'{{name}}'} Demo</h1>
      <ExampleComponent text="Create React Library Example 😄" />
    </div>
  )
}

export default App
