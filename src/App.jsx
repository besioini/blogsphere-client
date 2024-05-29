import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'

function App() {
  return (
    <Provider store={store}> 
      <Router>
          <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
    </Provider>
  )
}

export default App
