import Fetch from 'isomorphic-unfetch';
import React, {useState, useEffect} from 'react'
import Layout from "../components/Layout";
import Prices from '../components/Prices'
import UserForm from '../components/UserForm'
import axios from 'axios';
import Posts from '../components/Posts'
import Pagination from '../components/Pagination'



const Index = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOffFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOffFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <Layout>
        <div>
          <h1>Welcome to Learn Nexs.js of I am Champ</h1>
          <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
            <p></p>
            <UserForm/>
            <p></p>
            <h1 id="blog" className="text-primary mb-3">My Blog</h1>
            <Posts posts={currentPosts} loading={loading}/>
            <Pagination 
              postsPerPage={postsPerPage} 
              totalPosts={posts.length} 
              paginate={paginate}
              />
        </div>
      </Layout>
    )  
};

// fetch data async  
Index.getInitialProps = async function (){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    
    return {
      // props 
      bpi: data.bpi
    }
} 

export default Index;