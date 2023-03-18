import { Stand, User } from "../App";
import {Triangle, Plus} from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom";

interface HomeProps{
  stands: Stand[] | undefined
  user: User | undefined
}

function Home({stands, user}: HomeProps){
  const navigate = useNavigate();

  function HandleAddStand() {
    if(user == undefined){
      alert("You need to be logged!!");
      return;
    }
    navigate("/createjojo")

  }
  return(
    <div className="container">
      <div className="section__header">
       <h2  className="section__title">Stands</h2>
        <button id="section__button" onClick={HandleAddStand}>
          <Plus weight="bold"/>
        </button>
      </div>

      <main>
        <ul>
          {stands?.map(stand => 
            <li key={stand._id} className="stand__container">
              <Triangle color="#73AE04" weight="fill" className="stand__icon"/>

              <div className="stand__content">
                <div className="stand__info">
                  <h3 className="stand__name">{stand.name}</h3>
                  <p className="stand__standmaster">{stand.standMaster}</p>
                </div>

                <div className="stand__stats">
                  <div className="stat start">
                    <p>pw</p>
                    <span>

                    {stand.stats.split("|")[0]}
                    </span>
                  </div>
                  <div className="stat">
                    <p>sp</p>
                    <span>

                    {stand.stats.split("|")[1]}
                    </span>
                  </div>
                  <div className="stat">
                    <p>rg</p>
                    <span>

                    {stand.stats.split("|")[2]}
                    </span>
                  </div>
                  <div className="stat">
                    <p>pr</p>
                    <span>

                    {stand.stats.split("|")[3]}
                    </span>
                  </div>
                  <div className="stat end">
                    <p>pt</p>
                    <span>

                    {stand.stats.split("|")[4]}
                    </span>
                  </div>
                </div>
              </div>
              
            </li>
          )}
        </ul>
      </main>
    </div>
  )
}

export default Home;