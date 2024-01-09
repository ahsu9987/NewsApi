import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import News from '../../Components/News/News';

function NewsMain() {
  const [NewsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

const newsApiKey = process.env.REACT_APP_API_KEY  

  useEffect(() => {
    // Making a GET request when the component mounts
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-12-09&sortBy=publishedAt&apiKey=${newsApiKey}`)
      .then(response => {
        setNewsData(response.data.articles);
        console.log(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data 1:', error);
      });
  }, []);

  useEffect(() => {
    // Update filteredData when searchQuery changes
    const filtered = NewsData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, NewsData]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {/* <ul> */}
      <Container>
        <Row>
      <h1>API Data</h1>
        {Object.entries(filteredData).map(item => (
            <News
                title={item[1].title}
                image={item[1].urlToImage}
                // description={item[1].description}
                author={item[1].author}
                readmore={item[1].url}
            />
        ))}
        </Row>
      </Container>
     
      {/* </ul> */}
    </div>
  );
}

export default NewsMain;