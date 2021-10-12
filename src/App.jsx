import React,{useState} from 'react'
import {GlobalStyles} from './styles/stylesGlobal'
import {Header} from './styles/styleHeader'
import Filter from './components/Filter'
import ListWork from './components/ListWork'
import data from './data.json'
function App() {
  const [works,setWorks] = useState(data)
  const [filter,setFilter] = useState([])
  return (
    <div className="App">
      <GlobalStyles/>
      <Header>
        {filter.length !== 0 && 
          <Filter 
            filter={filter} 
            setFilter={setFilter} 
            data={data}
          />
        }
      </Header>
      <ListWork 
        data={works} 
        setWorks={setWorks} 
        filter={filter} 
        setFilter={setFilter} 
      />
    </div>
  )
}

export default App
