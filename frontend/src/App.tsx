import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Header from './components/Header';

interface User {
  name: string,
  email: String,
}

export interface Stand {
  _id: string
  name: String,
  standMaster: String,
  type: String,
  stats: String,
}

function App() {
  // Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // User
  const [user, setUser] = useState<User>();
  const [logged, setLogged] = useState(false);

  // stands
  const [stands, setStands] = useState<Stand[]>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    // Quer dizer que o token já está funcionando
    if(token){
      setLogged(true);
    }
  }, [])

  useEffect(() => {
    getMe();
    
  }, [logged])

  const getMe = async() => {
    if(logged) {
      const response = await axios.get("http://localhost:5000/api/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setUser(response.data);
    }
  }


  useEffect(() => {
    getStands()
    // console.log(goals);
  },[])


  const getStands = async() => {
    const response = await axios.get("http://localhost:5000/api/stands/all")
    setStands(response.data);
  }

  const HandleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  const HandleLogin = async(loginData: {}) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", loginData);
      const token = await response.data.token;
      console.log(response);
      setUser(response.data);

      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  }

  const HandleRegister = async(registerData: {}) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users", registerData);
      const token = await response.data.token;
      console.log(response);
      setUser(response.data);


      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Router>
      <div className="app">
        {/* <header>
          <Link to="/">
            <h2 id='title'>JOJOLAND</h2>

          </Link>

          <p>{user?.name}</p>

          <div className='navigation'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <button 
              onClick={HandleLogout}
            >
              sair
            </button>
          </div>

        </header> */}

        <Header HandleLogout={HandleLogout} name={user?.name} />

        <Routes>
          <Route path="/" element={<Home stands={stands} />}/>
          <Route path="/login" element={<Login setLoginData={HandleLogin} />}/>
          <Route path="/register" element={<Register setRegisterProps={HandleRegister} />}/>
        </Routes>
     </div>
    </Router>
    
  )
}

export default App
