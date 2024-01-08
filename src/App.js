import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './ui/Header'
import Search from './ui/Search';
import Displaylayout from './Display/Displaylayout';
import Footer from './ui/Footer'
import axios from 'axios'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const App = ()=> {
  const [actors, setActor] = useState([])
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let allActors = [];
      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const results = await axios(
          `https://rickandmortyapi.com/api/character?name=${query}&page=${page}`,
        );

        allActors = [...allActors, ...results.data.results];
        totalPages = results.data.info.pages;
        page++;
      }

      setActor(allActors);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  const indexOfLastActor = currentPage * itemsPerPage;
  const indexOfFirstActor = indexOfLastActor - itemsPerPage;
  const currentActors = actors.slice(indexOfFirstActor, indexOfLastActor);

  const totalPages = Math.ceil(actors.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <div className="App">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>

      {loading ? (
        <div className="loader" style={{color: '#F2D8D8', fontSize: '25px'}}>
          Loading....
        </div>
      ) : (
        <Displaylayout actors={currentActors}/>
      )}
    
      <div className='pagination-div'>
        <button onClick={prevPage} disabled={currentPage === 1}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          <MdOutlineKeyboardArrowRight />
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
