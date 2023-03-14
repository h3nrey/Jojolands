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
    setLoginData({email, password})
  }
  return(
    <form onSubmit={HandleSubmit} className="">
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input 
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login;