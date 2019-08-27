import Fetch from 'isomorphic-unfetch';
import React, {useState, useEffect} from 'react'
import Layout from "../components/Layout";
import Prices from '../components/Prices'
import UserForm from '../components/UserForm'
import axios from 'axios';
import Posts from '../components/Posts'
import Pagination from '../components/Pagination'
import NextSeo from 'next-seo';
import Paginationphotos from '../components/Paginationphotos'
import dynamic from 'next/dynamic'
const Photos = dynamic(import("../components/Photos"))


// let's create a configuration for next-seo
const DEFAULT_SEO = {
  title: 'Wordpress and Next.js',
  description: 'Wordpress api and Next.js',
  openGraph: {
    type: 'website',
    locale: 'th_IE',
    url: 'https://shielded-stream-74873.herokuapp.com',
    title: 'Wordpress api and Next.js',
    description: 'Wordpress api and Next.js',
    image:'https://sv1.picz.in.th/images/2019/08/25/ZUJ7tv.jpg',
    site_name: 'herokuapp.com',
    imageWidth: 1200,
    imageHeight: 1200
  }
};

const Index = (props) => {
  // post
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // post

  // photo
  const [photos, setphotos] = useState([]);
  const [loadingphotos, setLoadingphotos] = useState(false);
  const [currentPagephotos, setCurrentPagephotos] = useState(1);
  const [photosPerPage] = useState(400);
  // photo

  useEffect(() => {
    // fetchPosts
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    // fetchPhotos
    const fetchPhotos = async () => {
      setLoadingphotos(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setphotos(res.data);
      setLoadingphotos(false);
    }
    fetchPhotos();
  }, []);

  

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOffFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOffFirstPost, indexOfLastPost);


  // Get current Photos
  const indexOfLastPhotos = currentPagephotos * photosPerPage;
  const indexOffFirstPhotos = indexOfLastPhotos - photosPerPage;
  const currentPhotos = photos.slice(indexOffFirstPhotos, indexOfLastPhotos);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Change pagePhotos

  const paginatephotos = pageNumber => setCurrentPagephotos(pageNumber);

    return (
      <Layout>
        
          <h1>Welcome to Learn Next.js of Wordpress</h1>
          <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
            <p></p>
            <UserForm/>
            <p></p>
            <h1 id="blog" className="text-primary mb-3">My Photos</h1>
            <Photos photos={currentPhotos} loadingphotos={loadingphotos}/>
            <Paginationphotos
               photosPerPage={photosPerPage} 
               totalPhotos={photos.length} 
               paginatephotos={paginatephotos}
            />
            <p></p>
            <h1 id="blog" className="text-primary mb-3">My Blog</h1>
            <p></p>
            <Posts posts={currentPosts} loading={loading}/>
            <Pagination 
              postsPerPage={postsPerPage} 
              totalPosts={posts.length} 
              paginate={paginate}
              />
              <NextSeo config={DEFAULT_SEO} /> 
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