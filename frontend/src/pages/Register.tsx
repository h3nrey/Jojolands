import { useState, useEffect } from "react"
interface RegisterProps{
  setRegisterProps: (login: {
    name: string
    email: string, 
    password: string
  }) => void
}

function Register({setRegisterProps}: RegisterProps){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(password == password2) {
      setRegisterProps({name, email, password})
    } else {
      alert("Password not Match!");
    }
  }
  return(
    <form onSubmit={HandleSubmit}>
      <input 
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="nickname"
      />
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
      <input 
        type="text"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        placeholder="confirm password"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Register;