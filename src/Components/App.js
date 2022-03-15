import { Component, useState, useEffect } from 'react';
import axios from 'axios';
import FormSearch from './FormSearch';
import PictureList from './PictureList';

const App = () => {

  const styles = {
     h1: {
       marginLeft: '2rem'
     },
     header: {
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between'
     }
  }

  const [ pictures, setPictures ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ query, setQuery ] = useState('random')

  const performSearch = (value) => {
    setQuery(value);
  }

  useEffect(() => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=WLUInA16EcV69jVkNKxjzcqIhFD4z869`)
      .then(response => {
        setPictures(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
    });
  }, [query]);

  return (
    <div>
      <div>
        <header style={styles.header}>
          <h1 style={styles.h1}>Picture Search</h1>
          <FormSearch style={styles.FormSearch} onSearch={performSearch} />
        </header>
      </div>
      <div>
        {
          loading
          ? "Loading..."
          : <PictureList data={pictures}/>
        }
      </div>
    </div>
  );

}

export default App;
