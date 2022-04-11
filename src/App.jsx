import Articles from "./components/article"
import User from "./components/user"


function App() {

  return (
    <div className="App">
     <header><h1>React skeleton</h1></header>
     <div className="content">
       <Articles />
       <User />
     </div>
    </div>
  )
}

export default App
