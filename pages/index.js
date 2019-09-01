import Fetch from "isomorphic-unfetch";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import UserForm from "../components/UserForm";
import axios from "axios";
import NextSeo from "next-seo";
import dynamic from "next/dynamic";
import Pagination from "react-js-pagination";
import Prices from "../components/Prices";
import Googlemapindex from "../components/Googlemaps/Googlemapindex";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { locale } from "../locales/index";
import { connect } from "react-redux";
const { Translate, Localize } = require("react-i18nify");

const Photos = dynamic(import("../components/Photos"), {
  ssr: false
});
const Posts = dynamic(import("../components/Posts"), {
  ssr: false
});

// let's create a configuration for next-seo
const DEFAULT_SEO = {
  title: "Wordpress and Next.js",
  description: "Wordpress api and Next.js",
  openGraph: {
    type: "website",
    locale: "th_IE",
    url: "https://shielded-stream-74873.herokuapp.com",
    title: "Wordpress api and Next.js",
    description: "Wordpress api and Next.js",
    image: "https://sv1.picz.in.th/images/2019/08/25/ZUJ7tv.jpg",
    site_name: "herokuapp.com",
    imageWidth: 1200,
    imageHeight: 1200
  }
};

const Index = props => {
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
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    // fetchPhotos
    const fetchPhotos = async () => {
      setLoadingphotos(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setphotos(res.data);
      setLoadingphotos(false);
    };
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
  const stringul = "pagination";
  const stringli = "page-item";
  const stringa = "page-link";

  const handlePageChange = pageNumber => {
    //console.log(`active page is ${pageNumber}`)
    setCurrentPagephotos(pageNumber);
    window.location.href = "#photo";
  };

  const handlePageChangeposts = pageNumber => {
    //console.log(`active page is ${pageNumber}`)
    setCurrentPage(pageNumber);
    window.location.href = "#blog";
  };

  const paginationposts = (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={postsPerPage}
      totalItemsCount={posts.length}
      pageRangeDisplayed={5}
      onChange={handlePageChangeposts}
      innerClass={stringul}
      itemClass={stringli}
      linkClass={stringa}
    />
  );

  let lanth = "";
  if (props.lanenthredux === "Thai") {
    lanth = (
      <div>
        <h1>{locale.t("hello")}</h1>
        {/* <h2>{locale.t('name',{name: 'วิว'})}</h2>
                <h2>{locale.t('greeting')}</h2> */}
      </div>
    );
  } else if (props.lanenthredux === "English") {
    lanth = (
      <div>
        <h1>
          <Translate value="helloen" />
        </h1>
      </div>
    );
  }

  return (
    <Layout>
      <h1>Welcome to Learn Next.js and Wordpress api</h1>
      <p></p>
      <div>{lanth}</div>
      <p></p>
      <h3>Learn redux to next.js</h3>

      <p></p>
      <p></p>
      <h3 style={{ textAlign: "center" }}>
        Learn Google map api marker with redux
      </h3>
      <Googlemapindex />
      <p></p>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
      <p></p>
      <UserForm />
      <p></p>
      <h1 id="photo" className="text-primary mb-3">
        My Photos
      </h1>
      <Photos photos={currentPhotos} loadingphotos={loadingphotos} />
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
      <p></p>
      <h1 id="blog" className="text-primary mb-3">
        My Blog
      </h1>
      <p></p>
      <Posts posts={currentPosts} loading={loading} />
      {paginationposts}
      <ScrollUpButton AnimationDuration={1500} />
      <NextSeo config={DEFAULT_SEO} />
    </Layout>
  );
};

// fetch data async
Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  return {
    // props
    bpi: data.bpi
  };
};

function mapStateToProps(state) {
  return {
    lanenthredux: state.valuelan
  };
}

export default connect(
  mapStateToProps,
  null
)(Index);
