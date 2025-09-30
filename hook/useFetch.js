import {useState,useEffect } from 'react';
import axios from 'axios';
// import {RAPID_API_KEY} from '@env';

const useFetch = (endpoint,query) => {
 const [data ,setData] = useState([]);
 const[isLoading,setIsLoading ] = useState(false);
 const[error,setError] = useState(null);

//  const axios = require('axios');
//  const rapidApiKey = RAPID_API_KEY;

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {
    ...query,
    page: '1',
    num_pages: '1',
    country: 'us',
    date_posted: 'all'
  },
  headers: {
    'x-rapidapi-key': "1fd34c2305mshfcb3c6188b5365ap13ddd9jsn11b6a821bdaa" ,
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};

// async function fetchData() {
// 	try {
// 		const response = await axios.request(options);
// 		console.log(response.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// fetchData();

    const fetchData = async ()=>{
        setIsLoading(true);

        try {
        const response = await axios.request(options) 
        setData(response.data.data);
        setIsLoading(false);

        } catch (error) {
            setError(error);
            alert("There is an error");
        }finally{
            setIsLoading(false);

        }
    }
    useEffect(()=>{
      fetchData();

    },[])
    

    const refetch  = () =>{
      setIsLoading(true);
      fetchData();
    }
    return {data, isLoading,error,refetch};
}
export default useFetch