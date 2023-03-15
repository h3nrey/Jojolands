import { useState, useEffect } from "react"

interface LoginProps{
  setLoginData: (login: {
    email: string, 
    password: string
  }) => void
}

function Login({setLoginData}: LoginProps){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(!email || !password){
      alert("Input fields are empty!!s");
      return;
    }
    setLoginData({email, password})
  }
  return(
    <section className="form__container">
      <h2 className="form__legend">Login</h2>
      <form onSubmit={HandleSubmit} className="">

        <div className="input__container">
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        
        <div className="input__container">
          <label htmlFor="email">Email</label>
          <input 
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        
        <button type="submit" className="submit">SUBMIT</button>
      </form>
    </section>
  )
}

export default Login;