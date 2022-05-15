import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link } from 'react-router-dom';

function Landing() { 
  const [feedData, setFeedData] = useState(undefined)
  const [ loading, setLoading ] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        
        
        
        function reqListener () {
            
            setFeedData(this.responseText);
            
           // console.log(feedData)
            setLoading(false);
            
          }
          
          var oReq = new XMLHttpRequest();
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", "https://medium.com/feed/macoclock");
          oReq.send();
       
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
 const getPostData = ((blog)=>{
    let title;
    let creator, pubDate;
    let link;
    let categories = [];
    let i = 0;
    while(!pubDate){
        
        if (blog.childNodes[i].nodeName === 'category') categories.push(blog.childNodes[i].innerHTML.split('[')[2].split(']')[0]);
        else if(blog.childNodes[i].nodeName === 'dc:creator') creator = blog.childNodes[i].innerHTML.split('[')[2].split(']')[0];
        else if(blog.childNodes[i].nodeName === 'pubDate'){
            pubDate = blog.childNodes[i].innerHTML;
            break;}
        else if (blog.childNodes[i].nodeName === 'link') link = blog.childNodes[i].innerHTML;
        else if(blog.childNodes[i].nodeName === 'title') title = blog.childNodes[i].innerHTML.split('[')[2].split(']')[0];
        i++
        
    }
    let date = pubDate.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' +  date[3]
    let newUrl = '';
    link.split('//')[1].split('/').forEach((e)=>{
        newUrl = newUrl + e + '.-.'
    })
    link = (link.split('//')[1].split('/')[0] +'.-.' + link.split('//')[1].split('/')[1])
  

    return (
        <div className='blogDiv'>
          <Link to={`/blog/${newUrl}`}>
            <h3>{title}</h3>
            </Link> 
            <p>Created By: {creator} </p>
            <p>Published On: {date}</p>
            <p>Categories:  
                {categories.map(e=>
                <span className='category'key={e}> {e}, </span>
                )
            }
            </p>    
        </div>
    )


 })

  if(loading){
    return (
        <div>
            <h2>Loading...</h2>
        </div>
    );

  }
  else{
    var parser, xmlDoc  
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(feedData,"text/xml");
    let items = [...xmlDoc.getElementsByTagName('item')]
    //console.log(items)
   
  return (
    <div className='landing'>
      <h1 className='header'>Macoclock</h1>
      <h2 className='blogsHeader' >Blogs: </h2>

      <ul className = 'blogList'>
          {items.map(e=>
          <li key={e.childNodes[1].innerHTML.split('[')[2].split(']')[0]} className='blog'>
              {getPostData(e)}
            
          </li>
            
            )}
          
      </ul>
    </div>
  );
}
}

export default Landing;