import { Component, useState } from 'react';

const FormSearch = (props) => {

  const styles = {
    form: {
      display: 'flex',
      marginRight: '2rem'
    },
    input: {
      height: '2.5rem',
      width: '17rem',
      marginTop: '1.3rem'
    },
    button: {
      height: '2.5rem',
      width: '4rem',
      marginLeft: '1rem',
      marginTop: '1.3rem'
    }
  }

  const [ searchText, setSearchText ] = useState('');

  const onSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchText);
    e.currentTarget.reset();
  }

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        onChange={onSearchChange}
        name="search"
        style={styles.input}
      />
      <button type='submit' id='submit' style={styles.button}>Submit</button>
    </form>
  );

}

export default FormSearch;
