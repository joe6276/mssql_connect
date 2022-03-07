import Register from "./components/Register";
import User from "./components/User"
import UpdateUser from "./components/UpdateUser";
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
function App() {


  return (
    <div className="App">
  <ToastContainer/>
  <Routes>
  <Route path="/" element={<Register />}></Route>
  <Route path="/users" element={<User/>}></Route>
  <Route path="/update/:id" element={<UpdateUser/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
