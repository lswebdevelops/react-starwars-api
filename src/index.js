import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useSearchParams, Link } from "react-router-dom";
import './index.css'
const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" }
]

function HomePage() {

  const [searchParams , setSearchParams ] = useSearchParams()
  const typeFilter = searchParams.get('type');
  // console.log(typeFilter);
  // console.log(searchParams);  // http://localhost:3000/characters?type=syth >> it console.logs:  //URLSearchParams {size: 1}
  // console.log(searchParams.toString());// http://localhost:3000/characters?type=syth  >> it console.logs: "type=syth"
  //console.log(searchParams.get('type'));// http://localhost:3000/characters?type=syth  >> it console.logs: "syth"

  const displayedCharacters = typeFilter
  ? swCharacters.filter(char => char.type.toLowerCase() === typeFilter)
  : swCharacters

  const charEls = displayedCharacters

    .map(char => (
      <div key={char.name}>
        <h3
          style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
        >
          Name: {char.name}
        </h3>
        <p>Type: {char.type}</p>
        <hr />
      </div>
    ))
  

  return (
    <main>
      <h2>Star Wars</h2>
      <button onClick={() => setSearchParams({type: "jedi"})}>Jedi</button>
      <button onClick={() => setSearchParams({type: "sith"})}>Sith</button>
      <button onClick={() => setSearchParams({})}>Clear</button>

      {/* <Link className="filter-van-buttons" to="?type=jedi">Jedi</Link>
      <Link className="filter-van-buttons" to="?type=sith">Sith</Link>
      <Link className="filter-van-buttons" to="">All</Link> */}
      {charEls}
    </main>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)