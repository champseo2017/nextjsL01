import Fetch from 'isomorphic-unfetch';
import React, {useState, useEffect} from 'react'
import Layout from "../components/Layout";
import Prices from '../components/Prices'
import UserForm from '../components/UserForm'
import axios from 'axios';
//import Pagination from '../components/Pagination'
import NextSeo from 'next-seo';
import dynamic from 'next/dynamic'
import Pagination from "react-js-pagination";
const Photos = dynamic(import("../components/Photos"))
const Posts = dynamic(import("../components/Posts"))


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
  const [photosPerPage] = useState(18);
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
  //const paginate = pageNumber => setCurrentPage(pageNumber);

  // Change pagePhotos
  //const paginatephotos = pageNumber => setCurrentPagephotos(pageNumber);
  const stringul = "pagination"
  const stringli = "page-item"
  const stringa = "page-link"
  
  const handlePageChange = (pageNumber) => {
    let self = this
    console.log(`active page is ${pageNumber}`)
    setCurrentPagephotos(pageNumber)
    window.location.href = '#photo'; 
  }

 
    return (
      <Layout>
        
          <h1>Welcome to Learn Next.js of Wordpress</h1>
          <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
            <p></p>
            <UserForm/>
            <p></p>
            <h1 id="photo" className="text-primary mb-3">My Photos</h1>
            <Photos photos={currentPhotos} loadingphotos={loadingphotos}/>
            <Pagination
                activePage={currentPagephotos}
                itemsCountPerPage={photosPerPage}
                totalItemsCount={photos.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                innerClass={stringul}
                itemClass={stringli}
                linkClass={stringa}
            />
            <style>{`
               .pagination {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                padding-left: 0;
                list-style: none;
                border-radius: 0.25rem;
                /* text-align: center; */
                /* float: right; */
                /* margin-left: 50px; */
                /* margin-right: 50px; */
                margin-left: calc(555px - 100px);
                /* margin-right: 10px; */
                text-align: ceb;
            }
                 
            `}</style>
            {/* <Paginationphotos
               photosPerPage={photosPerPage} 
               totalPhotos={photos.length} 
               paginatephotos={paginatephotos}
            /> */}
            <p></p>
            <h1 id="blog" className="text-primary mb-3">My Blog</h1>
            <p></p>
            <Posts posts={currentPosts} loading={loading}/>
            {/* <Pagination 
              postsPerPage={postsPerPage} 
              totalPosts={posts.length} 
              paginate={paginate}
              /> */}
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