import { useState, useEffect } from "react"
interface RegisterProps{
  setStandProps: (stand: {
    name: string
    standMaster: string, 
    stats: string
  }) => void
}

function statsAreNumbers(values: string[]) {
  let areNumbers = true;

  for(let value of values){
    if(/^-?\d+$/.test(value) == false) areNumbers = false;
  }

  return areNumbers;
}

function Create({setStandProps}: RegisterProps){
  const [standName, setStandName] = useState("");
  const [standMaster, setStandMaster] = useState("");
  const [stats, setStats] = useState({power: "", speed:"", range: "", precision: "", potential: ""});

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let statsValues = Object.values(stats);

    if(statsValues.includes("")){
      alert("Some field is empty!!");
      return;
    }

    if(statsAreNumbers(statsValues) == false) {
      alert("all stats fields must be numbers!!");
      return;
    }

    const stat = statsValues.join("|");
    setStandProps({name: standName, standMaster, stats: stat});
  }
  return(
    <section className="form__container">
      <h2 className="form__legend">Register</h2>

      <form onSubmit={HandleSubmit} id="register__form">
        <fieldset>
          <div className="input__container">
            <label htmlFor="name">Stand name</label>
            <input 
              type="text"
              value={standName}
              onChange={(e) => setStandName(e.target.value)}
              placeholder="Ex: Rain november"
              className="register__input"
              id="standname"
            />
          </div>
          
          <div className="input__container">
            <label htmlFor="email">Stand master</label>
            <input 
              type="text"
              value={standMaster}
              onChange={(e) => setStandMaster(e.target.value)}
              placeholder="Ex: Jodio Joestar"
              className="register__input"
            />
          </div>
        </fieldset>
        
        <fieldset className="stats__fieldset">
          <div className="input__container">
           <label htmlFor="password">Power</label>
            <input 
              type="text"
              value={stats.power}
              onChange={(e) => setStats(prevState => {
                return {...prevState, power: e.target.value}
              })}
              placeholder="Ex: 65"
              className="stats__input"
            />
          </div>
          
          <div className="input__container">
            <label htmlFor="password2">Speed</label>
            <input 
              type="text"
              value={stats.speed}
              onChange={(e) => setStats(prevState => {
                return {...prevState, speed: e.target.value}
              })}
              placeholder="Ex: 80"
              className="stats__input"
            />
          </div>
          <div className="input__container">
            <label htmlFor="password2">Range</label>
            <input 
              type="text"
              value={stats.range}
              onChange={(e) => setStats(prevState => {
                return {...prevState, range: e.target.value}
              })}
              placeholder="Ex: 80"
              className="stats__input"
            />
          </div>
          <div className="input__container">
            <label htmlFor="password2">Precision</label>
            <input 
              type="text"
              value={stats.precision}
              onChange={(e) => setStats(prevState => {
                return {...prevState, precision: e.target.value}
              })}
              placeholder="Ex: 80"
              className="stats__input"
            />
          </div>
          <div className="input__container">
            <label htmlFor="password2">Potential</label>
            <input 
              type="text"
              value={stats.potential}
              onChange={(e) => setStats(prevState => {
                return {...prevState, potential: e.target.value}
              })}
              placeholder="Ex: 80"
              className="stats__input"
            />
          </div>
        </fieldset>
        
        <button type="submit" className="submit">SUBMIT</button>
      </form>
    </section>
    
  )
}

export default Create;