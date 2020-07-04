import React, { useState } from 'react'
import axios from 'axios'

/* Desafio 3 - Exercício 2 */
function App () {


  const repList = axios.get('https://api.github.com/users/'+inputValue+'/repos')

  const [repositories, setRepositories] = useState(repList)
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <h2>Usuario no GITHUB</h2>
      <div>
        <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button onClick={() => setRepositories([...repositories, { name: inputValue }])}>Submit</button>
      </div>

      <h2>Existing contacts:</h2>
      <ul>
        {repositories.map((repositories) =>
          <li>{{repositories}}</li>
        )}
      </ul>
    </div>
  )
}

export default App