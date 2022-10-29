import "./App.css";
import Home from "./components/Profile";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <ul className="App-header">
              <li>
                <Link to="/" className="profile-link" >Profile</Link>
              </li>
              <li>
                <Link to="/task" className="task">Task</Link>
              </li>
            </ul>
    <div className="todo-app">
      <h1 className="header">Quản lý Task</h1>
      <div className="App">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/task' element={< TodoList />}></Route>
          </Routes>
          </div>
    </div>
    </Router>
           
  );
}

export default App;
