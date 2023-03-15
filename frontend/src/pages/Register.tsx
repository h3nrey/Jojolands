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
    <section className="form__container">
      <h2 className="form__legend">Register</h2>

      <form onSubmit={HandleSubmit} id="register__form">
        <fieldset>
          <div className="input__container">
            <label htmlFor="name">Nickname</label>
            <input 
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="nickname"
              className="register__input"
              id="name"
            />
          </div>
          
          <div className="input__container">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="register__input"
            />
          </div>
        </fieldset>
        
        <fieldset>
          <div className="input__container">
           <label htmlFor="password">Password</label>
            <input 
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="register__input"
            />
          </div>
          
          <div className="input__container">
            <label htmlFor="password2">Confirm password</label>
            <input 
              type="text"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="confirm password"
              className="register__input"
            />
          </div>
        </fieldset>
        
        <button type="submit" className="submit">SUBMIT</button>
      </form>
    </section>
    
  )
}

export default Register;