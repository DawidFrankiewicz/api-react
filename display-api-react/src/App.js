import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

// axios allow cors policy

function App() {
  const [video, setVideo] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [newData, setNewData] = useState('');
  const [loading, setLoading] = useState(true);
  const [onLoad, setOnLoad] = useState(true);

  useEffect(() => {
    if(onLoad) {
      setOnLoad(false)
      fetchData()
    } else{
      logDatabase(apiData)
    }
  }, [apiData]);
  
  const addData = async (e) => {
    e.preventDefault();

    await axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      // body
      data: {
        text: newData,
      },
      url: 'http://localhost:5000/api/videos',
      withCredentials: false,
    });
    setNewData('');
    fetchData()
  };

  const fetchData = async () => {
    const result = await axios({
      method: 'get',
      url: 'http://localhost:5000/api/videos',
      withCredentials: false,
    });

    setApiData(result.data);
    typeof result.data[0] !== typeof undefined ? setVideo(result.data[0].text) : setVideo(null);
    setLoading(false);
  };

  const logDatabase = () => {
    console.log(apiData);
  }

  const itemEvent = (event) => {
    setNewData(event.target.value);
  };

  return (
    <div className="App">
      <h1>Film</h1>
      {loading && <h2>Loading...</h2>}
      {!loading && video && <iframe width="560" height="315" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
      {!loading && !video && <p>Brak danych</p>}
      <h2>Dodaj url filmu</h2>
      <form onSubmit={addData}>
        <input type="url" value={newData} onChange={itemEvent} />
        <button type='submit'>Dodaj</button>
      </form>
    </div>
  );
}

export default App;