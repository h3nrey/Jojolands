import { Stand } from "../App";

function Home({stands}: {stands: Stand[] | undefined}){
  return(
    <div className="container">
      <h2>Jojo list</h2>

      <main>
        <ul>
          {stands?.map(stand => 
            <li key={stand._id}>
              <h3>{stand.name}</h3>
            </li>
          )}
        </ul>
      </main>
    </div>
  )
}

export default Home;