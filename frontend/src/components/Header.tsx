import { Link } from "react-router-dom"
import Logo from "../assets/Logo.svg"
interface HeaderProps{
  HandleLogout: () => void,
   name: string | undefined
}

function Header(props: HeaderProps){
  return(
    <header>
          <Link to="/">
            <div className="logo__wrapper">
              <h2 className="logo__text">JOJOLANDS</h2>
              <img src={Logo} alt="" className="logo__img"/>
            </div>

          </Link>

          <nav>
            { props.name ? 
              <div className="logged__container">
                <h3>{props.name}</h3>
                <button onClick={props.HandleLogout}>logout</button>
              </div>
            :
            <div className="auth__container">
              <Link to="/login" className="link">Login</Link>
              <Link to="/register" className="link">Register</Link>
            </div>
              
          }
          </nav>

    </header>
  )
}

export default Header;