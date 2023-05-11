import '../Styles/StarWars.css';
import React from 'react';


function StarWars(){
    
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1);
    
  
    // useEffect() >> to avoit an infinity loop
    React.useEffect(()=>{
           console.log("effect ran");
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
        }, [count])


    return(
        <div className='starwars-container'>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>New Character</button>
            <h2>The count is {count}</h2>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            
        </div>
    )
}

export default StarWars;