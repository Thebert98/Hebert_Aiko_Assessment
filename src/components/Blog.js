import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css';
import {useParams } from 'react-router-dom';

const Blog = (()=> { 
  const [blogData, setBlogData] = useState(undefined)
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  const param = useParams().blogUrl.split('.-.');
  let url = '';
  param.forEach((e)=>{
      url = url +'/' +e
  })
  
  
  useEffect(() => {
    async function fetchData() {
      try { 
        const {data} = await axios.get('https:/' + url); 
        setBlogData(data)
        setLoading(false)
       
      } catch (e) {
        console.log(e);
        setError(true)
      }
    }
    fetchData();
  }, [url]);
 if (error){
    return (
      <div>
        <h2>404 page not found</h2>
      </div>
    )
  }
  if(loading){
    return (
        <div>
            <h2>Loading...</h2>
        </div>
    );

  }
  else{
 
  return (
        <div className="blogPost" dangerouslySetInnerHTML={{__html: blogData}}></div>
  );
}
})

export default Blog;