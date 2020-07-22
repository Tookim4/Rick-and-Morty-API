import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './ui/Header'
import Search from './ui/Search';
import Displaylayout from './Display/Displaylayout';
import Footer from './ui/Footer'
import axios from 'axios'

const App = ()=> {
  const [actors, setActor] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async ()=> {
      const results = await axios(
        `https://rickandmortyapi.com/api/character?name=${query}`,
        );
        console.log(results.data)
        setActor(results.data.results)
    };
    fetchData();
  }, [query])


  return (
    <div className="App">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <Displaylayout actors={actors}/>
      <Footer/>
    </div>
  );
}

export default App;
