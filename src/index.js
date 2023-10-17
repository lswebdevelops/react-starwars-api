import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" }
]

function HomePage() {

  const [searchParams , setSearchParams ] = useSearchParams()
  const typeFilter = searchParams.get('type');
  // console.log(searchParams);  // http://localhost:3000/characters?type=syth >> it console.logs:  //URLSearchParams {size: 1}
  // console.log(searchParams.toString());// http://localhost:3000/characters?type=syth  >> it console.logs: "type=syth"
  //console.log(searchParams.get('type'));// http://localhost:3000/characters?type=syth  >> it console.logs: "syth"

  const displayedCharacters = typeFilter
  ? swCharacters.filter(char => char.type.toLowerCase() === typeFilter)
  :swCharacters

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